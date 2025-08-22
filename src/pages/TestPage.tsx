import React from 'react';

function TestPage() {
  const videos = [
    'https://iframe.mediadelivery.net/play/484062/6d1d564d-cef3-49cc-9920-1a86626b5afd',
    'https://iframe.mediadelivery.net/play/484062/d85501f2-6aad-4a58-bfce-df167bfb5196',
    'https://iframe.mediadelivery.net/play/484062/ef71e156-1f92-457f-b9da-28aa4188a53c'
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Test Video Grid
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((videoUrl, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`${videoUrl}?autoplay=true&muted=true&loop=true`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video ${index + 1}`}
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Video {index + 1}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Auto-playing video content
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestPage;