import React from 'react';

export const LogoIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 162 34" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Huntifyy Logo">
        <rect width="162" height="34" rx="4" fill="#0D2E37"/>
        {/* The Icon */}
        <g>
            <circle cx="21" cy="17" r="12" fill="#F7941E"/>
            <path d="M18 12 L25 17 L18 22 Q20 17 18 12 Z" fill="#0D2E37"/>
        </g>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="bold" letterSpacing="0.025em">
            <tspan x="45" y="24">Huntifyy</tspan>
        </text>
    </svg>
);