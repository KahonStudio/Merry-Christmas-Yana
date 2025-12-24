# Merry Christmas Yana! 🎄

A quirky and fun Christmas website built with React + Vite, featuring floating sticker animations and a special message.

## Features

- **Hero Landing Section**: Beautiful animated landing page with snowflakes
- **Message Section**: Special Christmas message in an elegant card
- **Floating Stickers**: Cartoon character stickers floating on the sides with smooth animations
- **Interactive Elements**: Click on stickers for fun burst animations
- **Responsive Design**: Works perfectly on all devices
- **Easy Sticker Management**: Simply add images to the `public/stickers` folder

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Adding Your Own Sticker Images

1. Place your sticker images in the `public/stickers/` folder
2. Name them: `sticker-1.png`, `sticker-2.png`, etc. (or update the component)
3. Update `src/components/FloatingStickers.jsx` to use images instead of emojis:

```jsx
// Replace the emoji span with:
<img src={`/stickers/sticker-${sticker.id}.png`} alt="Sticker" />
```

## Customization

### Message Content

Edit `src/components/MessageSection.jsx` to personalize your message.

### Sticker Positions

Modify the `STICKERS` array in `src/components/FloatingStickers.jsx` to adjust positions, delays, and add/remove stickers.

### Colors & Styling

Update the CSS files in the `src/components/` folder to change colors, fonts, and animations.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploying to GitHub Pages

### Automatic Deployment (Recommended)

1. Update the `base` path in `vite.config.js` to match your repository name
2. Push to the `main` branch
3. GitHub Actions will automatically build and deploy to GitHub Pages

### Manual Deployment

1. Build the project: `npm run build`
2. Update `vite.config.js` with your repository name as the base path
3. Follow GitHub Pages deployment instructions

## Project Structure

```
├── public/
│   └── stickers/          # Place your sticker images here
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── MessageSection.jsx
│   │   └── FloatingStickers.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

---

Made with ❤️ for Christmas 2024
