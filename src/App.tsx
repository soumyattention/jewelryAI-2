import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QAPage from './pages/QAPage';
import Gallery from './pages/Gallery';
import GalleryX from './pages/GalleryX';
import FurniturePage from './pages/FurniturePage';
import RunPage from './pages/RunPage';
import AdminPage from './pages/AdminPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundsPolicy from './pages/RefundsPolicy';
import TermsOfService from './pages/TermsOfService';
import TestPage from './pages/TestPage';
import CloudinaryTestPage from './pages/CloudinaryTestPage';
import CloudinaryOptimizationDemo from './pages/CloudinaryOptimizationDemo';
import CustomPaymentPage from './pages/CustomPaymentPage';
import SurgAIPage from './pages/SurgAIPage';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qa" element={<QAPage />} />
        <Route path="/portfolio" element={<Navigate to="/galleryx" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/galleryx" element={<GalleryX />} />
        <Route path="/run" element={<RunPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refunds" element={<RefundsPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/cloudinary-test" element={<CloudinaryTestPage />} />
        <Route path="/cloudinary-demo" element={<CloudinaryOptimizationDemo />} />
        <Route path="/custom" element={<CustomPaymentPage />} />
        <Route path="/surgai" element={<SurgAIPage />} />
      </Routes>
    </div>
  );
}

export default App;