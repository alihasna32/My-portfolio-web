import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('All');

    // Fetch filters to match backend categories
    const filters = ['All', 'Full Stack', 'Mern Stack', 'Frontend'];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/projects?status=Live');
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch projects", error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-20"
        >
            <main className="space-y-12 container mx-auto px-4">
                <div className="text-center pt-8">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">My Projects</h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Discover my latest work, from interactive frontend designs to complex full-stack applications.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap justify-center gap-2 bg-black/40 p-2 rounded-xl border border-gray-800 backdrop-blur-sm">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-[#2596be] text-white shadow-[0_0_20px_rgba(37,150,190,0.4)]'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2596be]"></div>
                    </div>
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center text-gray-500 py-20">No projects found for {activeFilter}.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-[#0c151d]/80 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden hover:border-[#2596be]/30 hover:shadow-[0_0_30px_rgba(37,150,190,0.15)] transition-all duration-500 group flex flex-col h-full"
                            >
                                {/* Image Area with Overlay Buttons */}
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={project.image || 'https://via.placeholder.com/600x400'}
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 flex items-center justify-center bg-[#2596be] text-white rounded-full hover:bg-[#1e7ca0] hover:scale-110 transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                                                title="View Live"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.codeLink && (
                                            <a
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-600 hover:scale-110 transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100"
                                                title="View Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2596be] transition-colors">{project.title}</h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {project.description ? (
                                            project.description.length > 100
                                                ? `${project.description.substring(0, 100)}...`
                                                : project.description
                                        ) : "No description available for this project."}
                                    </p>

                                    <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#2596be]/10 border border-white/5 hover:border-[#2596be]/30 text-gray-300 hover:text-[#2596be] transition-all flex items-center justify-center gap-2 group/btn">
                                        <span className="font-medium text-sm">Full Details</span>
                                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </motion.div>
    );
};

export default Portfolio;
