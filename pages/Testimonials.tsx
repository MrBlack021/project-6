import React from 'react';
import { FadeIn } from '../components/FadeIn';

const testimonials = [
    {
        quote: "The AI Challenge was a game-changer. I went from knowing basic Python to deploying a complex AI model in just a month! The mentorship was top-notch.",
        name: "Priya Sharma",
        location: "Bengaluru",
    },
    {
        quote: "Huntifyy's feedback on our pitch deck was invaluable. They helped us clarify our vision and we secured our first round of funding shortly after presenting.",
        name: "Rohan Patel",
        location: "Mumbai",
    },
    {
        quote: "I never thought I could build an AI agent. The step-by-step process and supportive community made it possible. Highly recommend it to any aspiring developer.",
        name: "Anjali Rao",
        location: "Hyderabad",
    },
    {
        quote: "The platform is perfect for entrepreneurs who need direction. The resources are practical and the network is incredibly powerful.",
        name: "Vikram Singh",
        location: "Delhi",
    },
    {
        quote: "A fantastic experience from start to finish. The 30-day challenge is intense but incredibly rewarding. I now have a project I'm proud to show to employers.",
        name: "Suresh Kumar",
        location: "Chennai",
    },
    {
        quote: "Huntifyy gave us the confidence to pitch our startup. The coaching sessions were tailored to our needs and made all the difference on Demo Day.",
        name: "Meera Desai",
        location: "Pune",
    }
];

const TestimonialCard: React.FC<Omit<typeof testimonials[0], 'image'>> = ({ quote, name, location }) => (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg border border-light-border dark:border-dark-border h-full flex flex-col transition-all duration-300 hover:shadow-soft dark:hover:shadow-soft-dark hover:-translate-y-1">
        <span className="text-6xl font-poppins text-primary/30 dark:text-primary/20">“</span>
        <p className="text-light-text-main dark:text-dark-text-main -mt-8 mb-6 flex-grow text-xl">
            {quote}
        </p>
        <div className="mt-auto">
            <p className="font-bold text-light-text-main dark:text-dark-text-main text-lg">{name}</p>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">{location}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">What Our Participants Say</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
                            Real stories from developers and entrepreneurs who started their journey with us.
                        </p>
                    </header>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={index}>
                            <TestimonialCard {...testimonial} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;