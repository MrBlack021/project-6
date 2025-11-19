
import React from 'react';
import { FadeIn } from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';

const AiAutomation: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-20 max-w-4xl mx-auto">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-500/10 text-purple-500 text-sm font-bold uppercase tracking-widest">Next-Gen Tech</div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">AI & RAG Agent Automation</h1>
                        <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
                           Give your startup an unfair advantage. We train founders to build and deploy advanced AI agentic systems to automate, innovate, and scale faster.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                         <div>
                            <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-6">What are RAG AI Agentic Systems?</h2>
                            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                                RAG (Retrieval-Augmented Generation) is a cutting-edge AI technique that combines the power of large language models (like GPT) with external knowledge bases. This allows AI agents to provide answers and perform tasks based on specific, up-to-date, and proprietary information—not just their pre-trained data.
                            </p>
                            <div className="p-6 bg-light-bg-secondary dark:bg-dark-bg-secondary border-l-4 border-purple-500 rounded-r-lg">
                                <p className="text-light-text-main dark:text-dark-text-main font-medium italic">
                                    "In simple terms, you can create smart AI assistants that know everything about your business, your customers, and your products, enabling hyper-personalized and efficient automation."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                           <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>
                           <img src="https://images.unsplash.com/photo-1620712943543-aebc69232d61?auto=format&fit=crop&w=1740&q=80" alt="Abstract AI visualization" className="relative rounded-2xl shadow-2xl border border-white/10" />
                        </div>
                    </div>
                </FadeIn>
                
                 <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-12">The Benefits for Your Startup</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            <FeatureCard title="Scale Customer Support" description="Build AI chatbots that can answer complex, specific customer questions 24/7." />
                            <FeatureCard title="Automate Onboarding" description="Create automated workflows that guide new users through your product." />
                            <FeatureCard title="Internal Knowledge Base" description="Deploy an internal AI assistant that can instantly answer team questions." />
                            <FeatureCard title="Personalized Sales" description="Develop agents that can analyze customer data to generate personalized outreach." />
                            <FeatureCard title="Data Analysis" description="Use AI to automatically analyze reports and provide actionable insights." />
                            <FeatureCard title="Gain a Competitive Edge" description="Leverage next-gen AI technology to operate more efficiently than competitors." />
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn>
                     <div className="relative text-center p-12 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-primary opacity-90"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-poppins font-bold text-white mb-4">Learn AI Automation for Your Startup</h2>
                            <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                                Enroll in our hands-on workshop designed specifically for startup founders. No deep AI expertise required.
                            </p>
                            <Link to="/register">
                                <Button variant="primary" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                                    Join the AI Workshop
                                </Button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default AiAutomation;
