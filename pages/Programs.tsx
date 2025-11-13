import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';

const ProgramStep: React.FC<{ number: number; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl font-poppins">
            {number}
        </div>
        <div>
            <h4 className="text-xl font-poppins font-bold mb-1">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const CurriculumWeek: React.FC<{ week: number; title: string; description: string; project: string }> = ({ week, title, description, project }) => (
    <div className="py-4 border-b last:border-b-0">
        <h4 className="font-poppins font-bold text-lg text-primary">Week {week}: {title}</h4>
        <p className="text-gray-600 mt-1">{description}</p>
        <p className="text-sm text-gray-800 mt-2"><strong>Mini-Project:</strong> {project}</p>
    </div>
);


const Programs: React.FC = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const startupPitchSteps = [
        { number: 1, title: 'Idea Submission', description: 'Submit your startup idea through our portal with a brief overview of your concept and market.' },
        { number: 2, title: 'Pitch Deck Refinement', description: 'Work with our mentors to craft a compelling pitch deck that highlights your vision and value proposition.' },
        { number: 3, title: 'Presentation Coaching', description: 'Receive one-on-one coaching to perfect your delivery, storytelling, and Q&A handling skills.' },
        { number: 4, title: 'Investor Connect', description: 'Pitch your polished idea to our network of angel investors and venture capitalists on Demo Day.' },
    ];

    return (
        <div className="bg-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl font-poppins font-bold text-center mb-4">Our Programs</h1>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">We offer structured programs to guide you from concept to creation, whether you're building an AI or a company.</p>
                </FadeIn>

                <FadeIn>
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-soft mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-poppins font-bold mb-4">AI Agent Builder Challenge</h2>
                                <p className="text-gray-600 mb-6">This 30-day hands-on competition is your express lane to becoming a recognized AI developer. Compete against the best, build a portfolio piece that stands out, and win from a prize pool of up to ₹5 Lakhs.</p>
                                <div className="my-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-r-lg">
                                    <p className="font-bold text-yellow-800">🏆 Prize Pool: ₹5,000 to ₹5,00,000 for top performers!</p>
                                </div>
                                
                                <button onClick={() => setIsDetailsVisible(prev => !prev)} className="text-primary hover:text-accent font-semibold mb-6 inline-block transition-transform duration-300 hover:translate-x-1">
                                    {isDetailsVisible ? 'Hide Details' : 'View Full Curriculum →'}
                                </button>

                                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isDetailsVisible ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="space-y-4 pt-4 border-t">
                                        <div>
                                            <h3 className="font-poppins font-bold text-xl mb-2">Phase 1: 20-Day Learning & Practice</h3>
                                            <p className="text-gray-600 mb-4">The first 20 days are an intensive, structured curriculum covering everything from AI fundamentals to advanced agent deployment. Each week includes daily practices, hands-on labs, and a mini-project to solidify your skills.</p>
                                            <CurriculumWeek week={1} title="AI Fundamentals & Python Brush-up" description="Get introduced to core AI concepts, set up your development environment, and master Python libraries essential for AI/ML." project="A simple recommendation script." />
                                            <CurriculumWeek week={2} title="Machine Learning & Data Handling" description="Explore supervised/unsupervised learning, preprocess data with Pandas, and build your first models with Scikit-learn." project="A customer segmentation model." />
                                            <CurriculumWeek week={3} title="Deep Learning & APIs" description="Dive into neural networks with TensorFlow/PyTorch and learn to build and integrate REST APIs for your models." project="An image classifier with a simple API." />
                                            <CurriculumWeek week={4} title="Advanced Agent Logic & Deployment" description="Master state management, long-term memory for agents, and deploy your creations to a cloud environment." project="A conversational chatbot agent." />
                                        </div>
                                         <div>
                                            <h3 className="font-poppins font-bold text-xl mb-2">Phase 2: 10-Day Grand Challenge</h3>
                                            <p className="text-gray-600">The final 10 days are the ultimate test. You'll tackle two complex, real-world tasks where your agents will be judged on efficiency, accuracy, and innovation. This is your chance to shine and win from the prize pool!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                   <Link to="/register"><Button>Enter the Competition</Button></Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1740&q=80" alt="AI Development" className="rounded-lg shadow-md object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-bg-section p-8 md:p-12 rounded-lg shadow-soft">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                             <div className="hidden md:block">
                                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1674&q=80" alt="Startup Pitching" className="rounded-lg shadow-md object-cover w-full h-full" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-poppins font-bold mb-4">Startup Pitch Support</h2>
                                <p className="text-gray-600 mb-8">Your brilliant idea deserves the right audience. We evaluate your concept, connect promising ideas directly with investors, and provide the foundational support to turn your vision into a viable startup.</p>
                                <div className="space-y-6">
                                    {startupPitchSteps.map(step => <ProgramStep key={step.number} {...step} />)}
                                </div>
                                <div className="mt-10">
                                    <Link to="/register"><Button>Pitch Your Startup</Button></Link>
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