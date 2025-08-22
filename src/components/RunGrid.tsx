import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface RunGridProps {
  onSelectionChange?: (selectedCount: number, progressPercentage: number) => void;
}

const RunGrid: React.FC<RunGridProps> = ({ onSelectionChange }) => {
    const [shuffledImages, setShuffledImages] = useState<any[]>([]);
    const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());
    const MAX_SELECTION = 25;

    // All images from GalleryGrid.tsx (130 images)
    const galleryImages = [
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
            src: "https://ik.imagekit.io/soumya3301/reg1.jpg",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 92,
            src: "https://ik.imagekit.io/soumya3301/reg3.png",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 93,
            src: "https://ik.imagekit.io/soumya3301/binder1.jpg",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 94,
            src: "https://ik.imagekit.io/soumya3301/binder3.jpg",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 95,
            src: "https://ik.imagekit.io/soumya3301/binder2.jpg",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 96,
            src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2011.27.28%20PM.jpeg?updatedAt=1755161816356",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 97,
            src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2011.22.21%20PM.jpeg?updatedAt=1755161816354",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 98,
            src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%209.33.43%20PM.jpeg?updatedAt=1755161816394",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 99,
            src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2010.39.51%20PM.jpeg?updatedAt=1755161816420",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 100,
            src: "https://ik.imagekit.io/soumya3301/ai_0e0dc0baca.jpg?updatedAt=1755161822290",
            alt: "AI-generated jewelry photography",
            tags: ["ai-generated", "modern", "innovative"]
        },
        {
            id: 101,
            src: "https://ik.imagekit.io/soumya3301/SZ2.png?updatedAt=1755161822662",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 102,
            src: "https://ik.imagekit.io/soumya3301/u6.png?updatedAt=1755161823097",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 103,
            src: "https://ik.imagekit.io/soumya3301/U2.png?updatedAt=1755161823149",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 104,
            src: "https://ik.imagekit.io/soumya3301/U3.png?updatedAt=1755161823366",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 105,
            src: "https://ik.imagekit.io/soumya3301/pp3.png?updatedAt=1755161824422",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 106,
            src: "https://ik.imagekit.io/soumya3301/U1.png?updatedAt=1755161824858",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 107,
            src: "https://ik.imagekit.io/soumya3301/pp1.png?updatedAt=1755161824955",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 108,
            src: "https://ik.imagekit.io/soumya3301/pp2.png?updatedAt=1755161824981",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 109,
            src: "https://ik.imagekit.io/soumya3301/U4.png?updatedAt=1755161825143",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 110,
            src: "https://ik.imagekit.io/soumya3301/ai_ice_cream_ring4.png?updatedAt=1755161827449",
            alt: "AI-generated jewelry photography",
            tags: ["ring", "creative", "unique"]
        },
        {
            id: 111,
            src: "https://ik.imagekit.io/soumya3301/ai_ice_cream_ring1.png?updatedAt=1755161827639",
            alt: "AI-generated jewelry photography",
            tags: ["ring", "artistic", "creative"]
        },
        {
            id: 112,
            src: "https://ik.imagekit.io/soumya3301/marika1.png?updatedAt=1755161828326",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 113,
            src: "https://ik.imagekit.io/soumya3301/marika2.png?updatedAt=1755161839703",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 114,
            src: "https://ik.imagekit.io/soumya3301/pht.png?updatedAt=1755161840411",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 115,
            src: "https://ik.imagekit.io/soumya3301/rubX.png?updatedAt=1755161840437",
            alt: "AI-generated jewelry photography",
            tags: ["ruby", "gemstone", "luxury"]
        },
        {
            id: 116,
            src: "https://ik.imagekit.io/soumya3301/tokyo4.png?updatedAt=1755161840746",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 117,
            src: "https://ik.imagekit.io/soumya3301/daniela%20taped.png?updatedAt=1755161840785",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 118,
            src: "https://ik.imagekit.io/soumya3301/ai90942.png?updatedAt=1755161840904",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 119,
            src: "https://ik.imagekit.io/soumya3301/tokyo3.png?updatedAt=1755161840957",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 120,
            src: "https://ik.imagekit.io/soumya3301/w5.png?updatedAt=1755161845056",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 121,
            src: "https://ik.imagekit.io/soumya3301/w6.png?updatedAt=1755161846876",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 122,
            src: "https://ik.imagekit.io/soumya3301/w8.png?updatedAt=1755161848063",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 123,
            src: "https://ik.imagekit.io/soumya3301/gr2.png?updatedAt=1755161850025",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 124,
            src: "https://ik.imagekit.io/soumya3301/gr3.png?updatedAt=1755161851484",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 125,
            src: "https://ik.imagekit.io/soumya3301/x5.png?updatedAt=1755161851877",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "modern", "stylish"]
        },
        {
            id: 126,
            src: "https://ik.imagekit.io/soumya3301/x6.png?updatedAt=1755161852392",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "elegant", "refined"]
        },
        {
            id: 127,
            src: "https://ik.imagekit.io/soumya3301/x2%20(1).png?updatedAt=1755161852455",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "luxury", "premium"]
        },
        {
            id: 128,
            src: "https://ik.imagekit.io/soumya3301/D2.png?updatedAt=1755161855855",
            alt: "AI-generated jewelry photography",
            tags: ["jewelry", "artistic", "unique"]
        },
        {
            id: 129,
            src: "https://ik.imagekit.io/soumya3301/P7.png?updatedAt=1755161855099",
            alt: "AI-generated jewelry photography",
            tags: ["pendant", "modern", "stylish"]
        },
        {
            id: 130,
            src: "https://ik.imagekit.io/soumya3301/P1%20(1).png?updatedAt=1755161855012",
            alt: "AI-generated jewelry photography",
            tags: ["pendant", "luxury", "premium"]
        }
    ];

    // Shuffle function
    const shuffleArray = (array: any[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Shuffle images on component mount
    useEffect(() => {
        const shuffled = shuffleArray(galleryImages);
        setShuffledImages(shuffled);
    }, []);

    // Calculate progress percentage
    const progressPercentage = (selectedImages.size / MAX_SELECTION) * 100;

    // Notify parent component of selection changes
    useEffect(() => {
        if (onSelectionChange) {
            onSelectionChange(selectedImages.size, progressPercentage);
        }
    }, [selectedImages.size, progressPercentage, onSelectionChange]);

    const toggleImageSelection = (imageId: number) => {
        const newSelected = new Set(selectedImages);
        if (newSelected.has(imageId)) {
            newSelected.delete(imageId);
        } else {
            // Check if we've reached the maximum selection limit
            if (newSelected.size >= MAX_SELECTION) {
                return; // Don't allow more selections
            }
            newSelected.add(imageId);
        }
        setSelectedImages(newSelected);
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                {/* Stats */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-full px-6 py-3">
                        <div>
                            <span className="text-2xl font-bold text-gray-900">{shuffledImages.length}+</span>
                            <span className="text-sm text-gray-600 ml-1">Images</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-amber-500">{selectedImages.size}</span>
                            <span className="text-sm text-gray-600 ml-1">Selected</span>
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                    {shuffledImages.map((image) => {
                        const isSelected = selectedImages.has(image.id);
                        return (
                            <div
                                key={image.id}
                                className="relative aspect-[3/4] cursor-pointer group overflow-hidden rounded-lg"
                                onClick={() => toggleImageSelection(image.id)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                
                                {/* Green tint overlay when selected */}
                                {isSelected && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-green-500/20 to-green-600/30 transition-opacity duration-300" 
                                         style={{
                                             background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.3) 100%)'
                                         }}
                                    />
                                )}
                                
                                {/* Rounded checkbox in center - always visible */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div 
                                        className={`w-6 h-6 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${
                                            isSelected 
                                                ? 'bg-green-500 border-green-500 scale-110' 
                                                : 'bg-white/90 border-white/90 backdrop-blur-sm'
                                        }`}
                                        style={{
                                            boxShadow: isSelected 
                                                ? '0 0 0 2px rgba(34, 197, 94, 0.3)' 
                                                : '0 2px 8px rgba(0, 0, 0, 0.15)'
                                        }}
                                    >
                                        <Check 
                                            size={14} 
                                            className={`transition-all duration-200 ${
                                                isSelected 
                                                    ? 'text-white opacity-100 scale-100' 
                                                    : 'text-gray-400 opacity-60 scale-90'
                                            }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Sticky Floating Progress Bar - Fixed to Viewport Bottom */}
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 px-6 py-4 min-w-[300px] max-w-[90vw] mx-auto pointer-events-auto">
                    <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-gray-800">
                                {selectedImages.size}/{MAX_SELECTION} images selected
                            </span>
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {Math.round(progressPercentage)}%
                            </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                            <div 
                                className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-700 ease-out shadow-sm"
                                style={{ 
                                    width: `${progressPercentage}%`,
                                    boxShadow: progressPercentage > 0 ? '0 0 10px rgba(34, 197, 94, 0.3)' : 'none'
                                }}
                            ></div>
                        </div>
                        
                        {/* Status Messages */}
                        {selectedImages.size === 0 && (
                            <div className="mt-2 text-xs text-gray-500 text-center">
                                Select up to 25 images to continue
                            </div>
                        )}
                        
                        {selectedImages.size > 0 && selectedImages.size < MAX_SELECTION && (
                            <div className="mt-2 text-xs text-green-600 text-center font-medium">
                                {MAX_SELECTION - selectedImages.size} more images can be selected
                            </div>
                        )}
                        
                        {selectedImages.size >= MAX_SELECTION && (
                            <div className="mt-2 text-xs text-amber-600 text-center font-medium">
                                ✓ Maximum selection reached
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RunGrid;