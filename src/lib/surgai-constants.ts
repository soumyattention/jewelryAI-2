import { SurgeryProcedure } from '../types/surgai';

export const SURGERY_PROCEDURES: SurgeryProcedure[] = [
  {
    id: 'rhinoplasty',
    name: 'Rhinoplasty',
    icon: '👃',
    description: 'Nose reshaping surgery',
    prompt: 'Generate a realistic medical simulation showing the result of a rhinoplasty procedure. Show a refined, natural-looking nose with improved symmetry and proportion. Maintain the patient\'s ethnic features and facial harmony. The result should look professionally done with subtle improvements.',
  },
  {
    id: 'lip-filler',
    name: 'Lip Filler',
    icon: '💋',
    description: 'Lip augmentation',
    prompt: 'Generate a realistic medical simulation showing the result of lip filler treatment. Show fuller, more defined lips with natural shape and symmetry. The enhancement should be subtle and proportional to the face, avoiding an overdone appearance.',
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant',
    icon: '💇',
    description: 'Hair restoration',
    prompt: 'Generate a realistic medical simulation showing the result of a hair transplant procedure. Show a natural-looking hairline with restored density in thinning or balding areas. The hair should look naturally distributed with appropriate density and direction.',
  },
  {
    id: 'botox',
    name: 'Botox',
    icon: '✨',
    description: 'Wrinkle reduction',
    prompt: 'Generate a realistic medical simulation showing the result of Botox treatment. Show smoother skin with reduced fine lines and wrinkles, particularly around the forehead, between eyebrows, and around the eyes. The face should maintain natural expression and movement.',
  },
  {
    id: 'blepharoplasty',
    name: 'Blepharoplasty',
    icon: '👁️',
    description: 'Eyelid surgery',
    prompt: 'Generate a realistic medical simulation showing the result of blepharoplasty (eyelid surgery). Show refreshed, more youthful-looking eyes with reduced puffiness, excess skin, or bags. The eyes should appear more open and alert while maintaining natural appearance.',
  },
  {
    id: 'brow-lift',
    name: 'Brow Lift',
    icon: '🎭',
    description: 'Forehead lift',
    prompt: 'Generate a realistic medical simulation showing the result of a brow lift procedure. Show elevated eyebrows with a more youthful position, reduced forehead wrinkles, and a refreshed upper face appearance. The result should look natural without an overdone or surprised expression.',
  },
  {
    id: 'face-contouring',
    name: 'Face Contouring',
    icon: '💎',
    description: 'Facial structure enhancement',
    prompt: 'Generate a realistic medical simulation showing the result of facial contouring procedures. Show enhanced facial definition with improved cheekbones, jawline, and overall facial structure. The result should maintain natural proportions and ethnic features.',
  },
  {
    id: 'chin-surgery',
    name: 'Chin Surgery',
    icon: '🗿',
    description: 'Chin augmentation/reduction',
    prompt: 'Generate a realistic medical simulation showing the result of chin surgery (genioplasty). Show improved facial balance and profile with a chin that is proportional to other facial features. The result should enhance overall facial harmony.',
  },
  {
    id: 'cleft-lip-repair',
    name: 'Cleft Lip Repair',
    icon: '🩹',
    description: 'Cleft lip reconstruction',
    prompt: 'Generate a realistic medical simulation showing the result of cleft lip repair surgery. Show a reconstructed upper lip with improved symmetry and function. The scar should be minimal and the result should restore natural lip appearance and function.',
  },
  {
    id: 'mole-removal',
    name: 'Mole Removal',
    icon: '🔬',
    description: 'Mole/lesion removal',
    prompt: 'Generate a realistic medical simulation showing the result of mole removal. Show smooth, even-toned skin in the area where the mole was located. The result should show minimal scarring and natural skin texture.',
  },
  {
    id: 'tummy-tuck',
    name: 'Tummy Tuck',
    icon: '🏋️',
    description: 'Abdominoplasty',
    prompt: 'Generate a realistic medical simulation showing the result of a tummy tuck (abdominoplasty). Show a flatter, more toned abdominal area with tightened muscles and removed excess skin. The result should show natural-looking body contours.',
  },
  {
    id: 'liposuction',
    name: 'Liposuction',
    icon: '💪',
    description: 'Fat removal',
    prompt: 'Generate a realistic medical simulation showing the result of liposuction. Show improved body contours with reduced fat deposits in treated areas. The result should show smooth, natural-looking body proportions with better definition.',
  },
  {
    id: 'chemical-peel',
    name: 'Chemical Peel',
    icon: '🧴',
    description: 'Skin resurfacing',
    prompt: 'Generate a realistic medical simulation showing the result of a chemical peel treatment. Show smoother, more even-toned skin with reduced fine lines, sun damage, and pigmentation issues. The skin should appear refreshed and more youthful with improved texture.',
  },
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];