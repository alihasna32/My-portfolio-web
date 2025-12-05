import React from 'react';
import webLogo from '../assets/Web-development.jpg';
import photoLogo from '../assets/Photo-editing.jpg';
import productLogo from '../assets/Product-design.jpg';
import socialLogo from '../assets/Social-manager.jpg';

const Services = () => {
    return (
        <div className="bg-gray-200/30 dark:bg-gray-900/40 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Services I Offered</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="UI UX Design icon" className="h-16 w-16 mb-2 invert dark:invert-0" src={webLogo} />
                    <p className="text-sm text-center text-gray-700 dark:text-gray-300">Web Development</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Mobile App icon" className="h-16 w-16 mb-2 invert dark:invert-0" src={photoLogo} />
                    <p className="text-sm text-center text-gray-700 dark:text-gray-300">Photo Editing</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Product Design icon" className="h-16 w-16 mb-2 invert dark:invert-0" src={productLogo} />
                    <p className="text-sm text-center text-gray-700 dark:text-gray-300">Product Design</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-300/30 dark:bg-gray-800/40 rounded-lg border border-gray-400/50 dark:border-gray-700/50">
                    <img alt="Branding icon" className="h-16 w-16 mb-2 invert dark:invert-0" src={socialLogo} />
                    <p className="text-sm text-center text-gray-700 dark:text-gray-300">Social Media Management</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
