import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import SplashScreen from './components/SplashScreen';


const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const ThemedApp: React.FC = () => {
    const { theme } = useAppContext();

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    return (
        <HashRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-light-bg-main dark:bg-dark-bg-main text-light-text-main dark:text-dark-text-main">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-and-conditions" element={<Terms />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};


const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fading out after the logo animation completes (approx. 2.8s)
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 2800);

        // Hide the splash screen completely after the fade-out transition (500ms)
        const hideTimer = setTimeout(() => {
            setShowSplash(false);
        }, 3300);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AppProvider>
            {showSplash && <SplashScreen isFadingOut={isFading} />}
            <div className={`transition-opacity duration-500 ${!showSplash ? 'opacity-100' : 'opacity-0'}`}>
                 <ThemedApp />
            </div>
        </AppProvider>
    );
};

export default App;