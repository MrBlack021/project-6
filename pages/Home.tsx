import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';

const ParallaxHero: React.FC = () => (
    <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1740&q=80')" }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center text-white p-8">
            <FadeIn>
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
                    Build the Future with AI & Innovation
                </h1>
            </FadeIn>
            <FadeIn delay="duration-1000">
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                    Huntifyy is your launchpad for turning groundbreaking ideas into reality. Join our challenges, pitch your startup, and get the support you need to succeed.
                </p>
            </FadeIn>
            <FadeIn delay="duration-[1200ms]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/platform"><Button>Enter AI Challenge</Button></Link>
                    <Link to="/register"><Button variant="secondary">Pitch Your Startup</Button></Link>
                </div>
            </FadeIn>
        </div>
    </div>
);

const AboutSection: React.FC = () => (
    <section className="py-20 bg-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
                <h2 className="text-3xl font-poppins font-bold mb-4">What is Huntifyy?</h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                    Huntifyy is a dynamic platform designed to nurture innovation. We empower aspiring developers and entrepreneurs through hands-on challenges and provide a stage for startups to shine. Our mission is to bridge the gap between idea and impact.
                </p>
            </FadeIn>
        </div>
    </section>
);

const ProgramsSection: React.FC = () => (
    <section className="py-20 bg-bg-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <h2 className="text-3xl font-poppins font-bold text-center mb-12">Our Flagship Programs</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
                <FadeIn>
                    <div className="bg-white p-8 rounded-lg shadow-soft text-center h-full">
                        <h3 className="text-2xl font-poppins font-bold mb-4">AI Agent Builder Challenge</h3>
                        <p className="text-gray-600 mb-6">A 30-day competitive challenge to build, train, and deploy AI agents. Compete for a prize pool of up to ₹5 Lakhs and prove your skills.</p>
                        <Link to="/programs"><span className="text-primary hover:text-accent font-semibold">Learn More &rarr;</span></Link>
                    </div>
                </FadeIn>
                <FadeIn delay="duration-1000">
                    <div className="bg-white p-8 rounded-lg shadow-soft text-center h-full">
                        <h3 className="text-2xl font-poppins font-bold mb-4">Startup Pitch Support</h3>
                        <p className="text-gray-600 mb-6">Have a revolutionary startup idea? We present promising concepts to our network of investors and provide hands-on support to build your venture from the ground up.</p>
                        <Link to="/programs"><span className="text-primary hover:text-accent font-semibold">Learn More &rarr;</span></Link>
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
        <section className="py-20 bg-bg-main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl font-poppins font-bold text-center mb-12">Success Stories</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index} delay={index === 1 ? 'duration-1000' : 'duration-700'}>
                            <div className="bg-white p-8 rounded-lg shadow-soft">
                                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                                    <div>
                                        <p className="font-bold text-text-main">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/testimonials" className="text-primary hover:text-accent font-semibold text-lg">View All Testimonials &rarr;</Link>
                </div>
            </div>
        </section>
    );
};

const CTARegister: React.FC = () => (
    <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
                <h2 className="text-3xl font-poppins font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="max-w-2xl mx-auto text-lg mb-8">
                    Join a community of innovators. Register now and take the first step towards building something amazing.
                </p>
                <Link to="/register"><Button variant="secondary">Register Now</Button></Link>
            </FadeIn>
        </div>
    </section>
);


const Home: React.FC = () => {
    return (
        <div>
            <ParallaxHero />
            <AboutSection />
            <ProgramsSection />
            <TestimonialPreview />
            <CTARegister />
        </div>
    );
};

export default Home;