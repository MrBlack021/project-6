
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';

const StartupCell: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-20 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">Startup & Innovation Cell Creation</h1>
                        <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
                            Transform your campus into a thriving hub of innovation. We partner with colleges to build and manage dynamic Startup Cells from the ground up.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-lg opacity-50"></div>
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1740&q=80" alt="A modern college campus with students" className="relative rounded-2xl shadow-2xl border border-light-border dark:border-dark-border" />
                        </div>
                        <div>
                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white text-sm font-bold uppercase tracking-widest">The Concept</div>
                            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">What is a Startup Cell?</h2>
                            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                                A Startup & Innovation Cell is more than just a room; it's a fully-managed ecosystem within your college dedicated to nurturing student entrepreneurs. It acts as a central point for all innovation-related activities, providing students with the resources, mentorship, and structured pathways to turn their ideas into successful businesses.
                            </p>
                            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-medium border-l-4 border-accent pl-4">
                                Huntifyy takes the lead in establishing and operating the cell, ensuring it aligns with institutional goals while minimizing the administrative burden on faculty.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="py-12">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12 text-center">Benefits for Your Institution</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeatureCard 
                                icon={<span className="text-2xl">🏆</span>} 
                                title="Boost NAAC & IIC Scores" 
                                description="Our programs directly enhance your institution's innovation metrics, contributing to higher rankings." 
                            />
                            <FeatureCard 
                                icon={<span className="text-2xl">💡</span>} 
                                title="Foster Innovation Culture" 
                                description="Create a vibrant campus environment where creativity and entrepreneurial thinking are encouraged and rewarded." 
                            />
                            <FeatureCard 
                                icon={<span className="text-2xl">📈</span>} 
                                title="Enhance Student Placement" 
                                description="Equip students with practical skills and an entrepreneurial mindset, making them highly sought-after graduates." 
                            />
                            <FeatureCard 
                                icon={<span className="text-2xl">👥</span>} 
                                title="Minimal Faculty Workload" 
                                description="We manage the entire program, from workshops to investor relations, allowing your faculty to focus on academics." 
                            />
                            <FeatureCard 
                                icon={<span className="text-2xl">🌐</span>} 
                                title="Industry & Investor Network" 
                                description="Gain access to our extensive network of mentors and investors, creating real-world opportunities for students." 
                            />
                            <FeatureCard 
                                icon={<span className="text-2xl">🚀</span>} 
                                title="Showcase Student Success" 
                                description="Generate powerful success stories and showcase tangible outcomes of your institution's focus on innovation." 
                            />
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn>
                     <div className="mt-20 text-center">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">Ready to build your campus's innovation hub?</h2>
                        <Link to="/contact">
                            <Button variant="primary" className="text-lg px-8 py-4 shadow-glow">
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
