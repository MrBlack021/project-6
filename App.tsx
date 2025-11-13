
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
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

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};


const App: React.FC = () => {
    return (
        <AppProvider>
            <HashRouter>
                <ScrollToTop />
                <div className="flex flex-col min-h-screen">
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
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </HashRouter>
        </AppProvider>
    );
};

export default App;
