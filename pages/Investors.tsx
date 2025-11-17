
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useCountUp } from '../hooks/useCountUp';

const StatItem: React.FC<{ value: number; label: string; suffix?: string; }> = ({ value, label, suffix }) => {
    const { count, ref } = useCountUp(value, 2000);
    return (
        <div ref={ref} className="text-center">
            <p className="text-4xl md:text-5xl font-poppins font-bold text-accent">
                {count}{suffix}
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{label}</p>
        </div>
    );
};

const Investors: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16 max-w-3xl mx-auto">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Access Curated, De-Risked Deal Flow</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                            Invest in the next generation of startups, meticulously mentored and validated through the Huntifyy ecosystem.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                           <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1740&q=80" alt="Investors in a meeting" className="rounded-lg shadow-soft" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">The Huntifyy Advantage for Investors</h2>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                                Early-stage investing is inherently risky. We mitigate that risk by providing a curated pipeline of startups that have already undergone a rigorous 30-day validation and mentorship process.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center"><span className="text-accent font-bold mr-3">✓</span>Well-Vetted Founders</li>
                                <li className="flex items-center"><span className="text-accent font-bold mr-3">✓</span>Validated Business Models</li>
                                <li className="flex items-center"><span className="text-accent font-bold mr-3">✓</span>Polished, Investor-Ready Pitches</li>
                                <li className="flex items-center"><span className="text-accent font-bold mr-3">✓</span>Access to Diverse Sectors</li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
                
                 <FadeIn>
                    <div className="py-20 text-center border-y border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12">Our Track Record</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <StatItem value={25} suffix="+" label="Startups Mentored" />
                            <StatItem value={15} label="Pitched to Investors" />
                            <StatItem value={5} suffix="+" label="Successfully Funded" />
                             <StatItem value={70} suffix="%" label="Follow-on Interest Rate" />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                     <div className="py-20">
                        <h2 className="text-3xl font-poppins font-bold text-center text-light-text-main dark:text-dark-text-main mb-12">How to Engage</h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg border border-light-border dark:border-dark-border">
                                <h3 className="text-2xl font-poppins font-bold mb-3">Join Our Investor Network</h3>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Get exclusive invitations to our quarterly Investor Pitch Days and receive a curated list of top-performing startups from each cohort.</p>
                                 <Link to="/contact">
                                    <Button variant="outline">Apply to Join</Button>
                                </Link>
                            </div>
                             <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg border border-light-border dark:border-dark-border">
                                <h3 className="text-2xl font-poppins font-bold mb-3">Become a Mentor</h3>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Share your expertise and help shape the next generation of entrepreneurs. Our mentors get early access to promising startups and talent.</p>
                                 <Link to="/contact">
                                    <Button variant="outline">Become a Mentor</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Investors;
