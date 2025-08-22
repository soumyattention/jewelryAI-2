import React from 'react';
import { optimizeCloudinaryUrl, generateSrcSet, getResponsiveImageUrls } from '../services/cloudinary';

const CloudinaryOptimizationDemo: React.FC = () => {
  // Example Cloudinary URL from the RunGrid
  const originalUrl = "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856295/run131_t0oqhz.jpg";

  // Generate optimized URLs with different settings
  const optimizedUrls = {
    basic: optimizeCloudinaryUrl(originalUrl),
    thumbnail: optimizeCloudinaryUrl(originalUrl, {
      width: 200,
      height: 200,
      crop: 'thumb',
      gravity: 'face',
      quality: 'auto:good'
    }),
    responsive: optimizeCloudinaryUrl(originalUrl, {
      width: 800,
      quality: 'auto',
      format: 'auto',
      dpr: 'auto'
    }),
    webp: optimizeCloudinaryUrl(originalUrl, {
      width: 600,
      format: 'webp',
      quality: 80
    })
  };

  const responsiveUrls = getResponsiveImageUrls(originalUrl);
  const srcSet = generateSrcSet(originalUrl);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Cloudinary Optimization Framework Demo
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Original vs Optimized URLs</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Original URL:</h3>
              <code className="text-sm bg-gray-100 p-2 rounded block break-all">
                {originalUrl}
              </code>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">Basic Optimization (auto quality, format, DPR):</h3>
              <code className="text-sm bg-green-100 p-2 rounded block break-all">
                {optimizedUrls.basic}
              </code>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">Thumbnail (200x200, face detection):</h3>
              <code className="text-sm bg-blue-100 p-2 rounded block break-all">
                {optimizedUrls.thumbnail}
              </code>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">Responsive (800px width, auto DPR):</h3>
              <code className="text-sm bg-purple-100 p-2 rounded block break-all">
                {optimizedUrls.responsive}
              </code>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">WebP Format (600px, quality 80):</h3>
              <code className="text-sm bg-yellow-100 p-2 rounded block break-all">
                {optimizedUrls.webp}
              </code>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Visual Comparison</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-medium mb-2">Original</h3>
              <img 
                src={originalUrl} 
                alt="Original" 
                className="w-full h-48 object-cover rounded-lg shadow"
                loading="lazy"
              />
            </div>
            
            <div className="text-center">
              <h3 className="font-medium mb-2">Basic Optimized</h3>
              <img 
                src={optimizedUrls.basic} 
                alt="Basic Optimized" 
                className="w-full h-48 object-cover rounded-lg shadow"
                loading="lazy"
              />
            </div>
            
            <div className="text-center">
              <h3 className="font-medium mb-2">Thumbnail</h3>
              <img 
                src={optimizedUrls.thumbnail} 
                alt="Thumbnail" 
                className="w-full h-48 object-cover rounded-lg shadow"
                loading="lazy"
              />
            </div>
            
            <div className="text-center">
              <h3 className="font-medium mb-2">WebP Format</h3>
              <img 
                src={optimizedUrls.webp} 
                alt="WebP Format" 
                className="w-full h-48 object-cover rounded-lg shadow"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Responsive Image with srcSet</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-gray-700">Generated srcSet:</h3>
            <code className="text-sm bg-gray-100 p-2 rounded block break-all">
              {srcSet}
            </code>
          </div>
          
          <div className="text-center">
            <img 
              src={optimizedUrls.responsive}
              srcSet={srcSet}
              sizes="(max-width: 640px) 320px, (max-width: 768px) 640px, (max-width: 1024px) 768px, 1280px"
              alt="Responsive Image" 
              className="max-w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
            <p className="text-sm text-gray-600 mt-2">
              This image automatically serves different sizes based on your screen width
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Optimization Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-green-600">Performance Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Automatic quality optimization</li>
                <li>• Modern format delivery (WebP, AVIF)</li>
                <li>• Responsive image sizing</li>
                <li>• Device pixel ratio optimization</li>
                <li>• Lazy loading support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Available Transformations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Width & height resizing</li>
                <li>• Smart cropping with gravity</li>
                <li>• Quality control (auto/manual)</li>
                <li>• Format conversion</li>
                <li>• Face detection cropping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudinaryOptimizationDemo;