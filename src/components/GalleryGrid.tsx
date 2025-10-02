import React, { useState, useEffect, useRef } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Play } from 'lucide-react';
import { getFileNameFromUrl } from '../lib/utils'; // Import the utility function
import { galleryItems, GalleryItem } from '../lib/gallery-data';

const GalleryGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState<"all" | "photos" | "videos" | "selected">("selected"); // Set default to "selected"
    const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]); // State to hold selected item IDs

    const [shuffledItems, setShuffledItems] = useState<GalleryItem[]>([]);
    const [videoErrors, setVideoErrors] = useState<string[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    // Shuffle function
    const shuffleArray = (array: GalleryItem[]): GalleryItem[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobile(isMobileDevice || isSmallScreen);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Shuffle items on component mount and when page refreshes
    useEffect(() => {
        const shuffled = shuffleArray(galleryItems);
        setShuffledItems(shuffled);
        
        // Debug: Log the number of videos and photos
        const videoCount = shuffled.filter(item => item.type === 'video').length;
        const photoCount = shuffled.filter(item => item.type === 'image').length;
        console.log(`GalleryGrid: ${videoCount} videos, ${photoCount} photos loaded`);
        console.log('Video IDs:', shuffled.filter(item => item.type === 'video').map(item => item.id));
    }, []);

    // Intersection Observer for viewport-based video autoplay (both mobile and desktop)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0');
                    const video = videoRefs.current[videoId];
                    const videoItem = shuffledItems.find(item => item.id === videoId);
                    
                    if (video && videoItem && entry.isIntersecting) {
                        // Load video when it comes into view
                        if (isMobile) {
                            video.load();
                        }
                        
                        // Only autoplay if the video has autoplay enabled
                        if (videoItem.autoplay) {
                            video.play().catch((error: DOMException) => {
                                console.log('Video autoplay failed:', error);
                            });
                        }
                    } else if (video && videoItem && !entry.isIntersecting) {
                        // Pause video when it goes out of view to save bandwidth
                        if (videoItem.autoplay) {
                            video.pause();
                        }
                    }
                });
            },
            {
                threshold: 0.3, // Start playing when 30% of video is visible
                rootMargin: '100px' // Start loading 100px before entering viewport
            }
        );

        // Observe all video containers
        const videoContainers = document.querySelectorAll('[data-video-id]');
        videoContainers.forEach((container) => observer.observe(container as Element));

        return () => {
            videoContainers.forEach((container) => observer.unobserve(container as Element));
        };
    }, [isMobile, shuffledItems]);





    // Filter items based on selected category
    const filteredItems = selectedCategory === "all" 
        ? shuffledItems 
        : selectedCategory === "selected"
            ? shuffledItems.filter(item => item.selected) // Filter by selected items
            : shuffledItems.filter(item => item.category === selectedCategory);

    // Function to toggle item selection
    const toggleItemSelection = (itemId: number) => {
        setShuffledItems(prevItems => 
            prevItems.map((item: GalleryItem) => {
                if (item.id === itemId) {
                    const newItem: GalleryItem = { ...item, selected: !item.selected };
                    // Update selectedItemIds state
                    if (newItem.selected) {
                        setSelectedItemIds(prevIds => [...prevIds, itemId]);
                    } else {
                        setSelectedItemIds(prevIds => prevIds.filter(id => id !== itemId));
                    }
                    return newItem;
                }
                return item;
            })
        );
    };

    // Function to set initial selected items
    const setInitialSelectedItems = (ids: number[]) => {
        setShuffledItems(prevItems => 
            prevItems.map((item: GalleryItem) => {
                if (ids.includes(item.id)) {
                    return { ...item, selected: true };
                }
                return item;
            })
        );
        setSelectedItemIds(ids); // Also update the selectedItemIds state
    };

    // Set initial selected items on component mount
    useEffect(() => {
        setInitialSelectedItems([
            106, 128, 159, 9, 37, 130, 148, 67, 81, 116, 132, 158, 57, 127, 56, 34, 113, 151, 55, 144, 150, 147, 29, 137, 141, 41, 102, 129, 162, 156, 13, 136, 80, 64, 169, 32, 146, 79, 107, 117, 155, 131, 163, 165, 172, 33, 125, 177, 184, 189, 190
        ]); // Set initial selected items based on user's list
    }, []);


    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative z-0 gallery-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                        Curated Gallery Collection
                    </h2>
                    <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                        A carefully curated selection of our finest AI-generated jewelry photography and videography. 
                        Each piece represents the pinnacle of artificial intelligence in jewelry marketing.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                    <ToggleGroup
                        type="single"
                        className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-1 shadow-lg flex-wrap gap-1 sm:gap-0"
                        value={selectedCategory}
                        onValueChange={(value: string) => setSelectedCategory(value as "all" | "photos" | "videos" | "selected" || "selected")}
                    >
                        <ToggleGroupItem 
                            value="selected" 
                            className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium data-[state=on]:bg-gradient-to-r data-[state=on]:from-amber-500 data-[state=on]:to-yellow-600 data-[state=on]:text-white hover:bg-amber-50 min-h-[44px] touch-manipulation"
                        >
                            Selected
                        </ToggleGroupItem>
                        <ToggleGroupItem 
                            value="all" 
                            className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium data-[state=on]:bg-gradient-to-r data-[state=on]:from-amber-500 data-[state=on]:to-yellow-600 data-[state=on]:text-white hover:bg-amber-50 min-h-[44px] touch-manipulation"
                        >
                            All
                        </ToggleGroupItem>
                        <ToggleGroupItem 
                            value="photos" 
                            className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium data-[state=on]:bg-gradient-to-r data-[state=on]:from-amber-500 data-[state=on]:to-yellow-600 data-[state=on]:text-white hover:bg-amber-50 min-h-[44px] touch-manipulation"
                        >
                            Photos
                        </ToggleGroupItem>
                        <ToggleGroupItem 
                            value="videos" 
                            className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium data-[state=on]:bg-gradient-to-r data-[state=on]:from-amber-500 data-[state=on]:to-yellow-600 data-[state=on]:text-white hover:bg-amber-50 min-h-[44px] touch-manipulation"
                        >
                            Videos
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                {/* Gallery Grid with Flip Animation - 4:5 Aspect Ratio */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-0 flip-reveal-container gallery-grid-container">
                    {filteredItems.map((item: GalleryItem) => {
                        // Debug: Log each item being rendered
                        if (item.type === 'video') {
                            console.log('Rendering video:', item.id, item.src);
                        }
                        return (
                        <div key={item.id}>
                            <div 
                                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                {...(item.type === 'video' ? { 'data-video-id': item.id.toString() } : {})}

                            >
                                {/* 4:5 Aspect Ratio Container */}
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    {item.type === 'video' ? (
                                        <video
                                            ref={(el: HTMLVideoElement | null) => {
                                                if (el) videoRefs.current[item.id] = el;
                                            }}
                                            src={item.src}
                                            poster="https://ik.imagekit.io/soumya3301/video-poster.jpg?tr=w-400,h-500,c-fill,q-80"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                                            muted
                                            playsInline
                                            preload={isMobile ? "none" : "metadata"}
                                            autoPlay={false}
                                            loop={item.autoplay}
                                            webkit-playsinline="true"
                                            x5-playsinline="true"
                                            x5-video-player-type="h5"
                                            x5-video-player-fullscreen="true"
                                            onLoadStart={() => {
                                                console.log('Video loading started:', item.src);
                                                if (isMobile) {
                                                    console.log('Mobile video loading started:', item.src);
                                                }
                                            }}
                                            onLoadedMetadata={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                                                const video = e.currentTarget as HTMLVideoElement;
                                                video.currentTime = 0.1; // Set to a small time to generate thumbnail
                                                console.log('Video loaded successfully:', item.src);
                                            }}
                                            onCanPlay={() => {
                                                console.log('Video can play:', item.src);
                                                if (isMobile) {
                                                    console.log('Mobile video can play:', item.src);
                                                }
                                            }}
                                            onError={(e: React.SyntheticEvent<HTMLVideoElement>) => {
                                                console.error('Video failed to load:', item.src, e);
                                                setVideoErrors(prev => [...prev, item.src]);
                                                // Show a fallback image or placeholder when video fails to load
                                                const videoElement = e.currentTarget as HTMLVideoElement;
                                                videoElement.style.display = 'none';
                                                // Create a fallback div
                                                const fallback = document.createElement('div');
                                                fallback.className = 'w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center';
                                                fallback.innerHTML = '<div class="text-gray-500 text-sm">Video unavailable</div>';
                                                videoElement.parentElement?.appendChild(fallback);
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                                            draggable={false}
                                        />
                                    )}
                                    
                                    {/* File name overlay (removed) */}

                                    {/* Video icon indicator for all videos */}
                                    {item.type === 'video' && (
                                        <div className="absolute top-3 right-3 pointer-events-none">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-md">
                                                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 ml-0.5" fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Removed visual indicator for selected items (yellow tick) */}

                                    {/* Add click handler to toggle selection */}
                                    <button 
                                        onClick={() => toggleItemSelection(item.id)}
                                        className="absolute inset-0 w-full h-full z-0" 
                                        aria-label="Toggle selection"
                                    />



                                    {/* Hover overlay for images only */}
                                    {item.type === 'image' && (
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-active:bg-black/20 transition-all duration-300 sm:hidden" />
                                    )}
                                    
                                    {/* Tap indicator for all devices */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-150" />
                                    
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>

                {/* Show All Photos and Videos Button */}
                {selectedCategory === "selected" && (
                    <div className="mt-12 sm:mt-16 text-center">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Show All Photos and Videos
                        </button>
                    </div>
                )}

            </div>


        </section>
    );
};

export default GalleryGrid;
