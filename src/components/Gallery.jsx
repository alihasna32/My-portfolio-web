import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Code as CodeIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

    // Skeleton Helper
    const GallerySkeleton = () => (
        <div className="flex gap-8 overflow-hidden w-full">
            {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-full md:min-w-[400px] bg-gray-500/10 rounded-2xl overflow-hidden border border-white/5 animate-pulse flex flex-col h-[500px]">
                    <div className="h-64 md:h-80 bg-gray-700/50" />
                    <div className="p-6 flex-1 space-y-4">
                        <div className="h-6 bg-gray-700/50 rounded w-3/4" />
                        <div className="h-4 bg-gray-700/50 rounded w-full" />
                        <div className="h-4 bg-gray-700/50 rounded w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="relative group min-h-[500px]">
            {/* Gallery Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-8 pb-8 snap-x scrollbar-hide xl:gap-8 xl:overflow-visible xl:pb-0 xl:snap-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {loading ? (
                    <GallerySkeleton />
                ) : galleryItems.length === 0 ? (
                    <p className="text-gray-400 mx-auto col-span-full text-center py-20">No gallery items yet.</p>
                ) : (
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        interval={3000}
                        className="min-w-full mx-auto"
                        showArrows={true}
                    >
                        {galleryItems.map((item) => (
                            <div
                                key={item._id}
                                className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#2596be]/30 hover:shadow-[0_0_30px_rgba(37,150,190,0.15)] transition-all duration-500 group/card flex flex-col h-full"
                            >
                                {/* Image Area with Overlay Buttons */}
                                <div className="relative h-64 md:h-80 overflow-hidden">
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
                                <div className="p-6 flex-1 flex flex-col text-left">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-[#2596be] transition-colors">{item.title}</h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
                                        {item.description ? (
                                            item.description.length > 80
                                                ? `${item.description.substring(0, 80)}...`
                                                : item.description
                                        ) : "No description available."}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 my-4">
                                        {item.technologies && item.technologies.length > 0 ? (
                                            item.technologies.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-full group-hover/card:text-[#2596be] group-hover/card:bg-[#2596be]/10 transition-colors">
                                                    {tech}
                                                </span>
                                            ))
                                        ) : (
                                            // Optional: Hide if empty or show default
                                            null
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default Gallery;
