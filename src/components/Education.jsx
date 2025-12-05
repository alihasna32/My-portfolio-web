import React from 'react';

const Education = () => {
    return (
        <div>
            <div className="bg-gray-200/30 dark:bg-gray-900/40 p-8 rounded-lg border border-gray-300 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
                    <div className="space-y-6 border-l-2 border-gray-400 dark:border-gray-600 ml-3">
                        <div className="relative pl-8">
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background-dark"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2027 - Future</p>
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Planning to take BSc in Computer Science and Engineering</h3>
                            <p className="text-gray-600 dark:text-gray-400">Planning to take BSc in Computer Science and Engineering</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background-dark"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2027</p>
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">TMSS Textile Engineering Institute</h3>
                            <p className="text-gray-600 dark:text-gray-400">Computer Science 4th semester running</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background-dark"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">National School and College</h3>
                            <p className="text-gray-600 dark:text-gray-400">SSC passed in Science</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Education;