import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, ExternalLink, Image as ImageIcon, Github, X, Code } from 'lucide-react';
import { toast } from 'react-toastify';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'Frontend',
        status: 'In Progress',
        image: '',
        link: '', // Live Preview
        codeLink: '', // GitHub Link
        description: '', // Short Description
        technologies: '' // Comma separated string
    });

    const token = localStorage.getItem('token');
    const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

    // Fetch Projects
    const fetchProjects = async () => {
        try {
            const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/projects');
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        } catch (error) {
            toast.error('Failed to fetch projects');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Image Upload
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const imgData = new FormData();
        imgData.append('image', file);

        try {
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: 'POST',
                body: imgData,
            });
            const data = await res.json();
            if (data.success) {
                setFormData({ ...formData, image: data.data.url });
                toast.success('Image uploaded successfully');
            } else {
                toast.error('Image upload failed');
            }
        } catch (error) {
            toast.error('Error uploading image');
        } finally {
            setUploading(false);
        }
    };

    // Open Modal for Add
    const openAddModal = () => {
        setIsEditMode(false);
        setCurrentProjectId(null);
        setFormData({
            title: '',
            category: 'Frontend',
            status: 'In Progress',
            image: '',
            link: '',
            codeLink: '',
            description: ''
        });
        setIsModalOpen(true);
    };

    // Open Modal for Edit
    const openEditModal = (project) => {
        setIsEditMode(true);
        setCurrentProjectId(project._id);
        setFormData({
            title: project.title,
            category: project.category,
            status: project.status,
            image: project.image,
            link: project.link || '',
            codeLink: project.codeLink || '',
            description: project.description || '',
            technologies: project.technologies ? project.technologies.join(', ') : ''
        });
        setIsModalOpen(true);
    };

    // Submit Form (Add or Update)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isEditMode
            ? `https://my-portfolio-server-lnc3.onrender.com/api/projects/${currentProjectId}`
            : 'https://my-portfolio-server-lnc3.onrender.com/api/projects';

        const method = isEditMode ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech !== '')
                })
            });

            if (response.ok) {
                toast.success(isEditMode ? 'Project updated' : 'Project added');
                setIsModalOpen(false);
                fetchProjects();
            } else {
                toast.error('Operation failed');
            }
        } catch (error) {
            toast.error('Error saving project');
        }
    };

    // Delete Project
    const handleDelete = async (id) => {
        if (window.confirm('Delete this project?')) {
            try {
                const response = await fetch(`https://my-portfolio-server-lnc3.onrender.com/api/projects/${id}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.ok) {
                    toast.success('Project deleted');
                    fetchProjects();
                } else {
                    toast.error('Failed to delete');
                }
            } catch (error) {
                toast.error('Error deleting project');
            }
        }
    };

    return (
        <div className="space-y-6 pb-20">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-100">Projects</h1>
                <button
                    onClick={openAddModal}
                    className="flex items-center px-4 py-2 bg-[#2596be] hover:bg-[#1e7ca0] text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(37,150,190,0.4)]"
                >
                    <Plus size={18} className="mr-2" />
                    Add Project
                </button>
            </div>

            {loading ? (
                <p className="text-gray-400">Loading projects...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project._id} className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 rounded-xl overflow-hidden hover:border-[#2596be]/40 transition-all duration-300 flex flex-col h-full">
                            <div className="h-48 bg-gray-800 relative group overflow-hidden">
                                <img src={project.image || 'https://via.placeholder.com/400x300'} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity space-x-4">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#2596be] text-white transition-colors" title="Live Preview">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.codeLink && (
                                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title="View Code">
                                            <Code size={20} />
                                        </a>
                                    )}
                                </div>
                                <div className="absolute top-2 right-2">
                                    <span className={`px-2 py-1 text-xs rounded-full shadow-lg ${project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-lg font-semibold text-white line-clamp-1" title={project.title}>{project.title}</h3>
                                    </div>
                                    <p className="text-[#2596be] text-xs font-medium mb-2">{project.category}</p>
                                    <p className="text-gray-400 text-sm line-clamp-3">{project.description || "No description available."}</p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-700/50 flex justify-end space-x-2">
                                    <button onClick={() => openEditModal(project)} className="p-2 text-gray-400 hover:text-[#2596be] hover:bg-white/5 rounded-lg transition-colors">
                                        <Edit2 size={18} />
                                    </button>
                                    <button onClick={() => handleDelete(project._id)} className="p-2 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-[#0c151d] border border-[#2596be]/20 rounded-xl w-full max-w-2xl shadow-2xl my-8">
                        <div className="flex justify-between items-center p-6 border-b border-gray-800">
                            <h2 className="text-xl font-bold text-white">{isEditMode ? 'Edit Project' : 'Add New Project'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Project Title</label>
                                        <input
                                            name="title"
                                            onChange={handleChange}
                                            value={formData.title}
                                            placeholder="e.g. E-Commerce App"
                                            className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Category</label>
                                        <select
                                            name="category"
                                            onChange={handleChange}
                                            value={formData.category}
                                            className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                            required
                                        >
                                            <option value="Frontend">Frontend</option>
                                            <option value="Full Stack">Full Stack</option>
                                            <option value="Mern Stack">Mern Stack</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Status</label>
                                        <select
                                            name="status"
                                            onChange={handleChange}
                                            value={formData.status}
                                            className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                        >
                                            <option value="In Progress">In Progress</option>
                                            <option value="Live">Live</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Project Image</label>
                                        <div className="flex gap-2">
                                            <input
                                                name="image"
                                                onChange={handleChange}
                                                value={formData.image}
                                                placeholder="Image URL"
                                                className="flex-1 bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                                readOnly={uploading}
                                            />
                                            <label className={`flex items-center justify-center p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                                                <ImageIcon size={20} className="text-gray-300" />
                                            </label>
                                        </div>
                                        {uploading && <p className="text-xs text-[#2596be] mt-1">Uploading to ImgBB...</p>}
                                        {formData.image && !uploading && (
                                            <div className="mt-2 h-32 rounded-lg overflow-hidden border border-gray-700 relative">
                                                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Full Width Inputs */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Short Description</label>
                                <textarea
                                    name="description"
                                    onChange={handleChange}
                                    value={formData.description}
                                    placeholder="Brief description of the project..."
                                    rows="3"
                                    className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Technologies (comma separated)</label>
                                <input
                                    name="technologies"
                                    onChange={handleChange}
                                    value={formData.technologies}
                                    placeholder="React, Node.js, MongoDB..."
                                    className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Live Preview Link</label>
                                    <div className="relative">
                                        <ExternalLink size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                        <input
                                            name="link"
                                            onChange={handleChange}
                                            value={formData.link}
                                            placeholder="https://..."
                                            className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">GitHub / Code Link</label>
                                    <div className="relative">
                                        <Github size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                        <input
                                            name="codeLink"
                                            onChange={handleChange}
                                            value={formData.codeLink}
                                            placeholder="https://github.com/..."
                                            className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:border-[#2596be] focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-800">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 text-gray-400 hover:text-white transition-colors">Cancel</button>
                                <button type="submit" className="px-6 py-2 bg-[#2596be] hover:bg-[#1e7ca0] text-white rounded-lg transition-colors font-medium shadow-lg shadow-[#2596be]/20">
                                    {isEditMode ? 'Update Project' : 'Save Project'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
