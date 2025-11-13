import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/wp-json/huntifyy/v1/contact-submission', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Thank you! Your message has been sent.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('An error occurred. Please try again.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        }

        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Get In Touch</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            Have a question or proposal? We'd love to hear from you.
                        </p>
                    </header>
                </FadeIn>
                <FadeIn>
                    <div className="max-w-2xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 sm:p-10 rounded-lg shadow-soft dark:shadow-soft-dark">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Full Name</label>
                                <input
                                    type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                                    className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Email Address</label>
                                <input
                                    type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                                    className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Message</label>
                                <textarea
                                    name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required
                                    className="block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border border-light-border dark:border-dark-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main"
                                ></textarea>
                            </div>
                            <div>
                                <Button type="submit" variant="primary" className="w-full" disabled={status === 'Sending...'}>
                                    {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                            {status && status !== 'Sending...' && (
                                <p className={`text-center mt-4 text-sm ${status.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>
                            )}
                        </form>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Contact;