import React, { useState } from 'react';
import { Crown, X, AlertTriangle, MessageSquare, Eye, Play } from 'lucide-react';

const CompetitiveComparison = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video' | null, url: string | null }>({ type: null, url: null });

  const comparisons = [
    {
      title: 'Your Photo',
      subtitle: 'Original Product',
      modelImage: 'https://ik.imagekit.io/soumya3301/16.png?updatedAt=1750483598664',
      jewelryImage: 'https://ik.imagekit.io/soumya3301/18.png?updatedAt=1750483597465',
      mediaType: 'dual-image',
      status: 'original',
      description: 'Clean product photo taken on smartphone or CAD render export or posts from your jewelry Instagram page.'
    },
    {
      title: 'Best Generation Across',
      subtitle: 'ChatGPT Image-1, Flux Kontext, Ideogram 3.0, Midjourney, Recraft etc.',
      image: 'https://ik.imagekit.io/soumya3301/15.png?updatedAt=1750483598830',
      mediaType: 'image',
      status: 'poor',
      description: 'Warped design, wrong stones',
      issues: ['Inaccurate details', 'Wrong proportions', 'Distorted reflections'],
      conclusion: 'Totally unusable for jewelry showcasing',
      showLogo: true
    },
    {
      title: 'JewelryAI.app',
      subtitle: 'Specialized AI',
      image: 'https://ik.imagekit.io/soumya3301/17.png?updatedAt=1750483598632',
      video: 'https://ik.imagekit.io/soumya3301/Gen%20Vid.mp4?updatedAt=1750483666775',
      mediaType: 'video',
      status: 'winner',
      description: 'Flawless, hyper-realistic result',
      features: ['95% accuracy and realism', 'Studio quality lighting and reflections', 'Video generation with accurate physics and movements'],
      conclusion: 'The future of jewelry marketing with unparalleled quality and detail'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            AI sucks at jewelry. So we trained it.
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 sm:px-0">
            Generic AI (like ChatGPT) are built for creativity, but jewelry requires original detailing. Our 3-layer AI diffusion engine, trained on 1000s of jewelry images, is a state-of-the-art AI model to preserve, predict and maintain 95% accuracy with ultra-realism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 px-4 md:px-0">
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className={`relative group ${
                item.status === 'winner' 
                  ? 'transform lg:scale-105 z-20' 
                  : 'z-10'
              }`}
            >
              <div className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                item.status === 'winner' 
                  ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 ring-2 ring-emerald-400 shadow-emerald-100' 
                  : item.status === 'poor'
                  ? 'bg-gradient-to-br from-red-50 to-red-100/50 ring-2 ring-red-200 shadow-red-100'
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200/50'
              }`}>
                
                {/* Image Container with glassmorphic padding */}
                <div className="relative p-3 sm:p-4 bg-gradient-to-br from-gray-50/50 to-gray-100/30 backdrop-blur-sm">
                  <div className="h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden relative rounded-xl shadow-inner">
                    {item.mediaType === 'dual-image' ? (
                      // Two images stacked vertically
                      <div className="w-full h-full flex flex-col">
                        <div className="flex-1 overflow-hidden relative">
                          {/* Blurred background */}
                          <div 
                            className="absolute inset-0 bg-no-repeat bg-center filter blur-md scale-110"
                            style={{
                              backgroundImage: `url(${item.modelImage})`,
                              backgroundSize: 'cover'
                            }}
                          ></div>
                          <img 
                            src={item.modelImage} 
                            alt="Model photo"
                            className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer z-10"
                            onClick={() => setSelectedMedia({ type: 'image', url: item.modelImage! })}
                          />
                        </div>
                        <div className="flex-1 overflow-hidden border-t border-gray-200 relative">
                          {/* Blurred background */}
                          <div 
                            className="absolute inset-0 bg-no-repeat bg-center filter blur-md scale-110"
                            style={{
                              backgroundImage: `url(${item.jewelryImage})`,
                              backgroundSize: 'cover'
                            }}
                          ></div>
                          <img 
                            src={item.jewelryImage} 
                            alt="Jewelry photo"
                            className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer z-10"
                            onClick={() => setSelectedMedia({ type: 'image', url: item.jewelryImage! })}
                          />
                        </div>
                      </div>
                    ) : (
                      // Single image with blurred background
                      <div className="relative w-full h-full">
                        {/* Blurred background */}
                        <div 
                          className="absolute inset-0 bg-no-repeat bg-center filter blur-md scale-110"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover'
                          }}
                        ></div>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer z-10"
                          onClick={() => setSelectedMedia({ type: 'image', url: item.image! })}
                        />
                      </div>
                    )}

                    {/* Glassmorphic buttons positioned at middle height - smaller and more transparent */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const imageUrl = item.mediaType === 'dual-image' ? item.modelImage : item.image;
                            setSelectedMedia({ type: 'image', url: imageUrl! });
                          }}
                          className="bg-white/20 backdrop-blur-md rounded-full p-2.5 sm:p-3 hover:bg-white/30 transition-all duration-200 border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-110 ring-1 ring-white/40 touch-manipulation"
                        >
                          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg" />
                        </button>
                        
                        {/* Play Video Button only for JewelryAI.app */}
                        {item.status === 'winner' && item.video && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMedia({ type: 'video', url: item.video! });
                            }}
                            className="bg-white/20 backdrop-blur-md rounded-full p-2.5 sm:p-3 hover:bg-white/30 transition-all duration-200 border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-110 ring-1 ring-white/40 touch-manipulation"
                          >
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg ml-0.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Winner Badge - Proper z-index */}
                {item.status === 'winner' && (
                  <div className="absolute top-2 right-2 z-40 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                    <Crown className="w-3 h-3" />
                    <span>Clear Winner</span>
                  </div>
                )}

                {/* ChatGPT Logo Placeholder - Proper z-index */}
                {item.showLogo && (
                  <div className="absolute top-2 left-2 z-40 bg-white/40 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-white/50 shadow-lg">
                    <img 
                      src="https://ik.imagekit.io/soumya3301/pngimg.com%20-%20chatgpt_PNG2.png?updatedAt=1750487915588" 
                      alt="ChatGPT Logo"
                      className="w-12 h-4 sm:w-15 sm:h-5"
                    />
                  </div>
                )}

                {/* Status Indicator - Proper z-index */}
                {item.status === 'poor' && (
                  <div className="absolute top-2 right-2 z-40 bg-red-500 text-white p-1.5 sm:p-2 rounded-full shadow-lg">
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                )}

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 flex-grow">
                  <h3 className="font-bold text-gray-900 mb-1 text-base sm:text-base">{item.title}</h3>
                  <p className="text-sm sm:text-sm text-gray-500 mb-2 md:mb-3">{item.subtitle}</p>
                  <p className="text-sm sm:text-sm text-gray-600 mb-2 md:mb-3">{item.description}</p>

                  {/* Issues for poor results */}
                  {item.issues && (
                    <div className="space-y-1.5 mb-2 md:mb-3">
                      {item.issues.map((issue, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm sm:text-sm text-red-600">
                          <X className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{issue}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features for winner */}
                  {item.features && (
                    <div className="space-y-1.5 mb-2 md:mb-3">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm sm:text-sm text-green-600">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Conclusion */}
                  {item.conclusion && (
                    <div className={`text-sm sm:text-sm font-medium mt-2 md:mt-3 pt-2 md:pt-3 border-t ${
                      item.status === 'poor' 
                        ? 'text-red-700 border-red-200 bg-red-50/50 px-2 py-1 rounded' 
                        : item.status === 'winner'
                        ? 'text-green-700 border-green-200 bg-green-50/50 px-2 py-1 rounded'
                        : 'text-gray-600 border-gray-200'
                    }`}>
                      {item.conclusion}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large Media Preview Modal */}
      {selectedMedia.url && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-lg transition-opacity duration-300 p-4"
          onClick={() => setSelectedMedia({ type: null, url: null })}
        >
          <div className="relative max-w-[95vw] max-h-[85vh] sm:max-w-[90vw] sm:max-h-[90vh] lg:max-w-[70vw] lg:max-h-[80vh]">
            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.url} 
                alt="Preview"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <video 
                src={selectedMedia.url}
                controls
                autoPlay
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            )}
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-colors duration-200 touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia({ type: null, url: null });
              }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompetitiveComparison;