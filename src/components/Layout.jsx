import React from 'react';
import GlowingBackground from './GlowingBackground';

const Layout = ({ children }) => {
    return (
        <div className="text-gray-300 font-display min-h-screen relative">
            <GlowingBackground />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Layout;
