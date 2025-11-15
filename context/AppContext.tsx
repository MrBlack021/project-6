import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface RegistrationData {
    name: string;
    email: string;
    program: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    title: string;
    location: string;
}

interface AppContextType {
    registrationId: string | null;
    setRegistrationId: (id: string | null) => void;
    registrationData: RegistrationData | null;
    setRegistrationData: (data: RegistrationData | null) => void;
    theme: Theme;
    toggleTheme: () => void;
    testimonials: Testimonial[];
    addTestimonial: (testimonial: Omit<Testimonial, 'location'>) => Promise<void>;
    loadingTestimonials: boolean;
    testimonialError: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultTestimonials: Testimonial[] = [
    {
        quote: "The AI Challenge pushed my limits. I started with a basic understanding of Python and ended up building a functional customer support chatbot that uses a fine-tuned LLM.",
        name: "Priya Sharma",
        title: "AI Challenge Graduate",
        location: "Bengaluru",
    },
    {
        quote: "Huntifyy's mentorship was the turning point for our startup. They helped us restructure our entire pitch deck, and we closed our pre-seed round in two months.",
        name: "Rohan Patel",
        title: "Founder",
        location: "Mumbai",
    },
    {
        quote: "I was stuck in a rut, just doing frontend work. The AI challenge was exactly what I needed. Building a real-time data analysis agent gave me the confidence and a standout project for my portfolio.",
        name: "Anjali Rao",
        title: "ML Engineer & AI Challenge Alumna",
        location: "Hyderabad",
    },
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [registrationId, setRegistrationId] = useState<string | null>(null);
    const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loadingTestimonials, setLoadingTestimonials] = useState<boolean>(true);
    const [testimonialError, setTestimonialError] = useState<string | null>(null);

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('huntifyy-theme');
        return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('huntifyy-theme', theme);
    }, [theme]);

    useEffect(() => {
        setLoadingTestimonials(true);
        setTestimonialError(null);
        
        // Simulate fetching from a central data source (API)
        const fetchTestimonials = async () => {
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                const savedTestimonials = localStorage.getItem('huntifyy-testimonials');
                if (savedTestimonials) {
                    setTestimonials(JSON.parse(savedTestimonials));
                } else {
                    // First time load, use defaults and "save" them to the central source
                    setTestimonials(defaultTestimonials);
                    localStorage.setItem('huntifyy-testimonials', JSON.stringify(defaultTestimonials));
                }
            } catch (error) {
                console.error('Could not load testimonials', error);
                setTestimonialError('Failed to load testimonials. Please try again later.');
                setTestimonials(defaultTestimonials); // Fallback on error
            } finally {
                setLoadingTestimonials(false);
            }
        };

        fetchTestimonials();
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const addTestimonial = (testimonial: Omit<Testimonial, 'location'>): Promise<void> => {
        // Simulate a POST request to a backend API, returning a promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const newTestimonial: Testimonial = { ...testimonial, location: "Online" };
                    
                    setTestimonials(prevTestimonials => {
                        const updatedTestimonials = [newTestimonial, ...prevTestimonials];
                        // Persist to our "database" (localStorage)
                        localStorage.setItem('huntifyy-testimonials', JSON.stringify(updatedTestimonials));
                        return updatedTestimonials;
                    });

                    resolve();
                } catch (error) {
                    console.error('Failed to submit testimonial:', error);
                    reject(new Error('There was an error saving your review.'));
                }
            }, 800); // Simulate network delay for submission
        });
    };

    const value = {
        registrationId,
        setRegistrationId,
        registrationData,
        setRegistrationData,
        theme,
        toggleTheme,
        testimonials,
        addTestimonial,
        loadingTestimonials,
        testimonialError,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
