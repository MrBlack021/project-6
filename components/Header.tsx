import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LogoIcon } from './LogoIcon';
import Button from './Button';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
        { name: 'About', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const activeLinkClass = "text-primary border-b-2 border-primary";
    const inactiveLinkClass = "text-gray-600 hover:text-accent transition-colors duration-300";

    return (
        <header className="bg-bg-main/80 backdrop-blur-lg sticky top-0 z-50 shadow-soft">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <LogoIcon className="h-12 w-auto" />
                    </NavLink>

                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => 
                                    `${isActive ? activeLinkClass : inactiveLinkClass} font-medium pb-1`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className='hidden md:block'>
                         <Link to="/register">
                            <Button className='px-6 py-2'>Register</Button>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-main focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-bg-main pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => 
                                    `${isActive ? 'text-primary' : 'text-gray-600'} hover:text-accent transition-colors duration-300 font-medium text-lg`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                         <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                            <Button className='mt-4'>Register</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;