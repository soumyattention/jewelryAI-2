import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { logPageView } from './utils/analytics';
import HomePage from './pages/HomePage';
import QAPage from './pages/QAPage';
import Gallery from './pages/Gallery';
import GalleryX from './pages/GalleryX';
import AdminPage from './pages/AdminPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundsPolicy from './pages/RefundsPolicy';
import TermsOfService from './pages/TermsOfService';
import TestPage from './pages/TestPage';
import CloudinaryTestPage from './pages/CloudinaryTestPage';
import CloudinaryOptimizationDemo from './pages/CloudinaryOptimizationDemo';
import CustomPaymentPage from './pages/CustomPaymentPage';
import PricingPage from './pages/PricingPage';
import AIvsTraditional from './pages/AIvsTraditional';
import HowItWorks from './pages/HowItWorks';
import ShopifyJewelryPhotography from './pages/ShopifyJewelryPhotography';

function App() {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qa" element={<QAPage />} />
        <Route path="/portfolio" element={<Navigate to="/gallery" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/galleryx" element={<GalleryX />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refunds" element={<RefundsPolicy />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/cloudinary-test" element={<CloudinaryTestPage />} />
        <Route path="/cloudinary-demo" element={<CloudinaryOptimizationDemo />} />
        <Route path="/custom" element={<CustomPaymentPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/ai-vs-traditional-photography" element={<AIvsTraditional />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/shopify-jewelry-photography" element={<ShopifyJewelryPhotography />} />
      </Routes>
    </div>
  );
}

export default App;
