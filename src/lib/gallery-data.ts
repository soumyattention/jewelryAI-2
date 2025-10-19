// Define an interface for gallery items
export interface GalleryItem {
    id: number;
    category: "photos" | "videos";
    type: "image" | "video";
    src: string;
    alt: string;
    autoplay?: boolean;
    selected?: boolean; // Make selected optional as not all items might have it initially

    // Enhanced SEO fields
    seoTitle?: string;          // SEO-optimized title
    seoDescription?: string;     // Long-form description for search engines
    keywords?: string[];         // Targeted keywords
    jewelryType?: "ring" | "necklace" | "earrings" | "bracelet" | "watch" | "brooch" | "pendant" | "anklet" | "other";
    style?: "luxury" | "minimalist" | "vintage" | "modern" | "classic" | "boho" | "art-deco" | "contemporary";
    occasion?: "wedding" | "engagement" | "anniversary" | "everyday" | "formal" | "casual" | "party";
    targetAudience?: "bridal" | "women" | "men" | "unisex";
    dominantColors?: string[];   // ["gold", "silver", "diamond", "ruby"]

    // Video-specific
    duration?: number;           // Video duration in seconds
    videoDescription?: string;   // Detailed video content description
}

// Gallery items with photos and videos (4:5 aspect ratio optimized)
export const galleryItems: GalleryItem[] = [
    // Photos
    {
        id: 1,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/3.png?updatedAt=1750483598664",
        alt: "Close-up of a woman's hand displaying an oval halo diamond engagement ring held by a man, soft natural light, French manicure. AI-generated jewelry photography.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Diamond Ring Engagement Photo",
        seoDescription: "Capture the sparkle with AI jewelry photography. Stunning engagement ring photo featuring an oval halo diamond. Ideal for jewelers seeking high-quality, affordable photography services.",
        keywords: ["engagement ring","diamond ring photography","jewelry photography","AI jewelry photography","oval halo ring"],
        jewelryType: "ring",
        style: "classic",
        occasion: "engagement",
        targetAudience: "bridal|women",
        dominantColors: ["white","gold","beige"],
        materials: ["diamond","gold"],
        setting: "on-model|lifestyle"
    },
    {
        id: 2,
        category: "photos", 
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/8.png?updatedAt=1750483597465",
        alt: "AI-generated jewelry photography",
        selected: true // Mark as selected for demo
    },
    {
        id: 3,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/7.png?updatedAt=1750483598632",
        alt: "Woman wearing AI-generated Louis Vuitton gold chain necklace, bracelet, and ring. Jewelry photography showcases luxury style and modern design.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Luxury Jewelry Photography",
        seoDescription: "AI-generated jewelry photography showcasing a woman wearing gold Louis Vuitton accessories. High-quality images for marketing, e-commerce, and advertising.  Elevate your brand with stunning visuals.",
        keywords: ["jewelry photography","gold jewelry","AI generated","luxury jewelry","on-model photography"],
        jewelryType: "ring|necklace|bracelet",
        style: "luxury|modern",
        occasion: "everyday|formal",
        targetAudience: "women",
        dominantColors: ["gold","black"],
        materials: ["gold"],
        setting: "on-model|studio"
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
        alt: "AI-generated jewelry photography",
        selected: true
    },
    {
        id: 10,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/Necklace/openart-76f52eada74a41f499703ad1800c6d0a_raw.jpg?updatedAt=1750707742581",
        alt: "AI-generated lifestyle jewelry photography: Woman wearing gold earrings, emerald necklaces, bracelet, and ring. Natural light, stylish setting.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Jewelry Photography: Lifestyle Shoot",
        seoDescription: "Professional AI-generated jewelry photography for brands. Lifestyle shoot featuring emerald and gold jewelry. Enhance your product presentation with stunning visuals. Contact us today!",
        keywords: ["jewelry photography","lifestyle photography","AI photography","emerald jewelry","gold jewelry","on-model photography"],
        jewelryType: "ring|necklace|earrings|bracelet",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["green","white","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model|lifestyle"
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
        alt: "AI-generated jewelry photography",
        selected: true},
    {
        id: 14,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/Necklace/inter3.png?updatedAt=1750707745821",
        alt: "Luxury gold bracelet with brilliant-cut diamonds showcased on wrist; AI-generated jewelry photography with focus on detail & craftsmanship for ads & catalogs.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Diamond Bracelet Photography",
        seoDescription: "AI-generated jewelry photography showcasing a gold & diamond bracelet. Ideal for jewelry catalogs, ads, & e-commerce. High-resolution images enhance your brand. Contact for custom jewelry shoots.",
        keywords: ["jewelry photography","diamond bracelet","AI photography","gold jewelry","jewelry advertising","catalog photography"],
        jewelryType: "bracelet",
        style: "luxury",
        occasion: "formal",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
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
alt: "AI-generated jewelry photography",
        selected: true},
{
        id: 30,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/replicate-prediction-rs1hcayk0nrm80cqj7aafte4n8.jpg",
        alt: "AI-generated jewelry photography showcasing emerald and gold rings, bracelets, and necklace on a model. Close-up emphasizes luxury and craftsmanship, ideal for e-commerce.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Emerald Jewelry Photography",
        seoDescription: "AI-generated jewelry photography highlighting emerald rings, bracelets and necklace. Perfect for e-commerce and marketing. Elevate your brand with captivating, SEO-optimized jewelry photos.",
        keywords: ["jewelry photography","AI jewelry photo","emerald jewelry","on-model jewelry","luxury jewelry"],
        jewelryType: "ring|necklace|bracelet",
        style: "luxury",
        occasion: "everyday|formal",
        targetAudience: "women",
        dominantColors: ["green","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model|studio"
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
alt: "AI-generated jewelry photography",
        selected: true},
{
        id: 33,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/mnmf1'.png",
        alt: "AI-generated jewelry photography: Woman in water showcasing sapphire and diamond earrings and ring. Dazzling design, perfect for bridal or luxury campaigns.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Sapphire Jewelry Photo",
        seoDescription: "AI jewelry photography showcasing sapphire and diamond earrings and ring on a model in a natural aquatic setting. Ideal for jewelry brands seeking stunning campaign visuals.",
        keywords: ["jewelry photography","AI jewelry photography","sapphire jewelry","diamond jewelry","on-model jewelry","luxury jewelry photography"],
        jewelryType: "ring|earrings",
        style: "luxury",
        occasion: "formal|bridal",
        targetAudience: "women",
        dominantColors: ["blue","silver"],
        materials: ["diamond","gemstone","silver"],
        setting: "on-model|lifestyle"
    },
{
id: 34,
category: "photos",
type: "image",
src: "https://ik.imagekit.io/soumya3301/dnour3.png",
alt: "AI-generated jewelry photography",
        selected: true},
{
        id: 35,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/993183d7-7277-4727-9e3d-55e374d2b10a.png",
        alt: "Woman wearing an elegant silver necklace with a large yellow gemstone pendant, sunbathing by the pool. AI-generated luxury jewelry photography.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Luxury Necklace Photography",
        seoDescription: "AI-generated high-end jewelry photography showcasing a beautiful necklace with a unique yellow gemstone pendant. Perfect for jewelers looking to elevate their brand and online presence.",
        keywords: ["jewelry photography","necklace photography","gemstone jewelry","luxury jewelry","AI jewelry photography","on-model jewelry"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["yellow","silver"],
        materials: ["silver","gemstone"],
        setting: "on-model"
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
alt: "AI-generated jewelry photography",
        selected: true},
{
        id: 38,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/dnour1.png",
        alt: "Elegant gold rose pendant necklace on model. Sparkling diamonds enhance the floral design. AI-generated jewelry photography captures its beauty. Lariat style.",
        selected: true,

        // Enhanced SEO metadata
        seoTitle: "Gold Rose Diamond Necklace",
        seoDescription: "AI-powered jewelry photography showcasing a gold rose pendant necklace with diamond accents. Lariat design. Ideal for luxury brands seeking stunning visual content. On-model studio shot.",
        keywords: ["jewelry photography","necklace photography","gold necklace","diamond necklace","AI jewelry photography"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
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
        alt: "Stunning blue gemstone ring showcased in a vibrant AI photoshoot, highlighting intricate details and elegance against a serene ocean backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Rings",
        seoDescription: "Discover cost-effective AI jewelry photography services that enhance quality and showcase your jewelry's beauty, perfect for jewelers seeking modern solutions.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","blue gemstone ring","luxury jewelry","on-model photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["blue","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 41,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln%20ten.png",
        alt: "Colorful gemstone necklace worn by a model during a tennis match. Stunning features highlighted through AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Gemstone Necklace",
        seoDescription: "Discover high-quality AI photography services for your jewelry. Save costs while enhancing image quality with our innovative AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gemstone necklace","colorful jewelry","on-model photography"],
        jewelryType: "necklace",
        style: "modern",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["green","red"],
        materials: ["gemstone"],
        setting: "on-model"
    },
{
        id: 42,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bhr43.png",
        alt: "Beautiful yellow gemstone ring and bracelet showcased in AI jewelry photography, highlighting the intricate details and vibrant colors.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Pieces",
        seoDescription: "Discover high-quality AI jewelry photography that showcases your designs beautifully. Save costs while enhancing visual appeal for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","yellow gemstone bracelet","vibrant gemstone ring"],
        jewelryType: "ring,bracelet",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["yellow","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 43,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bhr42.png",
        alt: "Stunning gold statement rings and bracelet showcased in an elegant AI jewelry photography session, highlighting intricate designs and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Designs",
        seoDescription: "Explore premium AI photography services for jewelers. Achieve high-quality, cost-effective images that elevate your jewelry's appeal and visibility.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold rings","statement bracelet","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "formal",
        targetAudience: "women",
        dominantColors: ["gold"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 44,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bhr44.jpg",
        alt: "Stunning gold earrings featuring intricate designs and cascading chains, captured in an AI jewelry photography style for stunning visual appeal.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Exquisite Earrings",
        seoDescription: "Discover high-quality AI photography services for your jewelry. Save costs while enhancing visual appeal with AI-generated images tailored for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold earrings","luxury jewelry","bridal accessories"],
        jewelryType: "earrings",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["gold","brown"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 45,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bhr46.jpg",
        alt: "Elegant gold earrings featuring a unique cage design with cascading chains, showcased in an AI jewelry photography setting.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Earrings",
        seoDescription: "Discover premium AI-generated jewelry photos that enhance your earrings' beauty, offering cost savings and high-quality visuals for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold earrings","unique design earrings","fashion earrings"],
        jewelryType: "earrings",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","beige"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 46,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/u9153988912_A_single_octopus_tentacle_emerging_from_a_glossy__f9d8ec4e-6a58-4f5a-96ca-0f484dd49533_0.png",
        alt: "Stunning gold engagement ring showcased with an octopus in a luxurious setting, highlighting AI jewelry photography techniques.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs for jewelers. Elevate your brand with stunning visuals and modern techniques.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","luxury jewelry","gold ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","pink"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 47,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/francois2.jpg",
        alt: "Elegant rings featuring ruby and emerald gemstones showcased in an AI-generated jewelry photoshoot by the sea.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Explore high-quality AI jewelry photography services that save costs while showcasing your exquisite rings with stunning detail and clarity.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","luxury rings","gemstone rings","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["red","green"],
        materials: ["gold","diamond","gemstone"],
        setting: "on-model"
    },
{
        id: 48,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/erato4.png",
        alt: "Beautiful gold ring with a ruby center and diamond accents, captured in an elegant AI jewelry photography style.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Rings",
        seoDescription: "Explore high-quality AI-generated jewelry photos that enhance your brand. Save costs with our advanced AI technology for stunning visuals.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","ruby ring","diamond accents"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","red"],
        materials: ["gold","diamond","gemstone"],
        setting: "close-up"
    },
{
        id: 49,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/erato3.jpg",
        alt: "Stunning vintage ring featuring a ruby gemstone, captured in an AI jewelry photography session with soft natural lighting.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Explore high-quality AI-generated jewelry photos perfect for jewelers. Save costs while showcasing your unique ring designs with enhanced clarity.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","vintage ring","ruby ring","bridal jewelry"],
        jewelryType: "ring",
        style: "vintage",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["red","gold"],
        materials: ["gold","ruby"],
        setting: "on-model"
    },
{
        id: 50,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/u9153988912_A_closed_white_tulip_frozen_inside_a_transparent__0ec1b502-4f1f-47a9-a1d8-1cf253274706_0.png",
        alt: "A stunning gold ring featuring intricate designs and sparkling diamonds, captured in an elegant AI jewelry photography setup with a flower and ice.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your jewelry's appeal with high-quality AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","virtual jewelry photography","gold ring","diamond ring","wedding jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "wedding",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 51,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/p10.jpg?updatedAt=1753373684828",
        alt: "Gold heart-shaped ring featuring intricate design, showcased in AI jewelry photography with a soft, intimate background.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Pieces",
        seoDescription: "Discover top-notch AI photography services for jewelers. Achieve stunning quality and cost savings with our AI-generated jewelry photos tailored for your brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","heart-shaped jewelry","luxury ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","neutral"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 52,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/erato1.jpg",
        alt: "Close-up of a stunning ring featuring a vibrant gemstone, captured with AI jewelry photography for enhanced clarity and detail.",

        // Enhanced SEO metadata
        seoTitle: "Stunning Ring Photography - AI Jewelry Service",
        seoDescription: "Discover cost-effective AI jewelry photography services that enhance quality and showcase your pieces beautifully. Perfect for jewelers looking to elevate their brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","ring photography","luxury jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","red"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 53,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/erato2.jpg",
        alt: "Elegant gold ring with a red gemstone, captured in a luxurious setting using AI jewelry photography techniques for stunning detail.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Creations",
        seoDescription: "Discover high-quality AI-generated jewelry photography that saves you costs while showcasing your pieces in the best light. Perfect for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","luxury jewelry","gemstone ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","red"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 54,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/u9153988912_A_bee_frozen_mid-landing_on_a_shiny_diamond_ring__daf5a912-97d7-4ce1-bc24-f7a9b94c4397_3.png",
        alt: "Close-up of a diamond-studded rose gold ring with a bee hovering nearby, showcasing intricate details in this AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Brand",
        seoDescription: "Discover top-notch AI photography services for jewelers that enhance quality, reduce costs, and capture exceptional jewelry details.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","rose gold ring","fine jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["rose gold","pink"],
        materials: ["gold","diamond"],
        setting: "close-up"
    },
{
        id: 55,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln34.png",
        alt: "Stunning diamond engagement ring showcased in an AI jewelry photography setting with a couple in a romantic backdrop.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Engagement Rings",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your engagement ring displays with high-quality, AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond","romantic","bridal"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 56,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln33.jpg",
        alt: "Stunning engagement ring with diamond and pearl bracelet captured in an AI jewelry photography shoot, showcasing elegance and romance.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Engagement Pieces",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Achieve high-quality images that enhance your jewelry's appeal and marketability.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","pearl bracelet","romantic jewelry"],
        jewelryType: "ring|bracelet",
        style: "luxury|modern",
        occasion: "engagement|wedding",
        targetAudience: "women|unisex",
        dominantColors: ["white","gold"],
        materials: ["gold","pearl","diamond"],
        setting: "on-model"
    },
{
        id: 57,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln32%20(1).png",
        alt: "Elegant diamond engagement ring showcased in a romantic outdoor setting with candles and floral decor. AI jewelry photography captures its brilliance.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover cost-effective AI jewelry photography services that enhance quality and showcase your jewelry beautifully, perfect for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","romantic jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["white","pink"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 58,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/lz2.jpg",
        alt: "Close-up of stunning earrings featuring vibrant blue gemstones, captured in an AI jewelry photography style for an elegant summer look.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Elegant Earrings",
        seoDescription: "Explore high-quality AI jewelry photography that enhances your earrings' beauty, offering cost-effective solutions for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","vibrant earrings","summer jewelry","fashion earrings"],
        jewelryType: "earrings",
        style: "modern",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["blue","red"],
        materials: ["gemstone"],
        setting: "on-model"
    },
{
        id: 59,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/alm4.jpg",
        alt: "Elegant gold ring with blue gemstones showcased in an AI jewelry photography setting, highlighting its shimmering details against a natural backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Designs",
        seoDescription: "Discover high-quality AI photography services for jewelers. Achieve cost savings and exceptional visuals for your jewelry pieces with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","blue gemstone ring","engagement ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","blue"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 60,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/alm3.jpg",
        alt: "Stunning gold ring with turquoise gemstone showcased in AI jewelry photography, highlighting intricate details and vibrant colors.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Brand",
        seoDescription: "Discover high-quality AI-generated jewelry photography that enhances your brand. Experience cost savings and exceptional quality for all your jewelry needs.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","turquoise gemstone","engagement jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","turquoise"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 61,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/alm1.jpg",
        alt: "Stunning engagement ring showcased during an AI photoshoot with a bouquet of wildflowers, highlighting its brilliance and design features.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while showcasing your engagement rings with unmatched clarity and appeal.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","bridal jewelry","floral setting"],
        jewelryType: "ring",
        style: "modern",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["green","yellow"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 62,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/lz1.png",
        alt: "Stunning earrings worn by a model by the pool, showcasing vibrant gemstones. Perfect for AI jewelry photography to enhance your brand's visual appeal.",

        // Enhanced SEO metadata
        seoTitle: "Elevate Your Brand with AI Jewelry Photography",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs and enhance product imagery for jewelers. Transform your visuals today!",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","earrings","vibrant gemstones","on-model photography"],
        jewelryType: "earrings",
        style: "modern",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["blue","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 63,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/8f99264b-27b8-427b-8a8e-d8a863fd7a7f.png",
        alt: "Elegant necklace draping down the back, showcasing intricate design, captured in stunning AI jewelry photography in a lavender field.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Exquisite Necklaces",
        seoDescription: "Discover high-quality, cost-effective AI photography services for your jewelry. Elevate your brand with professional AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","necklace","elegant","fashion","lifestyle"],
        jewelryType: "necklace",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["lavender","white"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 64,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/ff1.png",
        alt: "Elegant gold necklace with a unique gemstone pendant showcased in an AI jewelry photography outdoor setting, highlighting its beauty and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collections",
        seoDescription: "Discover high-quality AI product photography services for jewelers. Save costs while enhancing visual appeal with cutting-edge AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","elegant gold necklace","gemstone pendant","outdoor jewelry photography"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["gold","purple"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 65,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/lz3.jpg",
        alt: "Stunning earrings and ring featuring vibrant gemstones in an AI jewelry photography setting, showcasing their brilliance against a colorful market backdrop.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Gemstone Displays",
        seoDescription: "Discover AI technology in jewelry photography that offers exceptional quality and cost savings for jewelers. Elevate your brand with AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","earrings","ring","gemstone jewelry"],
        jewelryType: "earrings|ring",
        style: "modern",
        occasion: "everyday|casual",
        targetAudience: "women|unisex",
        dominantColors: ["red","blue"],
        materials: ["gold","gemstone"],
        setting: "lifestyle"
    },
{
        id: 66,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/p4%20(1).png",
        alt: "A stunning gold heart necklace showcased in an AI photoshoot, highlighting its intricate design and elegance, ideal for bridal or everyday wear.",

        // Enhanced SEO metadata
        seoTitle: "Stunning Gold Heart Necklace - AI Jewelry Photography",
        seoDescription: "Discover high-quality AI jewelry photography for your gold heart necklace. Experience cost savings and superior visual appeal with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold necklace","bridal jewelry","everyday jewelry"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 67,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/lzf1.png",
        alt: "Elegant diamond engagement ring showcased in an AI jewelry photography shoot, highlighting its sparkle against a lavender field backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI jewelry photography services, providing jewelers with cost-effective, stunning photos that elevate your engagement ring designs.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["purple","white"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 68,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/lzf.png",
        alt: "Stunning engagement ring featuring a sparkling diamond set in a beautiful floral background. Perfect for showcasing AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Engagement Ring Photography Services",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while delivering stunning visuals for your engagement rings and other jewelry pieces.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","floral jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["purple","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 69,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/ff2.jpg",
        alt: "A stunning gold necklace with a colorful pendant featuring a tropical design, showcasing the elegance of AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Necklaces",
        seoDescription: "Discover high-quality AI photography services for your jewelry. Save costs while enhancing your product imagery with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold necklace","tropical pendant","fashion jewelry"],
        jewelryType: "necklace",
        style: "contemporary",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","multicolor"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 70,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/openart-b8d0f97f47d9416886efceadcf3475b5_raw.jpg",
        alt: "A stunning gold ring worn by a mother holding her baby's hand, captured in a warm, intimate setting. AI jewelry photography enhances every detail.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover high-quality AI photography services for jewelry. Save costs while achieving stunning visuals perfect for showcasing your pieces.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","mother and child","intimate jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","natural"],
        materials: ["gold"],
        setting: "lifestyle"
    },
{
        id: 71,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/lz12.png",
        alt: "Stunning engagement ring showcased in a romantic outdoor setting during a sunset. Featuring a diamond centerpiece, this is perfect for AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Engagement Ring AI Photography Services for Jewelers",
        seoDescription: "Explore high-quality AI jewelry photography services that save costs while enhancing your product's appeal. Perfect for stunning jewelry displays.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","romantic jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["purple","gold"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 72,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/p2.png",
        alt: "A mother gently holding her baby while wearing a delicate gold pendant necklace in an intimate moment. AI product photography showcases the jewelry's elegance.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography Services for Jewelers",
        seoDescription: "Discover premium AI photography services for jewelers. Save costs while enhancing jewelry quality with AI-generated images that captivate customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold pendant necklace","luxury jewelry","mother and child jewelry","intimate jewelry photography"],
        jewelryType: "pendant",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","beige"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 73,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/lzf4.jpg",
        alt: "Stunning engagement ring featuring an emerald-cut diamond, captured in an AI jewelry photography session with a romantic outdoor backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover premium AI photography services for jewelers. Save costs while enhancing quality with AI-generated jewelry photos that captivate customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","engagement ring","diamond","romantic"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["white","purple"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 74,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/p10.jpg",
        alt: "Gold heart-shaped ring worn on a mother's hand, showcasing intricate details and design. Captured using AI jewelry photography for stunning clarity.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Designs",
        seoDescription: "Discover high-quality AI photography services for jewelers. Achieve stunning visuals, cost savings, and exceptional quality with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","heart-shaped jewelry","fine jewelry","luxury accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","skin-tone"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 75,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln37.jpg",
        alt: "Stunning engagement ring featuring a large diamond, captured in a romantic beach setting with AI jewelry photography showcasing its brilliance.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos for engagement rings that offer cost savings and exceptional visual appeal tailored for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","beach wedding jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["blue","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 76,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln36.jpg",
        alt: "Stunning diamond engagement ring showcased in AI jewelry photography, featuring intricate details and a brilliant shine against a vibrant green backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while enhancing your engagement ring's appeal. Elevate your brand with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","diamond engagement ring","luxury jewelry","wedding accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["green","silver"],
        materials: ["diamond","gold"],
        setting: "close-up"
    },
{
        id: 77,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln39.jpg",
        alt: "Elegant diamond ring and pearl bracelet in AI jewelry photography, showcasing luxury and beauty by the poolside.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Luxurious Pieces",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your brand with high-quality AI-generated images for jewelry marketing.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","pearl bracelet","luxury jewelry"],
        jewelryType: "ring, bracelet",
        style: "luxury",
        occasion: "formal",
        targetAudience: "women",
        dominantColors: ["blue","white"],
        materials: ["gold","diamond","pearl"],
        setting: "on-model"
    },
{
        id: 78,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/p9'.png",
        alt: "A gold pendant with intricate design and matching ring, showcasing AI jewelry photography for elegant accessories.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Pieces",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while enhancing your jewelry's visual appeal and marketability.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold pendant","elegant ring","luxury necklace"],
        jewelryType: "necklace|ring",
        style: "luxury|modern",
        occasion: "everyday|casual",
        targetAudience: "women|unisex",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 79,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/g5.png",
        alt: "Elegant earrings showcased in a lifestyle setting with a model, featuring intricate designs and vibrant colors. AI jewelry photography captures every detail.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Earrings",
        seoDescription: "Discover the benefits of AI photography for jewelers. Our AI technology delivers high-quality, cost-effective images that highlight your unique jewelry designs.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","earrings","lifestyle jewelry photography","fashion earrings"],
        jewelryType: "earrings",
        style: "contemporary",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["orange","black"],
        materials: ["gold","gemstone"],
        setting: "lifestyle"
    },
{
        id: 80,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/G1.png",
        alt: "Elegant earrings showcased in AI jewelry photography, highlighting their unique design and craftsmanship against a natural autumn backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Elegant Earrings",
        seoDescription: "Discover high-quality AI jewelry photography services that enhance your earrings' appeal. Leverage AI technology for cost savings and superior visuals.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","earrings","fashion jewelry","everyday accessories"],
        jewelryType: "earrings",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["orange","black"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 81,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bln42.jpg",
        alt: "Elegant bridal jewelry featuring diamond rings and a bracelet, showcased in an AI photoshoot with a romantic couple, perfect for weddings.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Bridal Collection",
        seoDescription: "Discover cost-effective AI photography services for stunning jewelry images. Enhance your brand with high-quality, AI-generated photos that attract customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","bridal rings","diamond bracelet","luxury wedding jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "wedding",
        targetAudience: "bridal",
        dominantColors: ["gold","diamond"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 82,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/G3.png",
        alt: "Stunning earrings showcased in a vibrant, artistic AI photoshoot with butterflies, highlighting their unique design and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Earrings",
        seoDescription: "Discover premium AI jewelry photography services, offering cost-effective, high-quality images tailored for jewelers. Elevate your brand with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","earrings","artisan","fashion","unique"],
        jewelryType: "earrings",
        style: "contemporary",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["orange","brown"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 83,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/G4.png",
        alt: "Stunning gold earrings showcased in an AI jewelry photography shoot, highlighting their intricate design and elegance against a natural backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Premium AI Jewelry Photography for Stunning Earring Shots",
        seoDescription: "Discover high-quality AI jewelry photography services for jewelers. Save costs while enhancing your earring visuals with cutting-edge AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","gold earrings","elegant accessories","fashion jewelry"],
        jewelryType: "earrings",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","orange"],
        materials: ["gold"],
        setting: "lifestyle"
    },
{
        id: 84,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/E2%20(1).png",
        alt: "Elegant emerald ring showcased in AI jewelry photography, highlighting its intricate design and sparkling features against a serene pool background.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Discover cost-effective AI jewelry photography services that enhance your emerald ring’s beauty with high-quality visuals tailored for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","emerald ring","luxury jewelry","bridal accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["emerald","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 85,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/E3%20(1).png",
        alt: "Elegant green gemstone ring showcased in a vibrant outdoor setting. Capture stunning light and details with AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while enhancing your ring's visual appeal. Perfect for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","luxury ring","gemstone ring","outdoor jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["green","black"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 86,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/E1%20(1).png",
        alt: "Elegant emerald ring showcased in a lifestyle shot featuring a model by the beach, highlighting AI jewelry photography quality.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover cost-effective AI photography services tailored for jewelers. Elevate your brand with high-quality, AI-generated jewelry images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","emerald ring","beach lifestyle jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["green","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 87,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/bb5.png",
        alt: "A stunning gold bracelet showcased on a model's wrist with soft lighting, highlighting its intricate design. AI jewelry photography captures its beauty.",

        // Enhanced SEO metadata
        seoTitle: "Stunning Gold Bracelet - AI Jewelry Photography",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs while enhancing your brand. Perfect for jewelers seeking modern photography solutions.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold bracelet","luxury jewelry","fashion accessory"],
        jewelryType: "bracelet",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","soft white"],
        materials: ["gold"],
        setting: "on-model"
    },
  {
        id: 88,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-07-22%20at%205.17.52%20PM.jpeg",
        alt: "Elegant gold bracelet worn on model with delicate design, showcasing the beauty of AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Business",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs and enhance your product visibility. Perfect for jewelers looking to elevate their brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold bracelet photography","luxury jewelry images"],
        jewelryType: "bracelet",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","pink"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 89,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-07-22%20at%204.21.22%20PM.jpeg",
        alt: "Elegant gold bracelet with delicate gemstone accents showcased in AI jewelry photography, featuring a soft pastel background and a model's hand.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Bracelet Designs",
        seoDescription: "Discover high-quality AI jewelry photography that saves costs while enhancing your bracelet's appeal. Perfect for jewelers looking to elevate their brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold bracelet","gemstone bracelet","luxury jewelry"],
        jewelryType: "bracelet",
        style: "luxury",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["gold","pastel"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 90,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/reg4.jpg",
        alt: "Elegant triangle pendant necklace showcased in a dramatic AI photoshoot, highlighting its unique design and lustrous finish.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Pendants",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Elevate your pendant's appeal with high-quality, AI-generated images that attract customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","pendant","elegant","luxury","bridal"],
        jewelryType: "pendant",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["gold","black"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 91,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/reg1.jpg",
        alt: "Stunning gold geometric pendant necklace on model showcasing intricate design. AI jewelry photography captures the elegance and style.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Necklaces",
        seoDescription: "Discover high-quality AI-generated jewelry photography that enhances your necklace designs. Experience cost savings and superior image quality.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold necklace","geometric pendant","fashion jewelry"],
        jewelryType: "necklace",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","neutral"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 92,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/reg3.png",
        alt: "Elegant silver pendant necklace showcased in AI jewelry photography, featuring a modern design and eye-catching triangle shape.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Brand",
        seoDescription: "Discover high-quality AI-generated jewelry photos that enhance your brand. Save costs while showcasing your pieces with stunning clarity.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","silver pendant necklace","modern jewelry photography","fashion jewelry showcase"],
        jewelryType: "necklace",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["silver","blue"],
        materials: ["silver"],
        setting: "on-model"
    },
{
        id: 93,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/binder1.jpg",
        alt: "Elegant necklace showcased on a model in a burgundy dress, highlighting craftsmanship and design. Captured using AI jewelry photography for stunning clarity.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Elegant Necklaces",
        seoDescription: "Explore high-quality AI-generated jewelry photos that enhance your brand. Save costs while showcasing elegance and detail in every piece.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","elegant necklace","bridal jewelry","luxury accessories"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["burgundy","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 94,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/binder3.jpg",
        alt: "Elegant gold chain necklace showcased in AI-generated jewelry photography, highlighting its unique design and luxurious appeal.",

        // Enhanced SEO metadata
        seoTitle: "Stunning Gold Chain Necklace - AI Jewelry Photography",
        seoDescription: "Discover high-quality AI photography services for your jewelry. Achieve stunning visuals that save costs and enhance appeal for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold necklace","luxury jewelry","fashion accessories"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "formal",
        targetAudience: "women",
        dominantColors: ["gold","black"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 95,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/binder2.jpg",
        alt: "Stylish gold necklace showcased elegantly in AI jewelry photography, highlighting its modern design and luxurious finish.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Modern Necklaces",
        seoDescription: "Discover high-quality AI photography services tailored for jewelers. Save costs while achieving stunning visuals for your jewelry collections.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","modern necklace","luxury jewelry","fashion accessories"],
        jewelryType: "necklace",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","black"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 96,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2011.27.28%20PM.jpeg?updatedAt=1755161816356",
        alt: "Stunning engagement ring showcased in a romantic Paris setting, featuring a diamond centerpiece and intricate band. AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Engagement Ring Photography Services",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your jewelry marketing with high-quality AI-generated images for better sales.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","romantic jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 97,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2011.22.21%20PM.jpeg?updatedAt=1755161816354",
        alt: "Elegant diamond engagement ring showcased in an AI-generated photoshoot with a sunset backdrop, highlighting its brilliance and design.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover AI technology in jewelry photography, offering cost-effective, high-quality visuals for jewelers. Elevate your brand with AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","blue"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 98,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%209.33.43%20PM.jpeg?updatedAt=1755161816394",
        alt: "Stunning engagement ring with aquamarine and diamond accents showcased in a romantic outdoor setting. Experience AI jewelry photography for captivating visuals.",

        // Enhanced SEO metadata
        seoTitle: "Elevate Your Brand with AI Jewelry Photography",
        seoDescription: "Discover high-quality AI jewelry photography services offering cost-effective solutions for jewelers. Enhance your product imagery with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","engagement ring","aquamarine ring","diamond ring"],
        jewelryType: "ring",
        style: "modern",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["blue","silver"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 99,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-08-12%20at%2010.39.51%20PM.jpeg?updatedAt=1755161816420",
        alt: "A stunning engagement ring showcased during an outdoor AI photoshoot at sunset, featuring a sparkling diamond and intricate band design.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Explore high-quality AI photography services for jewelers. Save costs while achieving stunning visuals that highlight your unique jewelry designs.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 100,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/ai_0e0dc0baca.jpg?updatedAt=1755161822290",
        alt: "A stunning emerald-cut diamond ring set on an ice cream cone, showcasing exquisite details in AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Emerald-Cut Diamond Ring | AI Jewelry Photography",
        seoDescription: "Discover the brilliance of AI jewelry photography. Save costs while enhancing quality in showcasing your exquisite emerald-cut diamond rings.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","emerald-cut ring","diamond ring","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["white","gold"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 101,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/SZ2.png?updatedAt=1755161822662",
        alt: "Stunning gold engagement ring with a heart-shaped diamond, captured in a beautiful sunset scene - showcasing AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover cost-effective AI photography services for engagement rings. Enhance your jewelry business with high-quality, AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","gold ring","diamond ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 102,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/u6.png?updatedAt=1755161823097",
        alt: "Stunning diamond engagement ring displayed in a luxurious box, featuring intricate details. Captured through AI jewelry photography for optimal clarity.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Engagement Rings",
        seoDescription: "Discover high-quality AI jewelry photography services that enhance your engagement ring images, offering cost savings and exceptional clarity for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond engagement ring","luxury jewelry photography","high-quality ring photos"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["diamond","black"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 103,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/U2.png?updatedAt=1755161823149",
        alt: "Stunning engagement ring showcased in an AI jewelry photography session, featuring intricate details and a sparkling diamond.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs while enhancing your engagement ring's online presence. Elevate your brand today!",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","luxury ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["white","silver"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 104,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/U3.png?updatedAt=1755161823366",
        alt: "Stunning engagement ring showcased in an elegant AI photoshoot on a yacht, highlighting its brilliance and unique design.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Your Engagement Rings",
        seoDescription: "Discover high-quality AI jewelry photography services that enhance your engagement ring's beauty while reducing costs and increasing visibility.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","luxury jewelry","wedding accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "bridal",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 105,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/pp3.png?updatedAt=1755161824422",
        alt: "Stylish silver necklace with charms and a colorful bracelet showcased in AI jewelry photography, highlighting intricate details and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography Services for Jewelers",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs while showcasing your designs beautifully. Perfect for jewelers seeking innovation.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","silver necklace","colorful bracelet","fashion jewelry"],
        jewelryType: "necklace|bracelet",
        style: "contemporary",
        occasion: "casual|party",
        targetAudience: "women|unisex",
        dominantColors: ["silver","multicolor"],
        materials: ["silver","gemstone"],
        setting: "on-model"
    },
{
        id: 106,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/U1.png?updatedAt=1755161824858",
        alt: "A stunning diamond engagement ring showcased in an AI jewelry photography session, featuring a model in formal attire with elegant hand placement.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Explore high-quality AI-generated jewelry photos that enhance your engagement ring's appeal. Save costs while boosting your brand's visibility.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "unisex",
        dominantColors: ["black","white"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 107,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/pp1.png?updatedAt=1755161824955",
        alt: "Stunning silver necklace and bracelet featuring playful charms, captured in an AI-generated jewelry photography shoot on a coastal backdrop.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Silver Pieces",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your silver jewelry's quality with AI technology and attract more customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","silver necklace","charm bracelet","coastal lifestyle jewelry"],
        jewelryType: "necklace|bracelet",
        style: "contemporary",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["silver","red"],
        materials: ["silver"],
        setting: "on-model"
    },
{
        id: 108,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/pp2.png?updatedAt=1755161824981",
        alt: "Stunning silver necklace with unique charms and matching bracelet, showcased in an AI jewelry photography session against a serene ocean backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Pieces",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your brand with high-quality images of your unique jewelry collections.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","silver necklace","charm bracelet","ocean lifestyle photography"],
        jewelryType: "necklace|bracelet",
        style: "modern",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["silver","blue"],
        materials: ["silver"],
        setting: "on-model"
    },
{
        id: 109,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/U4.png?updatedAt=1755161825143",
        alt: "Engagement ring in a turquoise box held against a city skyline, showcasing sparkling diamonds. Perfect for AI jewelry photography services.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover AI technology for jewelry photography that ensures high-quality images and cost savings for jewelers. Elevate your engagement ring presentations.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond jewelry","luxury rings"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["turquoise","silver"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 110,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/ai_ice_cream_ring4.png?updatedAt=1755161827449",
        alt: "Stunning emerald cut aquamarine ring with diamonds, showcased in an AI jewelry photography setting featuring ice cream and blueberries.",

        // Enhanced SEO metadata
        seoTitle: "Stunning Aquamarine Ring - AI Jewelry Photography",
        seoDescription: "Discover how AI technology can enhance your jewelry photos. Achieve high-quality, cost-effective imagery for your jewelry collection.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","aquamarine ring","luxury ring photography","ice cream themed jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["blue","purple"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 111,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/ai_ice_cream_ring1.png?updatedAt=1755161827639",
        alt: "Stunning emerald-cut diamond ring with blue accents showcased on vibrant ice cream cone, demonstrating exquisite AI jewelry photography techniques.",

        // Enhanced SEO metadata
        seoTitle: "Exquisite AI Jewelry Photography for Stunning Rings",
        seoDescription: "Discover top-notch AI photography services for jewelers. Save costs while achieving high-quality, captivating jewelry images that stand out.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","luxury jewelry","engagement ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["blue","white"],
        materials: ["diamond","silver"],
        setting: "lifestyle"
    },
{
        id: 112,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/marika1.png?updatedAt=1755161828326",
        alt: "Stunning diamond ring showcased in an AI jewelry photography shoot, featuring a model with red nails against a vibrant green background.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Business",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while enhancing your brand's image with stunning visuals for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","fashion ring","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["green","white"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 113,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/marika2.png?updatedAt=1755161839703",
        alt: "Elegant diamond ring showcased in an AI jewelry photography session, featuring a woman in a satin dress pouring champagne.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs and enhance your brand's visual appeal. Perfect for jewelers seeking innovation.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","elegant jewelry","bridal accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 114,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/pht.png?updatedAt=1755161840411",
        alt: "Stunning diamond ring showcased in an AI jewelry photography session, featuring a model with elegant styling and bold nails.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Brand",
        seoDescription: "Enhance your jewelry's appeal with AI product photography, offering cost savings and high-quality images that attract customers. Perfect for jewelers!",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","fashion jewelry","luxury accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["silver","black"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 115,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/rubX.png?updatedAt=1755161840437",
        alt: "Close-up of a stunning pink gemstone ring and matching earrings, captured with AI jewelry photography to highlight brilliance and detail.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Designs",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your jewelry's appeal with high-quality images that save time and boost sales.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","pink gemstone ring","fashion earrings","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["pink","silver"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 116,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/tokyo4.png?updatedAt=1755161840746",
        alt: "Elegant gemstone ring showcased in AI product photography, featuring intricate detailing and a model to highlight its luxury appeal.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Elegant Rings",
        seoDescription: "Discover cost-effective AI jewelry photography services that enhance quality and showcase your exquisite rings. Perfect for jewelers seeking modern solutions.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","luxury ring","gemstone ring","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["green","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 117,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/daniela%20taped.png?updatedAt=1755161840785",
        alt: "Stunning golden gemstone ring with intricate facets showcased in an AI jewelry photography style, highlighting its brilliance and unique design.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos that enhance your ring's beauty. Leverage AI technology for cost-effective, stunning visuals.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","luxury jewelry","gemstone ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","clear"],
        materials: ["gold","gemstone"],
        setting: "close-up"
    },
{
        id: 118,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/ai90942.png?updatedAt=1755161840904",
        alt: "Elegant bridal necklace and earrings set featuring intricate designs, captured in an AI photoshoot for stunning jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Bridal Collections",
        seoDescription: "Discover high-quality AI jewelry photography that saves costs while enhancing your bridal jewelry's appeal with stunning visuals.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","bridal necklace","elegant earrings","luxury jewelry"],
        jewelryType: "necklace|earrings",
        style: "luxury|contemporary",
        occasion: "bridal|wedding",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model|lifestyle"
    },
{
        id: 119,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/tokyo3.png?updatedAt=1755161840957",
        alt: "Elegant emerald ring showcased in AI jewelry photography, featuring intricate design and stunning details, perfect for showcasing luxury pieces.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collections",
        seoDescription: "Discover high-quality AI jewelry photography that saves costs while enhancing the beauty of your pieces. Perfect for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","emerald ring","luxury jewelry","bridal accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["green","silver"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 120,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/w5.png?updatedAt=1755161845056",
        alt: "A stunning blue gemstone ring showcased on a woman's hand during a picnic, highlighting its intricate design in an AI jewelry photography style.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs and enhance your ring's appeal. Perfect for jewelers looking to elevate their brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","blue gemstone ring","modern design","lifestyle jewelry photography"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["blue","gold"],
        materials: ["gold","gemstone"],
        setting: "lifestyle"
    },
{
        id: 121,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/w6.png?updatedAt=1755161846876",
        alt: "Stunning AI-generated jewelry photography of a model showcasing a luxurious ring with a vibrant gemstone, highlighting intricate details and elegance.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Visuals",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Achieve high-quality images that elevate your jewelry brand with cutting-edge technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","luxury ring","gemstone ring","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["purple","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 122,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/w8.png?updatedAt=1755161848063",
        alt: "A stunning engagement ring showcased with pink flowers, demonstrating AI jewelry photography for high-quality product images.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover top-notch AI photography services for jewelers. Save costs while enhancing quality with AI-generated images of your jewelry.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","floral jewelry display","romantic jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["pink","green"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 123,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/gr2.png?updatedAt=1755161850025",
        alt: "Elegant emerald ring and stacked gold rings showcased in AI jewelry photography, highlighting their stunning features against a seaside backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover cost-effective AI photography services for jewelers, ensuring high-quality images that enhance your brand and attract customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","emerald ring","gold rings","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["emerald","gold"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 124,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/gr3.png?updatedAt=1755161851484",
        alt: "Elegant emerald ring showcased in AI jewelry photography, featuring intricate details and a luxurious design, perfect for any occasion.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Emerald Ring",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your emerald ring's appeal with high-quality images using advanced AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","emerald ring","luxury jewelry","wedding ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "wedding",
        targetAudience: "women",
        dominantColors: ["emerald","gold"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 125,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x5.png?updatedAt=1755161851877",
        alt: "Elegant gold necklace and earrings showcased in an AI jewelry photography session, featuring a model in a stylish outfit beside a classic car.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while enhancing your collection's visual appeal. Perfect for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold necklace","elegant earrings","bridal jewelry"],
        jewelryType: "necklace|earrings",
        style: "luxury|modern",
        occasion: "bridal|everyday",
        targetAudience: "women|bridal",
        dominantColors: ["gold","green"],
        materials: ["gold","diamond"],
        setting: "on-model|lifestyle"
    },
{
        id: 126,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x6.png?updatedAt=1755161852392",
        alt: "Stylish gold watch, rings, and bracelet showcased in AI jewelry photography for a modern look.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Explore high-quality AI product photography that enhances your jewelry's appeal, providing cost-effective solutions for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold jewelry","modern rings","luxury watch","bracelet photography"],
        jewelryType: "watch|ring|bracelet",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 127,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x2%20(1).png?updatedAt=1755161852455",
        alt: "Elegant gold ring featuring a beautiful gemstone, showcased in an AI jewelry photography style for stunning product visuals.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Elevate your jewelry visuals with high-quality, AI-generated images that attract customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","gemstone ring","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","yellow"],
        materials: ["gold","gemstone"],
        setting: "lifestyle"
    },
{
        id: 128,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/D2.png?updatedAt=1755161855855",
        alt: "Beautiful engagement ring featured in AI jewelry photography, showcasing intricate details and sparkling gemstone against a vibrant floral backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Business",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Elevate your brand with high-quality AI-generated images that capture every detail.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","floral backdrop","high-quality images"],
        jewelryType: "ring",
        style: "modern",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["yellow","green"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 129,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/P7.png?updatedAt=1755161855099",
        alt: "Elegant earrings featuring red and black gemstones showcased in AI jewelry photography, highlighting intricate details and modern design.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover high-quality AI product photography services tailored for jewelers. Save costs while enhancing your jewelry's visual appeal with cutting-edge AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","earrings","modern design","fashion accessories"],
        jewelryType: "earrings",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["red","black"],
        materials: ["gemstone"],
        setting: "on-model"
    },
{
        id: 130,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/P1%20(1).png?updatedAt=1755161855012",
        alt: "Stunning earrings showcased in an AI-generated jewelry photoshoot, featuring intricate design and vibrant colors, perfect for modern fashion.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography: Stunning Earrings Showcase",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Elevate your jewelry marketing with high-quality, AI-generated images that attract buyers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","earrings","modern jewelry","fashion accessories"],
        jewelryType: "earrings",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["blue","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 131,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x145.jpeg",
        alt: "Gold statement ring with intricate design worn by a model. AI jewelry photography showcasing luxury craftsmanship and style.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Luxury Rings",
        seoDescription: "Discover high-quality AI photography services for jewelry. Save costs while enhancing your brand with stunning, AI-generated jewelry images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","luxury ring","men's jewelry","statement ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "formal",
        targetAudience: "men",
        dominantColors: ["gold","black"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 132,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x144.png",
        alt: "Stylish gold ring with intricate design showcased in an AI photoshoot featuring a model in a modern setting.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Brand",
        seoDescription: "Discover high-quality AI photography services for jewelers. Save costs while enhancing your jewelry's appeal with AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","gold ring","modern jewelry","lifestyle jewelry photography"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "men",
        dominantColors: ["gold","black"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 133,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x143.jpeg",
        alt: "Elegant men's gold ring with diamonds showcased in AI photography, highlighting intricate details and luxurious design.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Exquisite Rings",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your brand with high-quality, AI-generated images that showcase luxury and detail.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","luxury ring","men's jewelry","gold and diamond ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "formal",
        targetAudience: "men",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 134,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x142.png",
        alt: "Stunning gold engagement ring with a heart-shaped diamond showcased in an AI jewelry photography shoot at sunset, ideal for romantic moments.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Engagement Ring Photography Services",
        seoDescription: "Discover high-quality AI photography services for engagement rings, offering cost savings and exceptional detail to attract customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold engagement ring","romantic jewelry","sunset photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "bridal",
        dominantColors: ["gold","orange"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 135,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x141.jpeg",
        alt: "Stunning ring featuring a vibrant red gemstone and intricate detailing, showcased in an AI jewelry photography style for modern jewelers.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Pieces",
        seoDescription: "Discover how AI technology enhances jewelry photography, offering cost savings and unmatched quality for jewelers seeking to elevate their brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","ring photography","vintage ring","bridal jewelry"],
        jewelryType: "ring",
        style: "vintage",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["red","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 136,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x140.jpeg",
        alt: "Beautiful vintage ring featuring a pink gemstone, showcased in an AI jewelry photography style, highlighting intricate details and elegance.",

        // Enhanced SEO metadata
        seoTitle: "Stunning Vintage Ring - AI Jewelry Photography",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs while showcasing your pieces in the best light. Perfect for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","virtual jewelry photography","vintage ring","pink gemstone ring","bridal jewelry"],
        jewelryType: "ring",
        style: "vintage",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["pink","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 137,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x139.png",
        alt: "Elegant drop earrings featuring sparkling diamonds, captured in an AI-generated jewelry photoshoot for stunning detail and clarity.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Drop Earrings",
        seoDescription: "Discover cost-effective AI photography services for jewelers, delivering high-quality images that enhance your jewelry's appeal and reach.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","drop earrings","luxury jewelry","high-quality images"],
        jewelryType: "earrings",
        style: "luxury",
        occasion: "formal",
        targetAudience: "women",
        dominantColors: ["gold","diamond"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 138,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x138.png",
        alt: "Two women joyfully showcasing elegant black gemstone rings in an AI photoshoot, highlighting their unique designs and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Discover high-quality AI photography services for jewelers. Save costs while showcasing your elegant jewelry with stunning AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","elegant rings","black gemstone rings","bridal jewelry"],
        jewelryType: "ring",
        style: "modern",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["black","silver"],
        materials: ["gold","silver","gemstone"],
        setting: "on-model"
    },
{
        id: 139,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x137.png",
        alt: "Two women showcasing elegant black gemstone rings in an AI jewelry photography session, highlighting their unique designs and features.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover top-tier AI photography services for jewelers, offering cost-effective solutions and unmatched quality for showcasing your jewelry designs.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","black gemstone rings","elegant rings","women's jewelry"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","silver"],
        materials: ["gold","silver","gemstone"],
        setting: "on-model"
    },
{
        id: 140,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x136.png",
        alt: "Elegant black gemstone ring showcased in AI jewelry photography, highlighting intricate details and modern design on a model's hand.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Designs",
        seoDescription: "Discover high-quality AI photography services for jewelry. Save costs while enhancing your product images with AI technology and precision.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","elegant rings","modern jewelry","high-quality product images"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 141,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x135.jpg",
        alt: "Elegant silver ring showcased in AI jewelry photography, highlighting intricate design and a stunning gemstone, perfect for modern jewelry collections.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collections",
        seoDescription: "Discover top-quality AI jewelry photography services that save costs while enhancing your jewelry's beauty. Perfect for jewelers seeking modern solutions.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","silver ring","modern jewelry","fashion accessory"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["silver","green"],
        materials: ["silver","gemstone"],
        setting: "on-model"
    },
{
        id: 142,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x134.jpg",
        alt: "Stunning black gemstone ring showcased in AI jewelry photography with a model wearing sunglasses, highlighting modern elegance and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Elegant Rings",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Achieve high-quality, captivating visuals of your rings with advanced AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","black gemstone ring","modern ring design","fashion jewelry"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 143,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x133.jpg",
        alt: "Stylish men's ring showcased in a lifestyle AI jewelry photography session, featuring unique design and high-quality details.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Modern Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos that enhance your brand. Cost-effective solutions for jewelers to showcase their rings beautifully.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","men's rings","contemporary jewelry","fashion rings"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "men",
        dominantColors: ["black","silver"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 144,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x132.jpg",
        alt: "Stunning black gemstone ring showcased in AI jewelry photography, highlighting its unique design and elegant setting on a model's hand.",

        // Enhanced SEO metadata
        seoTitle: "Elegant Black Gemstone Ring - AI Jewelry Photography",
        seoDescription: "Discover high-quality AI jewelry photography services for stunning black gemstone rings. Save costs while enhancing your jewelry's visual appeal.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","black gemstone ring","elegant jewelry","fashion ring"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","brown"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 145,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x131.png",
        alt: "Stunning gemstone ring showcased on a model, featuring intricate design and rich colors, perfect for AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Gemstone Rings",
        seoDescription: "Discover premium AI jewelry photography services for your gemstone rings. Achieve high-quality images at cost-effective rates using AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gemstone ring","fashion jewelry","bridal accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["blue","silver"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 146,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x130.png",
        alt: "Elegant diamond ring showcased in a luxurious box, captured during an AI jewelry photography session with stunning skyline backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Business",
        seoDescription: "Discover cost-effective AI photography services that enhance your jewelry's quality and appeal. Perfect for jewelers aiming for excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","luxury jewelry","engagement ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["blue","silver"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 147,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x129.png",
        alt: "Elegant diamond engagement ring showcased in a blue box during a romantic proposal, highlighting AI jewelry photography for stunning visuals.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your engagement ring visuals with high-quality AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond","luxury","proposal"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["blue","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 148,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x128.png",
        alt: "Stunning engagement ring with diamonds and elegant bands captured in an AI jewelry photography shoot on a yacht, showcasing a luxurious lifestyle.",

        // Enhanced SEO metadata
        seoTitle: "Luxury AI Jewelry Photography for Stunning Engagement Rings",
        seoDescription: "Discover AI-generated jewelry photography services that enhance your engagement ring's beauty. Experience cost savings and top-quality images for your business.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","luxury jewelry","lifestyle photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["white","gold"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 149,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x127.png",
        alt: "Elegant diamond ring showcased in AI jewelry photography with a model's hand gently covering a man's face, highlighting the ring's sparkle and sophistication.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover AI technology for high-quality jewelry photography. Save costs while enhancing your collection's appeal with AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","luxury jewelry","engagement ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "men|women|unisex",
        dominantColors: ["black","white"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 150,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x126.png",
        alt: "Stunning rings worn on model with a floral accent in an AI jewelry photography setting, showcasing intricate designs and vibrant details.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Ring Displays",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while delivering exceptional visuals for your jewelry collections.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","rings","fashion jewelry","model photography"],
        jewelryType: "ring",
        style: "contemporary",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["gold","beige"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 151,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x125.jpg",
        alt: "Stunning engagement ring with a large diamond, captured in an AI jewelry photography setting, showcasing a romantic beach backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Engagement Ring AI Jewelry Photography for Jewelers",
        seoDescription: "Discover how AI technology enhances jewelry photography, offering jewelers cost savings and high-quality images for engagement rings.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","engagement ring","beach photography","romantic jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","pink"],
        materials: ["gold","diamond"],
        setting: "lifestyle"
    },
{
        id: 152,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x124.jpeg",
        alt: "A close-up of a stunning heart-shaped ruby ring showcased in an AI jewelry photography style, highlighting its intricate design and vibrant color.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Designs",
        seoDescription: "Discover high-quality AI photography services for jewelry, ensuring cost savings and exceptional detail in every shot to attract your ideal customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","ruby ring","luxury jewelry","bridal accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["red","gold"],
        materials: ["gold","ruby"],
        setting: "on-model"
    },
{
        id: 153,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x123.png",
        alt: "Elegant black gemstone ring showcased in AI jewelry photography, highlighting intricate design and luxurious appeal.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photography services that save costs while enhancing your ring's visual appeal to attract more buyers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","black gemstone ring","luxury rings","fashion jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","brown"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 154,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x122.png",
        alt: "Couple showcasing modern rings in AI-generated jewelry photography, featuring a black stone and sleek design for contemporary style.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Modern Rings",
        seoDescription: "Discover high-quality AI photography services for jewelers. Save costs while enhancing your jewelry's appeal with advanced AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","modern ring","couple rings","contemporary jewelry"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "unisex",
        dominantColors: ["black","silver"],
        materials: ["gold","silver","gemstone"],
        setting: "on-model"
    },
{
        id: 155,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x100.png",
        alt: "Couple showcasing unique rings in an intimate pose. AI jewelry photography captures intricate designs and details for modern jewelry collections.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Modern Rings",
        seoDescription: "Discover high-quality AI photography for jewelry that reduces costs while enhancing your product's visual appeal. Perfect for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","modern rings","couple jewelry","fashion rings"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "unisex",
        dominantColors: ["green","neutral"],
        materials: ["gold","silver"],
        setting: "on-model"
    },
{
        id: 156,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x121.png",
        alt: "Couple holding hands showcasing a diamond engagement ring and a black wedding band, featuring AI jewelry photography for stunning clarity.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI photography services for jewelers. Save costs while showcasing exquisite jewelry with AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","wedding band","couple jewelry"],
        jewelryType: "ring",
        style: "modern",
        occasion: "engagement",
        targetAudience: "unisex",
        dominantColors: ["black","white"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 157,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x120.png",
        alt: "A stunning gold triangle pendant necklace featuring blue accents, showcased in an outdoor AI photoshoot with a model wearing a straw hat.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Pendants",
        seoDescription: "Discover high-quality AI jewelry photography services for your unique pendant designs. Save costs while enhancing product appeal with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold pendant","fashion necklace","outdoor jewelry photography"],
        jewelryType: "pendant",
        style: "contemporary",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","blue"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 158,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x119.png",
        alt: "Stunning necklace featuring unique charms, captured in an AI jewelry photography session on a sunny beach.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Necklaces",
        seoDescription: "Discover high-quality AI photography services for necklaces, offering cost-effective solutions and exceptional detail to attract jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","charm necklace","beach jewelry","fashion necklace"],
        jewelryType: "necklace",
        style: "modern",
        occasion: "casual",
        targetAudience: "women",
        dominantColors: ["yellow","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 159,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x118.png",
        alt: "Delicate pink gemstone ring with floral design in AI jewelry photography, showcasing intricate details and elegance.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs while enhancing your product's appeal. Perfect for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","pink gemstone ring","elegant ring","floral design ring"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["pink","rose gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 160,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x117.jpeg",
        alt: "Elegant rose gold ring featuring a pink gemstone and diamond accents, captured in an AI jewelry photography session with a floral touch.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover how AI photography can enhance your jewelry business with cost-effective, high-quality images that attract customers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","rose gold ring","gemstone ring","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["rose gold","pink"],
        materials: ["gold","gemstone","diamond"],
        setting: "on-model"
    },
{
        id: 161,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x116.jpeg",
        alt: "Elegant rose gold ring with a pink gemstone, showcased in an AI jewelry photography setting, highlighting its intricate design and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover premium AI photography services for jewelers. Enhance your jewelry's appeal with AI-generated images, ensuring quality and cost savings.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","rose gold ring","luxury jewelry","bridal accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["rose gold","pink"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 162,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x115.png",
        alt: "Stunning AI-generated jewelry photos featuring a sparkling ring and bracelet worn by a model, highlighting the elegance and shine of each piece.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Product Images",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your product quality and appeal with AI-generated jewelry photos today!",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","sparkling ring","elegant bracelet","fashion jewelry"],
        jewelryType: "ring|bracelet",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["pink","silver"],
        materials: ["silver","gemstone"],
        setting: "on-model"
    },
{
        id: 163,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x114.png",
        alt: "Elegant wedding ring adorned with a diamond, captured in an AI jewelry photography session to highlight its brilliance and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Luxury AI Jewelry Photography for Stunning Rings",
        seoDescription: "Discover top-quality AI photography services for jewelers. Save costs while enhancing your jewelry images with cutting-edge AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","wedding ring","diamond ring","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "wedding",
        targetAudience: "bridal",
        dominantColors: ["silver","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 164,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x113.jpeg",
        alt: "Elegant gold chain necklace with a pendant, showcased in AI jewelry photography, highlighting its unique design and luxurious appeal.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover high-quality AI photography services for jewelers. Enhance your product images with advanced technology for cost-effective, stunning results.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold necklace","luxury jewelry","fashion accessories"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","navy"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 165,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x112.png",
        alt: "Stunning engagement ring featuring a purple gemstone, beautifully captured in an AI jewelry photography setting with elegant floral arrangement.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Engagement Rings",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance quality and presentation of your engagement rings with AI-generated images.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","floral arrangement","wedding jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "bridal",
        dominantColors: ["purple","green"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 166,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x111.jpg",
        alt: "Stunning diamond ring and bracelet featured in an AI jewelry photography session, showcasing intricate details and luxury style.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Luxurious Pieces",
        seoDescription: "Explore high-quality AI-generated jewelry photography services that enhance your brand's appeal, offering cost savings and exceptional quality for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","luxury bracelet","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["silver","clear"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 167,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x110.jpg",
        alt: "Elegant gold ring with a large diamond, captured in an AI jewelry photography session, showcasing its brilliance and intricate design.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Pieces",
        seoDescription: "Discover high-quality AI jewelry photography services that save costs while enhancing your jewelry's beauty. Perfect for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring photography","luxury jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","clear"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 168,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x109.png",
        alt: "Engagement ring with intricate design showcased during an AI jewelry photography session on a tropical beach.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover how AI technology enhances jewelry photography, offering jewelers cost-effective, high-quality images for engagement rings and more.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","tropical setting","luxury jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["blue","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 169,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x108.png",
        alt: "Elegant brooch featuring a stunning gemstone, showcased in AI jewelry photography against a serene ocean backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Elegant Brooches",
        seoDescription: "Discover high-quality AI photography services for jewelry, offering cost savings and exceptional visuals to elevate your brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","brooch","luxury","gemstone"],
        jewelryType: "brooch",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["blue","white"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 170,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x107.jpeg",
        alt: "Gold ring featuring an American flag design with colorful gemstones, showcasing AI jewelry photography for stunning product visuals.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Unique Rings",
        seoDescription: "Discover cost-effective AI photography solutions for jewelers. Achieve high-quality images that enhance your jewelry's appeal and sales.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","gold ring","gemstone jewelry","luxury accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "formal",
        targetAudience: "men",
        dominantColors: ["gold","red"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 171,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x106.jpg",
        alt: "Stylish men's silver ring with intricate design showcased in an AI jewelry photography session, emphasizing elegance and detail.",

        // Enhanced SEO metadata
        seoTitle: "Stylish Men's Ring - AI Jewelry Photography Services",
        seoDescription: "Discover top-notch AI jewelry photography services that save costs while enhancing quality. Perfect for jewelers seeking stunning visuals.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","men's ring","silver jewelry","luxury accessories"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "men",
        dominantColors: ["silver","neutral"],
        materials: ["silver"],
        setting: "on-model"
    },
{
        id: 172,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x105.png",
        alt: "Engagement ring showcased in elegant hands during sunset, featuring intricate design and sparkle. Perfect for AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI photography services for engagement rings. Save on costs while enhancing your jewelry's visual appeal with cutting-edge technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","luxury jewelry","bridal accessories"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["red","black"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 173,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x104.png",
        alt: "Stunning brooch featured on a model, showcasing elegance and modern design. Captured with AI jewelry photography for optimal clarity and detail.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Brooches",
        seoDescription: "Discover high-quality AI-generated jewelry photography that offers cost savings and exceptional detail for jewelers. Elevate your product images today!",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","brooch","modern jewelry","fashion accessory"],
        jewelryType: "brooch",
        style: "modern",
        occasion: "formal",
        targetAudience: "women",
        dominantColors: ["white","purple"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 174,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x103.png",
        alt: "A close-up of a modern gold ring featuring gemstones, captured in an AI jewelry photography session, highlighting its intricate design and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Modern Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs for jewelers. Elevate your brand with stunning visuals tailored for modern rings.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","modern ring photography","men's jewelry photography"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "men",
        dominantColors: ["gold","black"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 175,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x102.png",
        alt: "Stylish men's ring featuring black onyx and diamond accents, showcased in an AI jewelry photography setup to highlight its modern elegance.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Modern Rings",
        seoDescription: "Explore cutting-edge AI photography services for jewelers. Save costs while achieving high-quality images for your rings and other jewelry.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","men's ring","modern jewelry","luxury ring"],
        jewelryType: "ring",
        style: "modern",
        occasion: "formal",
        targetAudience: "men",
        dominantColors: ["black","gold"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 176,
        category: "photos",
        type: "image",
        src: "https://ik.imagekit.io/soumya3301/x101.png",
        alt: "Stunning black gemstone ring showcased in AI jewelry photography on a model, highlighting elegant features and craftsmanship.",

        // Enhanced SEO metadata
        seoTitle: "Elegant AI Jewelry Photography for Stunning Rings",
        seoDescription: "Discover high-quality AI photography services for jewelers. Save costs while showcasing your jewelry's beauty with AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","black gemstone ring","luxury jewelry","on-model photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","gold"],
        materials: ["gold","gemstone"],
        setting: "on-model"
    },
{
        id: 177,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371096/rx5_agtilv.jpg",
        alt: "Elegant diamond earrings showcased in AI jewelry photography, featuring a stunning black and white contrast, perfect for modern fashion enthusiasts.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Diamond Earrings",
        seoDescription: "Discover high-quality AI-generated jewelry photos for your diamond earrings. Save costs while enhancing visual appeal with advanced AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond earrings","modern jewelry","fashion accessories"],
        jewelryType: "earrings",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 178,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371098/rx12_pbkykt.jpg",
        alt: "Elegant statement ring featuring a vibrant pink gemstone, captured in a natural setting with AI jewelry photography techniques for stunning detail.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Unique Pieces",
        seoDescription: "Discover high-quality AI jewelry photography services that enhance your designs, offering cost savings and superior visual appeal for jewelers.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","statement ring","luxury jewelry","on-model photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["pink","silver"],
        materials: ["silver","gemstone"],
        setting: "on-model"
    },
{
        id: 179,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371103/rx11_pbitl8.jpg",
        alt: "Elegant bridal necklace featuring a stunning pendant, showcased in a joyful wedding setting, highlighting AI jewelry photography.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Bridal Collections",
        seoDescription: "Discover high-quality AI photography services for your jewelry. Save costs while enhancing your product images with cutting-edge AI technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","bridal necklace","elegant jewelry","wedding accessories"],
        jewelryType: "necklace",
        style: "luxury",
        occasion: "bridal",
        targetAudience: "women",
        dominantColors: ["white","silver"],
        materials: ["silver","diamond"],
        setting: "lifestyle"
    },
{
        id: 180,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371104/rx6_e8bqph.jpg",
        alt: "Stunning AI-generated jewelry photography of a luxurious ring featuring a large ruby and diamond accents, showcased in a chic outdoor café setting.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover high-quality AI photography services that save costs and enhance your jewelry listings. Perfect for jewelers seeking stunning visuals.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","luxury ring","ruby ring","diamond jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["red","gold"],
        materials: ["gold","diamond","gemstone"],
        setting: "on-model"
    },
{
        id: 181,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371105/rx10_ilugeq.png",
        alt: "Stunning engagement ring showcased during an AI jewelry photography session, featuring a radiant gemstone and elegant design, ideal for jewelers seeking AI-generated photos.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Explore exceptional AI jewelry photography services that save costs while delivering high-quality images for engagement rings and more. Elevate your brand with AI.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","elegant design","high-quality images"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","green"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 182,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371108/rx2_qmudkj.jpg",
        alt: "Elegant black earrings showcased in an AI jewelry photography session, highlighting their unique design and luxurious appeal on a model.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Business",
        seoDescription: "Discover high-quality AI photography services for jewelers, offering cost-effective solutions and exceptional visuals to enhance your brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","elegant earrings","luxury jewelry","modern accessories"],
        jewelryType: "earrings",
        style: "luxury",
        occasion: "formal",
        targetAudience: "women",
        dominantColors: ["black","silver"],
        materials: ["silver","gemstone"],
        setting: "on-model"
    },
{
        id: 183,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371109/rx4_xbehkf.png",
        alt: "Elegant black ring showcased on a model in a chic outfit, captured using AI jewelry photography for enhanced detail and clarity.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Modern Jewelers",
        seoDescription: "Discover high-quality AI photography services for jewelers. Save costs while enhancing your jewelry images with state-of-the-art technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","virtual jewelry photography","black ring","elegant jewelry"],
        jewelryType: "ring",
        style: "modern",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["black","gold"],
        materials: ["gold"],
        setting: "on-model"
    },
{
        id: 184,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371111/rx8_lgnylz.png",
        alt: "A stunning engagement ring showcased during a romantic AI photoshoot, featuring a brilliant diamond and elegant setting against a sunset backdrop.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover premium AI photography services for jewelers. Save costs while achieving high-quality, captivating images of your jewelry collections.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond jewelry","romantic jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["gold","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 185,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371115/rx7_hcnksg.png",
        alt: "Stunning engagement ring showcased in an AI photoshoot with a model, featuring a diamond centerpiece and intricate band design, set against a floral background.",

        // Enhanced SEO metadata
        seoTitle: "Elevate Your Jewelry with AI Photography Services",
        seoDescription: "Discover high-quality AI jewelry photography that enhances your designs. Save costs while achieving stunning visuals for your brand.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["green","pink"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 186,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371119/rx9_xcjcnu.png",
        alt: "Stunning engagement ring showcased in an AI jewelry photography session, featuring a sparkling diamond and elegant band, perfect for modern couples.",

        // Enhanced SEO metadata
        seoTitle: "AI Product Photography for Stunning Engagement Rings",
        seoDescription: "Explore high-quality AI jewelry photography services that enhance your jewelry's appeal. Achieve cost savings and superior image quality.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","AI product photography jewelry","engagement ring","diamond ring","modern jewelry"],
        jewelryType: "ring",
        style: "modern",
        occasion: "engagement",
        targetAudience: "unisex",
        dominantColors: ["blue","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
    },
{
        id: 187,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371119/rx1_xnwfod.png",
        alt: "A stunning diamond engagement ring showcased in an AI jewelry photography session, featuring a model with a joyful expression and soft lighting.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Engagement Rings",
        seoDescription: "Discover high-quality AI-generated jewelry photos that save costs while showcasing your engagement rings in the best light. Ideal for jewelers seeking excellence.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","engagement ring","diamond ring","bridal jewelry"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["silver","white"],
        materials: ["diamond","gold"],
        setting: "on-model"
    },
{
        id: 188,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371228/rm3_ljrh8z.jpg",
        alt: "Stunning diamond ring showcased in an elegant setting, highlighting its brilliance. Captured using AI jewelry photography for optimal clarity and detail.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography Services for Jewelers",
        seoDescription: "Discover cost-effective AI photography solutions for jewelers. Enhance your product listings with high-quality AI-generated jewelry photos for better sales.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond ring","luxury jewelry","elegant rings"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "engagement",
        targetAudience: "women",
        dominantColors: ["diamond","silver"],
        materials: ["gold","diamond"],
        setting: "studio"
    },
{
        id: 189,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371228/rm2_sgvtpn.png",
        alt: "Stunning rings featuring colorful gemstones and diamonds captured in an AI photoshoot. Perfect for showcasing fine jewelry collections.",

        // Enhanced SEO metadata
        seoTitle: "AI Jewelry Photography for Stunning Ring Collections",
        seoDescription: "Discover cost-effective AI photography services for jewelers. Enhance your ring showcases with high-quality, AI-generated images that captivate.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","colorful gemstone rings","diamond rings","luxury jewelry photography"],
        jewelryType: "ring",
        style: "luxury",
        occasion: "everyday",
        targetAudience: "women",
        dominantColors: ["gold","multicolor"],
        materials: ["gold","diamond","gemstone"],
        setting: "on-model"
    },
{
        id: 190,
        category: "photos",
        type: "image",
        src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1759371235/rm1_yzfp1w.png",
        alt: "Elegant diamond earrings and necklace showcased in AI jewelry photography, featuring a model in a stylish hat and black attire.",

        // Enhanced SEO metadata
        seoTitle: "Stunning AI Jewelry Photography for Your Collection",
        seoDescription: "Discover high-quality AI photography services for jewelers, offering cost-effective solutions to capture your jewelry's beauty with advanced technology.",
        keywords: ["AI jewelry photography","AI-generated jewelry photos","automated jewelry photoshoot","diamond necklace","elegant earrings","luxury jewelry"],
        jewelryType: "necklace|earrings",
        style: "luxury|modern",
        occasion: "formal|bridal",
        targetAudience: "women",
        dominantColors: ["black","white"],
        materials: ["gold","diamond"],
        setting: "on-model"
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
