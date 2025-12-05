
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useCountUp } from '../hooks/useCountUp';

const StatItem: React.FC<{ value: number; label: string; suffix?: string; }> = ({ value, label, suffix }) => {
    const { count, ref } = useCountUp(value, 2000);
    return (
        <div ref={ref} className="text-center p-8 border-r border-light-border dark:border-dark-border last:border-0">
            <p className="text-5xl font-poppins font-bold text-accent mb-2">
                {count}{suffix}
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium uppercase tracking-wide">{label}</p>
        </div>
    );
};

const Investors: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-20 max-w-4xl mx-auto">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-green-500/10 text-green-600 text-sm font-bold uppercase tracking-widest">For Investors</div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">Access Curated, De-Risked Deal Flow</h1>
                        <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
                            Invest in the next generation of startups, meticulously mentored and validated through the Huntifyy ecosystem.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                           <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1740&q=80" alt="Investors in a meeting" className="rounded-2xl shadow-2xl" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">The Huntifyy Advantage</h2>
                            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6">
                                Early-stage investing is inherently risky. We mitigate that risk by providing a curated pipeline of startups that have already undergone a rigorous 30-day validation and mentorship process.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Well-Vetted Founders",
                                    "Validated Business Models",
                                    "Polished, Investor-Ready Pitches",
                                    "Access to Diverse Sectors"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-lg font-medium">
                                        <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold mr-4">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeIn>
                
                 <FadeIn>
                    <div className="py-12 mb-20 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-3xl shadow-soft">
                        <h2 className="text-2xl font-poppins font-bold text-center mb-8 text-light-text-main dark:text-dark-text-main">Our Track Record</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                            <StatItem value={12} suffix="+" label="Startups Mentored" />
                            <StatItem value={18} label="Pitched to Investors" />
                            <StatItem value={7} suffix="+" label="Successfully Funded" />
                             <StatItem value={70} suffix="%" label="Follow-on Interest" />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                     <div className="py-12">
                        <h2 className="text-3xl font-poppins font-bold text-center text-light-text-main dark:text-dark-text-main mb-12">How to Engage</h2>
                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-white/5 p-10 rounded-2xl border border-light-border dark:border-dark-border hover:border-accent/50 transition-all duration-300">
                                <h3 className="text-2xl font-poppins font-bold mb-4">Join Our Investor Network</h3>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">Get exclusive invitations to our quarterly Investor Pitch Days and receive a curated list of top-performing startups from each cohort.</p>
                                 <Link to="/contact">
                                    <Button variant="primary" className="w-full">Apply to Join</Button>
                                </Link>
                            </div>
                             <div className="bg-white dark:bg-white/5 p-10 rounded-2xl border border-light-border dark:border-dark-border hover:border-accent/50 transition-all duration-300">
                                <h3 className="text-2xl font-poppins font-bold mb-4">Become a Mentor</h3>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">Share your expertise and help shape the next generation of entrepreneurs. Our mentors get early access to promising startups and talent.</p>
                                 <Link to="/contact">
                                    <Button variant="outline" className="w-full">Become a Mentor</Button>
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
