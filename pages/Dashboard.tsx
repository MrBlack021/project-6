
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FadeIn } from '../components/FadeIn';

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
        <div className="bg-bg-section min-h-[80vh] flex items-center justify-center py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-soft text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h1 className="text-3xl font-poppins font-bold mb-3">Registration Successful!</h1>
                        <p className="text-gray-600 mb-8">
                            Welcome to Huntifyy, {registrationData.name}! We're thrilled to have you. You can now access all program materials.
                        </p>

                        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 my-8">
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Your Unique ID</p>
                            <p className="text-2xl font-mono font-bold text-primary tracking-widest">{registrationId}</p>
                        </div>

                        <p className="text-gray-600 mb-8">Please save this ID for future reference. An email with further instructions has been sent to <span className="font-semibold">{registrationData.email}</span>.</p>

                        <a 
                            href="#/" 
                            onClick={(e) => { e.preventDefault(); alert('Certificate download will be available upon program completion.'); }}
                            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-colors duration-300"
                        >
                            Download Certificate (Placeholder)
                        </a>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Dashboard;
