import React, { useState, useEffect } from 'react';
import { Lock, Eye, Calendar, User, Image, ArrowLeft, Shield } from 'lucide-react';
import { getAllRunRecords, getRunRecordById, RunRecord } from '../services/database';
import SEOHead from '../components/SEOHead';

const ADMIN_PASSCODE = '3301';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  tags: string[];
}

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [runRecords, setRunRecords] = useState<RunRecord[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<RunRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);

  // Complete image data (same as RunGrid)
  const allImages: ImageData[] = [
    {
      id: 1,
      src: "https://ik.imagekit.io/soumya3301/3.png?updatedAt=1750483598664",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "gold", "elegant"]
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/soumya3301/8.png?updatedAt=1750483597465",
      alt: "AI-generated jewelry photography",
      tags: ["ring", "diamond", "luxury"]
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/soumya3301/7.png?updatedAt=1750483598632",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "silver", "modern"]
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/soumya3301/1.png?updatedAt=1750483666775",
      alt: "AI-generated jewelry photography",
      tags: ["earrings", "pearl", "classic"]
    },
    {
      id: 5,
      src: "https://ik.imagekit.io/soumya3301/2.png?updatedAt=1750483598632",
      alt: "AI-generated jewelry photography",
      tags: ["pendant", "gold", "vintage"]
    },
    {
      id: 6,
      src: "https://ik.imagekit.io/soumya3301/6.png?updatedAt=1750483598830",
      alt: "AI-generated jewelry photography",
      tags: ["chain", "silver", "minimalist"]
    },
    {
      id: 7,
      src: "https://ik.imagekit.io/soumya3301/Necklace/replicate-prediction-qftbnva4w1rmc0cqkcbaec8t34.jpg?updatedAt=1750705074646",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "statement", "bold"]
    },
    {
      id: 8,
      src: "https://ik.imagekit.io/soumya3301/Necklace/022404992414_2244edfe4fd911f0afe58584d6140a20_output_0superresolution.jpg?updatedAt=1750705074676",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "intricate", "detailed"]
    },
    {
      id: 9,
      src: "https://ik.imagekit.io/soumya3301/Necklace/cb4.jpg?updatedAt=1750707740837",
      alt: "AI-generated jewelry photography",
      tags: ["choker", "black", "gothic"]
    },
    {
      id: 10,
      src: "https://ik.imagekit.io/soumya3301/Necklace/openart-76f52eada74a41f499703ad1800c6d0a_raw.jpg?updatedAt=1750707742581",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "artistic", "unique"]
    },
    {
      id: 11,
      src: "https://ik.imagekit.io/soumya3301/Necklace/cb1.jpg?updatedAt=1750707742700",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "vintage", "classic"]
    },
    {
      id: 12,
      src: "https://ik.imagekit.io/soumya3301/Necklace/openart-14ac2a01702c40c2a61b9dea75a33c72_raw.jpg?updatedAt=1750707744203",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "modern", "artistic"]
    },
    {
      id: 13,
      src: "https://ik.imagekit.io/soumya3301/Necklace/cb.png?updatedAt=1750707744971",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "elegant", "gold"]
    },
    {
      id: 14,
      src: "https://ik.imagekit.io/soumya3301/Necklace/inter3.png?updatedAt=1750707745821",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "intricate", "detailed"]
    },
    {
      id: 15,
      src: "https://ik.imagekit.io/soumya3301/Necklace/ki909.png?updatedAt=1750707746896",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "luxury", "premium"]
    },
    {
      id: 16,
      src: "https://ik.imagekit.io/soumya3301/Necklace/openart-740e6dedb1f64590b278cae4faa74d95_raw.png?updatedAt=1750707747192",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "artistic", "unique"]
    },
    {
      id: 17,
      src: "https://ik.imagekit.io/soumya3301/Necklace/topview_image_48cbcda3a081424d803d9c81a8435634.png?updatedAt=1750707751512",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "topview", "elegant"]
    },
    {
      id: 18,
      src: "https://ik.imagekit.io/soumya3301/Necklace/87h.png?updatedAt=1750707751538",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "modern", "stylish"]
    },
    {
      id: 19,
      src: "https://ik.imagekit.io/soumya3301/Necklace/shay2.png?updatedAt=1750707752147",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "elegant", "refined"]
    },
    {
      id: 20,
      src: "https://ik.imagekit.io/soumya3301/Necklace/jh2.png?updatedAt=1750707753972",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "luxury", "premium"]
    },
    {
      id: 21,
      src: "https://ik.imagekit.io/soumya3301/Necklace/f3.png?updatedAt=1750707754102",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "delicate", "beautiful"]
    },
    {
      id: 22,
      src: "https://ik.imagekit.io/soumya3301/Necklace/a-woman-adorned-in-traditional-gold-jewe_LYWNmNvkSmu6xM6WPsJQug_busUwrH_QES120L1CTJkvw.png?updatedAt=1750707755451",
      alt: "AI-generated jewelry photography",
      tags: ["traditional", "gold", "cultural"]
    },
    {
      id: 23,
      src: "https://ik.imagekit.io/soumya3301/Necklace/asian.png?updatedAt=1750707757683",
      alt: "AI-generated jewelry photography",
      tags: ["asian", "traditional", "elegant"]
    },
    {
      id: 24,
      src: "https://ik.imagekit.io/soumya3301/Necklace/xas.png?updatedAt=1750707757808",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "modern", "stylish"]
    },
    {
      id: 25,
      src: "https://ik.imagekit.io/soumya3301/Necklace/replicate-prediction-q5pks60ca1rmc0cqk2zsm3ak9w.png?updatedAt=1750707763407",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "artistic", "unique"]
    },
    {
      id: 26,
      src: "https://ik.imagekit.io/soumya3301/Necklace/cb2.png?updatedAt=1750707763868",
      alt: "AI-generated jewelry photography",
      tags: ["necklace", "elegant", "refined"]
    },
    {
      id: 29,
      src: "https://ik.imagekit.io/soumya3301/bln%20ten2.png",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "modern", "stylish"]
    },
    {
      id: 30,
      src: "https://ik.imagekit.io/soumya3301/replicate-prediction-rs1hcayk0nrm80cqj7aafte4n8.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 31,
      src: "https://ik.imagekit.io/soumya3301/0fea02da-0c92-40c9-9861-6d8602fd6177.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "elegant"]
    },
    {
      id: 32,
      src: "https://ik.imagekit.io/soumya3301/mnmf3'.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 33,
      src: "https://ik.imagekit.io/soumya3301/mnmf1'.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 34,
      src: "https://ik.imagekit.io/soumya3301/dnour3.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 35,
      src: "https://ik.imagekit.io/soumya3301/993183d7-7277-4727-9e3d-55e374d2b10a.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 36,
      src: "https://ik.imagekit.io/soumya3301/mnmf4.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 37,
      src: "https://ik.imagekit.io/soumya3301/eng3.png",
      alt: "AI-generated jewelry photography",
      tags: ["engagement", "ring", "romantic"]
    },
    {
      id: 38,
      src: "https://ik.imagekit.io/soumya3301/dnour1.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 39,
      src: "https://ik.imagekit.io/soumya3301/dnour2.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 40,
      src: "https://ik.imagekit.io/soumya3301/mnmf2.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 41,
      src: "https://ik.imagekit.io/soumya3301/bln%20ten.png",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "elegant", "refined"]
    },
    {
      id: 42,
      src: "https://ik.imagekit.io/soumya3301/bhr43.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 43,
      src: "https://ik.imagekit.io/soumya3301/bhr42.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 44,
      src: "https://ik.imagekit.io/soumya3301/bhr44.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 45,
      src: "https://ik.imagekit.io/soumya3301/bhr46.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 46,
      src: "https://ik.imagekit.io/soumya3301/u9153988912_A_single_octopus_tentacle_emerging_from_a_glossy__f9d8ec4e-6a58-4f5a-96ca-0f484dd49533_0.png",
      alt: "AI-generated jewelry photography",
      tags: ["artistic", "unique", "creative"]
    },
    {
      id: 47,
      src: "https://ik.imagekit.io/soumya3301/francois2.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 48,
      src: "https://ik.imagekit.io/soumya3301/erato4.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 49,
      src: "https://ik.imagekit.io/soumya3301/erato3.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 50,
      src: "https://ik.imagekit.io/soumya3301/u9153988912_A_closed_white_tulip_frozen_inside_a_transparent__0ec1b502-4f1f-47a9-a1d8-1cf253274706_0.png",
      alt: "AI-generated jewelry photography",
      tags: ["artistic", "unique", "creative"]
    },
    {
      id: 51,
      src: "https://ik.imagekit.io/soumya3301/p10.jpg?updatedAt=1753373684828",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 52,
      src: "https://ik.imagekit.io/soumya3301/erato1.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 53,
      src: "https://ik.imagekit.io/soumya3301/erato2.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 54,
      src: "https://ik.imagekit.io/soumya3301/u9153988912_A_bee_frozen_mid-landing_on_a_shiny_diamond_ring__daf5a912-97d7-4ce1-bc24-f7a9b94c4397_3.png",
      alt: "AI-generated jewelry photography",
      tags: ["ring", "diamond", "artistic"]
    },
    {
      id: 55,
      src: "https://ik.imagekit.io/soumya3301/bln34.png",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "modern", "contemporary"]
    },
    {
      id: 56,
      src: "https://ik.imagekit.io/soumya3301/bln33.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "elegant", "refined"]
    },
    {
      id: 57,
      src: "https://ik.imagekit.io/soumya3301/bln32%20(1).png",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "luxury", "premium"]
    },
    {
      id: 58,
      src: "https://ik.imagekit.io/soumya3301/lz2.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 59,
      src: "https://ik.imagekit.io/soumya3301/alm4.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 60,
      src: "https://ik.imagekit.io/soumya3301/alm3.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 61,
      src: "https://ik.imagekit.io/soumya3301/alm1.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 62,
      src: "https://ik.imagekit.io/soumya3301/lz1.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 63,
      src: "https://ik.imagekit.io/soumya3301/8f99264b-27b8-427b-8a8e-d8a863fd7a7f.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 64,
      src: "https://ik.imagekit.io/soumya3301/ff1.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 65,
      src: "https://ik.imagekit.io/soumya3301/lz3.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 66,
      src: "https://ik.imagekit.io/soumya3301/p4%20(1).png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 67,
      src: "https://ik.imagekit.io/soumya3301/lzf1.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 68,
      src: "https://ik.imagekit.io/soumya3301/lzf.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 69,
      src: "https://ik.imagekit.io/soumya3301/ff2.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 70,
      src: "https://ik.imagekit.io/soumya3301/openart-b8d0f97f47d9416886efceadcf3475b5_raw.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 71,
      src: "https://ik.imagekit.io/soumya3301/lz12.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 72,
      src: "https://ik.imagekit.io/soumya3301/p2.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 73,
      src: "https://ik.imagekit.io/soumya3301/lzf4.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 74,
      src: "https://ik.imagekit.io/soumya3301/p10.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 75,
      src: "https://ik.imagekit.io/soumya3301/bln37.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "modern", "stylish"]
    },
    {
      id: 76,
      src: "https://ik.imagekit.io/soumya3301/bln36.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "elegant", "refined"]
    },
    {
      id: 77,
      src: "https://ik.imagekit.io/soumya3301/bln39.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "luxury", "premium"]
    },
    {
      id: 78,
      src: "https://ik.imagekit.io/soumya3301/p9'.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 79,
      src: "https://ik.imagekit.io/soumya3301/g5.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 80,
      src: "https://ik.imagekit.io/soumya3301/G1.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 81,
      src: "https://ik.imagekit.io/soumya3301/bln42.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["bracelet", "luxury", "premium"]
    },
    {
      id: 82,
      src: "https://ik.imagekit.io/soumya3301/G3.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 83,
      src: "https://ik.imagekit.io/soumya3301/G4.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 84,
      src: "https://ik.imagekit.io/soumya3301/E2%20(1).png",
      alt: "AI-generated jewelry photography",
      tags: ["earrings", "elegant", "refined"]
    },
    {
      id: 85,
      src: "https://ik.imagekit.io/soumya3301/E3%20(1).png",
      alt: "AI-generated jewelry photography",
      tags: ["earrings", "luxury", "premium"]
    },
    {
      id: 86,
      src: "https://ik.imagekit.io/soumya3301/E1%20(1).png",
      alt: "AI-generated jewelry photography",
      tags: ["earrings", "artistic", "unique"]
    },
    {
      id: 87,
      src: "https://ik.imagekit.io/soumya3301/bb5.png",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    },
    {
      id: 88,
      src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-07-22%20at%205.17.52%20PM.jpeg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "elegant", "refined"]
    },
    {
      id: 89,
      src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-07-22%20at%204.21.22%20PM.jpeg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "luxury", "premium"]
    },
    {
      id: 90,
      src: "https://ik.imagekit.io/soumya3301/reg4.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "artistic", "unique"]
    },
    {
      id: 91,
      src: "https://ik.imagekit.io/soumya3301/reg3.jpg",
      alt: "AI-generated jewelry photography",
      tags: ["jewelry", "modern", "stylish"]
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      setError('');
      loadRunRecords();
    } else {
      setError('Invalid passcode');
    }
  };

  const loadRunRecords = async () => {
    setLoading(true);
    try {
      const records = await getAllRunRecords();
      setRunRecords(records);
    } catch (err) {
      console.error('Error loading run records:', err);
      setError('Failed to load run records');
    } finally {
      setLoading(false);
    }
  };

  const handleViewRecord = async (record: RunRecord) => {
    setSelectedRecord(record);
    // Map selected image IDs to actual image data
    const images = record.selected_images
      .map(id => allImages.find(img => img.id === id))
      .filter(Boolean) as ImageData[];
    setSelectedImages(images);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  // Load run records when component mounts and user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadRunRecords();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <SEOHead 
          title="Admin - Jewelry AI"
          description="Admin panel for Jewelry AI"
          keywords="admin, jewelry ai"
          canonicalUrl="https://jewelryai.app/admin"
        />
        
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h1>
              <p className="text-gray-600">Enter passcode to continue</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label htmlFor="passcode" className="block text-sm font-medium text-gray-700 mb-2">
                  Passcode
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter passcode"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all font-medium"
              >
                Access Admin Panel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (selectedRecord) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <SEOHead 
          title="Run Details - Admin - Jewelry AI"
          description="View run record details"
          keywords="admin, run details, jewelry ai"
          canonicalUrl="https://jewelryai.app/admin"
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Run Details</h1>
                  <p className="text-gray-600">Record ID: {selectedRecord.id}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Record Info */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">User Name</p>
                  <p className="font-semibold text-gray-900">{selectedRecord.user_name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Submitted At</p>
                  <p className="font-semibold text-gray-900">{formatDate(selectedRecord.submission_time)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Image className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Images Selected</p>
                  <p className="font-semibold text-gray-900">{selectedRecord.selected_images.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Images */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Selected Images</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {selectedImages.map((image) => (
                <div key={image.id} className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {image.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <SEOHead 
        title="Admin Panel - Jewelry AI"
        description="Admin panel for managing run records"
        keywords="admin, run records, jewelry ai"
        canonicalUrl="https://jewelryai.app/admin"
      />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600 mt-1">Manage run records and submissions</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Runs</p>
                <p className="text-2xl font-bold text-gray-900">{runRecords.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Images</p>
                <p className="text-2xl font-bold text-gray-900">
                  {runRecords.reduce((sum, record) => sum + record.selected_images.length, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Latest Run</p>
                <p className="text-sm font-semibold text-gray-900">
                  {runRecords.length > 0 ? formatDate(runRecords[0].submission_time) : 'No runs yet'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Run Records Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Run Records</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto"></div>
              <p className="text-gray-600 mt-2">Loading records...</p>
            </div>
          ) : runRecords.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No run records found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Images
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {runRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{record.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.user_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.selected_images.length} images
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(record.submission_time)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleViewRecord(record)}
                          className="inline-flex items-center space-x-1 text-amber-600 hover:text-amber-800 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;