import React, { useState, useEffect } from 'react';

const PageLoader = ({ onLoadingComplete }) => {
    const [text, setText] = useState('');
    const fullText = "Hey, I am ALI HASAN. Are you finding me....";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                if (onLoadingComplete) {
                    setTimeout(() => {
                        onLoadingComplete();
                    }, 1000);
                }
            }
        }, 50);
        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0c151d] space-y-8 p-4 z-[9999] fixed inset-0">
            {/* Spinner */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#2596be] shadow-[0_0_15px_rgba(37,150,190,0.5)]"></div>

            {/* Glass Text Container */}
            <div className="px-6 py-3 bg-[#2596be]/10 backdrop-blur-md border border-[#2596be]/20 rounded-full shadow-[0_0_20px_rgba(37,150,190,0.2)] text-center max-w-[90vw]">
                <span className="text-[#2596be] font-mono text-lg md:text-xl font-medium tracking-wide break-words">
                    {text}
                    <span className="animate-pulse ml-1">|</span>
                </span>
            </div>
        </div>
    );
};

export default PageLoader;
