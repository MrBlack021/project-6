
import React from 'react';
import { FadeIn } from '../components/FadeIn';

const About: React.FC = () => {
    return (
        <div className="bg-bg-main py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <header className="text-center mb-16">
                        <h1 className="text-4xl font-poppins font-bold mb-4">About Huntifyy</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We are the architects of innovation, building a community where technology and entrepreneurship thrive.
                        </p>
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-poppins font-bold mb-4">Our Mission & Vision</h2>
                            <p className="text-gray-600 mb-4">
                                Our mission is to democratize access to cutting-edge technology education and startup resources. We aim to identify and nurture the next generation of tech leaders and visionaries from every corner of the globe.
                            </p>
                            <p className="text-gray-600">
                                We envision a future where anyone with a powerful idea has a clear pathway to bring it to life, supported by a robust ecosystem of mentors, peers, and investors. Huntifyy is more than a platform; it's a movement.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1742&q=80" alt="Team collaborating" className="rounded-lg shadow-soft" />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="bg-bg-section p-8 md:p-12 rounded-lg text-center">
                        <h2 className="text-3xl font-poppins font-bold mb-4">How Huntifyy Works</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                            We believe in a hands-on, project-based approach. Our platform provides the tools, challenges, and connections to accelerate your growth.
                        </p>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-soft">
                            {/* Placeholder for video */}
                            <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                                <p className="text-white text-xl">Platform Video Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default About;
