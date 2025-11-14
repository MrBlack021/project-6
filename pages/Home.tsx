import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { PlexusBackground } from '../components/PlexusBackground';
import { useAppContext } from '../context/AppContext';

const HeroSection: React.FC = () => (
    <div className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-light-bg-main dark:bg-dark-bg-main">
        <PlexusBackground />
        <div className="relative z-10 p-8">
            <FadeIn>
                 <div>
                    <h1 className="text-4xl md:text-7xl font-poppins font-bold mb-4 text-light-text-main dark:text-dark-text-main">
                        Architecting the Next Wave of Tech Ventures
                    </h1>
                    <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
                        Huntifyy is an ecosystem designed to forge the next generation of technology companies by creating a powerful synergy between proven talent and market-ready ideas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/programs"><Button variant="primary">Explore Our Ecosystem</Button></Link>
                        <Link to="/register"><Button variant="outline">Register Now</Button></Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    </div>
);

const InlineStatItem: React.FC<{ value: number; startValue?: number; label: string; suffix?: string; }> = ({ value, startValue = 0, label, suffix }) => {
    const { count, ref } = useCountUp(value, 2000, startValue);
    return (
        <div ref={ref} className="">
            <p className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main">
                {count}{suffix}
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{label}</p>
        </div>
    );
};

const ProgramsSection: React.FC = () => (
    <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary border-y border-light-border dark:border-dark-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">The Arena</h2>
                        <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">AI Agent Builder Challenge</h3>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            This is more than a competition—it's a crucible for elite developers. Step into a high-stakes, 30-day challenge to build, train, and deploy advanced AI agents. Prove your mastery and claim your place among the best.
                        </p>
                        <div className="flex gap-12 mb-8 justify-center md:justify-start">
                            <InlineStatItem value={50} label="Lakhs+ Prize Pool" />
                            <InlineStatItem value={30} label="Day Challenge" />
                        </div>
                        <Link to="/programs"><Button variant="outline">Explore the Challenge</Button></Link>
                    </div>
                    <div className="relative w-full h-80 rounded-lg overflow-hidden border border-light-border dark:border-dark-border">
                         <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1740&q=80"
                            alt="AI Challenge - Data Analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden border border-light-border dark:border-dark-border order-2 md:order-1">
                         <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1740&q=80"
                            alt="Startup Support - Team Collaboration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                     <div className="text-center md:text-left order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">The Launchpad</h2>
                        <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">Startup Pitch Support</h3>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            Your idea, any sector. This is where visionary concepts take flight. We provide the mentorship, resources, and investor network to transform groundbreaking ideas into market-ready ventures.
                        </p>
                        <div className="flex gap-12 mb-8 justify-center md:justify-start">
                            <InlineStatItem value={50} startValue={20} label="Startups Pitched" suffix="+" />
                            <InlineStatItem value={1000} startValue={900} label="Innovators Joined" suffix="+" />
                        </div>
                        <Link to="/programs"><Button variant="outline">Discover the Support</Button></Link>
                    </div>
                </div>
            </FadeIn>
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
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{testimonial.title} &bull; {testimonial.location}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/testimonials" className="text-primary hover:opacity-80 font-semibold text-lg transition-opacity group">
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">View All Testimonials &rarr;</span>
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
            <ProgramsSection />
            <TestimonialPreview />
        </div>
    );
};

export default Home;