
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
    type: 'student' | 'college' | 'investor';
}

interface AppContextType {
    registrationId: string | null;
    setRegistrationId: (id: string | null) => void;
    registrationData: RegistrationData | null;
    setRegistrationData: (data: RegistrationData | null) => void;
    theme: Theme;
    toggleTheme: () => void;
    testimonials: Testimonial[];
    addTestimonial: (testimonial: Omit<Testimonial, 'location' | 'type'>) => Promise<void>;
    loadingTestimonials: boolean;
    testimonialError: string | null;
}

const staticTestimonials: Testimonial[] = [
    {
        name: 'Dr. Aarav Sharma',
        title: 'Dean of Engineering, Tech University',
        quote: "Partnering with Huntifyy to establish our Startup Cell has been transformative. Our students are more engaged, and we've seen a 40% increase in participation in innovation-related activities.",
        location: 'Pune',
        type: 'college',
    },
    {
        name: 'Sneha Gupta',
        title: 'Co-founder, Edutech Startup',
        quote: "The 30-day mentorship program was a game-changer. We went from a rough idea to a polished pitch deck that secured us a meeting with three angel investors. The guidance was invaluable.",
        location: 'Bengaluru',
        type: 'student',
    },
    {
        name: 'Vikram Reddy',
        title: 'Angel Investor',
        quote: "The quality of startups coming through Huntifyy's Investor Pitch Day is impressive. They are well-mentored, have clear value propositions, and are ready for seed-stage investment.",
        location: 'Hyderabad',
        type: 'investor',
    },
    {
        name: 'Rohan Mehta',
        title: 'Student & Founder',
        quote: 'Huntifyy gave me the framework and confidence to turn my final year project into a real business. The mentors helped me understand market validation and what it takes to build an MVP.',
        location: 'Mumbai',
        type: 'student',
    },
    {
        name: 'Priya Singh',
        title: 'Head of Incubation, Innovation Hub',
        quote: "Huntifyy's structured approach and industry connections have significantly boosted our college's IIC and NAAC scores. The faculty workload is minimal, yet the impact is immense.",
        location: 'Delhi',
        type: 'college',
    },
    {
        name: 'Ananya Desai',
        title: 'Computer Science Student',
        quote: "The AI & Automation workshop was eye-opening. Learning about RAG systems gave my startup idea a unique technical edge. It's the kind of practical knowledge you don't get in class.",
        location: 'Chennai',
        type: 'student',
    }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [registrationId, setRegistrationId] = useState<string | null>(null);
    const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
    const [testimonials, setTestimonials] = useState<Testimonial[]>(staticTestimonials);
    const [loadingTestimonials, setLoadingTestimonials] = useState<boolean>(false);
    const [testimonialError, setTestimonialError] = useState<string | null>(null);

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('huntifyy-theme');
        return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('huntifyy-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const addTestimonial = async (testimonial: Omit<Testimonial, 'location' | 'type'>): Promise<void> => {
       const newTestimonial: Testimonial = {
           ...testimonial,
           location: 'Online',
           type: 'student',
       };
       setTestimonials(prevTestimonials => [newTestimonial, ...prevTestimonials]);
       return Promise.resolve();
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
