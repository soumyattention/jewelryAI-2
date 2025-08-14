import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import FurniturePage from './pages/FurniturePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundsPolicy from './pages/RefundsPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refunds" element={<RefundsPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
      </Routes>
    </div>
  );
}

export default App;