
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

const curriculumModules = [
    { title: 'Foundations of AI Agents', description: 'Understand what agents are, from reactive to autonomous, and the role of LLMs.' },
    { title: 'Retrieval-Augmented Generation', description: 'Learn about embeddings, vector databases, and the RAG pipeline for smarter retrieval.' },
    { title: 'Building Agents with LangChain', description: 'Explore LangChain concepts, agent types, and common design patterns for development.' },
    { title: 'Agent Memory', description: 'Dive into memory types, multi-agent architectures, and building multi-modal agents.' },
    { title: 'Tool Integration', description: 'Discover how to integrate various tools, apply guardrails, and optimize agent performance.' },
    { title: 'Deployment and Ethics', description: 'Cover deployment options, monitoring, distributed systems, and the ethical considerations of AI.' },
    { title: 'Resources and References', description: 'Get familiar with MLOps tools, LLM providers, vector databases, and key documentation.' },
    { title: 'Grand Challenge', description: 'Apply everything you\'ve learned in a final, complex, real-world task to compete for the prize pool.' }
];


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
                                <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">AI Agent Builder Challenge</h2>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">More than a competition, our AI Challenge is a high-fidelity talent vetting process. We identify and cultivate elite AI developers through practical, high-pressure challenges, producing graduates who are not just skilled, but proven innovators ready to build.</p>
                                <div className="my-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-sm">
                                    <p className="font-bold text-primary">🏆 Prize Pool: ₹5,000 to ₹5,00,000 for top performers!</p>
                                </div>
                                
                                <button onClick={() => setIsDetailsVisible(prev => !prev)} className="text-primary hover:opacity-80 font-semibold mb-6 inline-block group">
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                        {isDetailsVisible ? 'Hide Full Curriculum' : 'View Full Curriculum →'}
                                    </span>
                                </button>

                                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isDetailsVisible ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-4 border-t border-light-border dark:border-dark-border grid sm:grid-cols-2 gap-6">
                                        {curriculumModules.map((module, index) => (
                                            <div key={index} className="bg-light-bg-main dark:bg-dark-bg-main p-4 rounded-lg border border-light-border dark:border-dark-border">
                                                <h4 className="font-poppins font-bold text-light-text-main dark:text-dark-text-main">{module.title}</h4>
                                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{module.description}</p>
                                            </div>
                                        ))}
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