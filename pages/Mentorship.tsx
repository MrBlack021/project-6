
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const MentorProfile: React.FC<{ name: string; title: string; imageUrl: string; expertise: string[] }> = ({ name, title, imageUrl, expertise }) => (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg border border-light-border dark:border-dark-border text-center">
        <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"/>
        <h3 className="font-poppins font-bold text-xl">{name}</h3>
        <p className="text-accent text-sm mb-3">{title}</p>
        <div className="flex flex-wrap justify-center gap-2">
            {expertise.map(skill => (
                <span key={skill} className="text-xs bg-primary/10 text-primary/80 px-2 py-1 rounded-full">{skill}</span>
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
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16 max-w-3xl mx-auto">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">30-Day Student Mentorship Program</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                            From a raw idea to a pitch-ready startup in one month. We provide the structure, guidance, and expert support to make it happen.
                        </p>
                    </header>
                </FadeIn>
                
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">What You'll Achieve</h2>
                            <ul className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
                                <li className="flex items-start"><strong className="text-accent mr-3 text-xl">✓</strong><span><strong>Idea Validation:</strong> Learn to research your market and validate that you're solving a real-world problem.</span></li>
                                <li className="flex items-start"><strong className="text-accent mr-3 text-xl">✓</strong><span><strong>Business Model Canvas:</strong> Develop a clear and concise business model that outlines your value proposition, customers, and revenue streams.</span></li>
                                <li className="flex items-start"><strong className="text-accent mr-3 text-xl">✓</strong><span><strong>MVP Roadmap:</strong> Define the core features of your Minimum Viable Product and create a realistic development plan.</span></li>
                                <li className="flex items-start"><strong className="text-accent mr-3 text-xl">✓</strong><span><strong>Polished Pitch Deck:</strong> Craft a compelling, investor-ready pitch deck that effectively tells your startup's story.</span></li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2">
                             <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1740&q=80" alt="A mentor guiding a student" className="rounded-lg shadow-soft" />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                     <div className="py-20 text-center">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12">Meet Our Mentors</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {mentors.map(mentor => <MentorProfile key={mentor.name} {...mentor} />)}
                        </div>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-8 text-sm">...and many more from our network of over 50 industry experts.</p>
                    </div>
                </FadeIn>

                <FadeIn>
                     <div className="text-center bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 md:p-12 rounded-lg border border-light-border dark:border-dark-border">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Have an idea?</h2>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto mb-8">
                           Don't let your game-changing idea remain just an idea. Join our next cohort and let's build it together.
                        </p>
                        <Link to="/register">
                            <Button variant="primary" className="text-lg">
                                Register for Mentorship
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Mentorship;
