
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { FeatureCard } from '../components/FeatureCard';

const StatItem: React.FC<{ value: number; label: string; suffix?: string; }> = ({ value, label, suffix }) => {
    const { count, ref } = useCountUp(value, 2000);
    return (
        <div ref={ref} className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <p className="text-4xl md:text-6xl font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-accent to-yellow-600 mb-2">
                {count}{suffix}
            </p>
            <p className="text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary font-medium uppercase tracking-wide">{label}</p>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main">
            {/* Hero */}
            <div className="relative py-20 md:py-32 bg-light-bg-secondary dark:bg-dark-bg-secondary overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">
                                Architects of <span className="text-gradient-gold">Student Innovation</span>
                            </h1>
                            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                                We bridge the gap between academic potential and real-world entrepreneurial success, one mentorship session at a time.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white text-sm font-bold uppercase tracking-widest">Our Why</div>
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">Mission & Vision</h2>
                            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                                Our mission is to embed a practical, sustainable culture of innovation within educational institutions. We empower students with the mentorship, resources, and connections needed to transform their ideas into scalable ventures.
                            </p>
                            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                                We envision a future where every college is a hub of entrepreneurial activity, producing not just graduates, but the next generation of founders and tech leaders who will shape our world.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 transform translate-x-4 translate-y-4 rounded-2xl"></div>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1742&q=80" alt="Team collaborating" className="relative rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </FadeIn>
            </div>

             {/* Impact Stats */}
             <div className="py-20 bg-primary dark:bg-dark-bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl font-poppins font-bold text-white text-center mb-12">Our Impact in Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <StatItem value={500} suffix="+" label="Students Trained" />
                            <StatItem value={25} suffix="+" label="Startups Mentored" />
                            <StatItem value={10} label="Colleges Partnered" />
                            <StatItem value={5} suffix="+" label="Startups Funded" />
                        </div>
                    </FadeIn>
                </div>
            </div>
            
            {/* Mentorship Philosophy (Replaced Meet the Team) */}
            <div className="py-24 bg-light-bg-main dark:bg-dark-bg-main">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <header className="text-center mb-16">
                             <h2 className="text-3xl md:text-5xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">Our Mentorship Philosophy</h2>
                             <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
                                 We don't just teach theory; we build founders. Our mentorship methodology is rooted in practical experience and a deep commitment to student success.
                             </p>
                        </header>
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard 
                                title="Founders Mentoring Founders" 
                                description="Our mentors aren't just academics; they are active entrepreneurs who have built, scaled, and exited companies. They bring battle-tested insights that textbooks can't provide."
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                                className="bg-light-bg-secondary dark:bg-dark-bg-secondary"
                            />
                            <FeatureCard 
                                title="Outcome-Oriented Guidance" 
                                description="We focus on tangible results. From the first validation call to the final pitch deck, every session is designed to move the needle and get the startup closer to market readiness."
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                className="bg-light-bg-secondary dark:bg-dark-bg-secondary"
                            />
                            <FeatureCard 
                                title="Holistic Development" 
                                description="Building a company is hard. We support the student as much as the startup, fostering resilience, leadership skills, and the ethical grounding needed to lead long-term."
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                                className="bg-light-bg-secondary dark:bg-dark-bg-secondary"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default About;
