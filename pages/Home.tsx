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
                        Forge the Future of AI
                    </h1>
                    <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
                        Huntifyy is the launchpad for visionaries. Compete in elite AI challenges, pitch to investors, and transform your ideas into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/register"><Button variant="gradient">Enter AI Challenge</Button></Link>
                        <Link to="/register"><Button variant="outline">Pitch Your Startup</Button></Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    </div>
);

const StatItem: React.FC<{ icon: React.ReactNode; value: number; startValue?: number; label: string; suffix?: string; }> = ({ icon, value, startValue = 0, label, suffix }) => {
    const { count, ref } = useCountUp(value, 2000, startValue);
    return (
        <div className="text-center" ref={ref}>
            <div className="w-16 h-16 bg-light-bg-main dark:bg-dark-bg-main text-primary rounded-xl flex items-center justify-center mx-auto mb-4 border border-light-border dark:border-dark-border">
                {icon}
            </div>
            <p className="text-4xl md:text-5xl font-poppins font-bold text-primary">
                {count}{suffix}
            </p>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">{label}</p>
        </div>
    );
};

const StatsSection: React.FC = () => (
     <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary border-y border-light-border dark:border-dark-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatItem icon={<span className="text-3xl">🏆</span>} value={5} label="Prize Pool" suffix=" Lakhs+" />
                    <StatItem icon={<span className="text-3xl">🗓️</span>} value={30} label="Day Challenge" />
                    <StatItem icon={<span className="text-3xl">🚀</span>} value={50} startValue={20} label="Startups Pitched" suffix="+" />
                    <StatItem icon={<span className="text-3xl">👥</span>} value={1000} startValue={900} label="Innovators Joined" suffix="+" />
                </div>
            </FadeIn>
        </div>
    </section>
);

const ProgramsSection: React.FC = () => (
    <section className="py-20 bg-light-bg-main dark:bg-dark-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">Our Flagship Programs</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
                <FadeIn>
                    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-xl h-full text-center group relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
                         <div className="absolute inset-0 border border-light-border dark:border-dark-border rounded-xl group-hover:border-primary/50 transition-colors duration-300"></div>
                         <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6 border border-primary/20">
                                <AiIcon className="w-8 h-8"/>
                            </div>
                            <h3 className="text-2xl font-poppins font-bold mb-4">AI Agent Builder Challenge</h3>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">A 30-day competitive challenge to build, train, and deploy AI agents. Compete for a prize pool and prove your skills.</p>
                            <Link to="/programs" className="font-semibold text-primary group-hover:text-accent transition-colors group">
                               <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">Learn More &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay="duration-1000">
                     <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-xl h-full text-center group relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
                         <div className="absolute inset-0 border border-light-border dark:border-dark-border rounded-xl group-hover:border-primary/50 transition-colors duration-300"></div>
                         <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6 border border-primary/20">
                               <StartupIcon className="w-8 h-8"/>
                            </div>
                            <h3 className="text-2xl font-poppins font-bold mb-4">Startup Pitch Support</h3>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">Have a revolutionary idea in any sector? We connect promising concepts—from AI to FinTech to HealthTech—to our network of investors and support your venture.</p>
                             <Link to="/programs" className="font-semibold text-primary group-hover:text-accent transition-colors group">
                               <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">Learn More &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
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
        <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary border-y border-light-border dark:border-dark-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">Success Stories</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={index === 1 ? 'duration-1000' : 'duration-700'}>
                            <div className="bg-light-bg-main dark:bg-dark-bg-main p-8 rounded-xl border border-light-border dark:border-dark-border h-full transition-transform duration-300 hover:-translate-y-1">
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
            <StatsSection />
            <ProgramsSection />
            <TestimonialPreview />
        </div>
    );
};

export default Home;