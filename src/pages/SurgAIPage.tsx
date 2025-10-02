import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, RefreshCw, Upload } from 'lucide-react';
import PhotoUpload from '../components/SurgAI/PhotoUpload';
import ProcedureGrid from '../components/SurgAI/ProcedureGrid';
import LoadingState from '../components/SurgAI/LoadingState';
import BeforeAfterSlider from '../components/SurgAI/BeforeAfterSlider';
import { SimulationState, AppStep } from '../types/surgai';
import { SURGERY_PROCEDURES } from '../lib/surgai-constants';
import { generateSurgicalSimulation } from '../lib/gemini-service';

export default function SurgAIPage() {
  const [state, setState] = useState<SimulationState>({
    uploadedImage: null,
    selectedProcedure: null,
    generatedImage: null,
    isGenerating: false,
    error: null,
  });

  const currentStep: AppStep = state.generatedImage
    ? 'result'
    : state.isGenerating
    ? 'generate'
    : state.uploadedImage && !state.selectedProcedure
    ? 'select'
    : 'upload';

  const handleImageSelected = (imageData: string) => {
    setState((prev) => ({
      ...prev,
      uploadedImage: imageData,
      selectedProcedure: null,
      generatedImage: null,
      error: null,
    }));
  };

  const handleProcedureSelected = (procedureId: string) => {
    setState((prev) => ({
      ...prev,
      selectedProcedure: procedureId,
    }));
  };

  const handleGenerate = async () => {
    if (!state.uploadedImage || !state.selectedProcedure) return;

    setState((prev) => ({ ...prev, isGenerating: true, error: null }));

    try {
      const procedure = SURGERY_PROCEDURES.find(
        (p) => p.id === state.selectedProcedure
      );

      if (!procedure) throw new Error('Procedure not found');

      // Call Gemini API
      const result = await generateSurgicalSimulation(
        state.uploadedImage,
        procedure.prompt
      );

      // Note: This currently returns the same image as a placeholder
      // You'll need to integrate with an actual image generation API
      setState((prev) => ({
        ...prev,
        generatedImage: result,
        isGenerating: false,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Generation failed',
        isGenerating: false,
      }));
    }
  };

  const handleReset = () => {
    setState({
      uploadedImage: null,
      selectedProcedure: null,
      generatedImage: null,
      isGenerating: false,
      error: null,
    });
  };

  const handleTryAnother = () => {
    setState((prev) => ({
      ...prev,
      selectedProcedure: null,
      generatedImage: null,
      error: null,
    }));
  };

  return (
    <>
      <Helmet>
        <title>SurgAI - AI Surgical Simulation Tool</title>
        <meta
          name="description"
          content="AI-powered surgical simulation tool for plastic surgeons. Show patients realistic before/after results instantly."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SurgAI
              </h1>
            </div>

            {state.uploadedImage && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Start Over
              </button>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            {/* Upload Step */}
            {currentStep === 'upload' && (
              <motion.div
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Upload Patient Photo
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Start by uploading a clear photo of your patient
                  </p>
                </div>
                <PhotoUpload
                  onImageSelected={handleImageSelected}
                  currentImage={state.uploadedImage}
                />
              </motion.div>
            )}

            {/* Select Procedure Step */}
            {currentStep === 'select' && (
              <motion.div
                key="select"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-8">
                  <PhotoUpload
                    onImageSelected={handleImageSelected}
                    currentImage={state.uploadedImage}
                  />
                </div>

                <div className="my-12">
                  <ProcedureGrid
                    selectedProcedure={state.selectedProcedure}
                    onSelectProcedure={handleProcedureSelected}
                  />
                </div>

                {state.selectedProcedure && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-12"
                  >
                    <button
                      onClick={handleGenerate}
                      className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                      Generate Simulation
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Generating Step */}
            {currentStep === 'generate' && (
              <motion.div
                key="generate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LoadingState />
              </motion.div>
            )}

            {/* Results Step */}
            {currentStep === 'result' && state.generatedImage && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Simulation Result
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Compare the before and after results
                  </p>
                </div>

                <BeforeAfterSlider
                  beforeImage={state.uploadedImage!}
                  afterImage={state.generatedImage}
                />

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <button
                    onClick={handleTryAnother}
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Try Another Procedure
                  </button>

                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all"
                  >
                    <Upload className="w-5 h-5" />
                    Upload New Photo
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Display */}
          {state.error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-center"
            >
              <p className="text-red-800 font-medium">{state.error}</p>
              <button
                onClick={() => setState((prev) => ({ ...prev, error: null }))}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-20 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
            <p>
              <strong>SurgAI</strong> - AI-Powered Surgical Simulation Tool
            </p>
            <p className="text-sm mt-2">
              For professional medical use only. Simulations are for
              visualization purposes.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}