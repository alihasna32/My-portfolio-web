import React, { useState, useEffect } from 'react';

const ExpertArea = () => {
    const [expertItems, setExpertItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperts = async () => {
            try {
                const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/experts');
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) {
                        setExpertItems(data);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch expert area items', error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperts();
    }, []);

    if (loading) return null; // Or a skeleton loader if preferred

    if (expertItems.length === 0) return null; // Hide if no items

    return (
        <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-6">My Expert Area</h2>
            <div className="grid grid-cols-3 gap-4">
                {expertItems.map((item) => (
                    <div key={item._id} className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-600/100">
                        <img
                            alt={`${item.name} logo`}
                            className="h-10 w-10 mb-2 rounded-xl object-contain"
                            src={item.image.startsWith('http') ? item.image : `https://my-portfolio-server-lnc3.onrender.com${item.image}`}
                        />
                        <p className="text-sm text-gray-300 text-center">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpertArea;
