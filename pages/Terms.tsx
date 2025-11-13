import React from 'react';
import { FadeIn } from '../components/FadeIn';

const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">{title}</h2>
        <div className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
            {children}
        </div>
    </div>
);

const Terms: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Terms and Conditions</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">Last Updated: {new Date().toLocaleDateString()}</p>
                    </header>

                    <div className="max-w-3xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 sm:p-10 rounded-xl shadow-soft">
                        <LegalSection title="1. Acceptance of Terms">
                            <p>By accessing and using the Huntifyy website and its services (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                        </LegalSection>

                        <LegalSection title="2. User Registration and Conduct">
                            <p>You are responsible for maintaining the confidentiality of your account and are fully responsible for all activities that occur under your account. You agree to immediately notify Huntifyy of any unauthorized use of your account or any other breach of security. You agree to provide true, accurate, current and complete information about yourself as prompted by the registration form.</p>
                        </LegalSection>
                        
                        <LegalSection title="3. Intellectual Property Rights for Submitted Content">
                            <p>When you submit your startup idea, pitch deck, or any other materials ("Submitted Content") to our Startup Pitch Support program, you retain full ownership of your intellectual property.</p>
                            <p>However, by submitting, you grant Huntifyy a non-exclusive, worldwide, royalty-free license to review, analyze, and share your Submitted Content with our internal team and our trusted network of investors for the sole purpose of evaluation for mentorship, support, and potential investment.</p>
                            <p>We do not claim any ownership rights over your ideas. We operate on a basis of trust and confidentiality, but we cannot be held liable for any independent development of similar ideas by third parties.</p>
                        </LegalSection>
                        
                        <LegalSection title="4. Disclaimers">
                            <p>The Service is provided on an "as is" and "as available" basis. Huntifyy makes no warranty that the service will be uninterrupted, timely, secure, or error-free. We do not guarantee any specific outcomes, including but not limited to, receiving investment, winning any prize, or achieving commercial success for your startup.</p>
                        </LegalSection>
                        
                        <LegalSection title="5. Limitation of Liability">
                            <p>In no event shall Huntifyy, its directors, employees, or partners be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                        </LegalSection>

                        <LegalSection title="6. Changes to Terms">
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page.</p>
                        </LegalSection>

                        <LegalSection title="Contact Us">
                            <p>If you have any questions about these Terms, please contact us at: info@huntifyy.com</p>
                        </LegalSection>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Terms;