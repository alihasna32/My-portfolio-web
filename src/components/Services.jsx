import React from 'react';
import webLogo from '../assets/Web-development.jpg';
import photoLogo from '../assets/Photo-editing.jpg';
import productLogo from '../assets/Product-design.jpg';
import socialLogo from '../assets/Social-manager.jpg';

const Services = () => {
    return (
        <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-6">Services I Offered</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4  border-gray-600/100 rounded-lg border">
                    <img alt="UI UX Design icon" className="h-16 w-16 mb-2 invert dark:invert-0 rounded-xl" src={webLogo} />
                    <p className="text-sm text-center text-gray-300">Web Development</p>
                </div>
                <div className="flex flex-col items-center p-4  border-gray-600/100 rounded-lg border">
                    <img alt="Mobile App icon" className="h-16 w-16 mb-2 invert dark:invert-0 rounded-xl" src={photoLogo} />
                    <p className="text-sm text-center text-gray-300">Photo Editing</p>
                </div>
                <div className="flex flex-col items-center p-4  border-gray-600/100 rounded-lg border">
                    <img alt="Product Design icon" className="h-16 w-16 mb-2 invert dark:invert-0 rounded-xl" src={productLogo} />
                    <p className="text-sm text-center text-gray-300">Product Design</p>
                </div>
                <div className="flex flex-col items-center p-4  border-gray-600/100 rounded-lg border">
                    <img alt="Branding icon" className="h-16 w-16 mb-2 invert dark:invert-0 rounded-xl" src={socialLogo} />
                    <p className="text-sm text-center text-gray-300">Social Media Management</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
