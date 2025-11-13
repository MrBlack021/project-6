
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';

const Pricing: React.FC = () => {
    const navigate = useNavigate();
    const { setRegistrationId } = useAppContext();

    const benefits = [
        'Full 30-Day Program Access',
        'Expert Mentorship Sessions',
        'Access to Private Community',
        'All Learning Materials & Codebases',
        'Certificate of Completion',
        'Entry to Pitching Events',
    ];

    const handlePayment = () => {
        // Simulate payment success
        const uniqueId = 'HN2025' + Math.floor(100000 + Math.random() * 900000);
        setRegistrationId(uniqueId);
        navigate('/dashboard');
    };

    return (
        <div className="bg-bg-section py-16 min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-soft overflow-hidden">
                        <div className="p-8 md:p-12 text-center">
                            <h1 className="text-3xl font-poppins font-bold mb-2">Join Huntifyy</h1>
                            <p className="text-gray-600 mb-6">One-time fee for full access to your chosen program.</p>
                            
                            <div className="my-8">
                                <span className="text-5xl font-poppins font-bold">₹1,499</span>
                                <span className="text-gray-500"> / one-time</span>
                            </div>

                            <div className="text-left my-8 mx-auto max-w-sm">
                                <h3 className="text-lg font-poppins font-semibold mb-4 text-center">What's Included:</h3>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button onClick={handlePayment} className="w-full text-lg">
                                Pay with Razorpay (Simulated)
                            </Button>
                            <p className="text-xs text-gray-400 mt-4">You will be redirected to the dashboard upon successful payment.</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Pricing;
