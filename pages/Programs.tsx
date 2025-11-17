
import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { useInView } from '../hooks/useInView';
import { WorkshopIcon } from '../components/WorkshopIcon';
import { MentorshipIcon } from '../components/MentorshipIcon';
import { PitchIcon } from '../components/PitchIcon';
import { AutomationIcon } from '../components/AutomationIcon';

const TimelineStep: React.FC<{ icon: React.ReactNode; title: string; description: string; isLast?: boolean; }> = ({ icon, title, description, isLast }) => {
    const { ref, isInView } = useInView({ threshold: 0.5 });
    
    return (
        <div ref={ref} className="relative flex items-start">
            <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary border-2 ${isInView ? 'border-accent' : 'border-light-border dark:border-dark-border'} text-accent flex items-center justify-center z-10 transition-all duration-500`}>
                {icon}
            </div>
            {!isLast && <div className={`absolute top-12 left-[23px] h-full w-0.5 bg-light-border dark:bg-dark-border transition-transform duration-500 delay-200 origin-top ${isInView ? 'scale-y-100' : 'scale-y-0'}`}></div>}
            <div className={`ml-6 transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <h4 className="text-xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-1">{title}</h4>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">{description}</p>
            </div>
        </div>
    );
};


const Programs: React.FC = () => {
    const programSteps = [
        { 
            icon: <WorkshopIcon />, 
            title: 'Step 1: Awareness Workshops', 
            description: 'We kickstart the innovation journey with engaging on-campus workshops. These sessions introduce students to the fundamentals of entrepreneurship, idea validation, and the current startup landscape, igniting their passion to build.' 
        },
        { 
            icon: <MentorshipIcon />, 
            title: 'Step 2: 30-Day Mentorship Program', 
            description: 'Selected students or teams undergo an intensive 30-day mentorship. They work closely with industry experts to refine their ideas, develop a business model, and build a minimum viable product (MVP) plan. This is where concepts become tangible.' 
        },
        { 
            icon: <PitchIcon />, 
            title: 'Step 3: Pitch Deck & Investor Access', 
            description: 'Graduates of the mentorship program receive hands-on support to craft a compelling pitch deck. The best startups are then given the exclusive opportunity to present at our Investor Pitch Day to a curated network of angel investors and VCs.' 
        },
        { 
            icon: <AutomationIcon />, 
            title: 'Step 4: AI & Automation Training', 
            description: 'To ensure our startups can scale efficiently, we provide specialized training on building and implementing AI agentic systems using technologies like RAG. This gives them a powerful competitive advantage in the market.', 
            isLast: true 
        },
    ];

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl font-poppins font-bold text-center mb-4">Our Integrated Program</h1>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary text-center max-w-3xl mx-auto mb-16">
                        A comprehensive, four-step journey designed to take students from a nascent idea to an investor-ready startup.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1740&q=80" alt="A team planning on a whiteboard" className="rounded-lg shadow-soft"/>
                    </FadeIn>
                    <FadeIn>
                        <div className="space-y-12">
                            {programSteps.map((step, index) => (
                                <TimelineStep key={index} {...step} />
                            ))}
                        </div>
                    </FadeIn>
                </div>
                
                <FadeIn>
                    <div className="mt-20 text-center bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 md:p-12 rounded-lg border border-light-border dark:border-dark-border">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Ready to Begin?</h2>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto mb-8">
                            Whether you're a student with an idea or a college looking to foster innovation, your journey starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/register"><Button variant="primary">Register for a Program</Button></Link>
                            <Link to="/contact"><Button variant="outline">Partner With Us</Button></Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Programs;
