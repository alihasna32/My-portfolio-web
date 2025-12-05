import React from 'react';
import { motion } from 'framer-motion';

const GlowingBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
            {/* SVG Filter for Fluid Distortion */}
            <svg className="hidden">
                <defs>
                    <filter id="fluid">
                        <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="150" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>

            {/* Container with Filter Applied */}
            <div className="absolute inset-0 w-full h-full" style={{ filter: 'url(#fluid)' }}>
                {/* Orb 1 */}
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#2596be] opacity-30 blur-[60px]"
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, 50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Orb 2 */}
                <motion.div
                    className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#2596be] opacity-30 blur-[60px]"
                    animate={{
                        x: [0, -100, 50, 0],
                        y: [0, -50, -100, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Orb 3 */}
                <motion.div
                    className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-[#2596be] opacity-20 blur-[60px]"
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.3, 0.8, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Overlay to darken and smooth out the effect slightly */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>
    );
};

export default GlowingBackground;
