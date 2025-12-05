import React from 'react';
import reactLogo from '../assets/React.jpg';
import jsLogo from '../assets/JS.jpg';
import nodeLogo from '../assets/Node-js.jpg';
import tailwindLogo from '../assets/Tailwind.jpg';
import htmlcssLogo from '../assets/HtmlCss.jpg';
import farmerMotionLogo from '../assets/Framer-motion.png';
const ExpertArea = () => {
    return (
        <div className="bg-gray-200/30 dark:bg-gray-900/40 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Expert Area</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Figma logo" className="h-10 w-10 mb-2" src={reactLogo} />
                    <p className="text-sm text-gray-700 dark:text-gray-300">React.js</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Notion logo" className="h-10 w-10 mb-2" src={jsLogo} />
                    <p className="text-sm text-gray-700 dark:text-gray-300">JS</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Miro logo" className="h-10 w-10 mb-2" src={nodeLogo} />
                    <p className="text-sm text-gray-700 dark:text-gray-300">Node.js</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Framer logo" className="h-10 w-10 mb-2" src={tailwindLogo} />
                    <p className="text-sm text-gray-700 dark:text-gray-300">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Webflow logo" className="h-10 w-10 mb-2" src={htmlcssLogo} />
                    <p className="text-sm text-gray-700 dark:text-gray-300">HTML/CSS</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Zeplin logo" className="h-10 w-10 mb-2" src={farmerMotionLogo} />
                    <p className="text-sm text-gray-700 dark:text-gray-300">Framer motion</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertArea;
