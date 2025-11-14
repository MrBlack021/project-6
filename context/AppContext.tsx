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
    addTestimonial: (testimonial: Omit<Testimonial, 'location'>) => void;
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
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('huntifyy-theme');
        return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('huntifyy-theme', theme);
    }, [theme]);

    useEffect(() => {
        try {
            const savedTestimonials = localStorage.getItem('huntifyy-testimonials');
            if (savedTestimonials) {
                setTestimonials(JSON.parse(savedTestimonials));
            } else {
                setTestimonials(defaultTestimonials);
            }
        } catch (error) {
            console.error('Could not load testimonials from localStorage', error);
            setTestimonials(defaultTestimonials);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const addTestimonial = (testimonial: Omit<Testimonial, 'location'>) => {
        const newTestimonial: Testimonial = { ...testimonial, location: "Online" };
        setTestimonials(prevTestimonials => {
            const updatedTestimonials = [newTestimonial, ...prevTestimonials];
            localStorage.setItem('huntifyy-testimonials', JSON.stringify(updatedTestimonials));
            return updatedTestimonials;
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