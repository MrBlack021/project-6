
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FadeIn } from '../components/FadeIn';

const PaymentSuccess: React.FC = () => {
    const navigate = useNavigate();
    const { setRegistrationId, setRegistrationData } = useAppContext();
    const [status, setStatus] = useState('Confirming your payment and registration...');

    useEffect(() => {
        const confirmRegistration = async () => {
            const tempId = sessionStorage.getItem('huntifyy-temp-id');

            if (!tempId) {
                setStatus('No registration session found. Redirecting...');
                setTimeout(() => navigate('/register'), 2000);
                return;
            }

            try {
                const response = await fetch('http://localhost:3001/api/confirm-registration', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ tempId }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to confirm registration.');
                }

                const data = await response.json();

                // Set global state with confirmed registration data
                setRegistrationId(data.registration_id);
                setRegistrationData({
                    name: data.name,
                    email: data.email,
                    program: data.program,
                });

                // Clean up and redirect
                sessionStorage.removeItem('huntifyy-temp-id');
                setStatus('Success! Redirecting to your dashboard...');
                setTimeout(() => navigate('/dashboard'), 1500);

            } catch (error) {
                console.error("Error confirming registration:", error);
                const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
                setStatus(`Error: ${errorMessage} Redirecting...`);
                setTimeout(() => navigate('/contact'), 4000);
            }
        };

        // Delay execution slightly to simulate payment gateway redirect time
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