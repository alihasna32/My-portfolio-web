import React, { useState, useEffect } from 'react';
import { Mail, Trash2, Reply, Search } from 'lucide-react';
import { toast } from 'react-toastify';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/messages', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setMessages(data);
            setLoading(false);
        } catch (error) {
            toast.error('Failed to fetch messages');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Delete message?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.ok) {
                    toast.success('Message deleted');
                    fetchMessages();
                } else {
                    toast.error('Failed to delete');
                }
            } catch (error) {
                toast.error('Error deleting message');
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-100">Messages</h1>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        className="pl-10 pr-4 py-2 bg-black/40 border border-[#2596be]/20 rounded-lg text-gray-300 focus:outline-none focus:border-[#2596be]/50 w-64"
                    />
                </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 rounded-xl overflow-hidden min-h-[400px]">
                {loading ? (
                    <p className="p-6 text-gray-400">Loading messages...</p>
                ) : messages.length === 0 ? (
                    <p className="p-6 text-gray-400">No messages yet.</p>
                ) : (
                    <div className="divide-y divide-gray-800/50">
                        {messages.map((message) => (
                            <div key={message._id} className={`p-4 hover:bg-white/5 transition-colors cursor-pointer ${!message.read ? 'bg-[#2596be]/5' : ''}`}>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className={`mt-1 p-2 rounded-full ${!message.read ? 'bg-[#2596be]/20 text-[#2596be]' : 'bg-gray-700/50 text-gray-400'}`}>
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <h3 className={`text-sm font-medium ${!message.read ? 'text-white' : 'text-gray-300'}`}>{message.name}</h3>
                                                <span className="text-xs text-gray-500">&bull; {message.email}</span>
                                            </div>
                                            <p className={`text-sm mt-1 ${!message.read ? 'text-gray-200' : 'text-gray-400'}`}>{message.subject}</p>
                                            <p className="text-xs text-gray-500 mt-1">{message.message}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end space-y-2">
                                        <span className="text-xs text-gray-500">{new Date(message.createdAt).toLocaleDateString()}</span>
                                        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-gray-400 hover:text-[#2596be] hover:bg-white/10 rounded">
                                                <Reply size={16} />
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); handleDelete(message._id); }} className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/10 rounded">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messages;
