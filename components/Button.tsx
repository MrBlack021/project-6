import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'gradient' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'gradient', className = '', ...props }) => {
    const baseClasses = 'px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary/30';
    
    let variantClasses = '';
    switch (variant) {
        case 'outline':
            variantClasses = 'border-2 border-primary text-primary hover:bg-primary hover:text-white';
            break;
        case 'gradient':
        default:
            variantClasses = 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-glow-primary';
            break;
    }

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className}`}>
            {children}
        </button>
    );
};

export default Button;