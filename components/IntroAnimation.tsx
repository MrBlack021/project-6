
import React, { useEffect, useState } from 'react';
import { LogoIcon } from './LogoIcon';
import { useAppContext } from '../context/AppContext';

export const IntroAnimation: React.FC = () => {
    const { theme } = useAppContext();
    const [animationPhase, setAnimationPhase] = useState<'initial' | 'fade-out'>('initial');

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationPhase('fade-out');
        }, 2000); // Display for 2 seconds before fading out
        return () => clearTimeout(timer);
    }, []);

    const bgColor = theme === 'dark' ? 'bg-dark-bg-main' : 'bg-light-bg-main';

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-800 ${bgColor} ${
                animationPhase === 'fade-out' ? 'animate-intro-fade-out' : 'opacity-100'
            }`}
        >
            <LogoIcon className="h-48 w-auto text-primary" /> {/* Adjust size as needed */}
        </div>
    );
};
