export interface SurgeryProcedure {
  id: string;
  name: string;
  icon: string;
  description: string;
  prompt: string;
}

export interface SimulationState {
  uploadedImage: string | null;
  selectedProcedure: string | null;
  generatedImage: string | null;
  isGenerating: boolean;
  error: string | null;
}

export type AppStep = 'upload' | 'select' | 'generate' | 'result';