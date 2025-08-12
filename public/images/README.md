# Pipitsafaris Image Organization Guide

This folder contains all images for the Pipitsafaris website. Images are organized by category for easy management.

## 📁 Folder Structure

### `/safari/`
- Safari tour images
- Game drives
- Safari vehicles
- Camp setups
- **Recommended formats:** JPG, PNG
- **Recommended size:** 1920x1080 or higher

### `/wildlife/`
- Animals and wildlife photos
- Big Five (Lion, Elephant, Buffalo, Rhino, Leopard)
- Birds and other animals
- **Recommended formats:** JPG, PNG
- **Recommended size:** 1200x800 or higher

### `/hotels/`
- Accommodation photos
- Hotel exteriors and interiors
- Lodge facilities
- Room photos
- **Recommended formats:** JPG, PNG
- **Recommended size:** 1200x800 or higher

### `/destinations/`
- National parks
- Scenic landscapes
- Tourist attractions
- City views
- **Recommended formats:** JPG, PNG
- **Recommended size:** 1920x1080 or higher

### `/hero/`
- Main hero/banner images
- Homepage background images
- Large promotional images
- **Recommended formats:** JPG, PNG
- **Recommended size:** 1920x1080 or 2560x1440

### `/team/`
- Staff photos
- Guide photos
- Company team pictures
- **Recommended formats:** JPG, PNG
- **Recommended size:** 400x400 (square) or 300x400 (portrait)

### `/testimonials/`
- Customer photos
- Review images
- Client testimonial pictures
- **Recommended formats:** JPG, PNG
- **Recommended size:** 300x300 (square) recommended

## 🖼️ Image Usage in Code

To use images in your components, reference them like this:

```jsx
// For hero images
<img src="/images/hero/safari-sunset.jpg" alt="Safari sunset" />

// For wildlife
<img src="/images/wildlife/elephant-family.jpg" alt="Elephant family" />

// For hotels
<img src="/images/hotels/luxury-lodge.jpg" alt="Luxury safari lodge" />
```

## 📋 Image Guidelines

### File Naming
- Use descriptive, lowercase names
- Separate words with hyphens
- Examples: `serengeti-lions.jpg`, `kilimanjaro-view.jpg`, `luxury-tent-interior.jpg`

### Optimization
- Compress images for web use
- Keep file sizes under 500KB when possible
- Use WebP format for better compression (optional)

### Requirements
- All images should be high quality
- Ensure you have rights to use all images
- Include alt text for accessibility

## 🚀 Quick Start

1. Place your images in the appropriate folders
2. Use descriptive filenames
3. Update your components to use the new image paths
4. Test that images load correctly on your website

Happy organizing! 🦁📸
