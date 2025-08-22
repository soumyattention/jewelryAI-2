import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import FurniturePage from './pages/FurniturePage';
import RunPage from './pages/RunPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundsPolicy from './pages/RefundsPolicy';
import TermsOfService from './pages/TermsOfService';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Navigate to="/gallery" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/run" element={<RunPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refunds" element={<RefundsPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;