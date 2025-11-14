import React from 'react';

export const LogoIcon: React.FC<{className?: string; animated?: boolean}> = ({ className, animated }) => (
    <svg className={className} viewBox="0 0 200 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Huntifyy Logo">
        <defs>
            <filter id="orange-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            
            <filter id="blue-glow-professional" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="0" stdDeviation="4.5" flood-color="#007AFF" flood-opacity="0.8" />
            </filter>

            <linearGradient id="metallic-gray" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#D1D5DB" />
                <stop offset="50%" stopColor="#9CA3AF" />
                <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>

            <linearGradient id="logo-orange" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            {/* A subtle drop shadow can create an emboss effect */}
            <filter id="emboss-effect">
                <feDropShadow dx="0.8" dy="0.8" stdDeviation="0.5" floodColor="#000" floodOpacity="0.2"/>
                <feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0.5" floodColor="#fff" floodOpacity="0.2"/>
            </filter>
        </defs>

        {/* The Icon */}
        <g filter="url(#blue-glow-professional)">
            <circle cx="22" cy="22" r="16" fill="#F59E0B" filter="url(#orange-glow)"/>
            <circle 
                cx="22" cy="22" r="15" 
                fill="url(#logo-orange)" 
                stroke="#FFFFFF" 
                strokeOpacity="0.2" 
                strokeWidth="0.5"
                className={animated ? 'logo-anim-circle' : ''}
            />
            {/* Chevron shape for arrow */}
            <path 
                d="M19 16 L27 22 L19 28 L21 28 L29 22 L21 16 Z" 
                fill="url(#metallic-gray)" 
                style={{filter: 'url(#emboss-effect)'}} 
                className={animated ? 'logo-anim-chevron' : ''}
            />
        </g>
        
        {/* The Text */}
        <text 
            x="52" 
            y="31" 
            fontFamily="Poppins, sans-serif" 
            fontSize="24" 
            fontWeight="bold" 
            fill="url(#metallic-gray)"
            letterSpacing="0.5"
            style={{filter: 'url(#emboss-effect)'}}
            className={animated ? 'logo-anim-text' : ''}
        >
            Huntifyy
        </text>
    </svg>
);