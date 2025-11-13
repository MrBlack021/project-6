import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FadeIn } from '../components/FadeIn';

// Helper function to convert a data URL to a Blob
const dataURLtoBlob = (dataurl: string) => {
    const arr = dataurl.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) {
        throw new Error('Invalid data URL');
    }
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

const PaymentSuccess: React.FC = () => {
    const navigate = useNavigate();
    const { setRegistrationId, setRegistrationData } = useAppContext();
    const [status, setStatus] = useState('Confirming your registration...');

    useEffect(() => {
        const handleConfirmation = async () => {
            const storedData = sessionStorage.getItem('huntifyy-registration-data');

            if (!storedData) {
                setStatus('No registration data found. Redirecting...');
                setTimeout(() => navigate('/register'), 2000);
                return;
            }

            try {
                const data = JSON.parse(storedData);

                const submissionData = new FormData();
                submissionData.append('name', data.name);
                submissionData.append('email', data.email);
                submissionData.append('program', data.program);
                submissionData.append('idea', data.idea);
                submissionData.append('terms', String(data.terms));

                if (data.fileData && data.fileName) {
                    const pitchDeckBlob = dataURLtoBlob(data.fileData);
                    submissionData.append('pitchDeck', pitchDeckBlob, data.fileName);
                }

                // Send data to backend
                await fetch('/wp-json/huntifyy/v1/register-submission', {
                    method: 'POST',
                    body: submissionData,
                });

                // Generate unique ID and set context
                const uniqueId = 'HN2025' + Math.floor(100000 + Math.random() * 900000);
                setRegistrationId(uniqueId);
                setRegistrationData({
                    name: data.name,
                    email: data.email,
                    program: data.program,
                });

                // Clean up and redirect
                sessionStorage.removeItem('huntifyy-registration-data');
                setStatus('Registration successful! Redirecting to your dashboard...');
                setTimeout(() => navigate('/dashboard'), 1500);

            } catch (error) {
                console.error("Error processing registration:", error);
                setStatus('An error occurred. Please contact support. Redirecting...');
                setTimeout(() => navigate('/contact'), 3000);
            }
        };

        handleConfirmation();
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
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">Please do not close this window.</p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default PaymentSuccess;
