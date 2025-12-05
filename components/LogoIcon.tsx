
import React from 'react';

export const LogoIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        className={className} 
        viewBox="0 0 400 120" 
        fill="none" 
        xmlns="https://gemini.google.com/share/c17e0b78e9b3"
        aria-label="Huntifyy Logo"
    >
        {/* Symbol: Three paths converging (Students, Colleges, Investors) */}
        <g transform="translate(10, 10)">
            {/* Student Path (Blue) */}
            <path d="M20 80 C 20 50, 50 20, 50 20" stroke="#0A2540" strokeWidth="8" strokeLinecap="round" />
            <circle cx="20" cy="80" r="6" fill="#0A2540" />
            
            {/* College Path (Darker Blue) */}
            <path d="M80 80 C 80 50, 50 20, 50 20" stroke="#163A5F" strokeWidth="8" strokeLinecap="round" />
            <circle cx="80" cy="80" r="6" fill="#163A5F" />
            
            {/* Investor/Success Path (Gold/Green rising up) */}
            <path d="M50 20 L 50 0" stroke="#D4AF37" strokeWidth="8" strokeLinecap="round" />
            <path d="M35 15 L 50 0 L 65 15" stroke="#D4AF37" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        {/* Text: Huntifyy */}
        <text x="110" y="75" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="60" fill="currentColor">
            Huntifyy
        </text>
    </svg>
);
