# My Portfolio 

This workspace now serves a React (Vite) rebuild of the original portfolio. The layout, styling, and interactions mirror the legacy HTML/CSS/JS version while running entirely on the client.

## Prerequisites

- Node.js 18 or newer

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

The local dev server starts on http://localhost:5173. Vite will hot-reload changes as you edit the source.

## Production Build

```bash
cd frontend
npm run build
npm run preview
```

`npm run build` outputs static assets under `frontend/dist`. `npm run preview` serves the production bundle locally for testing.

## Assets

Copy the images from the legacy `resources` folder into `frontend/public/resources` so the React app can load them:

```text
frontend/public/resources
 ├─ MyPic.png
 ├─ carParking.png
 ├─ carParking1.png
 ├─ chat4.png
 ├─ portfolio.png
 └─ pythogarus.jpg
```

If you prefer to keep the old static site for reference, it remains available at the repository root (`index.html`, `style.css`, `script.js`).
