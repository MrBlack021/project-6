
import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

const faqs = [
    {
        question: "What is a Startup & Innovation Cell?",
        answer: "A Startup & Innovation Cell is a dedicated center within a college, established in partnership with Huntifyy, to foster a culture of entrepreneurship. It serves as a hub for workshops, mentorship, and resources for aspiring student founders."
    },
    {
        question: "Who can join the Student Mentorship Program?",
        answer: "The program is open to all students of our partner colleges, from any academic discipline. We look for passion, a clear problem to solve, and the dedication to build a solution. Both individuals and teams can apply."
    },
    {
        question: "How does Huntifyy help our college's rankings (NAAC/IIC)?",
        answer: "Our structured programs, industry collaborations, and focus on innovation directly align with the criteria for NAAC accreditation and the Institution's Innovation Council (IIC) framework. We provide documentation and reports to support your college's submissions, highlighting increased entrepreneurial activity and student success."
    },
    {
        question: "What is the time commitment required from our faculty?",
        answer: "Our model is designed for minimal faculty workload. Huntifyy manages the program operations, mentorship sessions, and investor connections. We collaborate with a faculty coordinator from your side for smooth execution, but the day-to-day heavy lifting is on us."
    },
    {
        question: "How are startups selected for Investor Pitch Day?",
        answer: "Startups are selected based on their progress during the 30-day mentorship program. We evaluate them on criteria such as market validation, MVP development, team strength, and scalability. Only the most promising and well-prepared startups get the chance to pitch."
    },
    {
        question: "Do students need a fully-formed business idea to join a program?",
        answer: "Not necessarily. Students can join our initial awareness workshops to explore ideas. For the mentorship program, a basic concept is required, but it doesn't need to be fully developed. Our program is designed to help them refine it."
    },
     {
        question: "What kind of support can students expect?",
        answer: "Students receive one-on-one mentorship from industry experts, hands-on workshops on business modeling and pitch deck creation, access to our resource library, and networking opportunities with other founders and investors."
    },
     {
        question: "Is there a fee for colleges to partner with Huntifyy?",
        answer: "We offer various partnership models, some of which involve a fee to cover program costs, while others are based on a revenue-sharing model from successful student startups. Please contact us for a detailed proposal."
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
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                            Answers to common questions from colleges, students, and investors.
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
