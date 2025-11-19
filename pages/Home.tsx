
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { PlexusBackground } from '../components/PlexusBackground';
import { FeatureCard } from '../components/FeatureCard';
import { WorkshopIcon } from '../components/WorkshopIcon';
import { MentorshipIcon } from '../components/MentorshipIcon';
import { PitchIcon } from '../components/PitchIcon';
import { AutomationIcon } from '../components/AutomationIcon';
import { useAppContext } from '../context/AppContext';

const HeroSection: React.FC = () => (
    <div className="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden bg-light-bg-main dark:bg-dark-bg-main">
        <PlexusBackground />
        {/* Overlay Gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light-bg-main/20 to-light-bg-main dark:via-dark-bg-main/20 dark:to-dark-bg-main pointer-events-none"></div>
        
        <div className="relative z-10 p-8 max-w-5xl mx-auto">
            <FadeIn>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-extrabold mb-6 text-light-text-main dark:text-dark-text-main tracking-tight">
                    Empowering Students. <br />
                    <span className="text-gradient-gold">Building Startups.</span>
                </h1>
                <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
                    From classroom idea to investor-backed venture. Huntifyy provides the mentorship, ecosystem, and capital connections to scale student innovation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Link to="/register">
                        <Button variant="gradient" className="w-full sm:w-auto text-lg px-8 py-4 shadow-glow">
                            Start Your Journey
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                            Partner with Us
                        </Button>
                    </Link>
                </div>
                
                {/* Social Proof / Trust Indicators */}
                <div className="mt-16 pt-8 border-t border-light-border/30 dark:border-dark-border/30 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {['Tech University', 'Innovation Hub', 'Venture Partners', 'Startup India'].map((partner, i) => (
                        <span key={i} className="text-lg font-poppins font-bold text-light-text-secondary dark:text-dark-text-secondary">{partner}</span>
                    ))}
                </div>
            </FadeIn>
        </div>
    </div>
);

const HowItWorksSection: React.FC = () => (
    <section className="py-24 bg-light-bg-secondary dark:bg-dark-bg-secondary relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
                <header className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">The Innovation Pipeline</h2>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                        A structured, four-step pathway designed to take you from a rough concept to a funded company.
                    </p>
                </header>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>

                    {[
                        { icon: <WorkshopIcon />, title: "Awareness", desc: "Campus workshops to ignite the spark." },
                        { icon: <MentorshipIcon />, title: "Mentorship", desc: "30-day intensive validation & MVP build." },
                        { icon: <PitchIcon />, title: "Investment", desc: "Pitch to our curated investor network." },
                        { icon: <AutomationIcon />, title: "Scale with AI", desc: "Automate operations using Agentic AI." }
                    ].map((step, index) => (
                        <div key={index} className="relative z-10 text-center group">
                            <div className="w-24 h-24 mx-auto bg-light-bg-main dark:bg-dark-bg-main rounded-full border-4 border-light-bg-secondary dark:border-dark-bg-secondary shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                                <div className="text-primary dark:text-accent group-hover:text-accent dark:group-hover:text-primary transition-colors">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-poppins font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary px-4">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    </section>
);

const ProgramsSection: React.FC = () => (
     <section className="py-24 bg-light-bg-main dark:bg-dark-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <header className="text-center mb-16">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-sm font-bold uppercase tracking-widest">
                        Our Ecosystem
                    </div>
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Comprehensive Programs</h2>
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mt-2 max-w-2xl mx-auto">
                        Whether you are a student, a college administrator, or an investor, we have a tailored program for you.
                    </p>
                </header>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard 
                        title="Startup Cell Creation" 
                        description="We help colleges establish and run dedicated innovation cells to foster a culture of entrepreneurship." 
                        link="/startup-cell"
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                    />
                    <FeatureCard 
                        title="Student Mentorship" 
                        description="A structured 30-day program guiding students from idea validation to creating a pitch-ready startup." 
                        link="/mentorship"
                        icon={<MentorshipIcon />}
                    />
                    <FeatureCard 
                        title="Investor Pitch Day" 
                        description="An exclusive event where our top student startups present to a curated network of angel investors and VCs." 
                        link="/investors"
                        icon={<PitchIcon />}
                    />
                    <FeatureCard 
                        title="AI & RAG Automation" 
                        description="Specialized training on building AI agentic systems to help startups automate and scale efficiently." 
                        link="/ai-automation"
                        icon={<AutomationIcon />}
                    />
                </div>
            </FadeIn>
        </div>
    </section>
);

const CollegePartnerSection: React.FC = () => (
    <section id="why-colleges" className="py-24 bg-gradient-to-br from-light-bg-secondary to-white dark:from-dark-bg-secondary dark:to-dark-bg-main relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <FadeIn className="relative">
                    <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3 opacity-20"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1740&q=80" 
                        alt="Students collaborating" 
                        className="relative rounded-2xl shadow-soft-dark transform transition-transform hover:scale-[1.02] duration-500" 
                    />
                    {/* Floating Stat Card */}
                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-light-border dark:border-dark-border animate-float">
                        <p className="text-3xl font-bold text-accent">40%</p>
                        <p className="text-sm font-medium">Increase in Innovation<br/>Activity</p>
                    </div>
                </FadeIn>
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Why Colleges Partner With Huntifyy</h2>
                    <div className="space-y-6">
                        {[
                            { title: "NAAC/IIC/EDC Score Boost", desc: "Our structured programs directly contribute to criteria that enhance institutional rankings." },
                            { title: "Innovation Culture", desc: "Create a vibrant ecosystem that encourages practical problem-solving and venture creation." },
                            { title: "Zero Faculty Burden", desc: "Huntifyy manages operations, mentorship, and investor relations, freeing up faculty time." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mr-4 mt-1">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-10">
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
        <section className="py-24 bg-light-bg-main dark:bg-dark-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-16">Success Stories</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonialsToShow.map((testimonial, index) => (
                        <FadeIn key={index} delay={index === 1 ? 'duration-1000' : 'duration-700'}>
                            <div className="h-full p-8 rounded-2xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border relative overflow-hidden hover:shadow-soft transition-all duration-300">
                                <div className="absolute top-4 right-8 text-9xl font-serif text-accent/10 leading-none">"</div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 text-lg italic leading-relaxed flex-grow">
                                        {testimonial.quote}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-light-text-main dark:text-dark-text-main">{testimonial.name}</p>
                                            <p className="text-sm text-accent">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/testimonials">
                         <Button variant="outline">View All Stories</Button>
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
