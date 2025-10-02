import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="relative w-32 h-32 mb-8"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-4 border-blue-200 border-t-blue-600 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-4 border-4 border-purple-200 border-t-purple-600 rounded-full"
        />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-semibold text-gray-900 mb-2"
      >
        Generating Simulation...
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-center max-w-md"
      >
        Our AI is analyzing the image and creating a realistic surgical
        simulation. This may take a few moments.
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-8 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full max-w-md"
      />
    </div>
  );
}