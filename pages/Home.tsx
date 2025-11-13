import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { AiIcon } from '../components/AiIcon';
import { StartupIcon } from '../components/StartupIcon';

const AnimatedHero: React.FC = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dark:hidden bg-light-bg-main"></div>
        <div className="absolute inset-0 hidden dark:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] aurora-bg"></div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center p-8">
            <FadeIn>
                 <div className="bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-2xl p-8 md:p-12 border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20">
                    <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4 text-light-text-main dark:text-dark-text-main">
                        Architecting the Next Wave of Tech Ventures
                    </h1>
                    <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
                        Huntifyy is an ecosystem designed to forge the next generation of technology companies. We identify and train elite AI builders while providing a curated launchpad for startups, creating a powerful synergy between proven talent and market-ready ideas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/programs"><Button variant="gradient">Explore Our Ecosystem</Button></Link>
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
        <div ref={ref} className="text-center">
            <p className="text-3xl md:text-4xl font-poppins font-bold text-primary">
                {count}{suffix}
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{label}</p>
        </div>
    );
};

const ArenaSection: React.FC = () => (
    <section className="py-20 bg-light-bg-main dark:bg-dark-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-xl border border-light-border dark:border-dark-border font-mono text-xs text-green-400 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/50"></div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 animate-scanline"></div>
                        <p>&gt; Initializing AI Agent Challenge...</p>
                        <p>&gt; Loading competitive modules...</p>
                        <p className="text-green-300">&gt; <span className="text-accent">Success:</span> Environment ready.</p>
                        <p>&gt; Awaiting top-tier developers.</p>
                        <p className="animate-pulse">&gt; _</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">The Arena</h2>
                        <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">AI Agent Builder Challenge</h3>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            This is more than a competition—it's a crucible for elite developers. Step into a high-stakes, 30-day challenge to build, train, and deploy advanced AI agents. Prove your mastery and claim your place among the best.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <InlineStatItem value={50} label="Lakhs+ Prize Pool" />
                            <InlineStatItem value={30} label="Day Challenge" />
                        </div>
                        <Link to="/programs"><Button variant="outline">Explore the Challenge</Button></Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const LaunchpadSection: React.FC = () => (
    <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary border-y border-light-border dark:border-dark-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="text-center md:text-left order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">The Launchpad</h2>
                        <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">Startup Pitch Support</h3>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            Your idea, any sector. This is where visionary concepts take flight. We provide the mentorship, resources, and investor network to transform groundbreaking ideas—from AI to FinTech—into market-ready ventures.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <InlineStatItem value={50} startValue={20} label="Startups Pitched" suffix="+" />
                            <InlineStatItem value={1000} startValue={900} label="Innovators Joined" suffix="+" />
                        </div>
                        <Link to="/programs"><Button variant="outline">Discover the Support</Button></Link>
                    </div>
                     <div className="flex justify-center items-center h-80 order-1 md:order-2">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            <div className="absolute inset-0 bg-primary rounded-full animate-pulse-glow dark:animate-none"></div>
                             <div className="relative w-32 h-32 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-full flex items-center justify-center text-primary border-2 border-primary/50">
                                 <StartupIcon className="w-16 h-16"/>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);


const TestimonialPreview: React.FC = () => {
    const testimonials = [
        {
            quote: "The AI Challenge was a game-changer for my career. I went from knowing basic Python to deploying a complex AI model in just a month!",
            name: "Priya Sharma",
            location: "Bengaluru",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&q=80&fit=crop"
        },
        {
            quote: "Huntifyy's feedback on our pitch deck was invaluable. We secured our first round of funding shortly after presenting.",
            name: "Rohan Patel",
            location: "Mumbai",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&fit=crop"
        },
    ];

    return (
        <section className="py-20 bg-light-bg-main dark:bg-dark-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">Success Stories</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={index === 1 ? 'duration-1000' : 'duration-700'}>
                            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-xl border border-light-border dark:border-dark-border h-full transition-transform duration-300 hover:-translate-y-1">
                                <p className="text-light-text-secondary dark:text-dark-text-secondary italic mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                                    <div>
                                        <p className="font-bold text-light-text-main dark:text-dark-text-main">{testimonial.name}</p>
                                        <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/testimonials" className="text-primary hover:text-accent font-semibold text-lg transition-colors group">
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
            <AnimatedHero />
            <ArenaSection />
            <LaunchpadSection />
            <TestimonialPreview />
        </div>
    );
};

export default Home;