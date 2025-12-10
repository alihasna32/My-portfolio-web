import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Upload, Loader } from 'lucide-react';
import { toast } from 'react-toastify';

const ExpertArea = () => {
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newExpertName, setNewExpertName] = useState('');
    const [newExpertImage, setNewExpertImage] = useState(''); // Stores URL now
    const [uploading, setUploading] = useState(false);

    // CHANGE THIS TO YOUR PRODUCTION URL WHEN DEPLOYING
    // The backend changes (removing multer) are currently only LOCAL.
    const API_URL = 'http://localhost:5000/api/experts';
    // const API_URL = 'https://my-portfolio-server-lnc3.onrender.com/api/experts';

    const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

    useEffect(() => {
        fetchExperts();
    }, []);

    const fetchExperts = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setExperts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching experts:', error);
            setLoading(false);
        }
    };

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
                setNewExpertImage(data.data.url);
                toast.success('Image uploaded to ImgBB');
            } else {
                toast.error('Image upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Error uploading image');
        } finally {
            setUploading(false);
        }
    };

    const handleAddExpert = async (e) => {
        e.preventDefault();
        if (!newExpertName || !newExpertImage) return;

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: newExpertName,
                    image: newExpertImage
                })
            });

            if (response.ok) {
                const newExpert = await response.json();
                setExperts([...experts, newExpert]);
                setNewExpertName('');
                setNewExpertImage('');
            }
        } catch (error) {
            console.error('Error adding expert:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this item?')) {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    setExperts(experts.filter(expert => expert._id !== id));
                }
            } catch (error) {
                console.error('Error deleting expert:', error);
            }
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-6">Manage Expert Area</h1>

            {/* Add New Item Form */}
            <div className="bg-[#1a2332] p-6 rounded-xl mb-8 border border-gray-800">
                <h2 className="text-lg font-semibold text-gray-200 mb-4">Add New Skill/Tool</h2>
                <form onSubmit={handleAddExpert} className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1 w-full">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            value={newExpertName}
                            onChange={(e) => setNewExpertName(e.target.value)}
                            className="w-full bg-[#0c151d] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#2596be]"
                            placeholder="e.g. React.js"
                        />
                    </div>

                    <div className="md:w-64 w-full">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Upload Logo</label>
                        <div className="relative">
                            <input
                                type="file"
                                id="expert-image"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                disabled={uploading}
                            />
                            <label
                                htmlFor="expert-image"
                                className={`flex items-center justify-center gap-2 w-full bg-[#0c151d] border border-dashed border-gray-600 rounded-lg px-4 py-2 text-gray-400 cursor-pointer hover:border-[#2596be] transition-colors ${uploading ? 'opacity-50' : ''}`}
                            >
                                {newExpertImage ? (
                                    <img src={newExpertImage} alt="Preview" className="h-6 w-6 object-contain" />
                                ) : (
                                    <Upload size={18} />
                                )}
                                <span className="truncate">{uploading ? 'Uploading...' : (newExpertImage ? 'Change Image' : 'Choose Image')}</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!newExpertName || !newExpertImage || uploading}
                        className="w-full md:w-auto bg-[#2596be] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {uploading ? (
                            <Loader className="animate-spin" size={20} />
                        ) : (
                            <>
                                <Plus size={20} /> Add Item
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* List Items */}
            {loading ? (
                <div className="text-center text-gray-400 py-10">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {experts.map((expert) => (
                        <div key={expert._id} className="bg-[#1a2332] p-4 rounded-lg border border-gray-800 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-[#0c151d] rounded-lg p-2 flex items-center justify-center border border-gray-700">
                                    <img
                                        src={expert.image.startsWith('http') ? expert.image : `https://my-portfolio-server-lnc3.onrender.com${expert.image}`}
                                        alt={expert.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <span className="font-medium text-white">{expert.name}</span>
                            </div>
                            <button
                                onClick={() => handleDelete(expert._id)}
                                className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}

                    {experts.length === 0 && (
                        <div className="col-span-full text-center text-gray-500 py-10 bg-[#1a2332]/50 rounded-xl border border-dashed border-gray-700">
                            No expert items found. Add some above!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ExpertArea;
