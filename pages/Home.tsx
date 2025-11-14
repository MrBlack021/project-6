import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { PlexusBackground } from '../components/PlexusBackground';
import { useAppContext } from '../context/AppContext';

const HeroSection: React.FC = () => (
    <div className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-light-bg-main dark:bg-dark-bg-main">
        <PlexusBackground />
        <div className="relative z-10 p-8">
            <FadeIn>
                 <div>
                    <h1 className="text-4xl md:text-7xl font-poppins font-bold mb-4 text-light-text-main dark:text-dark-text-main">
                        From Ambitious Developer to Funded Founder.
                    </h1>
                    <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
                        Huntifyy is an ecosystem designed to forge the next generation of technology companies by creating a powerful synergy between proven talent and market-ready ideas.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/programs"><Button variant="primary">Explore Our Ecosystem</Button></Link>
                        <Link to="/register"><Button variant="outline">Register Now</Button></Link>
                    </div>
                </div>
            </FadeIn>
             <FadeIn className="mt-20">
                <p className="text-sm uppercase tracking-widest text-light-text-secondary dark:text-dark-text-secondary mb-4">OUR GRADUATES HAVE BEEN HIRED BY</p>
                <div className="flex justify-center items-center gap-x-8 sm:gap-x-12 lg:gap-x-16 grayscale opacity-60 dark:opacity-40">
                    <img className="h-6 sm:h-8" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                    <img className="h-5 sm:h-7" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
                    <img className="h-6 sm:h-8" src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
                    <img className="h-5 sm:h-7" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" alt="Infosys" />
                </div>
            </FadeIn>
        </div>
    </div>
);

const ValuePropCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-light-bg-main dark:bg-dark-bg-main p-6 rounded-xl border border-light-border dark:border-dark-border text-center">
        <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
            {icon}
        </div>
        <h3 className="text-xl font-poppins font-bold mb-2">{title}</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{description}</p>
    </div>
);

const WhyHuntifyySection: React.FC = () => (
    <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary border-y border-light-border dark:border-dark-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <FadeIn>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-4">The Huntifyy Advantage</h2>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto text-center mb-12">
                   We've built a unique, de-risked ecosystem for cultivating talent, incubating startups, and creating investor-ready opportunities.
                </p>
            </FadeIn>
            <FadeIn>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ValuePropCard 
                        icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
                        title="Elite Talent Pipeline"
                        description="Our AI Challenge vets developers through intense, practical tests, producing a pool of proven, top-tier talent."
                    />
                     <ValuePropCard 
                        icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                        title="Real-World Projects"
                        description="Participants build portfolio-ready AI agents and business pitches, gaining tangible experience."
                    />
                    <ValuePropCard 
                        icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
                        title="Direct Investor Access"
                        description="We connect the most promising startups from our pipeline directly to our network of angel investors and VCs."
                    />
                    <ValuePropCard 
                        icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4zm0 0V10m0-4h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                        title="De-Risked Deal Flow"
                        description="By mentoring founders and validating ideas, we present investors with curated, high-potential opportunities."
                    />
                </div>
            </FadeIn>
        </div>
    </section>
);


const TechLogo: React.FC<{ name: string, path: string }> = ({ name, path }) => (
  <div className="flex items-center justify-center p-3 bg-light-bg-main dark:bg-dark-bg-secondary rounded-lg border border-light-border dark:border-dark-border" title={name}>
    <svg className="h-8" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{name}</title><path d={path}/></svg>
  </div>
);


