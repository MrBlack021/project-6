
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { LogoIcon } from './LogoIcon';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
        {children}
    </a>
);

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <li>
        <Link to={to} className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-main dark:hover:text-dark-text-main transition-colors duration-300 text-sm">{children}</Link>
    </li>
);

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary relative pt-1 border-t border-light-border dark:border-dark-border">
            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* CTA Section */}
                <div className="py-12 md:py-16 text-center border-b border-light-border dark:border-dark-border">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">
                        Ready to Foster Innovation?
                    </h2>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto mb-8">
                        Empower your students and build a thriving startup ecosystem at your institution. Partner with us today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact">
                            <Button variant="primary">
                                Partner with Us
                            </Button>
                        </Link>
                         <Link to="/register">
                            <Button variant="outline">
                                Register a Student
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                     <div>
                        <h3 className="text-base font-poppins font-semibold text-light-text-main dark:text-dark-text-main mb-4">Company</h3>
                        <ul className="space-y-3">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/testimonials">Testimonials</FooterLink>
                             <FooterLink to="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-base font-poppins font-semibold text-light-text-main dark:text-dark-text-main mb-4">Programs</h3>
                        <ul className="space-y-3">
                            <FooterLink to="/programs">Overview</FooterLink>
                            <FooterLink to="/startup-cell">Startup Cell</FooterLink>
                            <FooterLink to="/mentorship">Mentorship</FooterLink>
                             <FooterLink to="/ai-automation">AI & Automation</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-poppins font-semibold text-light-text-main dark:text-dark-text-main mb-4">For Whom</h3>
                        <ul className="space-y-3">
                             <FooterLink to="/#why-colleges">Colleges</FooterLink>
                             <FooterLink to="/register">Students</FooterLink>
                             <FooterLink to="/investors">Investors</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-poppins font-semibold text-light-text-main dark:text-dark-text-main mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <FooterLink to="/terms-and-conditions">Terms</FooterLink>
                            <FooterLink to="/privacy-policy">Privacy</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between border-t border-light-border dark:border-dark-border">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                         <LogoIcon className="h-12 w-auto" />
                         <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">&copy; {currentYear} Huntifyy. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-5">
                         {/* Removed Facebook and Twitter icons */}
                        <SocialIcon href="https://www.instagram.com/huntifyy?igsh=MTVyMnNjajJydXlraA==">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63C3.393.916 2.685 1.458 2.062 2.062 1.458 2.685.916 3.393.63 4.14.333 4.905.131 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.668.072 4.947c.06 1.278.261 2.148.558 2.913.297.747.839 1.455 1.462 2.078.623.623 1.331 1.165 2.078 1.462.766.297 1.636.499 2.913.558 1.278.058 1.693.072 4.947.072s3.668-.014 4.947-.072c1.278-.06 2.148-.262 2.913-.558.747-.297 1.455-.839 2.078-1.462.623-.623 1.165-1.331 1.462-2.078.297-.766.499-1.636.558-2.913.058-1.278.072-1.693.072-4.947s-.014-3.668-.072-4.947c-.06-1.278-.262-2.148-.558-2.913-.297-.747-.839-1.455-1.462-2.078-.623-.623-1.331-1.165-2.078-1.462-.766-.297-1.636-.499-2.913-.558C15.668.014 15.25 0 12 0zm0 2.16c3.2 0 3.58.014 4.85.071 1.17.055 1.8.249 2.22.411.536.208.973.479 1.309.814.335.335.606.772.814 1.309.162.42.356 1.05.411 2.22.057 1.27.07 1.65.07 4.85s-.014 3.58-.071 4.85c-.055 1.17-.249 1.8-.411 2.22-.208.536-.479.973-.814 1.309-.335.335-.772.606-1.309.814-.42.162-1.05.356-2.22.411-1.27.057-1.65.07-4.85.07s-3.58-.014-4.85-.071c-1.17-.055-1.8-.249-2.22-.411-.536-.208-.973-.479-1.309-.814-.335-.335-.606-.772-.814-1.309-.162-.42-.356-1.05-.411-2.22-.057-1.27-.07-1.65-.07-4.85s.014-3.58.071-4.85c.055-1.17.249-1.8.411-2.22.208-.536.479-.973.814-1.309.335-.335.772-.606 1.309-.814.42-.162 1.05-.356 2.22-.411C8.42 2.174 8.79 2.16 12 2.16zM12 6a6 6 0 100 12 6 6 0 000-12zm0 2A4 4 0 110 12 4 4 0 0112 8zm-4 4a4 4 0 100 8 4 4 0 000-8zM17.5 6.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" clipRule="evenodd" />
                            </svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;