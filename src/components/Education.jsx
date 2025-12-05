import React from 'react';

const Education = () => {
    return (
        <div>
            <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
                <div className="space-y-6 border-l-2 border-gray-600 ml-3">
                    <div className="relative pl-8">
                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background-dark"></div>
                        <p className="text-sm text-gray-400">2027 - Future</p>
                        <h3 className="font-semibold text-lg text-gray-200">Planning to take BSc in Computer Science and Engineering</h3>
                        <p className="text-gray-400">Planning to take BSc in Computer Science and Engineering</p>
                    </div>
                    <div className="relative pl-8">
                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background-dark"></div>
                        <p className="text-sm text-gray-400">2023 - 2027</p>
                        <h3 className="font-semibold text-lg text-gray-200">TMSS Textile Engineering Institute</h3>
                        <p className="text-gray-400">Computer Science 4th semester running</p>
                    </div>
                    <div className="relative pl-8">
                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background-dark"></div>
                        <p className="text-sm text-gray-400">2023</p>
                        <h3 className="font-semibold text-lg text-gray-200">National School and College</h3>
                        <p className="text-gray-400">SSC passed in Science</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;