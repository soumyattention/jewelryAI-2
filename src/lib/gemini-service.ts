import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn('Missing VITE_GEMINI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(API_KEY || '');

export async function generateSurgicalSimulation(
  imageBase64: string,
  procedurePrompt: string
): Promise<string> {
  try {
    // Use Gemini 2.5 Flash Image Preview for image generation
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image-preview' });

    // Extract base64 data and mime type
    const matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid image format');
    }

    const mimeType = matches[1];
    const base64Data = matches[2];

    const imagePart = {
      inlineData: {
        data: base64Data,
        mimeType: mimeType,
      },
    };

    const prompt = `You are a professional medical imaging AI assistant for plastic surgeons.

${procedurePrompt}

Important guidelines:
- Analyze the patient photo carefully
- Apply realistic surgical transformations to the specified area
- Maintain the same photo angle, lighting, and background
- Keep all other facial/body features unchanged except the target area
- Ensure medical accuracy and natural-looking results
- The transformation should be realistic and achievable through actual surgery
- Preserve the patient's ethnic features and overall facial harmony

Generate a realistic after-surgery image showing the transformation.`;

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;

    // Check if the response contains generated images
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const candidate = candidates[0];
      const content = candidate.content;

      if (content && content.parts) {
        for (const part of content.parts) {
          // Check if this part contains inline data (generated image)
          if (part.inlineData) {
            const generatedImageBase64 = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            return generatedImageBase64;
          }
        }
      }
    }

    // Fallback: if no image was generated, return original
    console.warn('No generated image found in response');
    return imageBase64;
  } catch (error) {
    console.error('Error generating simulation:', error);
    throw new Error('Failed to generate surgical simulation. Please check your API key and try again.');
  }
}

// Helper function to convert File to base64
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}