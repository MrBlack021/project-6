import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { useCountUp } from '../hooks/useCountUp';
import { AiIcon } from '../components/AiIcon';
import { StartupIcon } from '../components/StartupIcon';

const AnimatedHero: React.FC = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 animate-gradient-bg bg-[400%_400%]"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white p-8">
            <FadeIn>
                 <div className="bg-black/20 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10">
                    <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
                        Build the Future of AI
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
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

const StatItem: React.FC<{ value: number; label: string; suffix?: string; }> = ({ value, label, suffix }) => {
    const { count, ref } = useCountUp(value, 2000);
    return (
        <div className="text-center" ref={ref}>
            <p className="text-4xl md:text-5xl font-poppins font-bold text-primary">
                {count}{suffix}
            </p>
            <p className="text-text-secondary mt-2">{label}</p>
        </div>
    );
};

const StatsSection: React.FC = () => (
     <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatItem value={5} label="Prize Pool" suffix=" Lakhs" />
                    <StatItem value={30} label="Day Challenge" suffix="+" />
                    <StatItem value={50} label="Startups Pitched" suffix="+" />
                    <StatItem value={1000} label="Innovators Joined" suffix="+" />
                </div>
            </FadeIn>
        </div>
    </section>
);

const ProgramsSection: React.FC = () => (
    <section className="py-20 bg-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">Our Flagship Programs</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
                <FadeIn>
                    <div className="bg-bg-secondary p-8 rounded-xl border border-gray-800 h-full text-center group hover:border-primary hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                            <AiIcon className="w-8 h-8"/>
                        </div>
                        <h3 className="text-2xl font-poppins font-bold mb-4">AI Agent Builder Challenge</h3>
                        <p className="text-text-secondary mb-6">A 30-day competitive challenge to build, train, and deploy AI agents. Compete for a prize pool of up to ₹5 Lakhs and prove your skills.</p>
                        <Link to="/programs" className="font-semibold text-primary group-hover:text-accent transition-colors group">
                           <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">Learn More &rarr;</span>
                        </Link>
                    </div>
                </FadeIn>
                <FadeIn delay="duration-1000">
                    <div className="bg-bg-secondary p-8 rounded-xl border border-gray-800 h-full text-center group hover:border-primary hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                           <StartupIcon className="w-8 h-8"/>
                        </div>
                        <h3 className="text-2xl font-poppins font-bold mb-4">Startup Pitch Support</h3>
                        <p className="text-text-secondary mb-6">Have a revolutionary startup idea? We present promising concepts to our network of investors and provide hands-on support to build your venture.</p>
                         <Link to="/programs" className="font-semibold text-primary group-hover:text-accent transition-colors group">
                           <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">Learn More &rarr;</span>
                        </Link>
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
        <section className="py-20 bg-bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">Success Stories</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={index === 1 ? 'duration-1000' : 'duration-700'}>
                            <div className="bg-bg-main p-8 rounded-xl border border-gray-800 h-full transition-transform duration-300 hover:-translate-y-1">
                                <p className="text-text-secondary italic mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                                    <div>
                                        <p className="font-bold text-text-main">{testimonial.name}</p>
                                        <p className="text-text-secondary text-sm">{testimonial.location}</p>
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

const CTARegister: React.FC = () => (
    <section className="py-20 bg-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
                <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-xl">
                    <h2 className="text-3xl font-poppins font-bold text-white mb-4">Ready to Start Your Journey?</h2>
                    <p className="max-w-2xl mx-auto text-lg mb-8 text-white/80">
                        Join a community of innovators. Register now and take the first step towards building something amazing.
                    </p>
                    <Link to="/register"><Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Register Now</Button></Link>
                </div>
            </FadeIn>
        </div>
    </section>
);


const Home: React.FC = () => {
    return (
        <div className="bg-bg-main">
            <AnimatedHero />
            <StatsSection />
            <ProgramsSection />
            <TestimonialPreview />
            <CTARegister />
        </div>
    );
};

export default Home;