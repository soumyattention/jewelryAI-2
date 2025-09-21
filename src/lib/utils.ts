import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFileNameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const parts = pathname.split('/');
    let fileName = parts[parts.length - 1];

    // Remove query parameters if any
    const queryParamIndex = fileName.indexOf('?');
    if (queryParamIndex !== -1) {
      fileName = fileName.substring(0, queryParamIndex);
    }

    // Decode URI component to handle encoded characters
    return decodeURIComponent(fileName);
  } catch (error) {
    console.error("Invalid URL for getFileNameFromUrl:", url, error);
    return "unknown_file";
  }
}
