import React, { useState, useEffect } from 'react';
import { FolderKanban, Wrench, MessageSquare, Image, Activity, FileText, Upload } from 'lucide-react';

const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 rounded-xl shadow-sm p-6 flex items-center hover:border-[#2596be]/40 transition-all duration-300 group">
        <div className={`rounded-xl p-3 mr-4 ${color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-2xl font-bold text-white tracking-wide">{value}</p>
        </div>
    </div>
);

const Dashboard = () => {
    const [stats, setStats] = useState({
        projects: 0,
        skills: 0,
        messages: 0,
        gallery: 0
    });
    const [loading, setLoading] = useState(true);
    const [resumeFile, setResumeFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleUploadResume = async () => {
        if (!resumeFile) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('resume', resumeFile);

        try {
            const response = await fetch('http://localhost:5000/api/resume/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Resume uploaded successfully!');
                setResumeFile(null);
                // Reset file input manually if needed, or rely on state clearing
            } else {
                alert('Failed to upload resume.');
            }
        } catch (error) {
            console.error('Error uploading resume:', error);
            alert('Error uploading resume.');
        } finally {
            setUploading(false);
        }
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [projectsRes, skillsRes, messagesRes, galleryRes] = await Promise.all([
                    fetch('http://localhost:5000/api/projects'),
                    fetch('http://localhost:5000/api/skills'),
                    fetch('http://localhost:5000/api/messages'),
                    fetch('http://localhost:5000/api/gallery')
                ]);

                const projects = await projectsRes.json();
                const skills = await skillsRes.json();
                const messages = await messagesRes.json();
                const gallery = await galleryRes.json();

                setStats({
                    projects: projects.length,
                    skills: skills.length,
                    messages: messages.length,
                    gallery: gallery.length
                });
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const token = localStorage.getItem('token'); // Use token for checking auth if needed, though dashboard is protected by route

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                <h1 className="text-2xl font-semibold text-gray-100">Overview</h1>
                <span className="text-sm text-[#2596be] bg-[#2596be]/10 px-3 py-1 rounded-full border border-[#2596be]/20">Real-time Updates</span>
            </div>

            {loading ? (
                <div className="text-gray-400">Loading stats...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Projects"
                        value={stats.projects}
                        icon={<FolderKanban size={24} className="text-[#2596be]" />}
                        color="bg-[#2596be]"
                    />
                    <StatCard
                        title="Active Skills"
                        value={stats.skills}
                        icon={<Wrench size={24} className="text-purple-400" />}
                        color="bg-purple-500"
                    />
                    <StatCard
                        title="Gallery Items"
                        value={stats.gallery}
                        icon={<Image size={24} className="text-pink-400" />}
                        color="bg-pink-500"
                    />
                    <StatCard
                        title="Messages"
                        value={stats.messages}
                        icon={<MessageSquare size={24} className="text-green-400" />}
                        color="bg-green-500"
                    />
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-[#2596be]/20">
                    <h2 className="text-lg font-semibold text-gray-100 mb-4">Quick Limits</h2>
                    <div className="text-gray-400 text-sm space-y-2">
                        <p>• Projects: No Limit</p>
                        <p>• Gallery: No Limit</p>
                        <p>• Messages: Stored in Database</p>
                    </div>
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-[#2596be]/20">
                    <h2 className="text-lg font-semibold text-gray-100 mb-4">System Status</h2>
                    <div className="flex items-center space-x-2 text-green-400">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>All Systems Operational</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">Backend: Connected</p>
                    <p className="text-gray-500 text-sm">Database: Connected</p>
                </div>
            </div>

            {/* Resume Upload Section */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm p-6 border border-[#2596be]/20">
                <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
                    <FileText size={20} className="text-[#2596be]" />
                    Resume Management
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 w-full relative">
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2596be]/10 file:text-[#2596be] hover:file:bg-[#2596be]/20 cursor-pointer border border-gray-700 rounded-lg p-2 bg-black/20 focus:outline-none focus:border-[#2596be]/50 transition-colors"
                        />
                    </div>
                    <button
                        onClick={handleUploadResume}
                        disabled={!resumeFile || uploading}
                        className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${!resumeFile || uploading
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-[#2596be] hover:bg-[#1e7ca0] text-white shadow-lg shadow-[#2596be]/20'
                            }`}
                    >
                        {uploading ? (
                            <Activity className="animate-spin" size={20} />
                        ) : (
                            <Upload size={20} />
                        )}
                        {uploading ? 'Uploading...' : 'Update Resume'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
