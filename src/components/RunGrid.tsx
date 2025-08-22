import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { optimizeCloudinaryUrl, generateSrcSet } from '../services/cloudinary';

interface RunGridProps {
  onSelectionChange?: (selectedCount: number, progressPercentage: number, selectedImages: number[]) => void;
  onSubmitSuccess?: () => void;
}

const RunGrid: React.FC<RunGridProps> = ({ onSelectionChange, onSubmitSuccess }) => {
    const [shuffledImages, setShuffledImages] = useState<any[]>([]);
    const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const MAX_SELECTION = 25;

    const galleryImages = [
        {
            id: 1,
            src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856295/run131_t0oqhz.jpg",
            alt: "Jewelry piece 01",
            tags: ["jewelry", "rings"]
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856299/run134_skxnvm.jpg",
            alt: "Jewelry piece 02",
            tags: ["jewelry", "necklaces"]
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856305/run162_hn5wfx.png",
            alt: "Jewelry piece 03",
            tags: ["jewelry", "bracelets"]
        },
        {
            id: 4,
            src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856310/run163_jgcm7j.png",
            alt: "Jewelry piece 04",
            tags: ["jewelry", "rings"]
        },
        {
            id: 5,
            src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856312/run164_a1pabf.png",
            alt: "Jewelry piece 05",
            tags: ["jewelry", "necklaces"]
        },
        {
    id: 6,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856319/run116_dpsmnz.png",
    alt: "Jewelry piece 06",
    tags: ["jewelry", "bracelets"]
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856325/run145_sohbrk.png",
    alt: "Jewelry piece 07",
    tags: ["jewelry", "rings"]
  },
        {
    id: 8,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856330/run191_m5l6xv.png",
    alt: "Jewelry piece 08",
    tags: ["jewelry", "necklaces"]
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856330/run190_u0jepp.png",
    alt: "Jewelry piece 09",
    tags: ["jewelry", "bracelets"]
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856333/run147_yratlq.png",
    alt: "Jewelry piece 10",
    tags: ["jewelry", "rings"]
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856335/run156_renlkq.png",
    alt: "Jewelry piece 11",
    tags: ["jewelry", "necklaces"]
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856338/run146_v8xs4f.png",
    alt: "Jewelry piece 12",
    tags: ["jewelry", "bracelets"]
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856343/run157_adenkj.png",
    alt: "Jewelry piece 13",
    tags: ["jewelry", "rings"]
  },
        {
    id: 14,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856351/run136_o8ewrd.png",
    alt: "Jewelry piece 14",
    tags: ["jewelry", "necklaces"]
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856354/run137_cu97e6.jpg",
    alt: "Jewelry piece 15",
    tags: ["jewelry", "bracelets"]
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856361/run160_hsq3cy.png",
    alt: "Jewelry piece 16",
    tags: ["jewelry", "rings"]
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856363/run161_oenzab.png",
    alt: "Jewelry piece 17",
    tags: ["jewelry", "necklaces"]
  },
        {
             id: 18,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856369/run169_gpvleg.jpg",
             alt: "Jewelry piece 18",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 19,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856372/run171_ause7s.jpg",
             alt: "Jewelry piece 19",
             tags: ["jewelry", "rings"]
         },
         {
             id: 20,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856378/run186_gljtye.png",
             alt: "Jewelry piece 20",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 21,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856381/run184_zth7rp.png",
             alt: "Jewelry piece 21",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 22,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856384/run188_jfal0n.png",
             alt: "Jewelry piece 22",
             tags: ["jewelry", "rings"]
         },
         {
             id: 23,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856388/run181_qmiyfs.jpg",
             alt: "Jewelry piece 23",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 24,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856391/run187_lq5tve.png",
             alt: "Jewelry piece 24",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 25,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856422/run203_d7iumm.png",
             alt: "Jewelry piece 25",
             tags: ["jewelry", "rings"]
         },
         {
             id: 26,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856426/run204_b1hjxc.png",
             alt: "Jewelry piece 26",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 27,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856431/run172_a8cdr4.jpg",
             alt: "Jewelry piece 27",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 28,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856435/run201_cqxc7x.png",
             alt: "Jewelry piece 28",
             tags: ["jewelry", "rings"]
         },
         {
             id: 29,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856497/run205_foc1i6.png",
             alt: "Jewelry piece 29",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 30,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856543/run206_lzylez.png",
             alt: "Jewelry piece 30",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 31,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856563/run208_i5su2y.jpg",
             alt: "Jewelry piece 31",
             tags: ["jewelry", "rings"]
         },
         {
             id: 32,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856565/run209_p1xx28.png",
             alt: "Jewelry piece 32",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 33,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856624/run210_srugb7.png",
             alt: "Jewelry piece 33",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 34,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856654/run212_bqi7tg.jpg",
             alt: "Jewelry piece 34",
             tags: ["jewelry", "rings"]
         },
         {
             id: 35,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856654/run211_amvys2.jpg",
             alt: "Jewelry piece 35",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 36,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856665/run213_zt3eca.png",
             alt: "Jewelry piece 36",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 37,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856702/run214_nerbe6.png",
             alt: "Jewelry piece 37",
             tags: ["jewelry", "rings"]
         },
         {
             id: 38,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856722/run215_ywjiv7.jpg",
             alt: "Jewelry piece 38",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 39,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856723/run216_mfxssf.jpg",
             alt: "Jewelry piece 39",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 40,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856726/run217_shbnp4.jpg",
             alt: "Jewelry piece 40",
             tags: ["jewelry", "rings"]
         },
         {
             id: 41,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856769/run219_j3zqti.jpg",
             alt: "Jewelry piece 41",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 42,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856770/run220_hoixqy.jpg",
             alt: "Jewelry piece 42",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 43,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856770/run218_yadqoz.jpg",
             alt: "Jewelry piece 43",
             tags: ["jewelry", "rings"]
         },
         {
             id: 44,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856787/run221_clijjj.png",
             alt: "Jewelry piece 44",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 45,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856800/run222_p7iwmy.png",
             alt: "Jewelry piece 45",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 46,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856826/run223_whnlv8.png",
             alt: "Jewelry piece 46",
             tags: ["jewelry", "rings"]
         },
         {
             id: 47,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856877/run224_bop2dh.png",
             alt: "Jewelry piece 47",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 48,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856398/run183_euc8af.jpg",
             alt: "Jewelry piece 48",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 49,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856096/run1_dkmxli.png",
             alt: "Jewelry piece 49",
             tags: ["jewelry", "rings"]
         },
         {
             id: 50,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856099/run2_igeaap.png",
             alt: "Jewelry piece 50",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 51,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856105/run3_oj25gh.png",
             alt: "Jewelry piece 51",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 52,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856113/run4_tqrbd9.png",
             alt: "Jewelry piece 52",
             tags: ["jewelry", "rings"]
         },
         {
             id: 53,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856110/run6_bwtdnt.png",
             alt: "Jewelry piece 53",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 54,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856117/run8_h72cnf.png",
             alt: "Jewelry piece 54",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 55,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856120/run14_kyucsk.png",
             alt: "Jewelry piece 55",
             tags: ["jewelry", "rings"]
         },
         {
             id: 56,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856122/run10_wsozmz.png",
             alt: "Jewelry piece 56",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 57,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856126/run9_h2fznd.png",
             alt: "Jewelry piece 57",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 58,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856129/run22_cjzkuf.png",
             alt: "Jewelry piece 58",
             tags: ["jewelry", "rings"]
         },
         {
             id: 59,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856131/run15_vomboe.png",
             alt: "Jewelry piece 59",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 60,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856134/run18_zubirq.png",
             alt: "Jewelry piece 60",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 61,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856136/run16_jyydii.png",
             alt: "Jewelry piece 61",
             tags: ["jewelry", "rings"]
         },
         {
             id: 62,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856147/run34_pouqgr.png",
             alt: "Jewelry piece 62",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 63,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856141/run27_ssbjro.png",
             alt: "Jewelry piece 63",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 64,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856149/run31_nehznf.jpg",
             alt: "Jewelry piece 64",
             tags: ["jewelry", "rings"]
         },
         {
             id: 65,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856152/run30_sf3dza.png",
             alt: "Jewelry piece 65",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 66,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856158/run24_bmkuqi.jpg",
             alt: "Jewelry piece 66",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 67,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856155/run20_vlflee.png",
             alt: "Jewelry piece 67",
             tags: ["jewelry", "rings"]
         },
         {
             id: 68,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856160/run32_ecxpr9.jpg",
             alt: "Jewelry piece 68",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 69,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856163/run57_zrd6xt.jpg",
             alt: "Jewelry piece 69",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 70,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856165/run39_qrgsz6.png",
             alt: "Jewelry piece 70",
             tags: ["jewelry", "rings"]
         },
         {
             id: 71,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856179/run51_ndchqi.png",
             alt: "Jewelry piece 71",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 72,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856184/run59_sbahl1.png",
             alt: "Jewelry piece 72",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 73,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856189/run62_iddtql.png",
             alt: "Jewelry piece 73",
             tags: ["jewelry", "rings"]
         },
         {
             id: 74,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856191/run67_zrap17.png",
             alt: "Jewelry piece 74",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 75,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856193/run66_y29eok.png",
             alt: "Jewelry piece 75",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 76,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856195/run65_uv3mo2.png",
             alt: "Jewelry piece 76",
             tags: ["jewelry", "rings"]
         },
         {
             id: 77,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856198/run77_ad7kc7.png",
             alt: "Jewelry piece 77",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 78,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856197/run78_nnd9y9.png",
             alt: "Jewelry piece 78",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 79,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856200/run86_hkmhyb.png",
             alt: "Jewelry piece 79",
             tags: ["jewelry", "rings"]
         },
         {
             id: 80,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856206/run87_jktyaf.png",
             alt: "Jewelry piece 80",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 81,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856208/run80_nhzgmb.png",
             alt: "Jewelry piece 81",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 82,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856212/run91_nodnav.png",
             alt: "Jewelry piece 82",
             tags: ["jewelry", "rings"]
         },
         {
             id: 83,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856215/run85_ppp3rc.png",
             alt: "Jewelry piece 83",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 84,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856222/run95_njiskv.png",
             alt: "Jewelry piece 84",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 85,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856227/run106_etbvly.jpg",
             alt: "Jewelry piece 85",
             tags: ["jewelry", "rings"]
         },
         {
             id: 86,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856230/run99_eeqlsv.png",
             alt: "Jewelry piece 86",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 87,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856233/run109_zyfvx7.png",
             alt: "Jewelry piece 87",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 88,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856234/run108_g5ov4i.png",
             alt: "Jewelry piece 88",
             tags: ["jewelry", "rings"]
         },
         {
             id: 89,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856239/run103_qwg6mh.png",
             alt: "Jewelry piece 89",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 90,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856246/run113_hphlij.jpg",
             alt: "Jewelry piece 90",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 91,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856254/run107_znlbqu.png",
             alt: "Jewelry piece 91",
             tags: ["jewelry", "rings"]
         },
         {
             id: 92,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856259/run110_kdnzwz.png",
             alt: "Jewelry piece 92",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 93,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856264/run129_jncdox.png",
             alt: "Jewelry piece 93",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 94,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856273/run100_lvmf3d.png",
             alt: "Jewelry piece 94",
             tags: ["jewelry", "rings"]
         },
         {
             id: 95,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856280/run124_hroplg.png",
             alt: "Jewelry piece 95",
             tags: ["jewelry", "necklaces"]
         },
         {
             id: 96,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856285/run118_dqn2kc.png",
             alt: "Jewelry piece 96",
             tags: ["jewelry", "bracelets"]
         },
         {
             id: 97,
             src: "https://res.cloudinary.com/dc4ezu6y8/image/upload/v1755856291/run158_nfgdws.png",
             alt: "Jewelry piece 97",
             tags: ["jewelry", "rings"]
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
            onSelectionChange(selectedImages.size, progressPercentage, Array.from(selectedImages));
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
            
            // Maximum selection reached - FloatingDock will handle the popup
        }
        setSelectedImages(newSelected);
    };

    const handleSubmitSuccess = () => {
        setShowSuccessMessage(true);
        setSelectedImages(new Set()); // Clear selections
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 5000);
        if (onSubmitSuccess) {
            onSubmitSuccess();
        }
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
                                    src={optimizeCloudinaryUrl(image.src, {
                                        width: 400,
                                        height: 533,
                                        quality: 'auto',
                                        format: 'auto',
                                        crop: 'fill',
                                        gravity: 'auto'
                                    })}
                                    srcSet={generateSrcSet(image.src, [300, 400, 600, 800])}
                                    sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
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

            {/* Success Message */}
            {showSuccessMessage && (
                <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[10000] pointer-events-none">
                    <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">Run submitted successfully!</span>
                    </div>
                </div>
            )}


        </>
    );
};

export default RunGrid;