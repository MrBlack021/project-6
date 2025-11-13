import React from 'react';

// Fix: Extend ButtonHTMLAttributes to allow standard button props like 'type'.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105';
    
    const variantClasses = variant === 'primary' 
        ? 'bg-primary hover:bg-accent hover:shadow-glow-primary'
        : 'bg-gray-600 hover:bg-gray-700';

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
