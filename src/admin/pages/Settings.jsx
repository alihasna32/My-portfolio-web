import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
    const [formData, setFormData] = useState({
        email: '', // Pre-fill if possible, or leave blank to update
        password: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [loading, setLoading] = useState(false);

    // Ideally fetch current user email on mount, but for now we can just allow updating it.
    // Let's assume user knows their email or we fetch it.

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, newPassword, confirmNewPassword } = formData;

        if (newPassword && newPassword !== confirmNewPassword) {
            toast.error("New passwords do not match!");
            return;
        }

        if (newPassword && !password) {
            toast.error("Please enter your current password to set a new one.");
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/auth/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    email: email || undefined,
                    password: password || undefined,
                    newPassword: newPassword || undefined
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to update profile');
            }

            toast.success("Profile updated successfully!");

            // If email or password changed, update local storage or re-login might be safer
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            setFormData({
                email: '',
                password: '',
                newPassword: '',
                confirmNewPassword: ''
            });

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl space-y-6">
            <h1 className="text-2xl font-semibold text-gray-100">Settings</h1>
            <ToastContainer theme="dark" position="top-right" />

            <div className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 rounded-xl p-6 space-y-6 shadow-lg">
                <div>
                    <h2 className="text-lg font-medium text-[#2596be] mb-4 border-b border-gray-800 pb-2">Admin Security</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">New Email (Optional)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter new email to update"
                                className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-[#2596be]/50 focus:ring-1 focus:ring-[#2596be]/50 transition-all"
                            />
                        </div>

                        <div className="border-t border-gray-800 pt-4 mt-2">
                            <p className="text-sm text-gray-500 mb-4">Change Password</p>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Required to set new password"
                                        className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-[#2596be]/50 focus:ring-1 focus:ring-[#2596be]/50 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        placeholder="Enter new password"
                                        className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-[#2596be]/50 focus:ring-1 focus:ring-[#2596be]/50 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmNewPassword"
                                        value={formData.confirmNewPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm new password"
                                        className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-[#2596be]/50 focus:ring-1 focus:ring-[#2596be]/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-800 flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#2596be] text-white px-6 py-2.5 rounded-lg hover:bg-[#1e7ca0] transition-colors shadow-[0_0_15px_rgba(37,150,190,0.3)] font-medium disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;
