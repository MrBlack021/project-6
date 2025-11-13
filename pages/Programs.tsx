import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { useInView } from '../hooks/useInView';

const TimelineStep: React.FC<{ icon: React.ReactNode; title: string; description: string; isLast?: boolean; }> = ({ icon, title, description, isLast }) => {
    const { ref, isInView } = useInView({ threshold: 0.5 });
    
    return (
        <div ref={ref} className="relative flex items-start">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary border-2 ${isInView ? 'border-primary' : 'border-light-border dark:border-dark-border'} text-primary flex items-center justify-center z-10 transition-all duration-500`}>
                {icon}
            </div>
            {!isLast && <div className={`absolute top-8 left-4 h-full w-0.5 bg-light-border dark:bg-dark-border transition-transform duration-500 delay-200 origin-top ${isInView ? 'scale-y-100' : 'scale-y-0'}`}></div>}
            <div className={`ml-6 transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <h4 className="text-xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-1">{title}</h4>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">{description}</p>
            </div>
        </div>
    );
};

const CurriculumWeek: React.FC<{ week: number; title: string; description: string; project: string }> = ({ week, title, description, project }) => (
    <div className="py-4 border-b border-light-border dark:border-dark-border last:border-b-0">
        <h4 className="font-poppins font-bold text-lg text-primary">Week {week}: {title}</h4>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">{description}</p>
        <p className="text-sm text-light-text-main dark:text-dark-text-main mt-2"><strong className="text-light-text-secondary dark:text-dark-text-secondary">Mini-Project:</strong> {project}</p>
    </div>
);

const Programs: React.FC = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const startupPitchSteps = [
        { icon: <span className="font-semibold text-sm">1</span>, title: 'Idea Submission', description: 'Submit your startup idea through our portal with a brief overview of your concept and market.' },
        { icon: <span className="font-semibold text-sm">2</span>, title: 'Pitch Deck Refinement', description: 'Work with our mentors to craft a compelling pitch deck that highlights your vision and value proposition.' },
        { icon: <span className="font-semibold text-sm">3</span>, title: 'Presentation Coaching', description: 'Receive one-on-one coaching to perfect your delivery, storytelling, and Q&A handling skills.' },
        { icon: <span className="font-semibold text-sm">4</span>, title: 'Investor Connect', description: 'Pitch your polished idea to our network of angel investors and venture capitalists on Demo Day.', isLast: true },
    ];

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl font-poppins font-bold text-center mb-4">Our Programs</h1>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary text-center max-w-3xl mx-auto mb-16">An integrated approach to cultivating talent and building high-growth ventures.</p>
                </FadeIn>

                <FadeIn>
                    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 md:p-12 rounded-lg shadow-soft dark:shadow-soft-dark mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">AI Challenge: A Talent Pipeline</h2>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">More than a competition, our AI Challenge is a high-fidelity talent vetting process. We identify and cultivate elite AI developers through practical, high-pressure challenges, producing graduates who are not just skilled, but proven innovators ready to build.</p>
                                <div className="my-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-sm">
                                    <p className="font-bold text-primary">🏆 Prize Pool: ₹5,000 to ₹5,00,000 for top performers!</p>
                                </div>
                                
                                <button onClick={() => setIsDetailsVisible(prev => !prev)} className="text-primary hover:opacity-80 font-semibold mb-6 inline-block group">
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                        {isDetailsVisible ? 'Hide Curriculum Details' : 'View Full Curriculum →'}
                                    </span>
                                </button>

                                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isDetailsVisible ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="space-y-4 pt-4 border-t border-light-border dark:border-dark-border">
                                        <div>
                                            <h3 className="font-poppins font-bold text-xl mb-2 text-light-text-main dark:text-dark-text-main">Phase 1: 20-Day Learning & Practice</h3>
                                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">The first 20 days are an intensive, structured curriculum covering everything from AI fundamentals to advanced agent deployment. Each week includes daily practices, hands-on labs, and a mini-project to solidify your skills.</p>
                                            <CurriculumWeek week={1} title="AI Fundamentals & Python Brush-up" description="Get introduced to core AI concepts, set up your development environment, and master Python libraries essential for AI/ML." project="A simple recommendation script." />
                                            <CurriculumWeek week={2} title="Machine Learning & Data Handling" description="Explore supervised/unsupervised learning, preprocess data with Pandas, and build your first models with Scikit-learn." project="A customer segmentation model." />
                                            <CurriculumWeek week={3} title="Deep Learning & APIs" description="Dive into neural networks with TensorFlow/PyTorch and learn to build and integrate REST APIs for your models." project="An image classifier with a simple API." />
                                            <CurriculumWeek week={4} title="Advanced Agent Logic & Deployment" description="Master state management, long-term memory for agents, and deploy your creations to a cloud environment." project="A conversational chatbot agent." />
                                        </div>
                                         <div>
                                            <h3 className="font-poppins font-bold text-xl mb-2 text-light-text-main dark:text-dark-text-main">Phase 2: 10-Day Grand Challenge</h3>
                                            <p className="text-light-text-secondary dark:text-dark-text-secondary">The final 10 days are the ultimate test. You'll tackle two complex, real-world tasks where your agents will be judged on efficiency, accuracy, and innovation. This is your chance to shine and win from the prize pool!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                   <Link to="/register"><Button variant="primary">Enter the Competition</Button></Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1740&q=80" alt="AI Development" className="rounded-lg shadow-md object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn>
                    <div className="py-16 text-center">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">A Symbiotic Ecosystem</h2>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-12">
                            Our programs are not isolated silos. They are two halves of a powerful innovation engine, creating a unique flywheel effect that mitigates risk and maximizes potential for investors.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg border border-light-border dark:border-dark-border text-center w-full md:w-1/3">
                                <h3 className="font-poppins font-bold text-primary">Proven Talent</h3>
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-2">AI Challenge graduates with validated, practical skills.</p>
                            </div>
                            <div className="text-4xl text-primary transform md:-rotate-0 rotate-90 mx-8 my-4 md:my-0">
                                &harr;
                            </div>
                            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg border border-light-border dark:border-dark-border text-center w-full md:w-1/3">
                                <h3 className="font-poppins font-bold text-primary">Validated Ideas</h3>
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-2">Curated startups from all sectors, mentored for growth.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 md:p-12 rounded-lg shadow-soft dark:shadow-soft-dark">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                             <div className="hidden md:block">
                                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1674&q=80" alt="Startup Pitching" className="rounded-lg shadow-md object-cover w-full h-full" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-8">Startup Support: Your Idea, Any Sector</h2>
                                 <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 -mt-4">Our Startup Support program is a curated deal-flow pipeline for visionary founders across all industries. While we have deep expertise in AI, we welcome groundbreaking ideas from any sector. We de-risk ventures by providing intensive mentorship and validating concepts before they reach an investor's desk.</p>
                                <div className="space-y-8">
                                    {startupPitchSteps.map((step, index) => <TimelineStep key={index} {...step} />)}
                                </div>
                                <div className="mt-10">
                                    <Link to="/register"><Button variant="primary">Pitch Your Startup</Button></Link>
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