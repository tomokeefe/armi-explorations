# ARMI Homepage Explorations

Three homepage design concepts for ARMI (Advanced Regenerative Manufacturing Institute).

## Structure

```
armi-explorations/
├── index.html          # All three mockups in one page
├── css/
│   └── styles.css      # All styles (ARMI, Forge, Signal)
├── js/
│   └── main.js         # Light/dark toggle + animations
└── img/
    ├── agnos.jpg        # Agnos Therapeutics - retinal/eye imagery
    ├── summit.jpg       # BioFab Investment Summit - tissue scaffold
    ├── reimburse.jpg    # Reimbursement article - teal coin tower
    ├── neural.jpg       # ALS Cell Therapy - neural network
    ├── stella.jpg       # Dr. Stella Vnook - Likarda founder
    ├── lior.jpg         # Dr. Lior Shaltiel - NurExone founder
    └── luba.jpg         # Luba Perry - Reconstruct Bio founder
```

## Design Concepts

### 1. ARMI (Apple-style)
- Clean, rounded cards with full-bleed images and gradient overlays
- Teal (#2E5C4F) + terracotta (#C4563A) palette
- Plus Jakarta Sans + system fonts
- Default: light mode, toggle to dark

### 2. Millyard Forge (Editorial/Industrial)
- Sharp corners, editorial split layouts, copper accents
- Dark (#0E0C0A) + copper (#C4722A) palette
- Fraunces (serif) + Space Mono + Plus Jakarta Sans + DM Sans (metrics)
- Default: dark mode, toggle to light

### 3. Build Signal (Data Readout)
- Bordered monitor panels, desaturated images, status bars
- Monochrome + red signal (#D9534F) palette
- General Sans + Space Mono
- Default: light mode, toggle to dark

## Working With It

Open `index.html` in a browser — all three concepts render vertically.
Each has a light/dark toggle in its header nav bar.

### Fonts
Google Fonts loaded via CDN. Required families:
- Plus Jakarta Sans
- Fraunces
- Space Mono
- DM Sans
- General Sans (via CDN link in HTML)
- Satoshi (via CDN link in HTML)

### Images
All images are compressed JPEGs (640px max width, quality 70-75).
Referenced as relative paths from `index.html`.
