import React, { useState } from 'react';
import AdminLogin from './AdminLogin';

const Footer = () => {
    const [clickCount, setClickCount] = useState(0);
    const [showLogin, setShowLogin] = useState(false);

    const handleNameClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 10) {
            setShowLogin(true);
            setClickCount(0); 
        }
    };

    return (
        <>
            <footer className="flex justify-center items-center h-16 bg-gray-900/30 backdrop-blur-sm border border-white/10 shadow-lg px-6 py-1.5 rounded-lg max-sm:px-2 max-sm:py-1 max-sm:h-12 mt-8">
                <p>© 2025 <span onClick={handleNameClick} className="cursor-pointer select-none hover:text-[#2596be] transition-colors">Ali</span> Hasan. All rights reserved.</p>
            </footer>
            {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
        </>
    );
};

export default Footer;