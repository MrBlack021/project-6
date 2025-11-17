
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

const ShareExperienceForm: React.FC = () => {
    const { addTestimonial } = useAppContext();
    const [formData, setFormData] = useState({ name: '', title: '', quote: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.title.trim() || !formData.quote.trim()) return;
        
        setIsSubmitting(true);
        await addTestimonial(formData);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', title: '', quote: '' });
        
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <FadeIn>
            <div className="max-w-2xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 sm:p-10 rounded-lg shadow-soft dark:shadow-soft-dark mb-16">
                <h2 className="text-2xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6 text-center">Share Your Experience</h2>
                {submitted ? (
                    <div className="text-center text-green-500 bg-green-500/10 p-4 rounded-lg transition-opacity duration-300">
                        Thank you! Your feedback has been added for this session.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Full Name</label>
                            <input
                                type="text" name="name" id="name" value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                            />
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Your Title (e.g., Developer, Founder)</label>
                            <input
                                type="text" name="title" id="title" value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                                className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                            />
                        </div>
                        <div>
                            <label htmlFor="quote" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Your Feedback</label>
                            <textarea
                                name="quote" id="quote" rows={4} value={formData.quote}
                                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                                required
                                className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                            ></textarea>
                        </div>
                        <div>
                            <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit My Testimonial'}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </FadeIn>
    );
};

const Testimonials: React.FC = () => {
    const { testimonials, loadingTestimonials, testimonialError } = useAppContext();
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

                <ShareExperienceForm />

                {loadingTestimonials && (
                     <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-primary animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary">Loading stories...</p>
                    </div>
                )}

                {testimonialError && (
                    <div className="text-center text-red-500 bg-red-500/10 p-4 rounded-lg">
                        {testimonialError}
                    </div>
                )}
                
                {!loadingTestimonials && !testimonialError && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <FadeIn key={index}>
                                <TestimonialCard {...testimonial} />
                            </FadeIn>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonials;