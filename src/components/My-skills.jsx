import React, { useState, useEffect } from 'react';
import { Code, Database, Wrench } from 'lucide-react';

const MySkills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/skills');
                const data = await response.json();
                setSkills(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch skills", error);
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    // Helper to sort skills by level desc
    const sortSkills = (list) => list.sort((a, b) => b.level - a.level);

    if (loading) return null;

    const frontendSkills = sortSkills(skills.filter(skill => skill.category === 'Frontend'));
    const backendSkills = sortSkills(skills.filter(skill => skill.category === 'Backend'));
    const toolsSkills = skills.filter(skill => skill.category === 'Tools' || (!['Frontend', 'Backend'].includes(skill.category)));

    return (
        <section className="container mx-auto" id="skills">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Technical Expertise
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl xl:max-w-full mx-auto">
                {/* Frontend Card */}
                <div className="bg-gray-500/10 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-[#2596be]/30 hover:shadow-[0_0_30px_rgba(37,150,190,0.15)] transition-all duration-500 group relative overflow-hidden" data-aos="fade-right">
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2596be]/10 rounded-full blur-3xl group-hover:bg-[#2596be]/20 transition-all duration-700"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                            <div className="p-3 bg-[#2596be]/10 rounded-xl text-[#2596be] group-hover:scale-110 transition-transform duration-300">
                                <Code size={24} />
                            </div>
                            Frontend
                        </h3>

                        <div className="space-y-6">
                            {frontendSkills.map((skill) => (
                                <div key={skill._id} className="group/skill">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-gray-300 font-medium tracking-wide group-hover/skill:text-white transition-colors">{skill.name}</span>
                                        <span className="text-[#2596be] text-sm font-semibold">{skill.level}</span>
                                    </div>
                                    <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#2596be] to-cyan-400 rounded-full shadow-[0_0_10px_rgba(37,240,253,0.3)] relative"
                                            style={{ width: `${skill.level}` }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Backend Card */}
                <div className="bg-gray-500/10 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 group relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                <Database size={24} />
                            </div>
                            Backend
                        </h3>

                        <div className="space-y-6">
                            {backendSkills.map((skill) => (
                                <div key={skill._id} className="group/skill">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-gray-300 font-medium tracking-wide group-hover/skill:text-white transition-colors">{skill.name}</span>
                                        <span className="text-purple-400 text-sm font-semibold">{skill.level}</span>
                                    </div>
                                    <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
                                        <div
                                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.3)] relative"
                                            style={{ width: `${skill.level}` }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools Card */}
                <div className="bg-gray-500/10 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 group relative overflow-hidden" data-aos="fade-left" data-aos-delay="200">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                <Wrench size={24} />
                            </div>
                            Tools & Technologies
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {toolsSkills.map((skill) => (
                                <span
                                    key={skill._id}
                                    className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 transform hover:-translate-y-1 cursor-default text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;
