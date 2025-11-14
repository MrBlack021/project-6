import React from 'react';
import { LogoIcon } from './LogoIcon';
import { useAppContext } from '../context/AppContext';

const SplashScreen: React.FC<{ isFadingOut: boolean }> = ({ isFadingOut }) => {
    const { theme } = useAppContext();
    const bgColor = theme === 'dark' ? 'bg-dark-bg-main' : 'bg-light-bg-main';

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${bgColor} transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        >
            <LogoIcon className="h-16 w-auto" animated={true} />
        </div>
    );
};

export default SplashScreen;
