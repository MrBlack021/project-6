
import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    link?: string;
    linkText?: string;
    delay?: string;
    className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
    title, 
    description, 
    icon, 
    link, 
    linkText = "Learn More",
    className = "" 
}) => {
    const Content = (
        <div className={`group relative h-full bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 backdrop-blur-sm p-8 rounded-2xl border border-light-border dark:border-dark-border transition-all duration-300 hover:translate-y-[-5px] hover:shadow-glow overflow-hidden ${className}`}>
            {/* Gradient Border Effect on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            
            {/* Background Gradient Blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500"></div>

            {icon && (
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-light-bg-main dark:bg-dark-bg-main shadow-sm text-accent group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            )}
            
            <h3 className="text-xl font-poppins font-bold mb-3 text-light-text-main dark:text-dark-text-main group-hover:text-accent transition-colors duration-300">
                {title}
            </h3>
            
            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
                {description}
            </p>

            {link && (
                <div className="mt-auto flex items-center text-accent font-semibold text-sm group/link">
                    {linkText}
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            )}
        </div>
    );

    if (link) {
        return <Link to={link} className="block h-full">{Content}</Link>;
    }

    return Content;
};
