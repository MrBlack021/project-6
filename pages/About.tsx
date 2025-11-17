
import React from 'react';
import { FadeIn } from '../components/FadeIn';
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

const TeamMemberCard: React.FC<{ name: string; title: string; imageUrl: string; }> = ({ name, title, imageUrl }) => (
    <div className="text-center">
        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-light-border dark:border-dark-border"/>
        <h4 className="font-poppins font-bold text-lg">{name}</h4>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{title}</p>
    </div>
);


const About: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Architects of Student Innovation</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
                            We are building the bridge between academic potential and real-world entrepreneurial success.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Our Mission & Vision</h2>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                                Our mission is to embed a practical, sustainable culture of innovation within educational institutions. We empower students with the mentorship, resources, and connections needed to transform their ideas into scalable ventures.
                            </p>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary">
                                We envision a future where every college is a hub of entrepreneurial activity, producing not just graduates, but the next generation of founders and tech leaders who will shape our world.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1742&q=80" alt="Team collaborating" className="rounded-lg shadow-soft" />
                        </div>
                    </div>
                </FadeIn>

                 <FadeIn>
                    <div className="py-20 text-center border-y border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12">Our Impact in Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <StatItem value={500} suffix="+" label="Students Trained" />
                            <StatItem value={25} suffix="+" label="Startups Mentored" />
                            <StatItem value={10} label="Colleges Partnered" />
                            <StatItem value={5} suffix="+" label="Startups Funded" />
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn>
                     <div className="py-20 text-center">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12">Meet the Team</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <TeamMemberCard name="Rohan Patel" title="Founder & CEO" imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"/>
                            <TeamMemberCard name="Priya Sharma" title="Head of Programs" imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"/>
                            <TeamMemberCard name="Anjali Rao" title="Lead Mentor" imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"/>
                            <TeamMemberCard name="Vikram Singh" title="Investor Relations" imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80"/>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default About;
