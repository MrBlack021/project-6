
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from './LogoIcon';
import Button from './Button';
import { ThemeSwitcher } from './ThemeSwitcher';

const AdminAccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-lg shadow-soft dark:shadow-soft-dark p-8 max-w-sm w-full relative transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-main dark:hover:text-dark-text-main"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="text-center">
                    <h2 className="text-2xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Admin Access Required</h2>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                        The agent building platform is a restricted area. Please contact support if you believe you should have access.
                    </p>
                    <Button onClick={onClose} variant="primary">
                        Got It
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
        { name: 'About', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const linkClasses = "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-main dark:hover:text-dark-text-main transition-colors duration-300 py-2";
    const activeLinkClasses = "text-light-text-main dark:text-dark-text-main font-semibold";

    const handleLaunchClick = () => {
        setIsMenuOpen(false);
        setIsAdminModalOpen(true);
    };

    return (
        <>
            <header className="bg-light-bg-main/80 dark:bg-dark-bg-secondary/80 backdrop-blur-lg sticky top-0 z-40 border-b border-light-border dark:border-dark-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <NavLink to="/" className="flex items-center space-x-2">
                            <LogoIcon className="h-10 w-auto" />
                        </NavLink>

                        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => 
                                        `${linkClasses} ${isActive ? activeLinkClasses : ''}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                        
                        <div className="hidden md:flex items-center gap-4">
                             <Button onClick={handleLaunchClick} variant="primary">Huntifyy Agent Platform</Button>
                             <ThemeSwitcher />
                        </div>

                        <div className="md:hidden flex items-center gap-4">
                             <ThemeSwitcher />
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-text-main dark:text-dark-text-main focus:outline-none z-50">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-light-bg-main dark:bg-dark-bg-main pt-24">
                        <nav className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-main dark:hover:text-dark-text-main transition-colors duration-300 font-medium text-2xl"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                             <Button onClick={handleLaunchClick} variant="primary" className='mt-8'>Huntifyy Agent Platform</Button>
                        </nav>
                    </div>
                )}
            </header>
            {isAdminModalOpen && <AdminAccessModal onClose={() => setIsAdminModalOpen(false)} />}
        </>
    );
};

export default Header;