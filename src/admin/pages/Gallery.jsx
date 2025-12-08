import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, ExternalLink, Image as ImageIcon, Github, X, Code } from 'lucide-react';
import { toast } from 'react-toastify';

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState(null);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'Others', // Default category
        status: 'In Progress',
        image: '',
        link: '', // Live Preview
        codeLink: '', // GitHub Link
        description: '' // Short Description
    });

    const token = localStorage.getItem('token');
    const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

    // Fetch Gallery Items
    const fetchGalleryItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/gallery');
            const data = await response.json();
            setGalleryItems(data);
            setLoading(false);
        } catch (error) {
            toast.error('Failed to fetch gallery items');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGalleryItems();
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
        setCurrentItemId(null);
        setFormData({
            title: '',
            category: 'Others',
            status: 'Live',
            image: '',
            link: '',
            codeLink: '',
            description: ''
        });
        setIsModalOpen(true);
    };

    // Open Modal for Edit
    const openEditModal = (item) => {
        setIsEditMode(true);
        setCurrentItemId(item._id);
        setFormData({
            title: item.title,
            category: item.category,
            status: item.status,
            image: item.image,
            link: item.link || '',
            codeLink: item.codeLink || '',
            description: item.description || ''
        });
        setIsModalOpen(true);
    };

    // Submit Form (Add or Update)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isEditMode
            ? `http://localhost:5000/api/gallery/${currentItemId}`
            : 'http://localhost:5000/api/gallery';

        const method = isEditMode ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success(isEditMode ? 'Item updated' : 'Item added');
                setIsModalOpen(false);
                fetchGalleryItems();
            } else {
                toast.error('Operation failed');
            }
        } catch (error) {
            toast.error('Error saving item');
        }
    };

    // Delete Item
    const handleDelete = async (id) => {
        if (window.confirm('Delete this item?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/gallery/${id}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.ok) {
                    toast.success('Item deleted');
                    fetchGalleryItems();
                } else {
                    toast.error('Failed to delete');
                }
            } catch (error) {
                toast.error('Error deleting item');
            }
        }
    };

    return (
        <div className="space-y-6 pb-20">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-100">Gallery</h1>
                <button
                    onClick={openAddModal}
                    className="flex items-center px-4 py-2 bg-[#2596be] hover:bg-[#1e7ca0] text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(37,150,190,0.4)]"
                >
                    <Plus size={18} className="mr-2" />
                    Add Item
                </button>
            </div>

            {loading ? (
                <p className="text-gray-400">Loading gallery...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div key={item._id} className="bg-black/40 backdrop-blur-md border border-[#2596be]/20 rounded-xl overflow-hidden hover:border-[#2596be]/40 transition-all duration-300 flex flex-col h-full">
                            <div className="h-48 bg-gray-800 relative group overflow-hidden">
                                <img src={item.image || 'https://via.placeholder.com/400x300'} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity space-x-4">
                                    {item.link && (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#2596be] text-white transition-colors" title="Live Preview">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {item.codeLink && (
                                        <a href={item.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title="View Code">
                                            <Code size={20} />
                                        </a>
                                    )}
                                </div>
                                <div className="absolute top-2 right-2">
                                    <span className={`px-2 py-1 text-xs rounded-full shadow-lg ${item.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-lg font-semibold text-white line-clamp-1" title={item.title}>{item.title}</h3>
                                    </div>
                                    <p className="text-[#2596be] text-xs font-medium mb-2">{item.category}</p>
                                    <p className="text-gray-400 text-sm line-clamp-3">{item.description || "No description available."}</p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-700/50 flex justify-end space-x-2">
                                    <button onClick={() => openEditModal(item)} className="p-2 text-gray-400 hover:text-[#2596be] hover:bg-white/5 rounded-lg transition-colors">
                                        <Edit2 size={18} />
                                    </button>
                                    <button onClick={() => handleDelete(item._id)} className="p-2 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors">
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
                            <h2 className="text-xl font-bold text-white">{isEditMode ? 'Edit Item' : 'Add New Item'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Item Title</label>
                                        <input
                                            name="title"
                                            onChange={handleChange}
                                            value={formData.title}
                                            placeholder="e.g. Abstract Art"
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
                                            <option value="Full Stack">Full Stack</option>
                                            <option value="Frontend">Frontend</option>
                                            <option value="Mern Stack">Mern Stack</option>
                                            <option value="Other">Other</option>
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
                                        <label className="block text-sm text-gray-400 mb-1">Item Image</label>
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
                                    placeholder="Brief description..."
                                    rows="3"
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
                                    {isEditMode ? 'Update Item' : 'Save Item'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
