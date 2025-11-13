import React from 'react';

export const StartupIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.33-.04-3.08.66-.27 1.39-.15 2.04.2.58.32 1.23.46 1.9.33.67-.13 1.28-.48 1.8-.9.52-.42 1.1-.73 1.73-.86.63-.13 1.28-.02 1.84.28.57.3 1.1.75 1.63 1.28.53.53.98 1.1 1.28 1.63.3.56.42 1.2.28 1.84-.13.63-.44 1.2-.86 1.73-.42.52-.77 1.13-.9 1.8-.13.67-.02 1.32.33 1.9.35.65.23 1.38-.2 2.04-.75.75-2.24.73-3.08-.04-1.26-1.5-5-2-5-2s.5-3.74 2-5"/>
        <path d="m12 15-3-3"/>
        <path d="m9 9 6 6"/>
    </svg>
);
