import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface RegistrationData {
    name: string;
    email: string;
    program: string;
}

interface AppContextType {
    registrationId: string | null;
    setRegistrationId: (id: string | null) => void;
    registrationData: RegistrationData | null;
    setRegistrationData: (data: RegistrationData | null) => void;
    theme: Theme;
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [registrationId, setRegistrationId] = useState<string | null>(() => sessionStorage.getItem('huntifyy-regId'));
    const [registrationData, setRegistrationData] = useState<RegistrationData | null>(() => {
        const data = sessionStorage.getItem('huntifyy-regData');
        return data ? JSON.parse(data) : null;
    });

    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('huntifyy-theme');
        return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('huntifyy-theme', theme);
    }, [theme]);
    
    // Persist registration details to session storage
    useEffect(() => {
        if (registrationId) {
            sessionStorage.setItem('huntifyy-regId', registrationId);
        } else {
            sessionStorage.removeItem('huntifyy-regId');
        }
        if (registrationData) {
            sessionStorage.setItem('huntifyy-regData', JSON.stringify(registrationData));
        } else {
            sessionStorage.removeItem('huntifyy-regData');
        }
    }, [registrationId, registrationData]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    const value = {
        registrationId,
        setRegistrationId,
        registrationData,
        setRegistrationData,
        theme,
        toggleTheme,
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