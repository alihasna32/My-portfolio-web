import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Bell, User, Search } from 'lucide-react';

const Header = () => {
    const [unreadCount, setUnreadCount] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const navigate = useNavigate();

    // Poll for notifications or fetch on mount
    const fetchNotifications = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/messages', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();

            // Filter unread
            const unread = data.filter(msg => !msg.read);
            setUnreadCount(unread.length);
            setNotifications(unread.slice(0, 5)); // Show latest 5 unread
        } catch (error) {
            console.error("Failed to fetch notifications", error);
        }
    };

    useEffect(() => {
        fetchNotifications();
        // Optional: Interval to poll
        const interval = setInterval(fetchNotifications, 30000); // 30 seconds
        return () => clearInterval(interval);
    }, []);

    const handleNotificationClick = async (messageId) => {
        // Mark as read immediately or let Messages page handle it?
        // Let's navigate to messages. Ideally we'd scroll to it or highlight it.
        navigate('/admin/messages');

        // Optimistic update
        setUnreadCount(prev => Math.max(0, prev - 1));
        setNotifications(prev => prev.filter(n => n._id !== messageId));

        // Sync with backend
        try {
            const token = localStorage.getItem('token');
            await fetch(`http://localhost:5000/api/messages/${messageId}/read`, {
                method: 'PUT',
                headers: { 'Authorization': `Bearer ${token}` }
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <header className="navbar bg-black/40 backdrop-blur-md border-b border-[#2596be]/20 px-4 sticky top-0 z-40">
            <div className="flex-none lg:hidden">
                <label htmlFor="admin-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost hover:bg-[#2596be] text-white">
                    <Menu size={24} />
                </label>
            </div>

            <div className="flex-1 px-4">
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Admin Dashboard
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="form-control hidden md:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input type="text" placeholder="Search..." className="input input-bordered input-sm w-24 md:w-auto bg-white/5 border-gray-700 text-white pl-10 focus:border-[#2596be] focus:outline-none" />
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <button tabIndex={0} className="btn btn-ghost btn-circle text-gray-300 hover:text-white">
                        <div className="indicator">
                            <Bell size={20} />
                            {unreadCount > 0 && <span className="badge badge-xs badge-primary indicator-item">{unreadCount}</span>}
                        </div>
                    </button>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-[#0c151d] border border-[#2596be]/20 rounded-box w-64">
                        <li className="menu-title text-gray-400">Notifications</li>
                        {notifications.length === 0 ? (
                            <li className="px-4 py-2 text-gray-500 text-sm">No new messages</li>
                        ) : (
                            notifications.map(note => (
                                <li key={note._id}>
                                    <a onClick={() => handleNotificationClick(note._id)} className="flex flex-col items-start gap-1 py-2 hover:bg-[#2596be]/10">
                                        <span className="font-semibold text-white text-xs">{note.name} sent a message</span>
                                        <span className="text-gray-500 text-[10px] truncate w-full">{note.subject}</span>
                                    </a>
                                </li>
                            ))
                        )}
                        {unreadCount > 5 && (
                            <li className="border-t border-gray-800 mt-1 pt-1">
                                <Link to="/admin/messages" className="text-center text-[#2596be] text-xs">View all</Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-gray-700">
                        <div className="w-10 rounded-full">
                            <div className="bg-[#2596be] w-full h-full flex items-center justify-center text-white font-bold">
                                A
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-[#0c151d] border border-[#2596be]/20 rounded-box w-52">
                        <li>
                            <Link to="/admin/settings" className="justify-between text-gray-300 hover:text-white hover:bg-[#2596be]/20">
                                Profile
                            </Link>
                        </li>
                        <li><Link to="/admin/settings" className="text-gray-300 hover:text-white hover:bg-[#2596be]/20">Settings</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
