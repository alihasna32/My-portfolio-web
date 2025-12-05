import { ArrowBigUp } from 'lucide-react';
import React from 'react';

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <button onClick={scrollToTop} className="fixed bottom-8 left-8 w-12 h-12 max-xl:hidden bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors z-50">
            <ArrowBigUp />
        </button>
    );
};

export default ScrollToTop;
