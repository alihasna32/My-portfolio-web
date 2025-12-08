import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GlowingBackground from './GlowingBackground';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data));
                toast.success('Login successful');
                navigate('/admin');
            } else {
                toast.error(data.message || 'Login failed');
            }
        } catch (error) {
            toast.error('Server error. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden font-display text-gray-100">
            <GlowingBackground />

            <div className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
                <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#2596be] to-purple-500 bg-clip-text text-transparent">Admin Access</h2>
                <p className="text-gray-400 text-center mb-8">Please sign in to continue</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#2596be]/50 focus:ring-1 focus:ring-[#2596be]/50 transition-all placeholder-gray-500"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#2596be]/50 focus:ring-1 focus:ring-[#2596be]/50 transition-all placeholder-gray-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#2596be] hover:bg-[#1e7ca0] text-white font-semibold py-3 rounded-lg transition-colors shadow-[0_0_15px_rgba(37,150,190,0.3)] mt-2"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