const ProgramsSection: React.FC = () => (
    <section className="py-20 bg-light-bg-main dark:bg-dark-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-poppins font-semibold text-primary mb-2">The Arena</h3>
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">AI Agent Builder Challenge</h2>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            A high-stakes, 30-day challenge to build, train, and deploy advanced AI agents. Prove your mastery, build a standout portfolio project, and claim your place among the best.
                        </p>
                        
                        <div className="mb-8">
                            <h4 className="font-semibold mb-4 text-light-text-main dark:text-dark-text-main">Technologies You'll Master:</h4>
                            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                <TechLogo name="Python" path="M12.3,8.3l2.8,1.8L12.3,12V8.3z M11.7,8.3V12l-2.8,1.8L11.7,8.3z M11.7,12.6l2.8,1.8l-2.8,1.8V12.6z M12.3,12.6 v3.7l2.8-1.8L12.3,12.6z M6,22c-2.2,0-4-1.8-4-4V6c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v12c0,2.2-1.8,4-4,4H6z M11.7,4.5v3.2 l2.8-1.8L11.7,4.5z M12.3,4.5l2.8,1.8L12.3,7.7V4.5z M18,18.8c0.7,0,1.3-0.6,1.3-1.3v-11c0-0.7-0.6-1.3-1.3-1.3h-1.3v3.7 l-2.8-1.8L11.1,10L8.3,8.2L5.3,10v4l2.8,1.8l2.8,1.8l0.8,0.5H18z M4.7,17.5c0,0.7,0.6,1.3,1.3,1.3h1.3v-3.7l2.8,1.8l2.8-1.8v-4 l-2.8-1.8L8.3,10L5.3,12L4.7,17.5z M6,5.3C5.3,5.3,4.7,5.9,4.7,6.5v0.8L8.3,10l2.8-1.8L8.3,6.3L6,5.3z M18,5.3l-2.3,1L12.8,8.2 l2.8,1.8l3.4-2.2V6.5C19.3,5.9,18.7,5.3,18,5.3z"/>
                                <TechLogo name="TensorFlow" path="m2.022 4.415-.81 3.978L.402 12l.81 3.607.81 3.978 3.753.754 3.784.81 3.243-1.622 3.243-1.621-3.243-1.622-3.243-1.621-3.784.81zm9.956 0-3.243 1.621 3.243 1.622L12 9.279l3.243-1.621L12 5.978l-3.243-1.622L12 2.735l3.243 1.621.81 3.978L16.863 12l-.81 3.607-.81 3.978-3.243-1.622L12 16.342l3.243 1.621L12 19.585l-3.243-1.622-3.753.754L12 21.265l3.784-.81 3.753-.754.81-3.978.81-3.607-.81-3.607-.81-3.978-3.753-.754-3.784-.81z"/>
                                <TechLogo name="PyTorch" path="M16.149 3.036c.287.16.51.372.67.636.16.264.24.564.24.9h.024c.432-.816.996-1.428 1.692-1.836.72-.408 1.512-.612 2.376-.612.312 0 .636.036.972.108a.864.864 0 0 1 .156.084v3.156c-.036-.06-.084-.108-.144-.144-.312-.228-.708-.342-1.188-.342-.528 0-.984.156-1.368.468-.384.312-.66.732-.828 1.26-.168.504-.252 1.056-.252 1.656V12.6c0 .528.084 1.02.252 1.476.168.456.444.828.828 1.116.384.288.84.432 1.368.432.48 0 .876-.114 1.188-.342.06-.036.108-.084.144-.144v3.144c-.336.072-.66.108-.972.108-.864 0-1.656-.204-2.376-.612-.696-.408-1.26-1.02-1.692-1.836h-.024c0 .336-.084.636-.24.9-.16.264-.384.474-.67.636s-.613.24-1.01.24c-.432 0-.81-.084-1.134-.252-.324-.168-.582-.408-.774-.72s-.288-.696-.288-1.152c0-.528.132-.984.396-1.368.264-.384.636-.66 1.116-.828a1.2 1.2 0 0 1 .156-.036c.192 0 .396.06.612.18.216.12.396.288.54.516.144.228.216.48.216.756 0 .204-.036.384-.108.54a.89.89 0 0 1-.3.384c-.132.12-.294.18-.486.18-.216 0-.408-.072-.576-.216a.828.828 0 0 1-.276-.564H7.81c.024.936.432 1.68 1.224 2.232.792.552 1.764.828 2.916.828.432 0 .816-.084 1.152-.252.336-.168.6-.408.792-.72.192-.312.288-.696.288-1.152 0-.528-.132-.984-.396-1.368-.264-.384-.636-.66-1.116-.828-.048-.012-.108-.024-.156-.036-.204 0-.396.06-.612.18-.216.12-.396.288-.54.516-.144.228-.216.48-.216.756s.036.384.108.54c.072.156.18.282.3.384.12.102.282.156.486.156.216 0 .408-.072.576-.216.168-.144.288-.324.36-.54h3.193c.048.912.48 1.656 1.308 2.232.828.576 1.836.864 3.024.864.912 0 1.74-.216 2.484-.648.744-.432 1.32-1.056 1.728-1.872.408-.816.612-1.764.612-2.844V9.672c0-1.08-.204-2.028-.612-2.844-.408-.816-.984-1.44-1.728-1.872-.744-.432-1.572-.648-2.484-.648-.912 0-1.74.216-2.484.648-.744.432-1.32 1.056-1.728 1.872-.408.816-.612 1.764-.612 2.844h-3.18c0-.336.084-.636.24-.9.16-.264.384-.474.67-.636.288-.162.613-.24 1.01-.24.432 0 .81.084 1.134.252s.582.408.774.72.288.696.288 1.152c0 .528-.132.984-.396 1.368-.264.384-.636.66-1.116.828-.048.012-.108.024-.156-.036-.204 0-.396-.06-.612-.18-.216-.12-.396-.288-.54-.516-.144-.228-.216-.48-.216-.756s.036-.384.108-.54c.072-.156.18-.282.3-.384.12-.102.282-.156.486.156.216 0 .408-.072.576-.216.168-.144.288-.324.36-.54h3.193c.048-.912.48-1.656 1.308-2.232.828-.576 1.836-.864 3.024-.864.912 0 1.74.216 2.484.648.744.432 1.32 1.056 1.728 1.872.408.816.612 1.764.612 2.844V9.66h-3.18c0-.336.084-.636.24-.9s.384-.474.67-.636.613-.24 1.01-.24z"/>
                                <TechLogo name="Scikit-learn" path="M12.15 0L0 5.85v12.3L12.15 24 24 17.76V5.85L12.15 0zm-2.88 5.76l6.06 3.15-3.03 1.74-6.06-3.15 3.03-1.74zm-.3 1.74l-6.15 3.18 3.06 1.77 6.12-3.21-3.03-1.74zm3.18-1.74l6.06 3.15-2.94 1.71-6.15-3.18 3.03-1.68zM3.48 10.8l5.73 3.15v6.3l-5.73-3.15v-6.3zm6.06 10.05v-6.3l5.82-3.18v6.3l-5.82 3.18zm6.06-6.84l5.7-3.12v6.27l-5.7 3.15v-6.3z" />
                                <TechLogo name="Pandas" path="M19.65 8.32H16.5v9.45h-2.33V8.32h-3.9v-2.1h10.23v2.1h-.15zM4.35 17.77V6.22h2.81c1.23 0 2.15.22 2.76.67.61.45.92 1.13.92 2.05 0 .63-.16 1.17-.49 1.62s-.8.79-1.4.99c.75.19 1.33.56 1.74 1.12.41.56.62 1.28.62 2.17 0 .98-.32 1.75-.97 2.3-.65.55-1.57.82-2.77.82H4.35zm2.33-2.16h.62c.76 0 1.31-.15 1.65-.45s.51-.76.51-1.37c0-.62-.17-1.1-.52-1.42s-.88-.49-1.6-.49h-.66v3.73zm0-5.79h.56c.72 0 1.25-.15 1.6-.44.34-.29.51-.72.51-1.28 0-.58-.17-1.02-.52-1.32-.35-.3-.88-.45-1.59-.45h-.56v3.49z"/>
                                <TechLogo name="Git" path="M23.36 10.308L13.693.639a2.25 2.25 0 0 0-3.182 0L.639 10.308a2.25 2.25 0 0 0 0 3.182l6.12 6.12a2.25 2.25 0 0 0 3.182 0l3.743-3.741v5.48a2.25 2.25 0 0 0 2.25 2.25h1.125a2.25 2.25 0 0 0 2.25-2.25v-5.48l3.051 3.051a2.25 2.25 0 0 0 3.182 0l.81-.81a2.25 2.25 0 0 0 0-3.182zM12.107 18.57a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm0-4.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm0-4.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm4.5 4.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm4.5 4.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z" />
                            </div>
                        </div>

                        <Link to="/programs"><Button variant="outline">Explore the Challenge</Button></Link>
                    </div>
                    <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden border border-light-border dark:border-dark-border">
                         <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1740&q=80"
                            alt="AI Challenge - Data Analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden border border-light-border dark:border-dark-border order-2 md:order-1">
                         <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1740&q=80"
                            alt="Startup Support - Team Collaboration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                     <div className="text-center md:text-left order-1 md:order-2">
                        <h3 className="text-2xl font-poppins font-semibold text-primary mb-2">The Launchpad</h3>
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Startup Pitch Support</h2>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
                            Your idea, any sector. This is where visionary concepts take flight. We provide the mentorship, resources, and investor network to transform groundbreaking ideas into market-ready ventures.
                        </p>
                        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-lg p-6 mb-8">
                            <h4 className="font-semibold text-light-text-main dark:text-dark-text-main">Our Support Process:</h4>
                            <ul className="mt-4 space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
                                <li className="flex items-start"><span className="text-primary mr-3 mt-1">&#10003;</span><span><span className="font-semibold text-light-text-main dark:text-dark-text-main">Pitch Deck Refinement:</span> Work with experts to craft a compelling narrative.</span></li>
                                <li className="flex items-start"><span className="text-primary mr-3 mt-1">&#10003;</span><span><span className="font-semibold text-light-text-main dark:text-dark-text-main">Presentation Coaching:</span> Perfect your delivery and Q&A handling.</span></li>
                                <li className="flex items-start"><span className="text-primary mr-3 mt-1">&#10003;</span><span><span className="font-semibold text-light-text-main dark:text-dark-text-main">Investor Connect:</span> Pitch directly to our network of angel investors and VCs on Demo Day.</span></li>
                            </ul>
                        </div>
                        <Link to="/programs"><Button variant="outline">Discover the Support</Button></Link>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const MentorCard: React.FC<{ name: string; title: string; imageUrl: string; }> = ({ name, title, imageUrl }) => (
    <div className="text-center">
        <img src={imageUrl} alt={name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-light-bg-secondary dark:border-dark-bg-secondary shadow-md" />
        <h4 className="text-xl font-poppins font-bold text-light-text-main dark:text-dark-text-main">{name}</h4>
        <p className="text-primary">{title}</p>
    </div>
);

const MentorsSection: React.FC = () => (
    <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary border-y border-light-border dark:border-dark-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <FadeIn>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-4">Meet the Mentors</h2>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto text-center mb-12">
                    Learn from industry veterans and successful entrepreneurs who have been in your shoes.
                </p>
            </FadeIn>
            <FadeIn>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                     <MentorCard 
                        name="Sameer Verma"
                        title="AI Lead, Ex-Google"
                        imageUrl="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80"
                    />
                    <MentorCard 
                        name="Alisha Khan"
                        title="Founder & CEO, InnovateU"
                        imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                    />
                    <MentorCard 
                        name="Vikram Singh"
                        title="Venture Partner, GrowthCap"
                        imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80"
                    />
                </div>
            </FadeIn>
        </div>
    </section>
);


const HowItWorksSection: React.FC = () => {
  const steps = [
    { number: '01', title: 'Choose Your Program', description: 'Select the path that aligns with your goals—either the AI Challenge or Startup Support.' },
    { number: '02', title: 'Submit Your Application', description: 'Complete our straightforward registration form to secure your spot in the next cohort.' },
    { number: '03', title: 'Start Building', description: 'Gain immediate access to resources, connect with mentors, and begin your journey.' },
  ];

  return (
    <section className="py-20 bg-light-bg-main dark:bg-dark-bg-main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <FadeIn>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-4">How It Works</h2>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto text-center mb-12">
                    A simple, transparent process to get you started on your path to success.
                </p>
            </FadeIn>
            <FadeIn>
                 <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-light-border dark:bg-dark-border hidden md:block" aria-hidden="true"></div>
                    <div className="relative grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center bg-light-bg-main dark:bg-dark-bg-main px-4">
                            <div className="w-16 h-16 flex items-center justify-center bg-light-bg-secondary dark:bg-dark-bg-secondary border-2 border-primary text-primary text-2xl font-poppins font-bold rounded-full mx-auto mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-poppins font-bold mb-2">{step.title}</h3>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary">{step.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Link to="/register"><Button variant="primary">Get Started Now</Button></Link>
                </div>
            </FadeIn>
        </div>
    </section>
  );
};



const TestimonialSkeleton: React.FC = () => (
    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg border border-light-border dark:border-dark-border h-full flex flex-col animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-6"></div>
        <div className="mt-auto border-t border-light-border dark:border-dark-border pt-4">
            <div className="h-5 bg-gray-400 dark:bg-gray-600 rounded w-1/3 mb-2"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
    </div>
);

const TestimonialPreview: React.FC = () => {
    const { testimonials, loadingTestimonials, testimonialError } = useAppContext();
    const testimonialsToShow = testimonials.slice(0, 2);

    return (
        <section className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary border-y border-light-border dark:border-dark-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">Success Stories</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-8">
                    {loadingTestimonials ? (
                        <>
                            <TestimonialSkeleton />
                            <TestimonialSkeleton />
                        </>
                    ) : testimonialError ? (
                         <div className="md:col-span-2 text-center text-red-500 bg-red-500/10 p-4 rounded-lg">
                            {testimonialError}
                        </div>
                    ) : testimonialsToShow.length > 0 ? (
                        testimonialsToShow.map((testimonial, index) => (
                            <FadeIn key={index} delay={index === 1 ? 'duration-1000' : 'duration-700'}>
                                <div className="bg-light-bg-main dark:bg-dark-bg-main p-8 rounded-lg border border-light-border dark:border-dark-border h-full flex flex-col">
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 text-xl font-sans flex-grow leading-relaxed">"{testimonial.quote}"</p>
                                    <div className="mt-auto border-t border-light-border dark:border-dark-border pt-4">
                                        <p className="font-bold text-light-text-main dark:text-dark-text-main">{testimonial.name}</p>
                                        <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{testimonial.title} &bull; {testimonial.location}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))
                    ) : (
                        <div className="md:col-span-2 text-center py-10 bg-light-bg-main dark:bg-dark-bg-main rounded-lg border border-light-border dark:border-dark-border">
                            <p className="text-light-text-secondary dark:text-dark-text-secondary">No success stories yet. Be the first to share yours!</p>
                        </div>
                    )}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/testimonials" className="text-primary hover:opacity-80 font-semibold text-lg transition-opacity group">
                         <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">View All & Share Your Story &rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const Home: React.FC = () => {
    return (
        <div className="bg-light-bg-main dark:bg-dark-bg-main">
            <HeroSection />
            <WhyHuntifyySection />
            <ProgramsSection />
            <MentorsSection />
            <TestimonialPreview />
            <HowItWorksSection />
        </div>
    );
};

export default Home;