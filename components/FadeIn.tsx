
import React from 'react';
import { useInView } from '../hooks/useInView';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className = '', delay = 'duration-700' }) => {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    
    return (
        <div
            ref={ref}
            className={`${className} transition-all ease-out ${delay} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};
