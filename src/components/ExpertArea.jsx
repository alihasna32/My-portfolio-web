import React from 'react';
import reactLogo from '../assets/React.jpg';
import jsLogo from '../assets/JS.jpg';
import nodeLogo from '../assets/Node-js.jpg';
import tailwindLogo from '../assets/Tailwind.jpg';
import htmlcssLogo from '../assets/HtmlCss.jpg';
import farmerMotionLogo from '../assets/Framer-motion.png';
const ExpertArea = () => {
    return (
        <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-6">My Expert Area</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3  rounded-lg border border-gray-600/100">
                    <img alt="Figma logo" className="h-10 w-10 mb-2 rounded-xl" src={reactLogo} />
                    <p className="text-sm text-gray-300">React.js</p>
                </div>
                <div className="flex flex-col items-center p-3  rounded-lg border border-gray-600/100">
                    <img alt="Notion logo" className="h-10 w-10 mb-2 rounded-xl" src={jsLogo} />
                    <p className="text-sm text-gray-300">JS</p>
                </div>
                <div className="flex flex-col items-center p-3  rounded-lg border border-gray-600/100">
                    <img alt="Miro logo" className="h-10 w-10 mb-2 rounded-xl" src={nodeLogo} />
                    <p className="text-sm text-gray-300">Node.js</p>
                </div>
                <div className="flex flex-col items-center p-3  rounded-lg border border-gray-600/100">
                    <img alt="Framer logo" className="h-10 w-10 mb-2 rounded-xl" src={tailwindLogo} />
                    <p className="text-sm text-gray-300">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center p-3  rounded-lg border border-gray-600/100">
                    <img alt="Webflow logo" className="h-10 w-10 mb-2 rounded-xl" src={htmlcssLogo} />
                    <p className="text-sm text-gray-300">HTML/CSS</p>
                </div>
                <div className="flex flex-col items-center p-3  rounded-lg border border-gray-600/100">
                    <img alt="Zeplin logo" className="h-10 w-10 mb-2 rounded-xl" src={farmerMotionLogo} />
                    <p className="text-sm text-gray-300">Framer motion</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertArea;
