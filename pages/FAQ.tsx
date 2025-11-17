
import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

const faqs = [
    {
        question: "Who is the AI Agent Builder Challenge for?",
        answer: "The challenge is designed for individuals with some programming experience (preferably Python) who want to dive deep into applied AI. It's perfect for students, developers, and tech enthusiasts looking to test their skills in a competitive environment."
    },
    {
        question: "Are there prizes for the AI Agent Builder Challenge?",
        answer: "Yes! The challenge is a competition with a prize pool ranging from ₹5,000 to ₹5,00,000 for our top performers. It's a fantastic opportunity to showcase your skills and get rewarded for your innovation."
    },
    {
        question: "What do I need to prepare for the Startup Pitch Support program?",
        answer: "You should have a clear idea for a startup. A basic business plan or a simple presentation is helpful, but not required. The most important thing is a passion for your idea and a vision for its potential."
    },
    {
        question: "Does my startup idea have to be related to AI?",
        answer: "Not at all. While our AI Challenge is tech-focused, our Startup Pitch Support program is open to innovative ideas from all sectors. We are looking for visionary founders with groundbreaking concepts, regardless of the industry."
    },
    {
        question: "What happens after I submit my startup idea?",
        answer: "Our expert panel reviews every submission. The most promising ideas are presented directly to our network of investors. If your idea gains traction, we provide dedicated support, mentorship, and resources to help you build and launch your startup."
    },
    {
        question: "Is the registration fee refundable?",
        answer: "The registration fee is non-refundable as it grants you immediate access to our platform, learning materials, and community forums. We are confident in the value our programs provide."
    },
    {
        question: "What kind of support can I expect during the programs?",
        answer: "You will have access to dedicated mentors via scheduled sessions and a private community channel (like Discord or Slack) for peer-to-peer support and quick questions."
    },
    {
        question: "Do I get a certificate after completing a program?",
        answer: "Yes, upon successful completion of either program, you will receive a digital certificate from Huntifyy that you can share on your professional networks and resume."
    }
];

const AccordionItem: React.FC<{ q: string; a: string; }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-light-border dark:border-dark-border">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="text-lg font-semibold text-light-text-main dark:text-dark-text-main">{q}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="p-4 pt-0 text-light-text-secondary dark:text-dark-text-secondary">{a}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-poppins font-bold text-light-text-main dark:text-dark-text-main mb-4">Frequently Asked Questions</h1>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            Have questions? We've got answers. If you don't see your question here, feel free to reach out.
                        </p>
                    </header>
                </FadeIn>
                <FadeIn>
                    <div className="max-w-3xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border p-4 sm:p-6 rounded-xl shadow-soft">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} q={faq.question} a={faq.answer} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default FAQ;