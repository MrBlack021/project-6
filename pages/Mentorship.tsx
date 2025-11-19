
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const MentorProfile: React.FC<{ name: string; title: string; imageUrl: string; expertise: string[] }> = ({ name, title, imageUrl, expertise }) => (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-2xl border border-light-border dark:border-dark-border text-center transition-all hover:-translate-y-2 hover:shadow-soft">
        <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-40 animate-pulse-slow"></div>
            <img src={imageUrl} alt={name} className="relative w-full h-full rounded-full object-cover border-4 border-light-bg-main dark:border-dark-bg-main"/>
        </div>
        <h3 className="font-poppins font-bold text-2xl mb-1">{name}</h3>
        <p className="text-accent font-medium mb-4">{title}</p>
        <div className="flex flex-wrap justify-center gap-2">
            {expertise.map(skill => (
                <span key={skill} className="text-xs font-semibold bg-primary/5 dark:bg-white/5 text-primary dark:text-white/80 px-3 py-1 rounded-full border border-primary/10 dark:border-white/10">{skill}</span>
            ))}
        </div>
    </div>
);

const Mentorship: React.FC = () => {
    const mentors = [
        { name: 'Priya Sharma', title: 'Serial Entrepreneur & Product Lead', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', expertise: ['Product Management', 'SaaS', 'Go-to-Market'] },
        { name: 'Vikram Singh', title: 'Angel Investor & Finance Expert', imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80', expertise: ['Fundraising', 'Valuation', 'Fintech'] },
        { name: 'Anjali Rao', title: 'Lead AI Engineer', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', expertise: ['AI/ML', 'System Architecture', 'Scalability'] },
    ];

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-20 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">30-Day Student Mentorship Program</h1>
                        <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
                            From a raw idea to a pitch-ready startup in one month. We provide the structure, guidance, and expert support to make it happen.
                        </p>
                    </header>
                </FadeIn>
                
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-8">What You'll Achieve</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Idea Validation", desc: "Learn to research your market and validate that you're solving a real-world problem." },
                                    { title: "Business Model Canvas", desc: "Develop a clear and concise business model that outlines your value proposition." },
                                    { title: "MVP Roadmap", desc: "Define the core features of your Minimum Viable Product and create a realistic plan." },
                                    { title: "Polished Pitch Deck", desc: "Craft a compelling, investor-ready pitch deck that effectively tells your story." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold mr-4 mt-1">
                                            ✓
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-light-text-secondary dark:text-dark-text-secondary">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative">
                             <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
                             <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1740&q=80" alt="A mentor guiding a student" className="relative rounded-2xl shadow-soft-dark" />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                     <div className="py-12">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12 text-center">Meet Our Mentors</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {mentors.map(mentor => <MentorProfile key={mentor.name} {...mentor} />)}
                        </div>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-10 text-center">...and many more from our network of over 50 industry experts.</p>
                    </div>
                </FadeIn>

                <FadeIn>
                     <div className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-r from-primary to-primary-light text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-poppins font-bold mb-4">Have an idea?</h2>
                            <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                               Don't let your game-changing idea remain just an idea. Join our next cohort and let's build it together.
                            </p>
                            <Link to="/register">
                                <Button variant="primary" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                                    Register for Mentorship
                                </Button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Mentorship;
