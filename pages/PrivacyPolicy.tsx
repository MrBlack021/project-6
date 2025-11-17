
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

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Privacy Policy</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">Last Updated: {new Date().toLocaleDateString()}</p>
                    </header>

                    <div className="max-w-3xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-8 sm:p-10 rounded-xl shadow-soft">
                        <LegalSection title="Introduction">
                            <p>Welcome to Huntifyy. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including our AI Agent Builder Challenge and Startup Pitch Support program.</p>
                        </LegalSection>

                        <LegalSection title="Information We Collect">
                            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and other contact details that you voluntarily give to us when you register for our programs.</li>
                                <li><strong>Submitted Content:</strong> All information, documents (including pitch decks, business plans), and ideas you submit as part of the Startup Pitch Support program.</li>
                                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            </ul>
                        </LegalSection>

                        <LegalSection title="How We Use Your Information">
                            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li>Create and manage your account.</li>
                                <li>Process your registration and payments.</li>
                                <li>Evaluate your application and submitted ideas for the Startup Pitch Support program.</li>
                                <li>Share your startup idea and pitch deck with our network of affiliated investors for potential funding opportunities, with your implied consent upon submission.</li>
                                <li>Email you regarding your account or our services.</li>
                            </ul>
                        </LegalSection>

                        <LegalSection title="Disclosure of Your Information">
                            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>With Investors:</strong> By participating in the Startup Pitch Support program, you consent to us sharing your submitted materials with our network of trusted investors and venture capitalists for the purpose of evaluation for potential investment.</li>
                                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                            </ul>
                        </LegalSection>
                        
                        <LegalSection title="Security of Your Information">
                            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                        </LegalSection>

                        <LegalSection title="Contact Us">
                            <p>If you have questions or comments about this Privacy Policy, please contact us at: info@huntifyy.com</p>
                        </LegalSection>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default PrivacyPolicy;