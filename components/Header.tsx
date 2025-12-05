
import React, { useState, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LogoIcon } from './LogoIcon';
import Button from './Button';
import { ThemeSwitcher } from './ThemeSwitcher';

const useClickAway = (ref: React.RefObject<any>, handler: (event: MouseEvent | TouchEvent) => void) => {
    React.useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = React.useRef(null);

    useClickAway(dropdownRef, () => setIsDropdownOpen(false));

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Investors', path: '/investors' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const programLinks = [
        { name: 'Programs Overview', path: '/programs' },
        { name: 'Startup Cell', path: '/startup-cell' },
        { name: 'Mentorship', path: '/mentorship' },
        { name: 'AI & Automation', path: '/ai-automation' },
    ];

    const linkClasses = "text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-main dark:hover:text-dark-text-main transition-colors duration-300 py-2";
    const activeLinkClasses = "text-accent font-semibold";

    return (
        <header className="bg-light-bg-main/80 dark:bg-dark-bg-secondary/80 backdrop-blur-lg sticky top-0 z-40 border-b border-light-border dark:border-dark-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <LogoIcon className="h-16 w-auto" />
                    </NavLink>

                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.slice(0, 2).map((link) => (
                            <NavLink key={link.name} to={link.path} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                                {link.name}
                            </NavLink>
                        ))}

                        <div ref={dropdownRef} className="relative">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`${linkClasses} flex items-center gap-1`}>
                                Programs
                                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full mt-2 w-48 bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-lg shadow-soft dark:shadow-soft-dark py-2 z-50">
                                    {programLinks.map(link => (
                                        <NavLink key={link.name} to={link.path} onClick={() => setIsDropdownOpen(false)} className={({ isActive }) => `block px-4 py-2 text-sm ${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                                            {link.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <NavLink key={link.name} to={link.path} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                    
                    <div className="hidden md:flex items-center gap-4">
                         <Link to="/contact"><Button variant="primary">Partner with Us</Button></Link>
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
                    <nav className="flex flex-col items-center space-y-6">
                        {[...navLinks.slice(0, 2), ...programLinks, ...navLinks.slice(2)].map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-main dark:hover:text-dark-text-main transition-colors duration-300 font-medium text-2xl"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                         <Link to="/contact"><Button onClick={() => setIsMenuOpen(false)} variant="primary" className='mt-8'>Partner with Us</Button></Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
