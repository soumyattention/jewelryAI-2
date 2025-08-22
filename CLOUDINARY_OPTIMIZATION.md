# Cloudinary Image Optimization Framework

This framework provides automatic image optimization for Cloudinary URLs to improve loading performance and user experience.

## Features

- **Automatic Quality Optimization**: Uses Cloudinary's `q_auto` for optimal file sizes
- **Modern Format Delivery**: Automatically serves WebP/AVIF when supported
- **Responsive Images**: Generates multiple image sizes with srcSet
- **Device Pixel Ratio**: Optimizes for high-DPI displays
- **Smart Cropping**: Face detection and gravity-based cropping
- **Lazy Loading Support**: Compatible with native lazy loading

## Usage

### Basic Optimization

```typescript
import { optimizeCloudinaryUrl } from '../services/cloudinary';

const originalUrl = "https://res.cloudinary.com/your-cloud/image/upload/v123/sample.jpg";
const optimizedUrl = optimizeCloudinaryUrl(originalUrl);

// Result: https://res.cloudinary.com/your-cloud/image/upload/q_auto,f_auto,fl_auto,dpr_auto,c_scale/v123/sample.jpg
```

### Custom Optimization Options

```typescript
const optimizedUrl = optimizeCloudinaryUrl(originalUrl, {
  width: 800,
  height: 600,
  quality: 'auto:good',
  format: 'webp',
  crop: 'fill',
  gravity: 'face'
});
```

### Responsive Images with srcSet

```typescript
import { generateSrcSet } from '../services/cloudinary';

const srcSet = generateSrcSet(originalUrl, [320, 640, 1024, 1920]);

// Use in JSX
<img 
  src={optimizeCloudinaryUrl(originalUrl, { width: 800 })}
  srcSet={srcSet}
  sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px"
  alt="Optimized image"
  loading="lazy"
/>
```

### React Component Example

```typescript
import React from 'react';
import { optimizeCloudinaryUrl, generateSrcSet } from '../services/cloudinary';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width = 800, 
  height, 
  className 
}) => {
  const optimizedSrc = optimizeCloudinaryUrl(src, {
    width,
    height,
    quality: 'auto',
    format: 'auto',
    crop: 'scale'
  });
  
  const srcSet = generateSrcSet(src, [320, 640, 1024, 1920]);
  
  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px"
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default OptimizedImage;
```

## API Reference

### `optimizeCloudinaryUrl(originalUrl, options?)`

Optimizes a Cloudinary URL with performance transformations.

**Parameters:**
- `originalUrl` (string): The original Cloudinary URL
- `options` (CloudinaryOptimizationOptions): Optimization options

**Returns:** Optimized Cloudinary URL string

### `CloudinaryOptimizationOptions`

```typescript
interface CloudinaryOptimizationOptions {
  width?: number;                    // Image width in pixels
  height?: number;                   // Image height in pixels
  quality?: 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low' | number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  crop?: 'scale' | 'fit' | 'fill' | 'crop' | 'thumb';
  gravity?: 'auto' | 'center' | 'face' | 'faces';
  fetchFormat?: 'auto';
  dpr?: 'auto' | number;             // Device pixel ratio
}
```

### `generateSrcSet(originalUrl, breakpoints?)`

Generates a srcSet string for responsive images.

**Parameters:**
- `originalUrl` (string): The original Cloudinary URL
- `breakpoints` (number[]): Array of width breakpoints (default: [320, 640, 768, 1024, 1280, 1920])

**Returns:** srcSet string for use in img elements

### `getResponsiveImageUrls(originalUrl, breakpoints?)`

Returns an object with responsive URLs for different screen sizes.

**Parameters:**
- `originalUrl` (string): The original Cloudinary URL
- `breakpoints` (number[]): Array of width breakpoints

**Returns:** Object with responsive URLs keyed by width (e.g., `{ w320: '...', w640: '...' }`)

## Performance Benefits

### File Size Reduction
- **Auto Quality**: Reduces file size by 35-50% without visible quality loss
- **Modern Formats**: WebP provides 25-35% smaller files than JPEG
- **AVIF**: Up to 50% smaller than JPEG (when supported)

### Loading Speed
- **Responsive Images**: Serves appropriate size for each device
- **Device Pixel Ratio**: Optimizes for retina displays
- **Lazy Loading**: Compatible with native browser lazy loading

### Bandwidth Savings
- **Automatic Format Selection**: Serves best format for each browser
- **Quality Optimization**: Balances quality and file size automatically
- **Progressive JPEG**: Enables progressive loading for better perceived performance

## Best Practices

### 1. Use Appropriate Dimensions
```typescript
// Good: Specify dimensions based on display size
optimizeCloudinaryUrl(url, { width: 400, height: 300 })

// Avoid: Using original large dimensions when not needed
optimizeCloudinaryUrl(url, { width: 4000, height: 3000 })
```

### 2. Choose the Right Crop Mode
```typescript
// For thumbnails: use 'thumb' or 'fill' with face detection
optimizeCloudinaryUrl(url, { crop: 'thumb', gravity: 'face' })

// For hero images: use 'fill' to maintain aspect ratio
optimizeCloudinaryUrl(url, { crop: 'fill', gravity: 'center' })

// For scaling: use 'scale' to maintain original aspect ratio
optimizeCloudinaryUrl(url, { crop: 'scale' })
```

### 3. Implement Responsive Images
```typescript
// Always provide srcSet for responsive behavior
<img 
  src={optimizeCloudinaryUrl(url, { width: 800 })}
  srcSet={generateSrcSet(url)}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
/>
```

### 4. Quality Settings
```typescript
// For most images: use 'auto'
optimizeCloudinaryUrl(url, { quality: 'auto' })

// For high-quality images: use 'auto:best'
optimizeCloudinaryUrl(url, { quality: 'auto:best' })

// For thumbnails: use 'auto:good' or 'auto:eco'
optimizeCloudinaryUrl(url, { quality: 'auto:good' })
```

## Implementation in Components

The framework is already implemented in:

- **RunGrid Component**: All 97 jewelry images are optimized with responsive srcSet
- **Automatic Optimization**: Images use auto quality, format, and DPR optimization
- **Responsive Breakpoints**: 300px, 400px, 600px, and 800px variants

## Demo Page

Visit `/cloudinary-demo` to see the optimization framework in action with:
- Visual comparison of original vs optimized images
- Different optimization settings examples
- Responsive image demonstration
- Performance benefits showcase

## Browser Support

- **WebP**: Chrome 23+, Firefox 65+, Safari 14+, Edge 18+
- **AVIF**: Chrome 85+, Firefox 93+, Safari 16.4+
- **Responsive Images**: All modern browsers
- **Lazy Loading**: Chrome 76+, Firefox 75+, Safari 15.4+

## Monitoring and Analytics

To monitor the performance impact:

1. Use browser DevTools Network tab to compare file sizes
2. Check Core Web Vitals (LCP, CLS) improvements
3. Monitor Cloudinary analytics dashboard for bandwidth savings
4. Use Lighthouse to measure performance scores

## Troubleshooting

### Images Not Loading
- Verify the original URL is a valid Cloudinary URL
- Check that the cloud name is correct
- Ensure the image exists in your Cloudinary account

### Optimization Not Applied
- Confirm the URL contains `res.cloudinary.com`
- Check that transformations are being added to the URL
- Verify the optimization functions are imported correctly

### Performance Issues
- Use appropriate image dimensions for display size
- Implement lazy loading for images below the fold
- Consider using lower quality settings for thumbnails
- Enable browser caching for optimized images