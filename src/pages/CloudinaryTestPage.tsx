import React, { useState, useEffect } from 'react';
import { CloudinaryImage, testCloudinaryConnection, getAllImages, getFolders, getImagesFromFolder } from '../services/cloudinary';

const CloudinaryTestPage: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);
  const [folders, setFolders] = useState<string[]>([]);
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    testConnection();
    loadFolders();
  }, []);

  const testConnection = async () => {
    try {
      const isConnected = await testCloudinaryConnection();
      setConnectionStatus(isConnected);
    } catch (err) {
      setConnectionStatus(false);
      setError('Failed to test connection');
    }
  };

  const loadFolders = async () => {
    try {
      const folderList = await getFolders();
      setFolders(folderList);
    } catch (err) {
      setError('Failed to load folders');
    }
  };

  const loadImages = async (folderPath: string = '') => {
    setLoading(true);
    setError('');
    try {
      const imageList = folderPath 
        ? await getImagesFromFolder(folderPath)
        : await getAllImages();
      setImages(imageList);
    } catch (err) {
      setError(`Failed to load images${folderPath ? ` from folder: ${folderPath}` : ''}`);
    } finally {
      setLoading(false);
    }
  };

  const handleFolderSelect = (folder: string) => {
    setSelectedFolder(folder);
    loadImages(folder);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cloudinary Integration Test</h1>
          
          {/* Connection Status */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Connection Status</h2>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              connectionStatus === true 
                ? 'bg-green-100 text-green-800' 
                : connectionStatus === false 
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {connectionStatus === true && '✅ Connected'}
              {connectionStatus === false && '❌ Connection Failed'}
              {connectionStatus === null && '⏳ Testing...'}
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Folders */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Available Folders</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => handleFolderSelect('')}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedFolder === '' 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                All Images
              </button>
              {folders.map((folder) => (
                <button
                  key={folder}
                  onClick={() => handleFolderSelect(folder)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedFolder === folder 
                      ? 'bg-blue-500 text-white border-blue-500' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {folder}
                </button>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Images {selectedFolder && `from "${selectedFolder}"`} ({images.length})
              </h2>
              {!loading && (
                <button
                  onClick={() => loadImages(selectedFolder)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Refresh
                </button>
              )}
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-gray-600">Loading images...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {images.map((image) => (
                  <div key={image.public_id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={image.secure_url}
                      alt={image.public_id}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-900 truncate" title={image.public_id}>
                        {image.public_id}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {image.width} × {image.height} • {image.format.toUpperCase()}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(image.bytes / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && images.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No images found{selectedFolder && ` in "${selectedFolder}"`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudinaryTestPage;