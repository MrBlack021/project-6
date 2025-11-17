
import React from 'react';

export const LogoIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Huntifyy Logo">
        <defs>
            <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            
            <filter id="blue-glow-professional" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#D4AF37" flood-opacity="0.6" />
            </filter>

            <linearGradient id="metallic-gray" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#D1D5DB" />
                <stop offset="50%" stopColor="#9CA3AF" />
                <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>

            <linearGradient id="logo-gold" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#FCE588" />
                <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>

            <filter id="emboss-effect">
                <feDropShadow dx="0.8" dy="0.8" stdDeviation="0.5" floodColor="#000" floodOpacity="0.2"/>
                <feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0.5" floodColor="#fff" floodOpacity="0.2"/>
            </filter>
        </defs>

        <g filter="url(#blue-glow-professional)">
            <circle cx="22" cy="22" r="16" fill="#D4AF37" filter="url(#gold-glow)"/>
            <circle cx="22" cy="22" r="15" fill="url(#logo-gold)" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="0.5" />
            <path d="M19 16 L27 22 L19 28 L21 28 L29 22 L21 16 Z" fill="url(#metallic-gray)" style={{filter: 'url(#emboss-effect)'}} />
        </g>
        
        <text 
            x="52" 
            y="31" 
            fontFamily="Poppins, sans-serif" 
            fontSize="24" 
            fontWeight="bold" 
            className="fill-light-text-main dark:fill-dark-text-main"
            letterSpacing="0.5"
        >
            Huntifyy
        </text>
    </svg>
);
