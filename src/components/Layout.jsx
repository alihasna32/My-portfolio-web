import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-300 font-display min-h-screen">
            {children}
        </div>
    );
};

export default Layout;
