
require('dotenv').config();

if (!process.env.DATABASE_URL) {
    console.error('FATAL ERROR: DATABASE_URL is not defined. Please create a .env file in the backend directory with your Supabase connection string.');
    process.exit(1);
}

const express = require('express');
const cors = require('cors');
const db = require('./db');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3001;

/*
-- SUPABASE SQL SETUP --
-- Run these queries in your Supabase SQL Editor to create the necessary tables.
-- NOTE: The 'user_id' column is for integrating with Supabase Authentication.
-- To use it effectively, you'll need to enable Auth and pass the user's ID from your frontend.

-- 1. Registrations Table
CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id), -- This column is needed for RLS policies.
    temp_id VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    program VARCHAR(255) NOT NULL,
    startup_idea TEXT,
    pitch_deck_url VARCHAR(255),
    payment_status VARCHAR(50) DEFAULT 'pending',
    registration_id VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Contact Submissions Table
CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id), -- Optional: Link to the authenticated user
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Testimonials Table
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id), -- Optional: Link to the authenticated user
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    quote TEXT NOT NULL,
    location VARCHAR(255),
    status VARCHAR(50) DEFAULT 'approved', -- can be 'pending' or 'approved'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Seed Testimonials Table with Default Data
INSERT INTO testimonials (name, title, quote, location, status) VALUES
('Priya Sharma', 'AI Challenge Graduate', 'The AI Challenge pushed my limits. I started with a basic understanding of Python and ended up building a functional customer support chatbot that uses a fine-tuned LLM.', 'Bengaluru', 'approved'),
('Rohan Patel', 'Founder', 'Huntifyy''s mentorship was the turning point for our startup. They helped us restructure our entire pitch deck, and we closed our pre-seed round in two months.', 'Mumbai', 'approved'),
('Anjali Rao', 'ML Engineer & AI Challenge Alumna', 'I was stuck in a rut, just doing frontend work. The AI challenge was exactly what I needed. Building a real-time data analysis agent gave me the confidence and a standout project for my portfolio.', 'Hyderabad', 'approved');

*/

// Middleware
app.use(cors());
app.use(express.json());

// --- API ROUTES ---

// Registration: Step 1 - Create a pending registration
app.post('/api/register', async (req, res) => {
    const { name, email, program, idea } = req.body;
    if (!name || !email || !program) {
        return res.status(400).json({ error: 'Name, email, and program are required.' });
    }
    
    const temp_id = crypto.randomBytes(16).toString('hex');

    try {
        const query = `
            INSERT INTO registrations(name, email, program, startup_idea, temp_id, payment_status)
            VALUES($1, $2, $3, $4, $5, 'pending')
            RETURNING temp_id;
        `;
        const values = [name, email, program, idea || null, temp_id];
        const result = await db.query(query, values);
        res.status(201).json({ tempId: result.rows[0].temp_id });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Failed to create registration.' });
    }
});

// Registration: Step 2 - Confirm payment and finalize registration
app.post('/api/confirm-registration', async (req, res) => {
    const { tempId } = req.body;
    if (!tempId) {
        return res.status(400).json({ error: 'Temporary ID is required.' });
    }

    try {
        const registration_id = 'HN2025' + Math.floor(100000 + Math.random() * 900000);
        const query = `
            UPDATE registrations
            SET payment_status = 'paid', registration_id = $1
            WHERE temp_id = $2 AND payment_status = 'pending'
            RETURNING name, email, program, registration_id;
        `;
        const result = await db.query(query, [registration_id, tempId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Registration not found or already confirmed.' });
        }
        
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Confirmation error:', err);
        res.status(500).json({ error: 'Failed to confirm registration.' });
    }
});


// Testimonials: GET all approved testimonials
app.get('/api/testimonials', async (req, res) => {
    try {
        const { rows } = await db.query("SELECT name, title, quote, location FROM testimonials WHERE status = 'approved' ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        console.error('Get testimonials error:', err);
        res.status(500).json({ error: 'Failed to fetch testimonials.' });
    }
});

// Testimonials: POST a new testimonial
app.post('/api/testimonials', async (req, res) => {
    const { name, title, quote } = req.body;
    if (!name || !title || !quote) {
        return res.status(400).json({ error: 'Name, title, and quote are required.' });
    }

    try {
        const query = `
            INSERT INTO testimonials(name, title, quote, location, status)
            VALUES($1, $2, $3, 'Online', 'pending')
            RETURNING *;
        `;
        const { rows } = await db.query(query, [name, title, quote]);
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error('Submit testimonial error:', err);
        res.status(500).json({ error: 'Failed to submit testimonial.' });
    }
});


// Contact Form: POST a new message
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
        const query = 'INSERT INTO contact_submissions(name, email, message) VALUES($1, $2, $3) RETURNING id;';
        await db.query(query, [name, email, message]);
        res.status(201).json({ message: 'Message received successfully.' });
    } catch (err) {
        console.error('Contact form error:', err);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});