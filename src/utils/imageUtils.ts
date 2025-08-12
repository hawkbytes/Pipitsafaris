/**
 * Image utility functions for optimized image loading
 * Generated on: August 12, 2025
 * Updated: WebP support added for superior compression
 */

export type ImageSize = 'thumbnail' | 'medium' | 'large' | 'original';
export type ImageFormat = 'jpg' | 'webp';

export interface OptimizedImage {
  thumbnail: string;  // ~40KB JPG / ~16KB WebP, 300px max
  medium: string;     // ~200KB JPG / ~99KB WebP, 800px max  
  large: string;      // ~700KB JPG / ~448KB WebP, 1400px max
  original: string;   // ~3.7MB, full resolution
}

export interface OptimizedImageWithWebP extends OptimizedImage {
  thumbnailWebP: string;  // ~16KB, 300px max (60% smaller than JPG)
  mediumWebP: string;     // ~99KB, 800px max (50% smaller than JPG)
  largeWebP: string;      // ~448KB, 1400px max (36% smaller than JPG)
}

/**
 * Get the optimized image path for a given image name, size, and format
 */
export const getOptimizedImagePath = (
  imageName: string, 
  size: ImageSize = 'medium',
  format: ImageFormat = 'jpg'
): string => {
  const basePath = '/images/trips';
  
  // For WebP format
  if (format === 'webp') {
    switch (size) {
      case 'thumbnail':
        return `${basePath}/optimized/webp/thumbnails/${imageName.replace('.jpg', '.webp')}`;
      case 'medium':
        return `${basePath}/optimized/webp/medium/${imageName.replace('.jpg', '.webp')}`;
      case 'large':
        return `${basePath}/optimized/webp/large/${imageName.replace('.jpg', '.webp')}`;
      case 'original':
        return `${basePath}/backgrounds/${imageName}`;
      default:
        return `${basePath}/optimized/webp/medium/${imageName.replace('.jpg', '.webp')}`;
    }
  }
  
  // For JPG format (original behavior)
  switch (size) {
    case 'thumbnail':
      return `${basePath}/optimized/thumbnails/${imageName}`;
    case 'medium':
      return `${basePath}/optimized/medium/${imageName}`;
    case 'large':
      return `${basePath}/optimized/large/${imageName}`;
    case 'original':
      return `${basePath}/backgrounds/${imageName}`;
    default:
      return `${basePath}/optimized/medium/${imageName}`;
  }
};

/**
 * Get all available sizes for an image in JPG format
 */
export const getOptimizedImageSet = (imageName: string): OptimizedImage => {
  return {
    thumbnail: getOptimizedImagePath(imageName, 'thumbnail', 'jpg'),
    medium: getOptimizedImagePath(imageName, 'medium', 'jpg'),
    large: getOptimizedImagePath(imageName, 'large', 'jpg'),
    original: getOptimizedImagePath(imageName, 'original', 'jpg')
  };
};

/**
 * Get all available sizes for an image including WebP format
 */
export const getOptimizedImageSetWithWebP = (imageName: string): OptimizedImageWithWebP => {
  return {
    thumbnail: getOptimizedImagePath(imageName, 'thumbnail', 'jpg'),
    medium: getOptimizedImagePath(imageName, 'medium', 'jpg'),
    large: getOptimizedImagePath(imageName, 'large', 'jpg'),
    original: getOptimizedImagePath(imageName, 'original', 'jpg'),
    thumbnailWebP: getOptimizedImagePath(imageName, 'thumbnail', 'webp'),
    mediumWebP: getOptimizedImagePath(imageName, 'medium', 'webp'),
    largeWebP: getOptimizedImagePath(imageName, 'large', 'webp')
  };
};

/**
 * Available safari images for trips
 */
export const SAFARI_IMAGES = [
  'IMG_0241.jpg',
  'IMG_0245.jpg',
  'IMG_0463.jpg',
  'IMG_0465.jpg',
  'IMG_0551.jpg',
  'IMG_0646.jpg',
  'IMG_0650.jpg',
  'IMG_1363.jpg',
  'IMG_1364.jpg',
  'IMG_1365.jpg',
  'IMG_1435.jpg',
  'IMG_1436.jpg',
  'IMG_1438.jpg',
  'IMG_1439.jpg',
  'IMG_1635.jpg',
  'IMG_1636.jpg',
  'IMG_1664.jpg',
  'IMG_1666.jpg',
  'IMG_1667.jpg',
  'IMG_1789.jpg',
  'IMG_1792.jpg',
  'IMG_1795.jpg',
  'IMG_1796.jpg',
  'IMG_1841.jpg',
  'IMG_1852.jpg',
  'IMG_1869.jpg',
  'IMG_1970.jpg',
  'IMG_1971.jpg',
  'IMG_1974.jpg',
  'IMG_1975.jpg',
  'IMG_9832.jpg',
  'IMG_9836.jpg',
  'IMG_9837.jpg',
  'IMG_9838.jpg',
  'IMG_9839.jpg',
  'IMG_9840.jpg',
  'IMG_9841.jpg',
  'IMG_9842.jpg',
  'IMG_9950.jpg'
] as const;

/**
 * Get a random safari image
 */
export const getRandomSafariImage = (
  size: ImageSize = 'medium',
  format: ImageFormat = 'jpg'
): string => {
  const randomIndex = Math.floor(Math.random() * SAFARI_IMAGES.length);
  return getOptimizedImagePath(SAFARI_IMAGES[randomIndex], size, format);
};

/**
 * Get multiple random safari images
 */
export const getRandomSafariImages = (
  count: number, 
  size: ImageSize = 'medium',
  format: ImageFormat = 'jpg'
): string[] => {
  const shuffled = [...SAFARI_IMAGES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(img => getOptimizedImagePath(img, size, format));
};

/**
 * Generate srcSet for responsive images with WebP support
 */
export const generateSrcSet = (imageName: string, format: ImageFormat = 'jpg'): string => {
  if (format === 'webp') {
    const images = getOptimizedImageSetWithWebP(imageName);
    return `${images.thumbnailWebP} 300w, ${images.mediumWebP} 800w, ${images.largeWebP} 1400w`;
  }
  
  const images = getOptimizedImageSet(imageName);
  return `${images.thumbnail} 300w, ${images.medium} 800w, ${images.large} 1400w`;
};

/**
 * Generate modern picture element with WebP fallback
 */
export const generatePictureElement = (
  imageName: string,
  alt: string,
  sizes?: string
): string => {
  const webpSrcSet = generateSrcSet(imageName, 'webp');
  const jpgSrcSet = generateSrcSet(imageName, 'jpg');
  const defaultSrc = getOptimizedImagePath(imageName, 'medium', 'jpg');
  const sizesAttr = sizes || generateSizes();

  return `
    <picture>
      <source srcset="${webpSrcSet}" sizes="${sizesAttr}" type="image/webp">
      <source srcset="${jpgSrcSet}" sizes="${sizesAttr}" type="image/jpeg">
      <img src="${defaultSrc}" alt="${alt}" loading="lazy">
    </picture>
  `;
};

/**
 * Generate sizes attribute for responsive images
 */
export const generateSizes = (breakpoints?: string): string => {
  return breakpoints || '(max-width: 768px) 300px, (max-width: 1200px) 800px, 1400px';
};
