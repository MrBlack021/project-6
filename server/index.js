require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

const app = express();
const PORT = 3001;

// --- Middleware ---
// Using the default cors() configuration is more standard and robust.
app.use(cors());
app.use(express.json());

// --- Supabase Client Setup ---
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and Anon Key must be provided in .env file");
}
const supabase = createClient(supabaseUrl, supabaseKey);

// --- File Upload Setup (Multer in-memory storage) ---
// We use memory storage to avoid saving files to the temporary Vercel filesystem.
// The file buffer will be directly uploaded to Supabase Storage.
const upload = multer({ storage: multer.memoryStorage() });

// --- API Routes ---

// GET all testimonials
app.get('/api/testimonials', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({ message: 'Failed to fetch testimonials.', error: error.message });
    }
});

// POST a new testimonial
app.post('/api/testimonials', async (req, res) => {
    const { name, title, quote } = req.body;

    if (!name || !title || !quote) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const { data, error } = await supabase
            .from('testimonials')
            .insert([{ name, title, quote, location: 'Online' }])
            .select()
            .single();
        
        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        console.error('Error creating testimonial:', error);
        res.status(500).json({ message: 'Failed to submit testimonial.', error: error.message });
    }
});

// POST a contact form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const { error } = await supabase
            .from('contacts')
            .insert([{ name, email, message }]);
        
        if (error) throw error;
        console.log('New contact submission:', { name, email });
        res.status(200).json({ message: 'Message received successfully!' });
    } catch (error) {
        console.error('Error saving contact form:', error);
        res.status(500).json({ message: 'Failed to send message.', error: error.message });
    }
});

// POST a new registration
app.post('/api/register', upload.single('pitchDeck'), async (req, res) => {
    const { name, email, program, idea, terms } = req.body;

    if (!name || !email || !program || !terms) {
        return res.status(400).json({ message: 'Missing required registration fields.' });
    }

    const registration_id = 'HN2025' + Math.floor(100000 + Math.random() * 900000);
    let pitchDeckUrl = null;

    try {
        // Handle file upload if it exists
        if (req.file) {
            const file = req.file;
            const filePath = `public/${registration_id}-${file.originalname}`;
            
            const { error: uploadError } = await supabase.storage
                .from('pitch_decks')
                .upload(filePath, file.buffer, {
                    contentType: file.mimetype,
                    upsert: true,
                });

            if (uploadError) throw uploadError;

            const { data: urlData } = supabase.storage
                .from('pitch_decks')
                .getPublicUrl(filePath);
            
            pitchDeckUrl = urlData.publicUrl;
        }

        // Insert registration data into the database
        const { error: insertError } = await supabase
            .from('registrations')
            .insert([{
                registration_id,
                name,
                email,
                program,
                idea: idea || null,
                pitch_deck_url: pitchDeckUrl,
            }]);

        if (insertError) throw insertError;

        console.log('New registration:', { registration_id, name, program });

        res.status(201).json({ 
            message: 'Registration successful!',
            registrationId: registration_id,
            registrationData: { name, email, program }
        });

    } catch (error) {
        console.error('Registration process failed:', error);
        res.status(500).json({ message: 'Registration failed.', error: error.message });
    }
});

// --- Server Start (for local dev, though `vercel dev` is preferred) ---
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running for local development on http://localhost:${PORT}`);
    });
}

// Export the app for Vercel's serverless environment
module.exports = app;