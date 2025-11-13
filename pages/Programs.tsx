import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { useInView } from '../hooks/useInView';

const TimelineStep: React.FC<{ icon: React.ReactNode; title: string; description: string; isLast?: boolean; }> = ({ icon, title, description, isLast }) => {
    const { ref, isInView } = useInView({ threshold: 0.5 });
    
    return (
        <div ref={ref} className="relative flex items-start">
            <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-bg-secondary border-2 border-primary/50 text-primary flex items-center justify-center z-10 transition-transform duration-500 ${isInView ? 'scale-100' : 'scale-0'}`}>
                {icon}
            </div>
            {!isLast && <div className={`absolute top-12 left-6 h-full w-0.5 bg-gray-800 transition-transform duration-500 delay-200 origin-top ${isInView ? 'scale-y-100' : 'scale-y-0'}`}></div>}
            <div className={`ml-6 transition-opacity duration-500 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                <h4 className="text-xl font-poppins font-bold text-text-main mb-1">{title}</h4>
                <p className="text-text-secondary">{description}</p>
            </div>
        </div>
    );
};

const CurriculumWeek: React.FC<{ week: number; title: string; description: string; project: string }> = ({ week, title, description, project }) => (
    <div className="py-4 border-b border-gray-800 last:border-b-0">
        <h4 className="font-poppins font-bold text-lg text-primary">Week {week}: {title}</h4>
        <p className="text-text-secondary mt-1">{description}</p>
        <p className="text-sm text-text-main mt-2"><strong className="text-text-secondary">Mini-Project:</strong> {project}</p>
    </div>
);

const Programs: React.FC = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const startupPitchSteps = [
        { icon: <span className="font-bold">1</span>, title: 'Idea Submission', description: 'Submit your startup idea through our portal with a brief overview of your concept and market.' },
        { icon: <span className="font-bold">2</span>, title: 'Pitch Deck Refinement', description: 'Work with our mentors to craft a compelling pitch deck that highlights your vision and value proposition.' },
        { icon: <span className="font-bold">3</span>, title: 'Presentation Coaching', description: 'Receive one-on-one coaching to perfect your delivery, storytelling, and Q&A handling skills.' },
        { icon: <span className="font-bold">4</span>, title: 'Investor Connect', description: 'Pitch your polished idea to our network of angel investors and venture capitalists on Demo Day.', isLast: true },
    ];

    return (
        <div className="bg-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl font-poppins font-bold text-center mb-4">Our Programs</h1>
                    <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-16">We offer structured programs to guide you from concept to creation, whether you're building an AI or a company.</p>
                </FadeIn>

                <FadeIn>
                    <div className="bg-bg-secondary border border-gray-800 p-8 md:p-12 rounded-xl shadow-soft mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-poppins font-bold text-text-main mb-4">AI Agent Builder Challenge</h2>
                                <p className="text-text-secondary mb-6">This 30-day hands-on competition is your express lane to becoming a recognized AI developer. Compete against the best, build a portfolio piece that stands out, and win from a prize pool of up to ₹5 Lakhs.</p>
                                <div className="my-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                                    <p className="font-bold text-primary">🏆 Prize Pool: ₹5,000 to ₹5,00,000 for top performers!</p>
                                </div>
                                
                                <button onClick={() => setIsDetailsVisible(prev => !prev)} className="text-primary hover:text-accent font-semibold mb-6 inline-block group">
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                        {isDetailsVisible ? 'Hide Curriculum Details' : 'View Full Curriculum →'}
                                    </span>
                                </button>

                                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isDetailsVisible ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="space-y-4 pt-4 border-t border-gray-800">
                                        <div>
                                            <h3 className="font-poppins font-bold text-xl mb-2 text-text-main">Phase 1: 20-Day Learning & Practice</h3>
                                            <p className="text-text-secondary mb-4">The first 20 days are an intensive, structured curriculum covering everything from AI fundamentals to advanced agent deployment. Each week includes daily practices, hands-on labs, and a mini-project to solidify your skills.</p>
                                            <CurriculumWeek week={1} title="AI Fundamentals & Python Brush-up" description="Get introduced to core AI concepts, set up your development environment, and master Python libraries essential for AI/ML." project="A simple recommendation script." />
                                            <CurriculumWeek week={2} title="Machine Learning & Data Handling" description="Explore supervised/unsupervised learning, preprocess data with Pandas, and build your first models with Scikit-learn." project="A customer segmentation model." />
                                            <CurriculumWeek week={3} title="Deep Learning & APIs" description="Dive into neural networks with TensorFlow/PyTorch and learn to build and integrate REST APIs for your models." project="An image classifier with a simple API." />
                                            <CurriculumWeek week={4} title="Advanced Agent Logic & Deployment" description="Master state management, long-term memory for agents, and deploy your creations to a cloud environment." project="A conversational chatbot agent." />
                                        </div>
                                         <div>
                                            <h3 className="font-poppins font-bold text-xl mb-2 text-text-main">Phase 2: 10-Day Grand Challenge</h3>
                                            <p className="text-text-secondary">The final 10 days are the ultimate test. You'll tackle two complex, real-world tasks where your agents will be judged on efficiency, accuracy, and innovation. This is your chance to shine and win from the prize pool!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                   <Link to="/register"><Button variant="gradient">Enter the Competition</Button></Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1740&q=80" alt="AI Development" className="rounded-lg shadow-md object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-bg-secondary border border-gray-800 p-8 md:p-12 rounded-xl shadow-soft">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                             <div className="hidden md:block">
                                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1674&q=80" alt="Startup Pitching" className="rounded-lg shadow-md object-cover w-full h-full" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-poppins font-bold text-text-main mb-8">Startup Pitch Support</h2>
                                <div className="space-y-8">
                                    {startupPitchSteps.map((step, index) => <TimelineStep key={index} {...step} />)}
                                </div>
                                <div className="mt-10">
                                    <Link to="/register"><Button variant="gradient">Pitch Your Startup</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Programs;