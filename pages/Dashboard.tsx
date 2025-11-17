
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';

const Dashboard: React.FC = () => {
    const { registrationId, registrationData } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!registrationId) {
            navigate('/register');
        }
    }, [registrationId, navigate]);

    if (!registrationId || !registrationData) {
        return null;
    }

    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main min-h-[80vh] flex items-center justify-center py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-2xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 md:p-12 rounded-xl shadow-soft text-center">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h1 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-3">Registration Successful!</h1>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            Welcome to Huntifyy, {registrationData.name}! We're thrilled to have you. You can now access all program materials.
                        </p>

                        <div className="bg-light-bg-main dark:bg-dark-bg-main border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 my-8">
                            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary uppercase tracking-wider">Your Unique ID</p>
                            <p className="text-2xl font-mono font-bold text-primary tracking-widest">{registrationId}</p>
                        </div>

                        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">Please save this ID for future reference. An email with further instructions has been sent to <span className="font-semibold text-light-text-main dark:text-dark-text-main">{registrationData.email}</span>.</p>

                        <Button 
                            onClick={(e) => { e.preventDefault(); alert('Certificate download will be available upon program completion.'); }}
                            variant="gradient"
                        >
                            Download Certificate (Placeholder)
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Dashboard;