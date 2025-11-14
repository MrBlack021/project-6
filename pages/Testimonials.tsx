import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { useAppContext } from '../context/AppContext';
import type { Testimonial } from '../context/AppContext';
import Button from '../components/Button';

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, location, title }) => (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg border border-light-border dark:border-dark-border h-full flex flex-col transition-all duration-300 hover:shadow-soft dark:hover:shadow-soft-dark hover:-translate-y-1">
        <span className="text-6xl font-poppins text-primary/30 dark:text-primary/20">“</span>
        <p className="text-light-text-main dark:text-dark-text-main -mt-8 mb-6 flex-grow text-xl">
            {quote}
        </p>
        <div className="mt-auto border-t border-light-border dark:border-dark-border pt-4">
            <p className="font-bold text-light-text-main dark:text-dark-text-main text-lg">{name}</p>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">{title} &bull; {location}</p>
        </div>
    </div>
);

const TestimonialForm: React.FC = () => {
    const { addTestimonial } = useAppContext();
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [quote, setQuote] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !title.trim() || !quote.trim()) {
            setError('All fields are required.');
            return;
        }
        addTestimonial({ name, title, quote });
        setName('');
        setTitle('');
        setQuote('');
        setError('');
    };

    return (
        <FadeIn>
            <div className="max-w-3xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 sm:p-10 rounded-lg shadow-soft dark:shadow-soft-dark mb-16">
                <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-2 text-center">Share Your Experience</h2>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 text-center">Help others by sharing your story with Huntifyy.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="form-name" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Full Name</label>
                            <input
                                type="text" name="name" id="form-name" value={name} onChange={(e) => setName(e.target.value)} required
                                className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                            />
                        </div>
                        <div>
                            <label htmlFor="form-title" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Role / Company</label>
                            <input
                                type="text" name="title" id="form-title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g., Founder, ConnectSphere"
                                className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="form-quote" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Your Review</label>
                        <textarea
                            name="quote" id="form-quote" rows={4} value={quote} onChange={(e) => setQuote(e.target.value)} required
                            className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                        ></textarea>
                    </div>
                     {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <div>
                        <Button type="submit" variant="primary" className="w-full">
                            Submit Review
                        </Button>
                    </div>
                </form>
            </div>
        </FadeIn>
    );
};


const Testimonials: React.FC = () => {
    const { testimonials } = useAppContext();
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

                <TestimonialForm />

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
