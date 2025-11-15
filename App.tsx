import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import PaymentSuccess from './pages/PaymentSuccess';


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
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-and-conditions" element={<Terms />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};


const App: React.FC = () => {
    return (
        <AppProvider>
            <ThemedApp />
        </AppProvider>
    );
};

export default App;