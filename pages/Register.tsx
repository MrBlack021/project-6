import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }> = ({ label, error, ...props }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{label}</label>
        <input 
            {...props} 
            className={`mt-1 block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border ${error ? 'border-red-500' : 'border-light-border dark:border-dark-border'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main`} 
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const FormTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }> = ({ label, error, ...props }) => (
     <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{label}</label>
        <textarea 
            {...props}
            rows={3} 
            className={`mt-1 block w-full px-4 py-3 bg-light-bg-main dark:bg-dark-bg-main border ${error ? 'border-red-500' : 'border-light-border dark:border-dark-border'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-light-text-main dark:text-dark-text-main`} 
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);


const Register: React.FC = () => {
    const navigate = useNavigate();
    const { setRegistrationId, setRegistrationData } = useAppContext();
    
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        program: 'AI Agent Builder Challenge',
        idea: '',
        terms: false,
    });
    const [pitchDeck, setPitchDeck] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const programInfo = {
        'AI Agent Builder Challenge': 'A 30-day competition to build, train, and deploy AI agents. Perfect for developers looking to prove their skills.',
        'Startup Pitch Support': 'Get mentorship, refine your pitch deck, and connect with investors. Ideal for entrepreneurs with a vision.'
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 10 * 1024 * 1024) { // 10MB limit
                setErrors(prev => ({...prev, pitchDeck: 'File size cannot exceed 10MB.'}));
                return;
            }
            setPitchDeck(file);
            setFileName(file.name);
            setErrors(prev => {
                const newErrors = {...prev};
                delete newErrors.pitchDeck;
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (formData.program === 'Startup Pitch Support' && !formData.idea.trim()) {
            newErrors.idea = 'Please provide a brief description of your startup idea.';
        }
        if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setStep(2);
        }
    };

    const handlePayment = async () => {
        setIsSubmitting(true);
        
        const submissionData = new FormData();
        submissionData.append('name', formData.name);
        submissionData.append('email', formData.email);
        submissionData.append('program', formData.program);
        submissionData.append('idea', formData.idea);
        submissionData.append('terms', String(formData.terms));
        if (pitchDeck) {
            submissionData.append('pitchDeck', pitchDeck);
        }

        try {
            const response = await fetch('/wp-json/huntifyy/v1/register-submission', {
                method: 'POST',
                body: submissionData,
            });
            if (!response.ok) console.error("Failed to save registration data.");
        } catch (error) {
             console.error("Error submitting registration data:", error);
        }

        const uniqueId = 'HN2025' + Math.floor(100000 + Math.random() * 900000);
        setRegistrationId(uniqueId);
        setRegistrationData({
            name: formData.name,
            email: formData.email,
            program: formData.program,
        });
        
        setIsSubmitting(false);
        navigate('/dashboard');
    };
    
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16 min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-2xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-xl shadow-soft overflow-hidden">
                        {step === 1 && (
                            <form onSubmit={handleFormSubmit} className="p-8 md:p-12" noValidate>
                                <h1 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-2 text-center">Register for a Program</h1>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 text-center">Start your journey with us today.</p>

                                <div className="space-y-6">
                                    <FormInput id="name" label="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} error={errors.name} required />
                                    <FormInput id="email" label="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} error={errors.email} required />
                                    
                                    <div>
                                        <label htmlFor="program" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Choose Program</label>
                                        <div className="relative mt-1">
                                            <select 
                                                id="program"
                                                value={formData.program} 
                                                onChange={(e) => setFormData({...formData, program: e.target.value})} 
                                                className="appearance-none block w-full px-4 py-3 border border-light-border dark:border-dark-border bg-light-bg-main dark:bg-dark-bg-main text-light-text-main dark:text-dark-text-main rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary pr-8"
                                            >
                                                <option>AI Agent Builder Challenge</option>
                                                <option>Startup Pitch Support</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-light-text-secondary dark:text-dark-text-secondary">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-xs text-light-text-secondary dark:text-dark-text-secondary">{programInfo[formData.program as keyof typeof programInfo]}</p>
                                    </div>

                                    {formData.program === 'Startup Pitch Support' && (
                                         <>
                                            <FormTextarea id="idea" label="Your Startup Idea (Briefly)" value={formData.idea} onChange={(e) => setFormData({...formData, idea: e.target.value})} error={errors.idea} placeholder="Describe your concept in a few sentences." required />
                                            <div>
                                                <label htmlFor="pitchDeck" className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Pitch Deck (Optional)</label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-light-border dark:border-dark-border border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg className="mx-auto h-12 w-12 text-light-text-secondary dark:text-dark-text-secondary" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="flex text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                                            <label htmlFor="pitchDeck" className="relative cursor-pointer bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-md font-medium text-primary hover:text-accent focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-light-bg-main dark:focus-within:ring-offset-dark-bg-main focus-within:ring-primary px-1">
                                                                <span>Upload a file</span>
                                                                <input id="pitchDeck" name="pitchDeck" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PDF, DOCX, PPTX up to 10MB</p>
                                                        {fileName && <p className="text-sm text-green-500 mt-2 truncate max-w-xs mx-auto">{fileName}</p>}
                                                         {errors.pitchDeck && <p className="text-red-500 text-xs mt-1">{errors.pitchDeck}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                         </>
                                    )}

                                     <div>
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="terms" name="terms" type="checkbox" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} className={`focus:ring-primary h-4 w-4 text-primary bg-light-bg-main dark:bg-dark-bg-main border-light-border dark:border-dark-border rounded ${errors.terms ? 'border-red-500' : ''}`} />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="terms" className="font-medium text-light-text-secondary dark:text-dark-text-secondary">I agree to the <Link to="/terms-and-conditions" className="text-primary hover:underline">Terms and Conditions</Link></label>
                                            </div>
                                        </div>
                                        {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
                                    </div>
                                </div>
                                
                                <div className="mt-8">
                                    <Button type="submit" variant="gradient" className="w-full text-lg">Proceed to Payment</Button>
                                </div>
                            </form>
                        )}
                        
                        {step === 2 && (
                            <div className="p-8 md:p-12 text-center">
                                <h1 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-2">Confirm Registration</h1>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">You're one step away. Please confirm your details and complete the payment.</p>
                                
                                <div className="my-8">
                                    <span className="text-5xl font-poppins font-bold text-light-text-main dark:text-dark-text-main">₹1,499</span>
                                    <span className="text-light-text-secondary dark:text-dark-text-secondary"> / one-time fee</span>
                                </div>

                                <div className="text-left my-8 mx-auto max-w-sm bg-light-bg-main dark:bg-dark-bg-main p-4 rounded-md border border-light-border dark:border-dark-border">
                                    <h3 className="text-lg font-poppins font-semibold text-light-text-main dark:text-dark-text-main mb-4 text-center">Order Summary</h3>
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary"><span className="font-semibold text-light-text-main dark:text-dark-text-main">Name:</span> {formData.name}</p>
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary"><span className="font-semibold text-light-text-main dark:text-dark-text-main">Email:</span> {formData.email}</p>
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary"><span className="font-semibold text-light-text-main dark:text-dark-text-main">Program:</span> {formData.program}</p>
                                    {fileName && <p className="text-light-text-secondary dark:text-dark-text-secondary truncate"><span className="font-semibold text-light-text-main dark:text-dark-text-main">Attachment:</span> {fileName}</p>}
                                </div>

                                <Button onClick={handlePayment} variant="gradient" className="w-full text-lg" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processing...' : 'Pay with Razorpay (Simulated)'}
                                </Button>
                                <button onClick={() => setStep(1)} className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-4 hover:underline">Go Back</button>
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Register;