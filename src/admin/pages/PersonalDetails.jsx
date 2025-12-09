import React, { useState, useEffect } from 'react';
import { Save, User, FileText, Mail, Phone, Globe, Link as LinkIcon, Facebook, Instagram, Github, Linkedin, MessageCircle } from 'lucide-react';

const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        email: '',
        phone: '',
        whatsapp: '',
        facebook: '',
        instagram: '',
        github: '',
        linkedin: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/profile');
            if (response.ok) {
                const data = await response.json();
                if (data && Object.keys(data).length > 0) {
                    setFormData({
                        name: data.name || '',
                        description: data.description || '',
                        email: data.email || '',
                        phone: data.phone || '',
                        whatsapp: data.whatsapp || '',
                        facebook: data.facebook || '',
                        instagram: data.instagram || '',
                        github: data.github || '',
                        linkedin: data.linkedin || ''
                    });
                }
            }
        } catch (error) {
            console.error('Failed to fetch profile', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${token}` // If auth is used
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Profile updated successfully!');
            } else {
                alert('Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile', error);
            alert('Error updating profile.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="text-gray-400">Loading details...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                <h1 className="text-2xl font-semibold text-gray-100">Personal Details</h1>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-[#2596be]/20 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4">
                        <User size={20} className="text-[#2596be]" />
                        Basic Information
                    </h2>

                    <div>
                        <label className="block text-gray-400 text-sm mb-1">Full Name</label>
                        <div className="relative">
                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                placeholder="e.g. Ali Hasan"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-1">Short Description</label>
                        <div className="relative">
                            <FileText size={18} className="absolute left-3 top-3 text-gray-500" />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors resize-none"
                                placeholder="Brief intro about yourself..."
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-[#2596be]/20 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4">
                        <Mail size={20} className="text-[#2596be]" />
                        Contact Information
                    </h2>

                    <div>
                        <label className="block text-gray-400 text-sm mb-1">Email</label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-1">Phone</label>
                        <div className="relative">
                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                placeholder="+8801..."
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-1">WhatsApp Link</label>
                        <div className="relative">
                            <MessageCircle size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                placeholder="https://wa.me/..."
                            />
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-[#2596be]/20 space-y-4 lg:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-100 flex items-center gap-2 mb-4">
                        <Globe size={20} className="text-[#2596be]" />
                        Social Profiles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Facebook URL</label>
                            <div className="relative">
                                <Facebook size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="facebook"
                                    value={formData.facebook}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                    placeholder="https://facebook.com/..."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Instagram URL</label>
                            <div className="relative">
                                <Instagram size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="instagram"
                                    value={formData.instagram}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                    placeholder="https://instagram.com/..."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-1">GitHub URL</label>
                            <div className="relative">
                                <Github size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                    placeholder="https://github.com/..."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-1">LinkedIn URL</label>
                            <div className="relative">
                                <Linkedin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-gray-200 focus:outline-none focus:border-[#2596be] transition-colors"
                                    placeholder="https://linkedin.com/..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-[#2596be] hover:bg-[#1e7ca0] text-white py-3 px-8 rounded-xl font-medium shadow-lg shadow-[#2596be]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {saving ? (
                            <>Measuring...</> // Just kidding, "Saving..." but let's stick to standard
                        ) : (
                            <>
                                <Save size={20} />
                                Save Changes
                            </>
                        )}
                        {saving && "Saving..."}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalDetails;
