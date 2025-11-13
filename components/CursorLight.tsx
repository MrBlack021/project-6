import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

export const CursorLight: React.FC = () => {
    const [position, setPosition] = useState({ x: -1000, y: -1000 });
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useAppContext();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const lightModeStyle = {
        background: 'radial-gradient(circle, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0) 60%)',
    };

    const darkModeStyle = {
        background: 'radial-gradient(circle, rgba(255, 26, 142, 0.08) 0%, rgba(255, 26, 142, 0) 60%)',
    };

    return (
        <div 
            className="cursor-light" 
            style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px`,
                opacity: isVisible ? 1 : 0,
                ...(theme === 'light' ? lightModeStyle : darkModeStyle)
            }}
        />
    );
};