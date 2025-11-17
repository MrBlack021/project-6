
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FadeIn } from '../components/FadeIn';

const PaymentSuccess: React.FC = () => {
    const navigate = useNavigate();
    const { setRegistrationId, setRegistrationData } = useAppContext();
    const [status, setStatus] = useState('Confirming your payment and registration...');

    useEffect(() => {
        // This is a mock confirmation flow.
        // In a real application, you would receive a token from the payment gateway,
        // send it to your backend to verify the payment, and then get registration data back.
        const confirmRegistration = () => {
            setStatus('Payment confirmed! Finalizing your registration...');

            setTimeout(() => {
                // Generate a mock registration ID and data
                const registration_id = 'HN2025' + Math.floor(100000 + Math.random() * 900000);
                const mockData = {
                    name: 'Valued Student',
                    email: 'student@example.com',
                    program: 'Student Mentorship Program',
                };
                
                // Set global state
                setRegistrationId(registration_id);
                setRegistrationData(mockData);

                setStatus('Success! Redirecting to your dashboard...');
                setTimeout(() => navigate('/dashboard'), 1500);
            }, 2000);
        };

        const timer = setTimeout(confirmRegistration, 1000);
        return () => clearTimeout(timer);

    }, [navigate, setRegistrationId, setRegistrationData]);

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main min-h-[80vh] flex items-center justify-center py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-2xl mx-auto text-center">
                         <svg className="mx-auto h-16 w-16 text-primary animate-spin mb-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <h1 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-3">{status}</h1>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">Please do not close this window. This may take a moment.</p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default PaymentSuccess;
