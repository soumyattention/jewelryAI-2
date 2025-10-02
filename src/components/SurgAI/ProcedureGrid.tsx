import React from 'react';
import { motion } from 'framer-motion';
import { SURGERY_PROCEDURES } from '../../lib/surgai-constants';
import { Check } from 'lucide-react';

interface ProcedureGridProps {
  selectedProcedure: string | null;
  onSelectProcedure: (procedureId: string) => void;
}

export default function ProcedureGrid({
  selectedProcedure,
  onSelectProcedure,
}: ProcedureGridProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-gray-900 mb-8"
      >
        Select Procedure
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {SURGERY_PROCEDURES.map((procedure, index) => {
          const isSelected = selectedProcedure === procedure.id;

          return (
            <motion.button
              key={procedure.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectProcedure(procedure.id)}
              className={`
                relative p-6 rounded-2xl border-2 transition-all
                ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 shadow-xl'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
                }
              `}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 bg-blue-600 rounded-full p-1"
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              )}

              <div className="text-5xl mb-3">{procedure.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {procedure.name}
              </h3>
              <p className="text-sm text-gray-600">{procedure.description}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}