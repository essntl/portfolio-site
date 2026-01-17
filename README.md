# Portfolio Site

A portfolio website built with React and TypeScript, using Vite as the build tool.  The site features animations powered by GSAP and WebGL effects using OGL.

## Tech Stack

This project uses React 19 with TypeScript for type safety.  Vite handles the development server and build process, providing fast refresh and optimized production builds.  The styling is done with Tailwind CSS 4.

For animations and visual effects, the site uses GSAP (GreenSock Animation Platform) along with its React wrapper, and OGL for WebGL-based 3D graphics. Icons come from Lucide React and React Icons.

## Project Structure

```
portfolio-site/
├── Project/
│   ���── src/              # Application source code
│   ├── public/           # Static assets
│   ├── index.html        # Main HTML entry point
│   ├── vite.config.ts    # Vite configuration
│   ├── tsconfig.json     # TypeScript configuration
│   ├── components.json   # Component configuration
│   ├── dockerfile        # Docker setup
│   └── package.json      # Project dependencies
```

## Getting Started

Navigate to the Project directory and install dependencies:

```bash
cd Project
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Main Libraries

- React 19.2.0 - UI framework
- TypeScript 5.9 - Type checking
- Vite 7.2 - Build tool and dev server
- Tailwind CSS 4.1 - Styling
- GSAP 3.14 - Animations
- OGL 1.0 - WebGL library
- Lucide React - Icon library

## Docker

The project includes a Dockerfile, since that's how I run it on my server :)
