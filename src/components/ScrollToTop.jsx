import React from 'react';

const ScrollToTop = () => {
    return (
        <button className="fixed bottom-8 left-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors z-50">
            <span className="material-icons-outlined">arrow_upward</span>
        </button>
    );
};

export default ScrollToTop;
