import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { MarketIcon } from '../components/MarketIcon';
import { PipelineIcon } from '../components/PipelineIcon';
import { EcosystemIcon } from '../components/EcosystemIcon';

const AdvantageCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-light-bg-main dark:bg-dark-bg-main p-6 rounded-xl border border-light-border dark:border-dark-border h-full">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
            {icon}
        </div>
        <h3 className="text-xl font-poppins font-bold mb-2">{title}</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{description}</p>
    </div>
);

const About: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">About Huntifyy</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
                            We are the architects of innovation, building a community where technology and entrepreneurship thrive.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Our Mission & Vision</h2>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                                Our mission is to democratize access to cutting-edge technology education and startup resources. We aim to identify and nurture the next generation of tech leaders and visionaries from every corner of the globe.
                            </p>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary">
                                We envision a future where anyone with a powerful idea has a clear pathway to bring it to life, supported by a robust ecosystem of mentors, peers, and investors. Huntifyy is more than a platform; it's a movement.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1742&q=80" alt="Team collaborating" className="rounded-lg shadow-soft" />
                        </div>
                    </div>
                </FadeIn>

                 <FadeIn>
                    <div className="py-20 text-center border-y border-light-border dark:border-dark-border bg-light-bg-secondary dark:bg-dark-bg-secondary">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">The Huntifyy Advantage</h2>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-12">
                            For investors, Huntifyy represents a unique, de-risked opportunity at the intersection of AI innovation and startup incubation.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <AdvantageCard 
                                icon={<MarketIcon />}
                                title="Vast Market Opportunity"
                                description="We operate in the booming sectors of AI development and early-stage startups, addressing the critical demand for both top-tier technical talent and validated business ideas."
                            />
                            <AdvantageCard 
                                icon={<PipelineIcon />}
                                title="Unique Dual-Pipeline Model"
                                description="Our two programs create a powerful synergy. We don't just find talent; we vet them through rigorous challenges. We don't just find ideas; we curate and mentor them for success."
                            />
                            <AdvantageCard 
                                icon={<EcosystemIcon />}
                                title="A Self-Sustaining Ecosystem"
                                description="The top graduates from our AI challenges often become the technical co-founders or key hires for the startups we incubate, creating a powerful flywheel effect for growth and innovation."
                            />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-light-bg-main dark:bg-dark-bg-main p-8 md:p-12 rounded-xl text-center mt-16">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">How Huntifyy Works</h2>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-12">
                            We believe in a hands-on, project-based approach. Our platform provides the tools, challenges, and connections to accelerate your growth.
                        </p>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-soft border border-light-border dark:border-dark-border">
                            {/* Placeholder for video */}
                            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary w-full h-full flex items-center justify-center">
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-xl">Platform Video Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default About;