import React from 'react';

interface FloatingDockProps {
  selectedCount: number;
  maxSelection: number;
  progressPercentage: number;
}

const FloatingDock: React.FC<FloatingDockProps> = ({ 
  selectedCount, 
  maxSelection, 
  progressPercentage 
}) => {
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