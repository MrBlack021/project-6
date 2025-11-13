import React from 'react';
import { FadeIn } from '../components/FadeIn';

const testimonials = [
    {
        quote: "The AI Challenge was a game-changer. I went from knowing basic Python to deploying a complex AI model in just a month! The mentorship was top-notch.",
        name: "Priya Sharma",
        location: "Bengaluru",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&q=80&fit=crop"
    },
    {
        quote: "Huntifyy's feedback on our pitch deck was invaluable. They helped us clarify our vision and we secured our first round of funding shortly after presenting.",
        name: "Rohan Patel",
        location: "Mumbai",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&fit=crop"
    },
    {
        quote: "I never thought I could build an AI agent. The step-by-step process and supportive community made it possible. Highly recommend it to any aspiring developer.",
        name: "Anjali Rao",
        location: "Hyderabad",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80&fit=crop"
    },
    {
        quote: "The platform is perfect for entrepreneurs who need direction. The resources are practical and the network is incredibly powerful.",
        name: "Vikram Singh",
        location: "Delhi",
        image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&q=80&fit=crop"
    },
    {
        quote: "A fantastic experience from start to finish. The 30-day challenge is intense but incredibly rewarding. I now have a project I'm proud to show to employers.",
        name: "Suresh Kumar",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&q=80&fit=crop"
    },
    {
        quote: "Huntifyy gave us the confidence to pitch our startup. The coaching sessions were tailored to our needs and made all the difference on Demo Day.",
        name: "Meera Desai",
        location: "Pune",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&q=80&fit=crop"
    }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ quote, name, location, image }) => (
    <div className="bg-bg-secondary p-8 rounded-xl border border-gray-800 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
        <p className="text-text-secondary italic mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center mt-auto">
            <img src={image} alt={name} className="w-14 h-14 rounded-full mr-4 object-cover" />
            <div>
                <p className="font-bold text-text-main text-lg">{name}</p>
                <p className="text-text-secondary">{location}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <div className="bg-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16">
                        <h1 className="text-4xl font-poppins font-bold text-text-main mb-4">What Our Participants Say</h1>
                        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
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