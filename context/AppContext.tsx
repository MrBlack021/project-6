
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

const staticTestimonials: Testimonial[] = [
    {
        name: 'Suresh Reddy',
        title: 'Full-Stack Developer',
        quote: "The AI agents course was very practical and insightful. I learned to integrate AI APIs seamlessly into my projects. The real-world examples helped me understand agent memory and workflows better.",
        location: 'Hyderabad'
    },
    {
        name: 'Anjali Kumar',
        title: 'Software Engineer',
        quote: "Great course for developers! It explained AI agent architecture clearly and gave hands-on experience with API integration. I feel confident building intelligent applications now.",
        location: 'Bengaluru'
    },
    {
        name: 'Rohan Patel',
        title: 'Founder',
        quote: 'Huntifyy\'s mentorship was the turning point for our startup. They helped us restructure our entire pitch deck, and we closed our pre-seed round in two months.',
        location: 'Mumbai'
    },
    {
        name: 'Ravi Teja',
        title: 'Entrepreneur',
        quote: "This course helped me understand how AI agents can automate business workflows. The practical projects were extremely useful for my startup applications.",
        location: 'Chennai'
    },
    {
        name: 'Priya Sharma',
        title: 'AI Challenge Graduate',
        quote: 'The AI Challenge pushed my limits. I started with a basic understanding of Python and ended up building a functional customer support chatbot that uses a fine-tuned LLM.',
        location: 'Bengaluru'
    },
    {
        name: 'Venkatesh Naidu',
        title: 'Product Manager',
        quote: "Excellent course! The hands-on projects made learning AI agents enjoyable. Now I can design interactive web applications with AI capabilities for my products.",
        location: 'Hyderabad'
    },
    {
        name: 'Anjali Rao',
        title: 'ML Engineer & AI Challenge Alumna',
        quote: 'I was stuck in a rut, just doing frontend work. The AI challenge was exactly what I needed. Building a real-time data analysis agent gave me the confidence and a standout project for my portfolio.',
        location: 'Hyderabad'
    },
    {
        name: 'Priya Rani',
        title: 'Computer Science Student',
        quote: "Very well-structured course. I gained knowledge on multi-agent systems, integrating AI APIs, and storing agent memory efficiently. It strengthened my full-stack skills.",
        location: 'Pune'
    },
    {
        name: 'Deepika Sharma',
        title: 'Data Analyst',
        quote: "The course explained AI agent concepts very clearly. I learned how to connect backend, databases, and AI APIs, which will help me in my analytics projects.",
        location: 'Delhi'
    },
    {
        name: 'Mahesh Babu',
        title: 'Student',
        quote: "A very practical and easy-to-follow course. It taught me how to create full-stack applications with AI agent integrations, and the projects were highly motivating.",
        location: 'Visakhapatnam'
    },
    {
        name: 'Swapna Reddy',
        title: 'Startup Founder',
        quote: "The course provided excellent insights into AI agents. I now understand how to implement intelligent features for my startup's products using APIs and memory management.",
        location: 'Bengaluru'
    },
    {
        name: 'Krishna Chaitanya',
        title: 'Web Developer',
        quote: "Hands-on and insightful. I learned to build interactive applications with AI agents and manage conversation memory effectively. Highly recommended for full-stack developers.",
        location: 'Hyderabad'
    },
    {
        name: 'Haritha',
        title: 'M.Tech Student',
        quote: "Well-structured and practical course. The projects on multi-agent workflows helped me understand real-world implementation. It boosted my confidence in AI-based applications.",
        location: 'Warangal'
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

    const addTestimonial = async (testimonial: Omit<Testimonial, 'location'>): Promise<void> => {
       const newTestimonial: Testimonial = {
           ...testimonial,
           location: 'Online',
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