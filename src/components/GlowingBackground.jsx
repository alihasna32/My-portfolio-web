import React from 'react';

const GlowingBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {/* Orb 1 */}
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#2596be] opacity-30 blur-[80px] rounded-full" />

                {/* Orb 2 */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#2596be] opacity-30 blur-[80px] rounded-full" />

                {/* Orb 3 */}
                <div className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] bg-[#2596be] opacity-20 blur-[80px] rounded-full" />
            </div>

            {/* Overlay to darken and smooth out the effect slightly */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>
    );
};

export default GlowingBackground;
