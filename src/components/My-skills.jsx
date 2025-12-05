import React from 'react';

const MySkills = () => {
    return (
        <div>
            <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">My Skills</h2>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-300">React & JavaScript</span>
                            <span className="text-sm font-medium text-gray-300">95%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-300">Node.js | Express | rest API</span>
                            <span className="text-sm font-medium text-gray-300">90%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-300">HTML | CSS | Tailwind CSS</span>
                            <span className="text-sm font-medium text-gray-300">80%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-300">MongoDB</span>
                            <span className="text-sm font-medium text-gray-300">92%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-300">Git & GitHub | Framer motion | Firebase Authentication & others</span>
                            <span className="text-sm font-medium text-gray-300">88%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
