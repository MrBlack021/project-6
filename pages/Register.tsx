
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { useAppContext } from '../context/AppContext';

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }> = ({ label, error, ...props }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">{label}</label>
        <input 
            {...props} 
            className={`block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border ${error ? 'border-red-500' : 'border-light-border dark:border-dark-border'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main`} 
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const FormTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }> = ({ label, error, ...props }) => (
     <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">{label}</label>
        <textarea 
            {...props}
            rows={3} 
            className={`block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border ${error ? 'border-red-500' : 'border-light-border dark:border-dark-border'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main`} 
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const Register: React.FC = () => {
    const { setRegistrationId, setRegistrationData } = useAppContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        program: 'Student Mentorship Program',
        idea: '',
        terms: false,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [registrationComplete, setRegistrationComplete] = useState(false);

    const programInfo = {
        'Student Mentorship Program': 'A 30-day program to refine your startup idea and prepare a pitch for investors.',
        'AI & Automation Workshop': 'Learn to build and deploy AI agentic systems to scale business operations.'
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (formData.program === 'Student Mentorship Program' && !formData.idea.trim()) {
            newErrors.idea = 'Please provide a brief description of your startup idea.';
        }
        if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        setIsSubmitting(true);
        
        // Simulate a backend registration call
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        // Generate a mock registration ID and data
        const registration_id = 'HN2025' + Math.floor(100000 + Math.random() * 900000);
        const mockData = {
            name: formData.name,
            email: formData.email,
            program: formData.program,
        };
        
        // Update global state
        setRegistrationId(registration_id);
        setRegistrationData(mockData);

        setIsSubmitting(false);
        setRegistrationComplete(true);
    };
    
    if (registrationComplete) {
        return (
            <div className="bg-light-bg-main dark:bg-dark-bg-main py-16 min-h-[80vh] flex items-center justify-center">
                <FadeIn>
                    <div className="max-w-xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 md:p-12 rounded-xl shadow-soft text-center">
                        <svg className="mx-auto h-20 w-20 text-green-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h1 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Happy to onboard!</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            Our team will reach out to you shortly. You can check your email for further instructions.
                        </p>
                        <Link to="/">
                            <Button variant="primary">Go to Home</Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        );
    }

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16 min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-2xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-lg shadow-soft dark:shadow-soft-dark overflow-hidden">
                        <form onSubmit={handleFormSubmit} className="p-8 md:p-12" noValidate>
                            <h1 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-2 text-center">Student Program Registration</h1>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 text-center">Your journey starts here. Fill out the form to begin.</p>

                            <div className="space-y-6">
                                <FormInput id="name" label="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} error={errors.name} required />
                                <FormInput id="email" label="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} error={errors.email} required />
                                
                                <div>
                                    <label htmlFor="program" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Choose Program</label>
                                    <div className="relative">
                                        <select 
                                            id="program"
                                            value={formData.program} 
                                            onChange={(e) => setFormData({...formData, program: e.target.value, idea: ''})} 
                                            className="appearance-none block w-full px-4 py-3 border border-light-border dark:border-dark-border bg-light-bg-main dark:bg-dark-bg-main text-light-text-main dark:text-dark-text-main rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-8"
                                        >
                                            <option>Student Mentorship Program</option>
                                            <option>AI & Automation Workshop</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-light-text-secondary dark:text-dark-text-secondary">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-xs text-light-text-secondary dark:text-dark-text-secondary">{programInfo[formData.program as keyof typeof programInfo]}</p>
                                </div>

                                {formData.program === 'Student Mentorship Program' && (
                                     <>
                                        <FormTextarea id="idea" label="Your Startup Idea (Briefly)" value={formData.idea} onChange={(e) => setFormData({...formData, idea: e.target.value})} error={errors.idea} placeholder="Describe your concept in a few sentences." required />
                                        <div>
                                            <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">Pitch Deck (Optional)</label>
                                            <p className="text-xs text-light-text-secondary/80 dark:text-dark-text-secondary/80">You will be able to upload your pitch deck from your student dashboard after registration.</p>
                                        </div>
                                     </>
                                )}

                                 <div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" name="terms" type="checkbox" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} className={`focus:ring-accent h-4 w-4 text-accent bg-light-bg-secondary dark:bg-dark-bg-secondary border-light-border dark:border-dark-border rounded ${errors.terms ? 'border-red-500' : ''}`} />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-medium text-light-text-secondary dark:text-dark-text-secondary">I agree to the <Link to="/terms-and-conditions" className="text-accent hover:underline">Terms and Conditions</Link></label>
                                        </div>
                                    </div>
                                    {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <Button type="submit" variant="primary" className="w-full text-lg" disabled={isSubmitting}>
                                    {isSubmitting ? 'Registering...' : 'Register'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Register;
