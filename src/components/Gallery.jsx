import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Code as CodeIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const scrollRef = useRef(null);
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch('https://my-portfolio-server-lnc3.onrender.com/api/gallery?status=Live');
                const data = await response.json();
                setGalleryItems(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch gallery', error);
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth / 1.5;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    if (loading) return <div className="text-center text-gray-400 py-10">Loading gallery...</div>;

    return (
        <div className="relative group">
            {/* Gallery Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-8 pb-8 snap-x scrollbar-hide xl:grid xl:grid-cols-3 xl:gap-8 xl:overflow-visible xl:pb-0 xl:snap-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {galleryItems.length === 0 ? (
                    <p className="text-gray-400 mx-auto col-span-full text-center">No gallery items yet.</p>
                ) : (
                    galleryItems.map((item) => (
                        <div
                            key={item._id}
                            className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(63.33%-1rem)] xl:min-w-0 snap-center bg-[#0c151d]/80 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden hover:border-[#2596be]/30 hover:shadow-[0_0_30px_rgba(37,150,190,0.15)] transition-all duration-500 group/card flex flex-col"
                        >
                            {/* Image Area with Overlay Buttons */}
                            <div className="relative h-60 md:h-48 overflow-hidden">
                                <img
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    src={item.image || 'https://via.placeholder.com/600x400'}
                                    loading="lazy"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center bg-[#2596be] text-white rounded-full hover:bg-[#1e7ca0] hover:scale-110 transition-all shadow-lg transform translate-y-4 group-hover/card:translate-y-0 duration-300 delay-75"
                                            title="View Live"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {item.codeLink && (
                                        <a
                                            href={item.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-600 hover:scale-110 transition-all shadow-lg transform translate-y-4 group-hover/card:translate-y-0 duration-300 delay-100"
                                            title="View Code"
                                        >
                                            <CodeIcon size={20} />
                                        </a>
                                    )}
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-[#2596be] transition-colors">{item.title}</h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {item.description ? (
                                        item.description.length > 80
                                            ? `${item.description.substring(0, 80)}...`
                                            : item.description
                                    ) : "No description available."}
                                </p>

                                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#2596be]/10 border border-white/5 hover:border-[#2596be]/30 text-gray-300 hover:text-[#2596be] transition-all flex items-center justify-center gap-2 group/btn">
                                    <span className="font-medium text-sm">Full Details</span>
                                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Navigation Buttons (Image Section Overlay, Hidden on XL) */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 hover:bg-[#2596be] text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 shadow-lg hover:scale-110 xl:hidden"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 hover:bg-[#2596be] text-white rounded-full backdrop-blur-md border border-white/10 transition-all z-20 shadow-lg hover:scale-110 xl:hidden"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Gallery;
