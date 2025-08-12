import React from 'react';
import { 
  getOptimizedImagePath, 
  generateSrcSet, 
  generateSizes, 
  getRandomSafariImages,
  getOptimizedImageSetWithWebP
} from '../utils/imageUtils';

/**
 * Example components showing how to use optimized safari images with WebP support
 */

// Example 1: Simple optimized image with format choice
export const OptimizedSafariImage: React.FC<{
  imageName: string;
  alt: string;
  size?: 'thumbnail' | 'medium' | 'large';
  format?: 'jpg' | 'webp';
}> = ({ imageName, alt, size = 'medium', format = 'webp' }) => (
  <img 
    src={getOptimizedImagePath(imageName, size, format)}
    alt={alt}
    loading="lazy"
  />
);

// Example 2: Modern picture element with WebP fallback (RECOMMENDED)
export const ModernSafariImage: React.FC<{
  imageName: string;
  alt: string;
  sizes?: string;
}> = ({ imageName, alt, sizes }) => {
  const sizesAttr = sizes || generateSizes();

  return (
    <picture>
      <source 
        srcSet={generateSrcSet(imageName, 'webp')} 
        sizes={sizesAttr} 
        type="image/webp" 
      />
      <source 
        srcSet={generateSrcSet(imageName, 'jpg')} 
        sizes={sizesAttr} 
        type="image/jpeg" 
      />
      <img
        src={getOptimizedImagePath(imageName, 'medium', 'jpg')}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
};

// Example 3: Background image with WebP support
export const SafariBackgroundCard: React.FC<{
  imageName: string;
  children: React.ReactNode;
  size?: 'medium' | 'large';
  useWebP?: boolean;
}> = ({ imageName, children, size = 'large', useWebP = true }) => {
  const format = useWebP ? 'webp' : 'jpg';
  const backgroundImage = `url(${getOptimizedImagePath(imageName, size, format)})`;
  
  return (
    <div
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  );
};

// Example 4: Trip gallery with WebP images
export const SafariGallery: React.FC<{ 
  count?: number;
  useWebP?: boolean;
}> = ({ count = 6, useWebP = true }) => {
  const format = useWebP ? 'webp' : 'jpg';
  const images = getRandomSafariImages(count, 'medium', format);
  
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '1rem' 
    }}>
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc}
          alt={`Safari experience ${index + 1}`}
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover', 
            borderRadius: '8px' 
          }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

// Example 5: Performance comparison component
export const ImageFormatComparison: React.FC<{
  imageName: string;
}> = ({ imageName }) => {
  const images = getOptimizedImageSetWithWebP(imageName);
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div>
        <h3>WebP Format (Recommended)</h3>
        <p>60% smaller file sizes, modern browser support</p>
        <img 
          src={images.mediumWebP} 
          alt="WebP format example"
          style={{ width: '100%', borderRadius: '8px' }}
          loading="lazy"
        />
        <small>File size: ~99KB</small>
      </div>
      <div>
        <h3>JPG Format (Fallback)</h3>
        <p>Universal compatibility, larger file sizes</p>
        <img 
          src={images.medium} 
          alt="JPG format example"
          style={{ width: '100%', borderRadius: '8px' }}
          loading="lazy"
        />
        <small>File size: ~200KB</small>
      </div>
    </div>
  );
};

// Example usage in your existing components:
/*
// RECOMMENDED: Modern picture element with WebP fallback
<ModernSafariImage 
  imageName="IMG_1364.jpg" 
  alt="Tanzania Safari Adventure" 
/>

// Background with WebP support (36% smaller files!)
<SafariBackgroundCard 
  imageName="IMG_1364.jpg" 
  size="large"
  useWebP={true}
>
  <div className="trip-content">
    <h3>Amazing Safari Experience</h3>
    <p>Discover the wildlife of Tanzania</p>
  </div>
</SafariBackgroundCard>

// WebP thumbnails for mobile performance
<OptimizedSafariImage 
  imageName="IMG_9832.jpg" 
  alt="Safari preview"
  size="thumbnail"
  format="webp"  // 60% smaller than JPG!
/>

// Gallery with WebP images
<SafariGallery count={6} useWebP={true} />
*/
