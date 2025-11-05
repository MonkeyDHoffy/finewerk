// Asset Utility Functions für Finewerk

/**
 * Importiert alle Bilder aus einem bestimmten Ordner
 * @param {Function} requireContext - require.context() Funktion
 * @returns {Object} Objekt mit Bild-Namen als Keys und Import-Pfaden als Values
 */
export const importAllImages = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((item, index) => {
    const imageName = item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
    images[imageName] = requireContext(item);
  });
  return images;
};

/**
 * Lädt alle Galerie-Bilder
 * @returns {Object} Galerie-Bilder
 */
export const getGalleryImages = () => {
  try {
    return importAllImages(
      require.context('./images/gallery', false, /\.(png|jpe?g|svg)$/)
    );
  } catch (error) {
    console.warn('Keine Galerie-Bilder gefunden:', error);
    return {};
  }
};

/**
 * Lädt alle Produkt-Bilder
 * @returns {Object} Produkt-Bilder
 */
export const getProductImages = () => {
  try {
    return importAllImages(
      require.context('./images/products', false, /\.(png|jpe?g|svg)$/)
    );
  } catch (error) {
    console.warn('Keine Produkt-Bilder gefunden:', error);
    return {};
  }
};

/**
 * Generiert responsive Bild-Props
 * @param {string} src - Bild-Quelle
 * @param {string} alt - Alt-Text
 * @param {string} className - CSS-Klasse
 * @returns {Object} Props für img-Tag
 */
export const getResponsiveImageProps = (src, alt, className = '') => ({
  src,
  alt,
  className: `responsive-image ${className}`.trim(),
  loading: 'lazy',
  decoding: 'async',
});

/**
 * Placeholder-Bild Generator
 * @param {number} width - Breite
 * @param {number} height - Höhe
 * @param {string} text - Text im Placeholder
 * @returns {string} Data-URL für Placeholder
 */
export const generatePlaceholder = (width = 400, height = 300, text = 'Bild wird geladen...') => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = width;
  canvas.height = height;
  
  // Gradient Background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#F8F5F1');
  gradient.addColorStop(1, '#E0E0E0');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Text
  ctx.fillStyle = '#1F1F1F';
  ctx.font = '16px Poppins, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

// Beispiel-Nutzung:
/*
import { getGalleryImages, getResponsiveImageProps } from '../assets/utils';

const galleryImages = getGalleryImages();
const imageProps = getResponsiveImageProps(
  galleryImages['kaffee-1'], 
  'Frischer Espresso',
  'gallery-image'
);

<img {...imageProps} />
*/