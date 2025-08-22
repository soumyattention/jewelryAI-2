// Browser-compatible Cloudinary configuration
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dc4ezu6y8';
const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

// Cloudinary REST API base URLs
const CLOUDINARY_API_BASE_URL = `https://api.cloudinary.com/v1_1/${cloudName}`;
const CLOUDINARY_UPLOAD_BASE_URL = `https://res.cloudinary.com/${cloudName}`;

// Helper function to generate signature for authenticated requests
async function generateSignature(params: Record<string, any>, secret: string): Promise<string> {
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');
  
  const stringToSign = sortedParams + secret;
  
  // Use Web Crypto API to generate SHA1 hash
  const encoder = new TextEncoder();
  const data = encoder.encode(stringToSign);
  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  url: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
  folder?: string;
}

export interface CloudinaryOptimizationOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low' | number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  crop?: 'scale' | 'fit' | 'fill' | 'crop' | 'thumb';
  gravity?: 'auto' | 'center' | 'face' | 'faces';
  dpr?: 'auto' | number;
}

/**
 * Optimize a Cloudinary URL with performance transformations
 * @param originalUrl - The original Cloudinary URL
 * @param options - Optimization options
 * @returns Optimized Cloudinary URL
 */
export function optimizeCloudinaryUrl(
  originalUrl: string,
  options: CloudinaryOptimizationOptions = {}
): string {
  // Default optimization options for best performance
  const defaultOptions: CloudinaryOptimizationOptions = {
    quality: 'auto',
    format: 'auto',
    dpr: 'auto',
    crop: 'scale'
  };

  const opts = { ...defaultOptions, ...options };

  // Check if URL is already a Cloudinary URL
  if (!originalUrl.includes('res.cloudinary.com')) {
    return originalUrl;
  }

  // Extract the base URL and path after /upload/
  const uploadIndex = originalUrl.indexOf('/upload/');
  if (uploadIndex === -1) {
    return originalUrl;
  }

  const baseUrl = originalUrl.substring(0, uploadIndex + 8); // Include '/upload/'
  const pathAfterUpload = originalUrl.substring(uploadIndex + 8);
  
  // Build transformation string
  const transformations: string[] = [];

  // Add width transformation
  if (opts.width) {
    transformations.push(`w_${opts.width}`);
  }

  // Add height transformation
  if (opts.height) {
    transformations.push(`h_${opts.height}`);
  }

  // Add crop transformation
  if (opts.crop) {
    transformations.push(`c_${opts.crop}`);
  }

  // Add gravity transformation
  if (opts.gravity) {
    transformations.push(`g_${opts.gravity}`);
  }

  // Add quality transformation
  if (opts.quality) {
    transformations.push(`q_${opts.quality}`);
  }

  // Add format transformation
  if (opts.format) {
    transformations.push(`f_${opts.format}`);
  }

  // Add fetch format transformation (removed as it's not a standard Cloudinary parameter)
  // if (opts.fetchFormat) {
  //   transformations.push(`fl_${opts.fetchFormat}`);
  // }

  // Add DPR transformation
  if (opts.dpr) {
    transformations.push(`dpr_${opts.dpr}`);
  }

  // If no transformations, return original URL
  if (transformations.length === 0) {
    return originalUrl;
  }

  // Construct the optimized URL
  const transformationString = transformations.join(',');
  
  // Check if path already has transformations (contains underscores in first segment)
  const pathSegments = pathAfterUpload.split('/');
  if (pathSegments[0] && pathSegments[0].includes('_') && !pathSegments[0].startsWith('v')) {
    // Replace existing transformations
    const remainingPath = pathSegments.slice(1).join('/');
    return `${baseUrl}${transformationString}/${remainingPath}`;
  } else {
    // No existing transformations, add ours
    return `${baseUrl}${transformationString}/${pathAfterUpload}`;
  }
}

/**
 * Get responsive image URLs for different screen sizes
 * @param originalUrl - The original Cloudinary URL
 * @param breakpoints - Array of width breakpoints
 * @returns Object with responsive URLs
 */
export function getResponsiveImageUrls(
  originalUrl: string,
  breakpoints: number[] = [320, 640, 768, 1024, 1280, 1920]
): Record<string, string> {
  const responsiveUrls: Record<string, string> = {};

  breakpoints.forEach(width => {
    responsiveUrls[`w${width}`] = optimizeCloudinaryUrl(originalUrl, {
      width,
      quality: 'auto',
      format: 'auto',
      crop: 'scale'
    });
  });

  return responsiveUrls;
}

/**
 * Generate srcSet string for responsive images
 * @param originalUrl - The original Cloudinary URL
 * @param breakpoints - Array of width breakpoints
 * @returns srcSet string for use in img elements
 */
export function generateSrcSet(
  originalUrl: string,
  breakpoints: number[] = [320, 640, 768, 1024, 1280, 1920]
): string {
  const responsiveUrls = getResponsiveImageUrls(originalUrl, breakpoints);
  
  return breakpoints
    .map(width => `${responsiveUrls[`w${width}`]} ${width}w`)
    .join(', ');
}

/**
 * Fetch all images from a specific folder in Cloudinary
 * @param folderPath - The folder path in Cloudinary (e.g., 'jewelry', 'products/rings')
 * @param maxResults - Maximum number of results to return (default: 100)
 * @returns Promise<CloudinaryImage[]>
 */
export async function getImagesFromFolder(
  folderPath: string = '',
  maxResults: number = 100
): Promise<CloudinaryImage[]> {
  try {
    if (!apiKey || !apiSecret) {
      console.warn('getImagesFromFolder: Missing API credentials, using empty array');
      return [];
    }

    const timestamp = Math.round(Date.now() / 1000);
    const params = {
      api_key: apiKey,
      timestamp: timestamp,
      expression: folderPath ? `resource_type:image AND folder:${folderPath}` : 'resource_type:image',
      sort_by: 'created_at',
      sort_order: 'desc',
      max_results: maxResults
    };
    
    const signature = await generateSignature(params, apiSecret);
    
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    formData.append('signature', signature);
    
    const response = await fetch(`${CLOUDINARY_API_BASE_URL}/resources/search`, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result.resources?.map((resource: any) => ({
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      url: resource.url,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      bytes: resource.bytes,
      created_at: resource.created_at,
      folder: resource.folder
    })) || [];
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}

/**
 * Get all images from the root directory (no folder specified)
 * @param maxResults - Maximum number of results to return (default: 100)
 * @returns Promise<CloudinaryImage[]>
 */
export async function getAllImages(maxResults: number = 100): Promise<CloudinaryImage[]> {
  try {
    if (!apiKey || !apiSecret) {
      console.warn('getAllImages: Missing API credentials, using empty array');
      return [];
    }

    const timestamp = Math.round(Date.now() / 1000);
    const params = {
      api_key: apiKey,
      timestamp: timestamp,
      expression: 'resource_type:image',
      sort_by: 'created_at',
      sort_order: 'desc',
      max_results: maxResults
    };
    
    const signature = await generateSignature(params, apiSecret);
     
     const formData = new FormData();
     Object.entries(params).forEach(([key, value]) => {
       formData.append(key, value.toString());
     });
     formData.append('signature', signature);
    
    const response = await fetch(`${CLOUDINARY_API_BASE_URL}/resources/search`, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result.resources?.map((resource: any) => ({
      public_id: resource.public_id,
      secure_url: resource.secure_url,
      url: resource.url,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      bytes: resource.bytes,
      created_at: resource.created_at,
      folder: resource.folder
    })) || [];
  } catch (error) {
    console.error('Error fetching all images from Cloudinary:', error);
    return [];
  }
}

/**
 * Get folders/directories available in Cloudinary
 * @returns Promise<string[]>
 */
export async function getFolders(): Promise<string[]> {
  try {
    if (!apiKey || !apiSecret) {
      console.warn('getFolders: Missing API credentials, using mock data');
      return ['jewelry', 'rings', 'necklaces', 'bracelets'];
    }

    const timestamp = Math.round(Date.now() / 1000);
    const params = {
      api_key: apiKey,
      timestamp: timestamp
    };
    
    const signature = await generateSignature(params, apiSecret);
     
     const formData = new FormData();
     formData.append('api_key', apiKey);
     formData.append('timestamp', timestamp.toString());
     formData.append('signature', signature);
    
    const response = await fetch(`${CLOUDINARY_API_BASE_URL}/folders`, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result.folders?.map((folder: any) => folder.name) || [];
  } catch (error) {
    console.error('Error fetching folders from Cloudinary:', error);
    // Fallback to mock data on error
    return ['jewelry', 'rings', 'necklaces', 'bracelets'];
  }
}

/**
 * Test Cloudinary connection
 * @returns Promise<boolean>
 */
export async function testCloudinaryConnection(): Promise<boolean> {
  try {
    if (!apiKey || !apiSecret) {
      console.error('Missing API credentials for connection test');
      return false;
    }

    const timestamp = Math.round(Date.now() / 1000);
    const params = {
      api_key: apiKey,
      timestamp: timestamp
    };
    
    const signature = await generateSignature(params, apiSecret);
     
     const formData = new FormData();
     formData.append('api_key', apiKey);
     formData.append('timestamp', timestamp.toString());
     formData.append('signature', signature);
    
    const response = await fetch(`${CLOUDINARY_API_BASE_URL}/resources/image`, {
      method: 'POST',
      body: formData
    });
    
    if (response.ok) {
      console.log('Cloudinary connection test successful');
      return true;
    } else {
      console.error('Cloudinary connection test failed:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Cloudinary connection test failed:', error);
    return false;
  }
}