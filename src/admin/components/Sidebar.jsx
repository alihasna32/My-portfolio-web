import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Award,
    MessageSquare,
    Settings as SettingsIcon,
    LogOut,
    Briefcase,
    Home,
    Image,
    User
} from 'lucide-react';
import Logo from '/Logo.png';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login');
        }
    };

    const navItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
        { path: '/admin/projects', icon: Briefcase, label: 'Projects' },
        { path: '/admin/gallery', icon: Image, label: 'Gallery' },
        { path: '/admin/skills', icon: Award, label: 'Skills' },
        { path: '/admin/personal-details', icon: User, label: 'Profile' },
        { path: '/admin/messages', icon: MessageSquare, label: 'Messages' },
        { path: '/admin/expert-area', icon: Award, label: 'Expert Area' },
        { path: '/admin/settings', icon: SettingsIcon, label: 'Settings' },
    ];

    return (
        <div className="menu p-4 w-64 min-h-full bg-[#0c151d] border-r border-[#2596be]/20 text-base-content flex flex-col">
            {/* Sidebar Header */}
            <div className="flex items-center gap-3 px-2 mb-8 mt-2">
                <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold text-white tracking-wide">Admin</span>
            </div>

            {/* Navigation Items */}
            <ul className="space-y-2 flex-1">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                                ${isActive
                                    ? 'bg-[#2596be] text-white shadow-[0_0_15px_rgba(37,150,190,0.3)]'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-100'
                                }
                            `}
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Bottom Actions */}
            <div className="pt-4 mt-auto border-t border-gray-800 space-y-2">
                <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-gray-100 transition-all">
                    <Home size={20} />
                    <span className="font-medium">Homepage</span>
                </NavLink>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all w-full"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
