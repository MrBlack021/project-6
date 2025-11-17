
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const BenefitCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg border border-light-border dark:border-dark-border">
        <h3 className="font-poppins font-bold text-xl text-accent mb-2">{title}</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">{description}</p>
    </div>
);


const AiAutomation: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16 max-w-3xl mx-auto">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">AI & RAG Agent Automation</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">
                           Give your startup an unfair advantage. We train founders to build and deploy advanced AI agentic systems to automate, innovate, and scale faster.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                         <div>
                            <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">What are RAG AI Agentic Systems?</h2>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
                                RAG (Retrieval-Augmented Generation) is a cutting-edge AI technique that combines the power of large language models (like GPT) with external knowledge bases. This allows AI agents to provide answers and perform tasks based on specific, up-to-date, and proprietary information—not just their pre-trained data.
                            </p>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary font-semibold">
                                In simple terms, you can create smart AI assistants that know everything about your business, your customers, and your products, enabling hyper-personalized and efficient automation.
                            </p>
                        </div>
                        <div>
                           <img src="https://images.unsplash.com/photo-1620712943543-aebc69232d61?auto=format&fit=crop&w=1740&q=80" alt="Abstract AI visualization" className="rounded-lg shadow-soft" />
                        </div>
                    </div>
                </FadeIn>
                
                 <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12">The Benefits for Your Startup</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <BenefitCard title="Scale Customer Support" description="Build AI chatbots that can answer complex, specific customer questions 24/7, reducing human support costs." />
                            <BenefitCard title="Automate Onboarding" description="Create automated workflows that guide new users through your product, improving activation and retention rates." />
                            <BenefitCard title="Internal Knowledge Base" description="Deploy an internal AI assistant that can instantly answer team questions about processes, documentation, and data." />
                            <BenefitCard title="Personalized Sales" description="Develop agents that can analyze customer data to generate personalized outreach emails and sales scripts." />
                            <BenefitCard title="Data Analysis" description="Use AI to automatically analyze reports, summarize findings, and provide actionable insights without manual effort." />
                            <BenefitCard title="Gain a Competitive Edge" description="Leverage next-gen AI technology to operate more efficiently and innovate faster than your competitors." />
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn>
                     <div className="text-center bg-primary/5 dark:bg-primary/10 p-8 md:p-12 rounded-lg border border-primary/20">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Learn AI Automation for Your Startup</h2>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto mb-8">
                          Enroll in our hands-on workshop designed specifically for startup founders. No deep AI expertise required.
                        </p>
                        <Link to="/register">
                            <Button variant="primary" className="text-lg">
                                Join the AI Workshop
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default AiAutomation;
