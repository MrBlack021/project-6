
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg border border-light-border dark:border-dark-border text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-poppins font-bold text-xl mb-2">{title}</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">{description}</p>
    </div>
);

const StartupCell: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16 max-w-3xl mx-auto">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Startup & Innovation Cell Creation</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                            Transform your campus into a thriving hub of innovation. We partner with colleges to build and manage dynamic Startup Cells from the ground up.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1740&q=80" alt="A modern college campus with students" className="rounded-lg shadow-soft" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">What is a Startup Cell?</h2>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                                A Startup & Innovation Cell is more than just a room; it's a fully-managed ecosystem within your college dedicated to nurturing student entrepreneurs. It acts as a central point for all innovation-related activities, providing students with the resources, mentorship, and structured pathways to turn their ideas into successful businesses.
                            </p>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary">
                                Huntifyy takes the lead in establishing and operating the cell, ensuring it aligns with institutional goals while minimizing the administrative burden on faculty.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="py-20 text-center bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12">Benefits for Your Institution</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <FeatureCard icon="🏆" title="Boost NAAC & IIC Scores" description="Our programs directly enhance your institution's innovation metrics, contributing to higher rankings." />
                            <FeatureCard icon="💡" title="Foster Innovation Culture" description="Create a vibrant campus environment where creativity and entrepreneurial thinking are encouraged and rewarded." />
                            <FeatureCard icon="📈" title="Enhance Student Placement" description="Equip students with practical skills and an entrepreneurial mindset, making them highly sought-after graduates." />
                            <FeatureCard icon="👥" title="Minimal Faculty Workload" description="We manage the entire program, from workshops to investor relations, allowing your faculty to focus on academics." />
                            <FeatureCard icon="🌐" title="Industry & Investor Network" description="Gain access to our extensive network of mentors and investors, creating real-world opportunities for students." />
                            <FeatureCard icon="🚀" title="Showcase Student Success" description="Generate powerful success stories and showcase tangible outcomes of your institution's focus on innovation." />
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn>
                     <div className="mt-20 text-center">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Ready to build your campus's innovation hub?</h2>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto mb-8">
                            Let's discuss how a Huntifyy-powered Startup Cell can elevate your institution.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" className="text-lg">
                                Partner With Us
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default StartupCell;
