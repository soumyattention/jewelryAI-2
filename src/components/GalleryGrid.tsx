import React, { useState, useEffect, useRef } from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Play } from 'lucide-react';

const GalleryGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [shuffledItems, setShuffledItems] = useState<any[]>([]);
    const [videoErrors, setVideoErrors] = useState<string[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    // Gallery items with photos and videos (4:5 aspect ratio optimized)
    const galleryItems = [
        // Photos
        {
            id: 1,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/3.png?updatedAt=1750483598664",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 2,
            category: "photos", 
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/8.png?updatedAt=1750483597465",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 3,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/7.png?updatedAt=1750483598632",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 4,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/1.png?updatedAt=1750483666775",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 5,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/2.png?updatedAt=1750483598632",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 6,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/6.png?updatedAt=1750483598830",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 7,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/replicate-prediction-qftbnva4w1rmc0cqkcbaec8t34.jpg?updatedAt=1750705074646",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 8,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/022404992414_2244edfe4fd911f0afe58584d6140a20_output_0superresolution.jpg?updatedAt=1750705074676",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 9,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/cb4.jpg?updatedAt=1750707740837",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 10,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/openart-76f52eada74a41f499703ad1800c6d0a_raw.jpg?updatedAt=1750707742581",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 11,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/cb1.jpg?updatedAt=1750707742700",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 12,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/openart-14ac2a01702c40c2a61b9dea75a33c72_raw.jpg?updatedAt=1750707744203",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 13,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/cb.png?updatedAt=1750707744971",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 14,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/inter3.png?updatedAt=1750707745821",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 15,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/ki909.png?updatedAt=1750707746896",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 16,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/openart-740e6dedb1f64590b278cae4faa74d95_raw.png?updatedAt=1750707747192",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 17,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/topview_image_48cbcda3a081424d803d9c81a8435634.png?updatedAt=1750707751512",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 18,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/87h.png?updatedAt=1750707751538",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 19,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/shay2.png?updatedAt=1750707752147",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 20,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/jh2.png?updatedAt=1750707753972",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 21,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/f3.png?updatedAt=1750707754102",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 22,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/a-woman-adorned-in-traditional-gold-jewe_LYWNmNvkSmu6xM6WPsJQug_busUwrH_QES120L1CTJkvw.png?updatedAt=1750707755451",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 23,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/asian.png?updatedAt=1750707757683",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 24,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/xas.png?updatedAt=1750707757808",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 25,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/replicate-prediction-q5pks60ca1rmc0cqk2zsm3ak9w.png?updatedAt=1750707763407",
            alt: "AI-generated jewelry photography"
        },
        {
            id: 26,
            category: "photos",
            type: "image",
            src: "https://ik.imagekit.io/soumya3301/Necklace/cb2.png?updatedAt=1750707763868",
            alt: "AI-generated jewelry photography"
        },
      {
    id: 29,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln%20ten2.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 30,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/replicate-prediction-rs1hcayk0nrm80cqj7aafte4n8.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 31,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/0fea02da-0c92-40c9-9861-6d8602fd6177.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 32,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/mnmf3'.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 33,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/mnmf1'.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 34,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/dnour3.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 35,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/993183d7-7277-4727-9e3d-55e374d2b10a.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 36,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/mnmf4.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 37,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/eng3.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 38,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/dnour1.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 39,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/dnour2.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 40,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/mnmf2.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 41,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln%20ten.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 42,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bhr43.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 43,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bhr42.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 44,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bhr44.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 45,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bhr46.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 46,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/u9153988912_A_single_octopus_tentacle_emerging_from_a_glossy__f9d8ec4e-6a58-4f5a-96ca-0f484dd49533_0.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 47,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/francois2.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 48,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/erato4.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 49,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/erato3.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 50,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/u9153988912_A_closed_white_tulip_frozen_inside_a_transparent__0ec1b502-4f1f-47a9-a1d8-1cf253274706_0.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 51,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/p10.jpg?updatedAt=1753373684828",
    alt: "AI-generated jewelry photography"
},
{
    id: 52,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/erato1.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 53,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/erato2.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 54,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/u9153988912_A_bee_frozen_mid-landing_on_a_shiny_diamond_ring__daf5a912-97d7-4ce1-bc24-f7a9b94c4397_3.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 55,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln34.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 56,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln33.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 57,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln32%20(1).png",
    alt: "AI-generated jewelry photography"
},
{
    id: 58,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/lz2.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 59,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/alm4.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 60,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/alm3.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 61,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/alm1.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 62,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/lz1.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 63,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/8f99264b-27b8-427b-8a8e-d8a863fd7a7f.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 64,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/ff1.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 65,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/lz3.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 66,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/p4%20(1).png",
    alt: "AI-generated jewelry photography"
},
{
    id: 67,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/lzf1.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 68,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/lzf.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 69,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/ff2.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 70,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/openart-b8d0f97f47d9416886efceadcf3475b5_raw.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 71,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/lz12.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 72,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/p2.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 73,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/lzf4.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 74,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/p10.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 75,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln37.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 76,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln36.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 77,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln39.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 78,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/p9'.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 79,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/g5.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 80,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/G1.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 81,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bln42.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 82,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/G3.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 83,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/G4.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 84,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/E2%20(1).png",
    alt: "AI-generated jewelry photography"
},
{
    id: 85,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/E3%20(1).png",
    alt: "AI-generated jewelry photography"
},
{
    id: 86,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/E1%20(1).png",
    alt: "AI-generated jewelry photography"
},
{
    id: 87,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/bb5.png",
    alt: "AI-generated jewelry photography"
        },
      {
    id: 88,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-07-22%20at%205.17.52%20PM.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 89,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-07-22%20at%204.21.22%20PM.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 90,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/reg4.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 91,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/reg1.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 92,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/reg3.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 93,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/binder1.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 94,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/binder3.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 95,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/binder2.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 96,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2011.27.28%20PM.jpeg?updatedAt=1755161816356",
    alt: "AI-generated jewelry photography"
},
{
    id: 97,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2011.22.21%20PM.jpeg?updatedAt=1755161816354",
    alt: "AI-generated jewelry photography"
},
{
    id: 98,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%209.33.43%20PM.jpeg?updatedAt=1755161816394",
    alt: "AI-generated jewelry photography"
},
{
    id: 99,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2010.39.51%20PM.jpeg?updatedAt=1755161816420",
    alt: "AI-generated jewelry photography"
},
{
    id: 100,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/ai_0e0dc0baca.jpg?updatedAt=1755161822290",
    alt: "AI-generated jewelry photography"
},
{
    id: 101,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/SZ2.png?updatedAt=1755161822662",
    alt: "AI-generated jewelry photography"
},
{
    id: 102,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/u6.png?updatedAt=1755161823097",
    alt: "AI-generated jewelry photography"
},
{
    id: 103,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/U2.png?updatedAt=1755161823149",
    alt: "AI-generated jewelry photography"
},
{
    id: 104,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/U3.png?updatedAt=1755161823366",
    alt: "AI-generated jewelry photography"
},
{
    id: 105,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/pp3.png?updatedAt=1755161824422",
    alt: "AI-generated jewelry photography"
},
{
    id: 106,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/U1.png?updatedAt=1755161824858",
    alt: "AI-generated jewelry photography"
},
{
    id: 107,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/pp1.png?updatedAt=1755161824955",
    alt: "AI-generated jewelry photography"
},
{
    id: 108,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/pp2.png?updatedAt=1755161824981",
    alt: "AI-generated jewelry photography"
},
{
    id: 109,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/U4.png?updatedAt=1755161825143",
    alt: "AI-generated jewelry photography"
},
{
    id: 110,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/ai_ice_cream_ring4.png?updatedAt=1755161827449",
    alt: "AI-generated jewelry photography"
},
{
    id: 111,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/ai_ice_cream_ring1.png?updatedAt=1755161827639",
    alt: "AI-generated jewelry photography"
},
{
    id: 112,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/marika1.png?updatedAt=1755161828326",
    alt: "AI-generated jewelry photography"
},
{
    id: 113,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/marika2.png?updatedAt=1755161839703",
    alt: "AI-generated jewelry photography"
},
{
    id: 114,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/pht.png?updatedAt=1755161840411",
    alt: "AI-generated jewelry photography"
},
{
    id: 115,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/rubX.png?updatedAt=1755161840437",
    alt: "AI-generated jewelry photography"
},
{
    id: 116,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/tokyo4.png?updatedAt=1755161840746",
    alt: "AI-generated jewelry photography"
},
{
    id: 117,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/daniela%20taped.png?updatedAt=1755161840785",
    alt: "AI-generated jewelry photography"
},
{
    id: 118,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/ai90942.png?updatedAt=1755161840904",
    alt: "AI-generated jewelry photography"
},
{
    id: 119,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/tokyo3.png?updatedAt=1755161840957",
    alt: "AI-generated jewelry photography"
},
{
    id: 120,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/w5.png?updatedAt=1755161845056",
    alt: "AI-generated jewelry photography"
},
{
    id: 121,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/w6.png?updatedAt=1755161846876",
    alt: "AI-generated jewelry photography"
},
{
    id: 122,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/w8.png?updatedAt=1755161848063",
    alt: "AI-generated jewelry photography"
},
{
    id: 123,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/gr2.png?updatedAt=1755161850025",
    alt: "AI-generated jewelry photography"
},
{
    id: 124,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/gr3.png?updatedAt=1755161851484",
    alt: "AI-generated jewelry photography"
},
{
    id: 125,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x5.png?updatedAt=1755161851877",
    alt: "AI-generated jewelry photography"
},
{
    id: 126,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x6.png?updatedAt=1755161852392",
    alt: "AI-generated jewelry photography"
},
{
    id: 127,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x2%20(1).png?updatedAt=1755161852455",
    alt: "AI-generated jewelry photography"
},
{
    id: 128,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/D2.png?updatedAt=1755161855855",
    alt: "AI-generated jewelry photography"
},
{
    id: 129,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/P7.png?updatedAt=1755161855099",
    alt: "AI-generated jewelry photography"
},
{
    id: 130,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/P1%20(1).png?updatedAt=1755161855012",
    alt: "AI-generated jewelry photography"
},
{
    id: 131,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x145.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 132,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x144.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 133,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x143.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 134,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x142.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 135,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x141.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 136,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x140.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 137,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x139.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 138,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x138.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 139,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x137.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 140,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x136.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 141,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x135.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 142,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x134.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 143,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x133.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 144,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x132.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 145,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x131.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 146,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x130.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 147,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x129.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 148,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x128.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 149,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x127.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 150,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x126.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 151,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x125.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 152,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x124.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 153,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x123.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 154,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x122.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 155,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x100.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 156,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x121.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 157,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x120.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 158,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x119.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 159,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x118.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 160,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x117.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 161,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x116.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 162,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x115.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 163,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x114.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 164,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x113.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 165,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x112.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 166,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x111.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 167,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x110.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 168,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x109.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 169,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x108.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 170,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x107.jpeg",
    alt: "AI-generated jewelry photography"
},
{
    id: 171,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x106.jpg",
    alt: "AI-generated jewelry photography"
},
{
    id: 172,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x105.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 173,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x104.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 174,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x103.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 175,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x102.png",
    alt: "AI-generated jewelry photography"
},
{
    id: 176,
    category: "photos",
    type: "image",
    src: "https://ik.imagekit.io/soumya3301/x101.png",
    alt: "AI-generated jewelry photography"
},

        // Videos - Cloudflare CDN URLs
        {
            id: 1001,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/11bd29a8618d3588483ee74cfe8c2bde/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1002,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/c2cf606977cab39c4c066eb9f4e843ec/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1003,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/db7419e264d5f9df2b811112e28af16a/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1004,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/6bf8f32ecd01b2b4743b9b11b8c9f421/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1005,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/badc42d3035666b2cca8fb2cd873f5e8/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1006,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/12621081b5a19c4e0c139c322680050d/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1007,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/6d4b5824aa9cfb93c62ed9cb15cbba7e/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1008,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/c1d5b723f2cedcc108dbbaf5f784a0f5/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1009,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/42295164ae7ec1ed6891b98e245d0983/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1010,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/1a1e37ef8d66075a08458ed092947b43/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1011,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/f7c45583b5597152a28e3419049f43b0/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1012,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/8cdb09de52c7e3fb0f01b23f1a32c26d/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1013,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/3df8196f6cefb1def61a8ee3ecfe4cae/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1014,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/8d24b8b30f0e0c508951f8cee36d079e/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1015,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/403fccbf1df3781f152be5efd20fa8e9/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1016,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2d68b15717c3f5aaf906e8dbbab70409/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1017,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2b7423f8c70b27bc0d7ebb807160a4f1/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1018,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/140b167edb888394c4d55110bff267d7/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1019,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/c7760494f8cb1b6589de6d180d3bb19a/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1020,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/ae5f301bffbf38a4a8dd41e28fc3dece/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1021,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/6fa909b2b972b775b127c09c0c373bcf/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1022,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/1cacc6a93122e9fdbbe620249bde1f7c/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1023,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/f1be1a9ceaf08a0202e9d241d00c3169/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1024,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/ac031348fafaaba25c48f1d4d5cb5379/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1025,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/39381b4ec05b9a0963a46954eb40d0cd/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1026,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/ce7a44e9478d2b32d16c8015f546e274/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1027,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2b3dc8c63a721d95d7c3a9f373178614/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1028,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2de96310b60c883e07c0ae239937ad8c/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1029,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/250c46d05655a676c8c6ed757e8ae3ee/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1030,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/f891d20d31e77d2801de88f58300e927/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1031,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/7f290a70aed5996d4c2ebd064454f55f/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1032,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/c4b49eff1a5275aeda8d4558c614ae7b/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1033,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/116f5afcc7cdfb8f20b91f78cbc7fb5b/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1034,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/ef45d516db3816983862a5f1a35ed5e7/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1035,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/2bedeac4d49e39963cfb5c562e06ebb2/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1036,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/d17983cdd380ed9c11e960c79f082bc9/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1037,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/100f8c523455da241d6d30ea76726c0a/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1038,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/b5a55d0eb16dd549a0a8b329b76c9127/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
        },
        {
            id: 1039,
            category: "videos",
            type: "video",
            src: "https://customer-ceouac30q8dlws1c.cloudflarestream.com/73fa55b85efe595a0a41ff6f69daafaf/downloads/default.mp4",
            alt: "AI-generated jewelry video",
            autoplay: true
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

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
            const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobile(isMobileDevice || isSmallScreen);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Shuffle items on component mount and when page refreshes
    useEffect(() => {
        const shuffled = shuffleArray(galleryItems);
        setShuffledItems(shuffled);
        
        // Debug: Log the number of videos and photos
        const videoCount = shuffled.filter(item => item.type === 'video').length;
        const photoCount = shuffled.filter(item => item.type === 'image').length;
        console.log(`GalleryGrid: ${videoCount} videos, ${photoCount} photos loaded`);
        console.log('Video IDs:', shuffled.filter(item => item.type === 'video').map(item => item.id));
    }, []);

    // Intersection Observer for viewport-based video autoplay (both mobile and desktop)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0');
                    const video = videoRefs.current[videoId];
                    const videoItem = shuffledItems.find(item => item.id === videoId);
                    
                    if (video && videoItem && entry.isIntersecting) {
                        // Load video when it comes into view
                        if (isMobile) {
                            video.load();
                        }
                        
                        // Only autoplay if the video has autoplay enabled
                        if (videoItem.autoplay) {
                            video.play().catch((error) => {
                                console.log('Video autoplay failed:', error);
                            });
                        }
                    } else if (video && videoItem && !entry.isIntersecting) {
                        // Pause video when it goes out of view to save bandwidth
                        if (videoItem.autoplay) {
                            video.pause();
                        }
                    }
                });
            },
            {
                threshold: 0.3, // Start playing when 30% of video is visible
                rootMargin: '100px' // Start loading 100px before entering viewport
            }
        );

        // Observe all video containers
        const videoContainers = document.querySelectorAll('[data-video-id]');
        videoContainers.forEach((container) => observer.observe(container));

        return () => {
            videoContainers.forEach((container) => observer.unobserve(container));
        };
    }, [isMobile, shuffledItems]);





    // Filter items based on selected category
    const filteredItems = selectedCategory === "all" 
        ? shuffledItems 
        : shuffledItems.filter(item => item.category === selectedCategory);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative z-0 gallery-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                        Curated Gallery Collection
                    </h2>
                    <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                        A carefully curated selection of our finest AI-generated jewelry photography and videography. 
                        Each piece represents the pinnacle of artificial intelligence in jewelry marketing.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                    <ToggleGroup
                        type="single"
                        className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-1 shadow-lg flex-wrap gap-1 sm:gap-0"
                        value={selectedCategory}
                        onValueChange={(value) => setSelectedCategory(value || "all")}
                    >
                        <ToggleGroupItem 
                            value="all" 
                            className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium data-[state=on]:bg-gradient-to-r data-[state=on]:from-amber-500 data-[state=on]:to-yellow-600 data-[state=on]:text-white hover:bg-amber-50 min-h-[44px] touch-manipulation"
                        >
                            All
                        </ToggleGroupItem>
                        <ToggleGroupItem 
                            value="photos" 
                            className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium data-[state=on]:bg-gradient-to-r data-[state=on]:from-amber-500 data-[state=on]:to-yellow-600 data-[state=on]:text-white hover:bg-amber-50 min-h-[44px] touch-manipulation"
                        >
                            Photos
                        </ToggleGroupItem>
                        <ToggleGroupItem 
                            value="videos" 
                            className="px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium data-[state=on]:bg-gradient-to-r data-[state=on]:from-amber-500 data-[state=on]:to-yellow-600 data-[state=on]:text-white hover:bg-amber-50 min-h-[44px] touch-manipulation"
                        >
                            Videos
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                {/* Gallery Grid with Flip Animation - 4:5 Aspect Ratio */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-0 flip-reveal-container gallery-grid-container">
                    {filteredItems.map((item) => {
                        // Debug: Log each item being rendered
                        if (item.type === 'video') {
                            console.log('Rendering video:', item.id, item.src);
                        }
                        return (
                        <div key={item.id}>
                            <div 
                                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                {...(item.type === 'video' ? { 'data-video-id': item.id } : {})}

                            >
                                {/* 4:5 Aspect Ratio Container */}
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    {item.type === 'video' ? (
                                        <video
                                            ref={(el) => {
                                                if (el) videoRefs.current[item.id] = el;
                                            }}
                                            src={item.src}
                                            poster="https://ik.imagekit.io/soumya3301/video-poster.jpg?tr=w-400,h-500,c-fill,q-80"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                                            muted
                                            playsInline
                                            preload={isMobile ? "none" : "metadata"}
                                            autoPlay={false}
                                            loop={item.autoplay}
                                            webkit-playsinline="true"
                                            x5-playsinline="true"
                                            x5-video-player-type="h5"
                                            x5-video-player-fullscreen="true"
                                            onLoadStart={() => {
                                                console.log('Video loading started:', item.src);
                                                if (isMobile) {
                                                    console.log('Mobile video loading started:', item.src);
                                                }
                                            }}
                                            onLoadedMetadata={(e) => {
                                                const video = e.target as HTMLVideoElement;
                                                video.currentTime = 0.1; // Set to a small time to generate thumbnail
                                                console.log('Video loaded successfully:', item.src);
                                            }}
                                            onCanPlay={() => {
                                                console.log('Video can play:', item.src);
                                                if (isMobile) {
                                                    console.log('Mobile video can play:', item.src);
                                                }
                                            }}
                                            onError={(e) => {
                                                console.error('Video failed to load:', item.src, e);
                                                setVideoErrors(prev => [...prev, item.src]);
                                                // Show a fallback image or placeholder when video fails to load
                                                const videoElement = e.target as HTMLVideoElement;
                                                videoElement.style.display = 'none';
                                                // Create a fallback div
                                                const fallback = document.createElement('div');
                                                fallback.className = 'w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center';
                                                fallback.innerHTML = '<div class="text-gray-500 text-sm">Video unavailable</div>';
                                                videoElement.parentElement?.appendChild(fallback);
                                            }}

                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                                            draggable={false}
                                        />
                                    )}
                                    
                                    {/* Video icon indicator for all videos */}
                                    {item.type === 'video' && (
                                        <div className="absolute top-3 right-3 pointer-events-none">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-md">
                                                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 ml-0.5" fill="currentColor" />
                                            </div>
                                        </div>
                                    )}



                                    {/* Hover overlay for images only */}
                                    {item.type === 'image' && (
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-active:bg-black/20 transition-all duration-300 sm:hidden" />
                                    )}
                                    
                                    {/* Tap indicator for all devices */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-150" />
                                    
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="mt-12 sm:mt-16 text-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                                {shuffledItems.filter(item => item.type === 'image').length}+
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">Curated Photos</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                                {shuffledItems.filter(item => item.type === 'video').length}
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">Curated Videos</div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Premium</div>
                            <div className="text-sm sm:text-base text-gray-600">Quality</div>
                        </div>
                    </div>
                    
                    {/* Debug Info - Only show in development */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Debug Info</h3>
                            <p>Total Items: {shuffledItems.length}</p>
                            <p>Photos: {shuffledItems.filter(item => item.type === 'image').length}</p>
                            <p>Videos: {shuffledItems.filter(item => item.type === 'video').length}</p>
                            <p>Video Errors: {videoErrors.length}</p>
                            {videoErrors.length > 0 && (
                                <div className="mt-2 text-left">
                                    <p className="font-semibold">Failed Videos:</p>
                                    <ul className="text-sm text-red-600">
                                        {videoErrors.slice(0, 5).map((error, index) => (
                                            <li key={index} className="truncate">{error}</li>
                                        ))}
                                        {videoErrors.length > 5 && <li>... and {videoErrors.length - 5} more</li>}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>


        </section>
    );
};

export default GalleryGrid;