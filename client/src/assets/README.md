# Assets Ordner - Finewerk Saarlouis

## 📁 Struktur

```
assets/
├── images/
│   ├── gallery/         # Bilder für Produktgalerie
│   ├── products/        # Einzelne Produktbilder
│   └── hero/           # Hero-Section Bilder
├── icons/              # SVG-Icons und Favicons
├── fonts/              # Custom Fonts (falls benötigt)
└── videos/             # Video-Dateien für Hintergründe
```

## 🖼️ Bild-Verwendung in React

### Import von Bildern:
```javascript
// Einzelnes Bild importieren
import heroImage from '../assets/images/hero/kaffee-main.jpg';

// In Komponente verwenden
<img src={heroImage} alt="Finewerk Kaffee" />
```

### Dynamische Imports:
```javascript
// Für Bildergalerie
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Alle Galerie-Bilder laden
const galleryImages = importAll(
  require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/)
);
```

## 📂 Empfohlene Datei-Namen

### Hero-Section:
- `hero-main.jpg` - Hauptbild der Startseite
- `hero-coffee-shop.jpg` - Außenansicht des Kaffees
- `hero-interior.jpg` - Innenraum-Aufnahmen

### Produkte:
- `coffee-espresso.jpg`
- `coffee-cappuccino.jpg`
- `food-croissant.jpg`
- `ice-cream-vanilla.jpg`
- `drink-latte.jpg`

### Galerie:
- `gallery-1.jpg` bis `gallery-6.jpg`
- Oder beschreibende Namen wie `barista-work.jpg`

## 🎨 Optimierungs-Tipps

### Bildgrößen:
- **Hero-Bilder:** 1920x1080px (Full HD)
- **Produkt-Bilder:** 800x800px (quadratisch)
- **Galerie-Bilder:** 600x400px (3:2 Format)
- **Icons:** 64x64px (SVG bevorzugt)

### Dateiformate:
- **Fotos:** `.jpg` oder `.webp`
- **Grafiken:** `.png` oder `.svg`
- **Icons:** `.svg` (vektorbasiert)

## 🔧 Verwendung

Nach dem Hinzufügen von Bildern in die entsprechenden Ordner:

1. **Import** in deine React-Komponente
2. **Verwende** als `src` in `<img>` Tags
3. **Optimiere** für verschiedene Bildschirmgrößen

Beispiel:
```javascript
import heroImage from './assets/images/hero/hero-main.jpg';

function HomePage() {
  return (
    <div className="hero-section">
      <img src={heroImage} alt="Finewerk Kaffee" />
    </div>
  );
}
```