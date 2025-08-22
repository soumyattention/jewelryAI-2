import React, { useState } from 'react';
import { X, User, Send, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { createRunRecord } from '../services/database';
import confetti from 'canvas-confetti';

interface FloatingDockProps {
  selectedCount: number;
  maxSelection: number;
  progressPercentage: number;
  selectedImages: number[];
  onSuccess: () => void;
}

const FloatingDock: React.FC<FloatingDockProps> = ({ 
  selectedCount, 
  maxSelection, 
  progressPercentage,
  selectedImages,
  onSuccess
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-expand when 25 images are selected
  React.useEffect(() => {
    if (selectedCount === maxSelection) {
      setIsExpanded(true);
    }
  }, [selectedCount, maxSelection]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userName.trim()) {
      setError('Please enter your name');
      return;
    }

    if (selectedImages.length !== 25) {
      setError('Please select exactly 25 images');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#d97706', '#92400e', '#fbbf24'],
        zIndex: 99999
      });
      
      await createRunRecord({
        user_name: userName.trim(),
        selected_images: selectedImages
      });
      
      setIsSuccess(true);
      onSuccess();
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      console.error('Error submitting run:', err);
      setError('Failed to submit your selection. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsExpanded(false);
      setUserName('');
      setError('');
      setIsSuccess(false);
    }
  };

  // Full-screen popup when expanded
  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        />
        
        {/* Expanded Dock as Full-Screen Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Submit Your Selection</h2>
                <p className="text-sm text-gray-500">{selectedCount} images selected</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          {isSuccess ? (
            /* Success State */
            <div className="p-6 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-amber-500 mr-2 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-900">Success!</h3>
                  <Sparkles className="w-5 h-5 text-amber-500 ml-2 animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
                <p className="text-gray-600 mb-4">
                  Your selection has been submitted successfully!
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-800">
                    <strong>{userName}</strong>, thank you for your submission.
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    {selectedCount} images have been processed.
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  This window will close automatically in a few seconds...
                </p>
              </div>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
              >
                Close
              </button>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-6">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Progress Summary */}
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-800">Selected Images:</span>
                <span className="text-sm font-bold text-green-900">{selectedCount}/{maxSelection}</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !userName.trim()}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit</span>
                  </>
                )}
              </button></div>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Regular floating dock when not expanded
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-none px-4 sm:px-0">
      <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200/50 px-3 sm:px-6 py-2 sm:py-4 min-w-[240px] sm:min-w-[300px] max-w-[85vw] sm:max-w-[90vw] mx-auto pointer-events-auto">
        <div className="relative">
          <div className="flex items-center justify-between mb-1 sm:mb-3">
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              {selectedCount}/{maxSelection} images selected
            </span>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ 
                width: `${progressPercentage}%`,
                boxShadow: progressPercentage > 0 ? '0 0 10px rgba(34, 197, 94, 0.3)' : 'none'
              }}
            ></div>
          </div>
          
          {/* Status Messages - Hidden on mobile */}
          {selectedCount === 0 && (
            <div className="mt-2 text-xs text-gray-500 text-center hidden sm:block">
              Select up to 25 images to continue
            </div>
          )}
          
          {selectedCount > 0 && selectedCount < maxSelection && (
            <div className="mt-2 text-xs text-green-600 text-center font-medium hidden sm:block">
              {maxSelection - selectedCount} more images can be selected
            </div>
          )}
          
          {selectedCount >= maxSelection && (
            <div className="mt-1 sm:mt-2 text-xs text-amber-600 text-center font-medium">
              ✓ Maximum selection reached
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingDock;