import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera, X } from 'lucide-react';

interface PhotoUploadProps {
  onImageSelected: (imageData: string) => void;
  currentImage: string | null;
}

export default function PhotoUpload({ onImageSelected, currentImage }: PhotoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        processFile(file);
      }
    },
    []
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        processFile(file);
      }
    },
    []
  );

  const processFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      onImageSelected(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleCameraCapture = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        processFile(file);
      }
    },
    []
  );

  const clearImage = () => {
    onImageSelected('');
  };

  if (currentImage) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md mx-auto"
      >
        <img
          src={currentImage}
          alt="Uploaded patient"
          className="w-full h-auto rounded-3xl shadow-2xl"
        />
        <button
          onClick={clearImage}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-3xl p-12 text-center transition-all
          ${
            isDragging
              ? 'border-blue-500 bg-blue-50 scale-105'
              : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-gray-50'
          }
        `}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
            <Upload className="w-12 h-12 text-white" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Upload Patient Photo
            </h3>
            <p className="text-gray-600">
              Drag and drop or click to select an image
            </p>
            <p className="text-sm text-gray-500 mt-2">
              JPG, PNG or WEBP (max 10MB)
            </p>
          </div>

          <div className="flex gap-4">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
              <div className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Choose File
              </div>
            </label>

            <label className="cursor-pointer md:block hidden">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleCameraCapture}
                className="hidden"
              />
              <div className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Camera
              </div>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}