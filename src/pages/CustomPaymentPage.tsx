import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CustomPaymentPage = () => {
  const [amount, setAmount] = useState<number>(0);
  const [paymentLink, setPaymentLink] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showPasscodeScreen, setShowPasscodeScreen] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>('');
  const [passcodeDigits, setPasscodeDigits] = useState<string[]>(['', '', '', '']);
  const [isPasscodeCorrect, setIsPasscodeCorrect] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [customLink, setCustomLink] = useState<string>('');
  const [customName, setCustomName] = useState<string>('');

  // Load saved payment details from localStorage on component mount
  useEffect(() => {
    const savedAmount = localStorage.getItem('customPaymentAmount');
    const savedLink = localStorage.getItem('customPaymentLink');
    const savedName = localStorage.getItem('customPaymentName');
    
    if (savedAmount) setAmount(Number(savedAmount));
    if (savedLink) setPaymentLink(savedLink);
    if (savedName) setCustomerName(savedName);
  }, []);

  const handlePasscodeDigitInput = (digit: string) => {
    const newPasscodeDigits = [...passcodeDigits];
    const emptyIndex = newPasscodeDigits.findIndex(d => d === '');
    
    if (emptyIndex !== -1) {
      newPasscodeDigits[emptyIndex] = digit;
      setPasscodeDigits(newPasscodeDigits);
      
      // Check if all digits are filled
      if (newPasscodeDigits.every(d => d !== '')) {
        const fullPasscode = newPasscodeDigits.join('');
        if (fullPasscode === '0423') {
          setIsPasscodeCorrect(true);
          setShowPasscodeScreen(false);
          setShowSettings(true);
        } else {
          // Shake effect and reset
          setTimeout(() => {
            setPasscodeDigits(['', '', '', '']);
          }, 500);
        }
      }
    }
  };

  const handleClearPasscode = () => {
    setPasscodeDigits(['', '', '', '']);
  };

  const handleSaveSettings = () => {
    setAmount(customAmount);
    setPaymentLink(customLink);
    setCustomerName(customName);
    
    // Save to localStorage for persistence
    localStorage.setItem('customPaymentAmount', customAmount.toString());
    localStorage.setItem('customPaymentLink', customLink);
    localStorage.setItem('customPaymentName', customName);
    
    setIsPasscodeCorrect(false);
    setShowSettings(false);
    alert('Payment settings saved successfully!');
  };

  const handleClearData = () => {
    // Clear all data from localStorage
    localStorage.removeItem('customPaymentAmount');
    localStorage.removeItem('customPaymentLink');
    localStorage.removeItem('customPaymentName');
    
    // Reset state
    setAmount(0);
    setPaymentLink('');
    setCustomerName('');
    setCustomAmount(0);
    setCustomLink('');
    setCustomName('');
    
    alert('All payment data has been cleared.');
  };

  const handlePayment = () => {
    if (paymentLink) {
      window.location.href = paymentLink;
    } else {
      alert('Payment link not configured. Please contact support.');
    }
  };

  return (
    <>
      <SEOHead 
        title="Custom Payment - Jewelry AI"
        description="Complete your custom payment for Jewelry AI services"
        keywords="payment, jewelry AI, custom payment"
        canonicalUrl="https://jewelryai.app/custom-payment"
      />
      <Header />
      
      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Complete Your Payment
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Secure payment for your custom Jewelry AI package
            </p>
          </div>

          <div className="mt-12 bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-medium text-gray-900">Custom Package</h3>
                <button 
                  onClick={() => {
                    setShowPasscodeScreen(true);
                    setPasscodeDigits(['', '', '', '']);
                  }}
                  className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
                  aria-label="Settings"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>

              {customerName && (
                <div className="mt-4">
                  <p className="text-lg font-medium text-emerald-600">
                    For: {customerName}
                  </p>
                </div>
              )}

              <div className="mt-8">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Amount</p>
                  <p>${amount.toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Custom package tailored to your specific needs
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-200"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Full Screen Passcode */}
      {showPasscodeScreen && (
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/90 to-green-600/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Enter Passcode</h2>
            <div className="flex justify-center space-x-4 mb-8">
              {passcodeDigits.map((digit, index) => (
                <div 
                  key={index} 
                  className={`w-4 h-4 rounded-full ${digit ? 'bg-white' : 'border-2 border-white bg-transparent'}`}
                ></div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button
                  key={num}
                  onClick={() => handlePasscodeDigitInput(num.toString())}
                  className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/20 text-white text-2xl font-semibold flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => setShowPasscodeScreen(false)}
                className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/20 text-white text-sm font-semibold flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={() => handlePasscodeDigitInput('0')}
                className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/20 text-white text-2xl font-semibold flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none"
              >
                0
              </button>
              <button
                onClick={handleClearPasscode}
                className="w-16 h-16 rounded-full border-2 border-white/30 bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-emerald-600">Admin Settings</h3>
              <button 
                onClick={() => {
                  setShowSettings(false);
                  setIsPasscodeCorrect(false);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div>
              <div className="mb-4">
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                  Customer Name
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter customer name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Payment Amount ($)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="paymentLink" className="block text-sm font-medium text-gray-700">
                  Payment Link
                </label>
                <input
                  type="text"
                  id="paymentLink"
                  value={customLink}
                  onChange={(e) => setCustomLink(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter payment link"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Save Settings
                </button>
                <button
                  onClick={handleClearData}
                  className="flex-1 bg-red-100 text-red-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Clear Data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CustomPaymentPage;