import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }> = ({ label, error, ...props }) => (
    <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-text-secondary">{label}</label>
        <input 
            {...props} 
            className={`mt-1 block w-full px-3 py-2 bg-bg-main border ${error ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-text-main`} 
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const FormTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }> = ({ label, error, ...props }) => (
     <div>
        <label htmlFor={props.id} className="block text-sm font-medium text-text-secondary">{label}</label>
        <textarea 
            {...props}
            rows={3} 
            className={`mt-1 block w-full px-3 py-2 bg-bg-main border ${error ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-text-main`} 
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
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        
        // Save the registration data to WordPress via REST API
        try {
            const response = await fetch('/wp-json/huntifyy/v1/register-submission', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
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
        <div className="bg-bg-main py-16 min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-2xl mx-auto bg-bg-secondary border border-gray-800 rounded-xl shadow-soft overflow-hidden">
                        {step === 1 && (
                            <form onSubmit={handleFormSubmit} className="p-8 md:p-12" noValidate>
                                <h1 className="text-3xl font-poppins font-bold text-text-main mb-2 text-center">Register for a Program</h1>
                                <p className="text-text-secondary mb-8 text-center">Start your journey with us today.</p>

                                <div className="space-y-6">
                                    <FormInput id="name" label="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} error={errors.name} required />
                                    <FormInput id="email" label="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} error={errors.email} required />
                                    
                                    <div>
                                        <label htmlFor="program" className="block text-sm font-medium text-text-secondary">Choose Program</label>
                                        <div className="relative mt-1">
                                            <select 
                                                id="program"
                                                value={formData.program} 
                                                onChange={(e) => setFormData({...formData, program: e.target.value})} 
                                                className="appearance-none block w-full px-3 py-2 border border-gray-700 bg-bg-main text-text-main rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary pr-8"
                                            >
                                                <option>AI Agent Builder Challenge</option>
                                                <option>Startup Pitch Support</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    {formData.program === 'Startup Pitch Support' && (
                                         <FormTextarea id="idea" label="Your Startup Idea (Briefly)" value={formData.idea} onChange={(e) => setFormData({...formData, idea: e.target.value})} error={errors.idea} placeholder="Describe your concept in a few sentences." required />
                                    )}
                                     <div>
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="terms" name="terms" type="checkbox" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} className={`focus:ring-primary h-4 w-4 text-primary bg-gray-700 border-gray-600 rounded ${errors.terms ? 'border-red-500' : ''}`} />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="terms" className="font-medium text-text-secondary">I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a></label>
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
                                <h1 className="text-3xl font-poppins font-bold text-text-main mb-2">Confirm Registration</h1>
                                <p className="text-text-secondary mb-6">You're one step away. Please confirm your details and complete the payment.</p>
                                
                                <div className="my-8">
                                    <span className="text-5xl font-poppins font-bold text-text-main">₹1,499</span>
                                    <span className="text-text-secondary"> / one-time fee</span>
                                </div>

                                <div className="text-left my-8 mx-auto max-w-sm bg-bg-main p-4 rounded-md border border-gray-800">
                                    <h3 className="text-lg font-poppins font-semibold text-text-main mb-4 text-center">Order Summary</h3>
                                    <p className="text-text-secondary"><span className="font-semibold text-text-main">Name:</span> {formData.name}</p>
                                    <p className="text-text-secondary"><span className="font-semibold text-text-main">Email:</span> {formData.email}</p>
                                    <p className="text-text-secondary"><span className="font-semibold text-text-main">Program:</span> {formData.program}</p>
                                </div>

                                <Button onClick={handlePayment} variant="gradient" className="w-full text-lg" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processing...' : 'Pay with Razorpay (Simulated)'}
                                </Button>
                                <button onClick={() => setStep(1)} className="text-sm text-text-secondary mt-4 hover:underline">Go Back</button>
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Register;