
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { PlexusBackground } from '../components/PlexusBackground';
import { useAppContext } from '../context/AppContext';
import { WorkshopIcon } from '../components/WorkshopIcon';
import { MentorshipIcon } from '../components/MentorshipIcon';
import { PitchIcon } from '../components/PitchIcon';
import { AutomationIcon } from '../components/AutomationIcon';

const HeroSection: React.FC = () => (
    <div className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-light-bg-main dark:bg-dark-bg-main">
        <PlexusBackground />
        <div className="relative z-10 p-8">
            <FadeIn>
                 <div>
                    <h1 className="text-4xl md:text-7xl font-poppins font-bold mb-4 text-light-text-main dark:text-dark-text-main">
                        Empowering Students. Building Startups.
                    </h1>
                    <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
                        From college idea to investor-backed startup, Huntifyy guides every step to scale innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/register"><Button variant="primary">Join a Workshop</Button></Link>
                        <Link to="/contact"><Button variant="outline">Partner with Us</Button></Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    </div>
);

const HowItWorksStep: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
            {icon}
        </div>
        <h3 className="text-xl font-poppins font-bold mb-2">{title}</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">{description}</p>
    </div>
);

const HowItWorksSection: React.FC = () => (
    <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <header className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold">How It Works</h2>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mt-2">A clear pathway from classroom to boardroom.</p>
                </header>
                <div className="grid md:grid-cols-4 gap-8">
                    <HowItWorksStep icon={<WorkshopIcon />} title="Awareness Workshops" description="Igniting the spark of entrepreneurship on campus." />
                    <HowItWorksStep icon={<MentorshipIcon />} title="30-Day Mentorship" description="Transforming raw ideas into viable business concepts." />
                    <HowItWorksStep icon={<PitchIcon />} title="Investor Access" description="Connecting polished startups with our network of investors." />
                    <HowItWorksStep icon={<AutomationIcon />} title="AI Automation" description="Scaling operations with cutting-edge AI agentic systems." />
                </div>
            </FadeIn>
        </div>
    </section>
);

const ProgramCard: React.FC<{ title: string; description: string; link: string; }> = ({ title, description, link }) => (
    <div className="bg-light-bg-main dark:bg-dark-bg-main p-6 rounded-lg border border-light-border dark:border-dark-border h-full flex flex-col">
        <h3 className="text-xl font-poppins font-bold mb-3">{title}</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary flex-grow mb-4">{description}</p>
        <Link to={link} className="text-accent hover:opacity-80 font-semibold text-sm transition-opacity group mt-auto">
            Learn More <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </Link>
    </div>
);

const ProgramsSection: React.FC = () => (
     <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <header className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold">Programs & Services</h2>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mt-2">A complete ecosystem for student-led innovation.</p>
                </header>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProgramCard title="Startup Cell Creation" description="We help colleges establish and run dedicated innovation cells to foster a culture of entrepreneurship." link="/startup-cell" />
                    <ProgramCard title="Student Mentorship" description="A structured 30-day program guiding students from idea validation to creating a pitch-ready startup." link="/mentorship" />
                    <ProgramCard title="Investor Pitch Day" description="An exclusive event where our top student startups present to a curated network of angel investors and VCs." link="/investors" />
                    <ProgramCard title="AI & RAG Automation" description="Specialized training on building AI agentic systems to help startups automate and scale efficiently." link="/ai-automation" />
                </div>
            </FadeIn>
        </div>
    </section>
);

const CollegePartnerSection: React.FC = () => (
    <section id="why-colleges" className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn>
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1740&q=80" alt="Students collaborating" className="rounded-lg shadow-soft" />
                </FadeIn>
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Why Colleges Partner With Huntifyy</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-accent font-bold text-2xl mr-4">&#10003;</span>
                            <div>
                                <h4 className="font-bold">NAAC/IIC/EDC Score Boost</h4>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary">Our structured programs directly contribute to criteria that enhance institutional rankings and accreditation scores.</p>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-accent font-bold text-2xl mr-4">&#10003;</span>
                            <div>
                                <h4 className="font-bold">Develop an Innovation Culture</h4>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary">Move beyond theory by creating a vibrant ecosystem that encourages practical problem-solving and venture creation.</p>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-accent font-bold text-2xl mr-4">&#10003;</span>
                            <div>
                                <h4 className="font-bold">Minimal Faculty Workload</h4>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary">Huntifyy manages the operational aspects of the programs, from mentorship to investor relations, freeing up faculty time.</p>
                            </div>
                        </li>
                    </ul>
                     <div className="mt-8">
                        <Link to="/contact"><Button variant="primary">Become a Partner College</Button></Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);

const TestimonialPreview: React.FC = () => {
    const { testimonials } = useAppContext();
    const testimonialsToShow = testimonials.slice(0, 2);

    return (
        <section className="py-20 bg-light-bg-main dark:bg-dark-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">Success Stories</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonialsToShow.map((testimonial, index) => (
                        <FadeIn key={index} delay={index === 1 ? 'duration-1000' : 'duration-700'}>
                            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg border border-light-border dark:border-dark-border h-full flex flex-col">
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 text-xl font-sans flex-grow leading-relaxed">"{testimonial.quote}"</p>
                                <div className="mt-auto border-t border-light-border dark:border-dark-border pt-4">
                                    <p className="font-bold text-light-text-main dark:text-dark-text-main">{testimonial.name}</p>
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{testimonial.title}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/testimonials" className="text-accent hover:opacity-80 font-semibold text-lg transition-opacity group">
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">View All Success Stories &rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};


const Home: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main">
            <HeroSection />
            <HowItWorksSection />
            <ProgramsSection />
            <CollegePartnerSection />
            <TestimonialPreview />
        </div>
    );
};

export default Home;
