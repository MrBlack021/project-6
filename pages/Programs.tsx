
import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { useInView } from '../hooks/useInView';
import { WorkshopIcon } from '../components/WorkshopIcon';
import { MentorshipIcon } from '../components/MentorshipIcon';
import { PitchIcon } from '../components/PitchIcon';
import { AutomationIcon } from '../components/AutomationIcon';

const TimelineStep: React.FC<{ icon: React.ReactNode; title: string; description: string; isLast?: boolean; index: number }> = ({ icon, title, description, isLast, index }) => {
    const { ref, isInView } = useInView({ threshold: 0.5 });
    
    return (
        <div ref={ref} className="relative flex gap-8 group">
            {/* Line */}
            {!isLast && (
                <div className="absolute top-16 left-[27px] bottom-[-48px] w-1 bg-light-border dark:bg-dark-border overflow-hidden">
                    <div className={`w-full h-full bg-accent transition-transform duration-1000 ease-in-out origin-top ${isInView ? 'scale-y-100' : 'scale-y-0'}`}></div>
                </div>
            )}

            {/* Icon Bubble */}
            <div className="flex-shrink-0">
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl shadow-lg transition-all duration-500 relative z-10 ${isInView ? 'bg-accent border-accent text-white scale-110' : 'bg-light-bg-main dark:bg-dark-bg-main border-light-border dark:border-dark-border text-light-text-secondary'}`}>
                    {icon}
                </div>
            </div>

            {/* Content Card */}
            <div className={`flex-grow pb-12 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-2xl border border-light-border dark:border-dark-border hover:shadow-soft transition-all duration-300 group-hover:border-accent/30">
                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Step {index + 1}</div>
                    <h4 className="text-2xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-3">{title}</h4>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};


const Programs: React.FC = () => {
    const programSteps = [
        { 
            icon: <WorkshopIcon />, 
            title: 'Awareness Workshops', 
            description: 'We kickstart the innovation journey with engaging on-campus workshops. These sessions introduce students to the fundamentals of entrepreneurship, idea validation, and the current startup landscape, igniting their passion to build.' 
        },
        { 
            icon: <MentorshipIcon />, 
            title: '30-Day Mentorship Program', 
            description: 'Selected students or teams undergo an intensive 30-day mentorship. They work closely with industry experts to refine their ideas, develop a business model, and build a minimum viable product (MVP) plan. This is where concepts become tangible.' 
        },
        { 
            icon: <PitchIcon />, 
            title: 'Pitch Deck & Investor Access', 
            description: 'Graduates of the mentorship program receive hands-on support to craft a compelling pitch deck. The best startups are then given the exclusive opportunity to present at our Investor Pitch Day to a curated network of angel investors and VCs.' 
        },
        { 
            icon: <AutomationIcon />, 
            title: 'AI & Automation Training', 
            description: 'To ensure our startups can scale efficiently, we provide specialized training on building and implementing AI agentic systems using technologies like RAG. This gives them a powerful competitive advantage in the market.', 
            isLast: true 
        },
    ];

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-poppins font-bold text-center mb-6">Our Integrated Program</h1>
                    <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary text-center max-w-3xl mx-auto mb-20">
                        A comprehensive, four-step journey designed to take students from a nascent idea to an investor-ready startup.
                    </p>
                </FadeIn>

                <div className="grid lg:grid-cols-5 gap-16 items-start">
                    {/* Image Section - Sticky */}
                    <div className="lg:col-span-2 lg:sticky lg:top-32">
                        <FadeIn>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-light-border dark:border-dark-border">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1740&q=80" alt="A team planning on a whiteboard" className="w-full h-auto object-cover"/>
                                <div className="absolute bottom-6 left-6 z-20 text-white">
                                    <p className="font-bold text-lg">Building the Future</p>
                                    <p className="text-sm opacity-80">One step at a time.</p>
                                </div>
                            </div>
                            
                            <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                                <h3 className="font-bold text-accent mb-2">Why this structure?</h3>
                                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                    We've reverse-engineered successful student startups to create a path that minimizes failure risk and maximizes learning.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Timeline Section */}
                    <div className="lg:col-span-3">
                        <div className="pl-0 md:pl-8">
                            {programSteps.map((step, index) => (
                                <TimelineStep key={index} {...step} index={index} isLast={index === programSteps.length - 1} />
                            ))}
                        </div>
                    </div>
                </div>
                
                <FadeIn>
                    <div className="mt-24 text-center bg-gradient-to-br from-light-bg-secondary to-white dark:from-dark-bg-secondary dark:to-dark-bg-main p-10 md:p-16 rounded-3xl border border-light-border dark:border-dark-border shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">Ready to Begin?</h2>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto mb-10">
                            Whether you're a student with an idea or a college looking to foster innovation, your journey starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Link to="/register"><Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">Register for a Program</Button></Link>
                            <Link to="/contact"><Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg">Partner With Us</Button></Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Programs;
