import React, { useState, useEffect } from 'react';

interface InteractiveCTAProps {
  onAllAnswered: () => void;
}

const InteractiveCTA: React.FC<InteractiveCTAProps> = ({ onAllAnswered }) => {
  const [answers, setAnswers] = useState<{ [key: number]: 'yes' | 'no' | null }>({
    0: null,
    1: null,
    2: null
  });
  const [showVibration, setShowVibration] = useState(false);
  const [pendingStatements, setPendingStatements] = useState<number[]>([]);

  const statements = [
    "Instead of hiring ugly models and cheap photographers, I'll choose attractive VOGUE models to showcase my jewelry collection.",
    "The hassle of managing 10 things for a photoshoot event, instead, I will focus on the sales and growth of my jewelry store.",
    "Instead of spending thousands to get mid-level photos and videos like every other jeweler in town, I will have my own creative philosophy and content style."
  ];

  const handleAnswer = (statementIndex: number, answer: 'yes' | 'no') => {
    setAnswers(prev => ({
      ...prev,
      [statementIndex]: answer
    }));
  };

  // Vibration effect for screen
  const triggerVibration = () => {
    setShowVibration(true);
    
    // Vibrate device if supported
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }
    
    setTimeout(() => {
      setShowVibration(false);
    }, 600);
  };

  // Check for unanswered statements and trigger vibration
  const checkForUnansweredStatements = () => {
    const unanswered = Object.entries(answers)
      .filter(([_, answer]) => answer === null)
      .map(([index, _]) => parseInt(index));
    
    if (unanswered.length > 0) {
      setPendingStatements(unanswered);
      triggerVibration();
      
      // Clear pending statements after animation
      setTimeout(() => {
        setPendingStatements([]);
      }, 2000);
      
      return false;
    }
    return true;
  };

  // Check if all statements have been answered
  useEffect(() => {
    const allAnswered = Object.values(answers).every(answer => answer !== null);
    if (allAnswered) {
      // Delay the callback to allow for smooth animation
      setTimeout(() => {
        onAllAnswered();
      }, 500);
    }
  }, [answers, onAllAnswered]);

  // Handle attempt to proceed without answering all questions
  const handleProceedAttempt = () => {
    if (!checkForUnansweredStatements()) {
      // Show message to user
      const unansweredCount = Object.values(answers).filter(answer => answer === null).length;
      console.log(`Please answer ${unansweredCount} more question${unansweredCount > 1 ? 's' : ''}`);
    }
  };

  return (
    <div className={`mb-12 sm:mb-16 transition-all duration-300 ${showVibration ? 'animate-pulse scale-[1.02]' : ''}`}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready for innovation?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
            Or still confused?
          </span>
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Be honest, and check what truly resonates with your brand.
        </p>
      </div>

      {/* Interactive Statements */}
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {statements.map((statement, index) => (
          <div 
            key={index}
            className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 ${
              pendingStatements.includes(index) 
                ? 'border-red-400 bg-red-500/10 animate-pulse shadow-lg shadow-red-500/20' 
                : 'border-white/10'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Statement Text */}
              <div className="flex-1">
                <p className="text-lg sm:text-xl text-white leading-relaxed">
                  {statement}
                </p>
              </div>

              {/* Yes/No Buttons */}
              <div className="flex space-x-4 justify-center lg:justify-end">
                {/* Yes Button (Green) - First */}
                <button
                  onClick={() => handleAnswer(index, 'yes')}
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 border-2 min-w-[100px] touch-manipulation ${
                    answers[index] === 'yes'
                      ? 'bg-green-500 border-green-400 text-white shadow-lg shadow-green-500/30 glow-green'
                      : 'bg-white border-green-400 text-gray-900 hover:bg-green-50 hover:shadow-lg hover:shadow-green-400/20'
                  }`}
                >
                  Yes
                </button>

                {/* No Button (Red) - Second */}
                <button
                  onClick={() => handleAnswer(index, 'no')}
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 border-2 min-w-[100px] touch-manipulation ${
                    answers[index] === 'no'
                      ? 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/30 glow-red'
                      : 'bg-white border-red-400 text-gray-900 hover:bg-red-50 hover:shadow-lg hover:shadow-red-400/20'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mt-8 sm:mt-12 text-center">
        <div className="flex justify-center space-x-2 mb-4">
          {statements.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                answers[index] !== null
                  ? answers[index] === 'yes'
                    ? 'bg-green-400 shadow-lg shadow-green-400/50'
                    : 'bg-red-400 shadow-lg shadow-red-400/50'
                  : pendingStatements.includes(index)
                  ? 'bg-red-400/50 border-2 border-red-400 animate-pulse'
                  : 'bg-white/20 border border-white/30'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-400">
          {Object.values(answers).filter(answer => answer !== null).length} of {statements.length} answered
        </p>
        
        {/* Show message when vibration occurs */}
        {showVibration && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-400/50 rounded-lg backdrop-blur-sm">
            <p className="text-red-300 text-sm font-medium animate-pulse">
              Please choose Yes or No for all statements to continue
            </p>
          </div>
        )}
      </div>

      {/* Hidden trigger for testing vibration - can be removed in production */}
      {Object.values(answers).some(answer => answer === null) && (
        <div className="mt-6 text-center">
          <button
            onClick={handleProceedAttempt}
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 opacity-50"
          >
            (Try to proceed without answering all questions)
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveCTA;