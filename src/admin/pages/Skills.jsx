import React, { useState, useEffect } from 'react';
import { Plus, X, Award } from 'lucide-react';
import { toast } from 'react-toastify';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', level: '50%', category: 'Frontend' });
    const token = localStorage.getItem('token');

    const fetchSkills = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/skills');
            const data = await response.json();
            setSkills(data);
            setLoading(false);
        } catch (error) {
            toast.error('Failed to fetch skills');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success('Skill added');
                setIsModalOpen(false);
                setFormData({ name: '', level: '50%', category: 'Frontend' });
                fetchSkills();
            } else {
                toast.error('Failed to add skill');
            }
        } catch (error) {
            toast.error('Error adding skill');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this skill?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/skills/${id}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.ok) {
                    toast.success('Skill deleted');
                    fetchSkills();
                } else {
                    toast.error('Failed to delete');
                }
            } catch (error) {
                toast.error('Error deleting skill');
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-100">Skills</h1>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-[#2596be] hover:bg-[#1e7ca0] text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(37,150,190,0.4)]">
                    <Plus size={18} className="mr-2" />
                    Add Skill
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend */}
                <div className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 rounded-xl p-6">
                    <h2 className="text-lg font-medium text-white mb-4">Frontend</h2>
                    <div className="space-y-4">
                        {loading ? <p className="text-gray-400">Loading...</p> : skills.filter(s => s.category === 'Frontend').map(skill => (
                            <div key={skill._id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-[#2596be]/30 transition-colors">
                                <div className="flex items-center w-full">
                                    <div className="p-2 bg-[#2596be]/20 rounded-lg mr-3">
                                        <Award size={20} className="text-[#2596be]" />
                                    </div>
                                    <div className="w-full mr-4">
                                        <h4 className="text-white font-medium">{skill.name}</h4>
                                        <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1.5">
                                            <div className="h-full bg-[#2596be] rounded-full" style={{ width: skill.level }}></div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(skill._id)} className="text-gray-400 hover:text-red-400 p-1">
                                    <X size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend & Others */}
                <div className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 rounded-xl p-6">
                    <h2 className="text-lg font-medium text-white mb-4">Backend & Others</h2>
                    <div className="space-y-4">
                        {loading ? <p className="text-gray-400">Loading...</p> : skills.filter(s => s.category !== 'Frontend').map(skill => (
                            <div key={skill._id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-[#2596be]/30 transition-colors">
                                <div className="flex items-center w-full">
                                    <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                                        <Award size={20} className="text-purple-400" />
                                    </div>
                                    <div className="w-full mr-4">
                                        <h4 className="text-white font-medium">{skill.name}</h4>
                                        <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1.5">
                                            <div className="h-full bg-purple-500 rounded-full" style={{ width: skill.level }}></div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(skill._id)} className="text-gray-400 hover:text-red-400 p-1">
                                    <X size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#0c151d] border border-[#2596be]/20 p-6 rounded-xl w-full max-w-md">
                        <h2 className="text-xl font-bold text-white mb-4">Add New Skill</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input name="name" onChange={handleChange} value={formData.name} placeholder="Skill Name" className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be]" required />
                            <input name="level" onChange={handleChange} value={formData.level} placeholder="Level (e.g. 80%)" className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be]" required />
                            <select name="category" onChange={handleChange} value={formData.category} className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2596be]">
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Database">Database</option>
                                <option value="Tools">Tools</option>
                            </select>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-400 hover:text-white">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-[#2596be] hover:bg-[#1e7ca0] text-white rounded-lg">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;
