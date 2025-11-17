
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'gradient';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'px-6 py-3 rounded-lg font-poppins font-semibold text-sm transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4';
    
    let variantClasses = '';
    switch (variant) {
        case 'outline':
            variantClasses = 'border border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary hover:text-light-text-main dark:hover:text-dark-text-main focus:ring-primary/20';
            break;
        case 'gradient':
             variantClasses = 'bg-accent text-primary hover:opacity-90 focus:ring-accent/30';
            break;
        case 'primary':
        default:
            variantClasses = 'bg-primary text-white hover:opacity-90 focus:ring-primary/30';
            break;
    }

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
