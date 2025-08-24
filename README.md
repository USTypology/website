# USTypology Website

A barebones GitHub Pages website built with TypeScript and Vite that showcases MBTI type icons.

## Features

- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **GitHub Pages Ready**: Static build output optimized for GitHub Pages
- **Responsive Design**: Mobile-friendly MBTI type gallery

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── main.ts          # TypeScript entry point
│   ├── styles.css       # Stylesheet
│   └── index.html       # HTML template (for reference)
├── assets/
│   └── mbti/svg/        # MBTI type SVG icons
├── index.html           # Main HTML file
├── dist/                # Build output (GitHub Pages ready)
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## GitHub Pages Deployment

The `dist/` directory contains the built static files ready for GitHub Pages deployment. The build process:

1. Compiles TypeScript to JavaScript
2. Bundles and minifies CSS and JavaScript
3. Copies static assets (SVG icons)
4. Generates optimized HTML with proper asset references

## MBTI Type Gallery

Displays all 16 MBTI types with:
- Male and female icon variants
- Temperament color coding (NT, NF, SJ, SP)
- Interactive hover effects
- Responsive grid layout