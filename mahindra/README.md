# M5 Ecity Mall — 3D Website

Interactive 3D experience for **M5 Ecity Mall**, Electronics City's premier retail and lifestyle destination by M5 Mahendra Group.

## Features

- **3D mall model** — Explore a procedural 3D building with glass facades, signage, landscaping, and parking
- **Interactive zones** — Click hotspots or use zone buttons for Retail, Dining, Entertainment, and Services
- **Camera animations** — Smooth camera transitions when exploring each zone
- **Full mall content** — Highlights, amenities, reviews, and contact information from the official mall profile

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

Static files are output to `dist/`.

## Controls

- **Drag** — Rotate the 3D view
- **Scroll** — Zoom in/out
- **Click hotspots** — Focus on mall zones
- **Zone buttons** — Jump to Retail, Dining, Entertainment, or Services

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- [@react-three/drei](https://github.com/pmndrs/drei) for helpers and controls

## Reference

Original mall content sourced from [m5mahendragroup.com/m5-ecity](https://www.m5mahendragroup.com/m5-ecity). Legacy reference files are in `old-mahindra/`.
