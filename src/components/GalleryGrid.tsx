import React, { useState, useEffect } from 'react';
import { FlipReveal, FlipRevealItem } from './ui/flip-reveal';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { X, Play, Eye } from 'lucide-react';

const GalleryGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', url: string } | null>(null);
    const [shuffledItems, setShuffledItems] = useState<any[]>([]);

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
    src: "https://ik.imagekit.io/soumya3301/u9153988912_An_upside-down_melting_vanilla_ice_cream_cone_wit_cd10fd0d-0122-4ab3-84ea-f87bc7b6388e_0.png",
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

        // Videos - Add your video URLs here
        {
            id: 1001,
            category: "videos",
            type: "video",
            src: "https://ik.imagekit.io/soumya3301/Gen%20Vid.mp4?updatedAt=1750483666775",
            alt: "AI-generated jewelry video"
        },
       {
    id: 1002,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/Generated%20video%201%20(24)%20copy%202.mp4?updatedAt=1750708620602",
    alt: "AI-generated jewelry video"
},
{
    id: 1003,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/AI%20Jewelry%20Video%2042.mp4?updatedAt=1750708649064",
    alt: "AI-generated jewelry video"
},
{
    id: 1004,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/My%20Video-18.mp4?updatedAt=1750708651035",
    alt: "AI-generated jewelry video"
},
{
    id: 1005,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/My%20Video-26.mp4?updatedAt=1750708652129",
    alt: "AI-generated jewelry video"
},
{
    id: 1006,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/My%20Video-28.mp4?updatedAt=1750708653814",
    alt: "AI-generated jewelry video"
},
{
    id: 1007,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/AI%20Jewelry%20Video%2036.mp4?updatedAt=1750708654479",
    alt: "AI-generated jewelry video"
},
{
    id: 1008,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/My%20Video-13%20copy%202.mp4?updatedAt=1750708655371",
    alt: "AI-generated jewelry video"
},
{
    id: 1009,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/My%20Video-13%20copy.mp4?updatedAt=1750708657440",
    alt: "AI-generated jewelry video"
},
      {
    id: 1010,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/lzf-2.mp4?updatedAt=1753372308047",
    alt: "AI-generated jewelry video"
},
{
    id: 1011,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/Professional_Mode_A_young_woman_with_auburn_hair_s.mp4?updatedAt=1753372325595",
    alt: "AI-generated jewelry video"
},
{
    id: 1012,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/lzf.mp4?updatedAt=1753372349285",
    alt: "AI-generated jewelry video"
},
{
    id: 1013,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik1.mp4?updatedAt=1755140574944",
    alt: "AI-generated jewelry video"
},
{
    id: 1014,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/mya1.mp4?updatedAt=1753372372125",
    alt: "AI-generated jewelry video"
},
{
    id: 1015,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/eng.mp4?updatedAt=1753372454019",
    alt: "AI-generated jewelry video"
},
{
    id: 1016,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/bhr.mp4?updatedAt=1753372467695",
    alt: "AI-generated jewelry video"
},
{
    id: 1017,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/bello3.mp4?updatedAt=1753372483286",
    alt: "AI-generated jewelry video"
},
{
    id: 1018,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/bello2.mp4?updatedAt=1753372530604",
    alt: "AI-generated jewelry video"
},
{
    id: 1019,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/Bello1.mp4?updatedAt=1753372532655",
    alt: "AI-generated jewelry video"
},
      {
    id: 1020,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik2.mp4?updatedAt=1755140577120",
    alt: "AI-generated jewelry video"
},
      {
    id: 1021,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik3.mp4?updatedAt=1755140578582",
    alt: "AI-generated jewelry video"
},
      {
    id: 1022,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik4.mp4?updatedAt=1755140565831",
    alt: "AI-generated jewelry video"
},
      {
    id: 1023,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik5.mp4?updatedAt=1755141592896",
    alt: "AI-generated jewelry video"
},
      {
    id: 1024,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik6.mp4?updatedAt=1755141590165",
    alt: "AI-generated jewelry video"
},
      {
    id: 1025,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik7.mp4?updatedAt=1755141585360",
    alt: "AI-generated jewelry video"
},
      {
    id: 1026,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik8.mp4?updatedAt=1755141591457",
    alt: "AI-generated jewelry video"
},
      {
    id: 1027,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik9.mp4?updatedAt=1755141589997",
    alt: "AI-generated jewelry video"
},
      {
    id: 1028,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik10.mp4?updatedAt=1755141589398",
    alt: "AI-generated jewelry video"
},
      {
    id: 1029,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik11.mp4?updatedAt=1755141586326",
    alt: "AI-generated jewelry video"
},
      {
    id: 1030,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik12.mp4?updatedAt=1755141583746",
    alt: "AI-generated jewelry video"
},
      {
    id: 1031,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik13.mp4?updatedAt=1755141697591",
    alt: "AI-generated jewelry video"
},
      {
    id: 1032,
    category: "videos",
    type: "video",
    src: "https://ik.imagekit.io/soumya3301/ik14.mp4?updatedAt=1755141698462",
    alt: "AI-generated jewelry video"
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

    // Shuffle items on component mount and when page refreshes
    useEffect(() => {
        setShuffledItems(shuffleArray(galleryItems));
    }, []);

    const openMediaPreview = (item: any) => {
        setSelectedMedia({
            type: item.type,
            url: item.src
        });
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeMediaPreview = () => {
        setSelectedMedia(null);
        // Restore body scroll
        document.body.style.overflow = '';
    };

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedMedia) {
                closeMediaPreview();
            }
        };

        if (selectedMedia) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [selectedMedia]);

    // Filter items based on selected category
    const filteredItems = selectedCategory === "all" 
        ? shuffledItems 
        : shuffledItems.filter(item => item.category === selectedCategory);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
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
                <FlipReveal 
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-0" 
                    keys={[selectedCategory]} 
                    showClass="flex" 
                    hideClass="hidden"
                >
                    {filteredItems.map((item) => (
                        <FlipRevealItem key={item.id} flipKey={item.category}>
                            <div 
                                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer touch-manipulation"
                                onClick={() => openMediaPreview(item)}
                                onTouchStart={() => {}} // Enable touch events
                            >
                                {/* 4:5 Aspect Ratio Container */}
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    {item.type === 'video' ? (
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                                            muted
                                            playsInline
                                            preload="metadata"
                                            autoPlay
                                            loop
                                            onLoadedMetadata={(e) => {
                                                const video = e.target as HTMLVideoElement;
                                                video.currentTime = 0.1; // Set to a small time to generate thumbnail
                                            }}
                                            onError={(e) => {
                                                console.log('Video load error:', e);
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
                                    
                                    {/* Video play button - always visible for videos, prominent and glassmorphic */}
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/10">
                                                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 ml-0.5" fill="currentColor" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Hover overlay for images only */}
                                    {item.type === 'image' && (
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 group-active:bg-black/20 transition-all duration-300 sm:hidden" />
                                    )}
                                    
                                    {/* Mobile tap indicator */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-150 sm:hidden" />
                                    
                                </div>
                            </div>
                        </FlipRevealItem>
                    ))}
                </FlipReveal>

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
                                {shuffledItems.filter(item => item.type === 'video').length}+
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">Curated Videos</div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Premium</div>
                            <div className="text-sm sm:text-base text-gray-600">Quality</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Media Preview Modal for Mobile */}
            {selectedMedia && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(30, 30, 30, 0.6) 50%, rgba(0, 0, 0, 0.4) 100%)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)'
                    }}
                    onClick={closeMediaPreview}
                    style={{ 
                        touchAction: 'none',
                        WebkitTouchCallout: 'none',
                        WebkitUserSelect: 'none',
                        userSelect: 'none',
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.4) 25%, rgba(51, 65, 85, 0.3) 50%, rgba(30, 41, 59, 0.4) 75%, rgba(15, 23, 42, 0.3) 100%)',
                        backdropFilter: 'blur(24px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(24px) saturate(180%)'
                    }}
                >
                    {/* Additional glassmorphic overlay elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-yellow-500/5 pointer-events-none"></div>
                    
                    {/* Glassmorphic container */}
                    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
                        {/* Close button - Enhanced for mobile */}
                        <button 
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full shadow-lg hover:bg-white/30 transition-all duration-200 touch-manipulation flex items-center justify-center"
                            style={{
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                closeMediaPreview();
                            }}
                            style={{
                                width: '48px',
                                height: '48px',
                                minWidth: '48px',
                                minHeight: '48px'
                            }}
                            aria-label="Close preview"
                        >
                            <X className="w-6 h-6 flex-shrink-0" />
                        </button>

                        {/* Media container */}
                        <div 
                            className="relative w-full h-full max-w-[90vw] max-h-[85vh] sm:max-w-[85vw] sm:max-h-[90vh] md:max-w-[80vw] md:max-h-[85vh] lg:max-w-[75vw] lg:max-h-[80vh] rounded-2xl overflow-hidden flex items-center justify-center"
                            style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl pointer-events-none"></div>
                            
                            {selectedMedia.type === 'image' ? (
                                <img 
                                    src={selectedMedia.url} 
                                    alt="Gallery Preview"
                                    className="max-w-full max-h-full object-contain select-none"
                                    draggable={false}
                                    style={{ 
                                        touchAction: 'none'
                                    }}
                                />
                            ) : (
                                <video 
                                    src={selectedMedia.url}
                                    controls
                                    autoPlay
                                    muted
                                    playsInline
                                    className="max-w-full max-h-full object-contain"
                                    style={{ 
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                />
                            )}
                        </div>

                        {/* Mobile swipe hint */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
                            <div 
                                className="text-white px-4 py-2 rounded-full text-sm"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.12)',
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                Tap outside to close
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GalleryGrid;