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
        const fetchTestimonials = async () => {
            setLoadingTestimonials(true);
            setTestimonialError(null);
            try {
                const response = await fetch('http://localhost:3001/api/testimonials');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Testimonial[] = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Could not load testimonials from backend', error);
                setTestimonialError('Failed to load testimonials. Please try again later.');
            } finally {
                setLoadingTestimonials(false);
            }
        };

        fetchTestimonials();
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const addTestimonial = async (testimonial: Omit<Testimonial, 'location'>): Promise<void> => {
        const response = await fetch('http://localhost:3001/api/testimonials', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testimonial),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'There was an error saving your review.');
        }

        const newTestimonial: Testimonial = await response.json();
        setTestimonials(prevTestimonials => [newTestimonial, ...prevTestimonials]);
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