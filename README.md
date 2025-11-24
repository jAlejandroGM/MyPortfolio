# 👨‍💻 Alejandro Guzmán — Personal Portfolio

A static portfolio website built with Astro 5, designed to showcase projects, technical skills, experience, and contact information. Fast, accessible, and easy to deploy.

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/) [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) ![Status](https://img.shields.io/badge/Status-Live-green?style=flat-square)

## 🔗 Live Site

[Visit the site](https://alguzdev.vercel.app/)

<!-- ==================== FEATURES SECTION ==================== -->

## Features

- **Bilingual Support** — Full internationalization (i18n) in Spanish and English
- **Responsive Design** — Mobile-first approach, fully optimized for all screen sizes
- **Dark/Light Theme** — Theme toggle with persistent localStorage
- **Dynamic Content** — Project cards loaded from content collections with markdown support
- **SEO Optimized** — Semantic HTML5 with proper meta tags and structure
- **Performance** — Static site generation with Astro for fast load times
- **Accessibility** — WCAG 2.1 compliant with ARIA labels and keyboard navigation
- **Interactive Elements** — QR code for WhatsApp, social media integration, CV download
- **Tech Stack Display** — Visual representation of technologies with custom SVG icons

<!-- ==================== TECH STACK SECTION ==================== -->

## Tech Stack

- **Astro 5** — Static site generator with content collections
- **Tailwind CSS 4** — Utility-first CSS framework
- **TypeScript** — Type-safe JavaScript for scripts and configuration
- **HTML5 / CSS3** — Semantic markup and modern styling
- **Vercel** — Deployment platform

<!-- ==================== PROJECT STRUCTURE SECTION ==================== -->

## Project Structure

```text
alguz.dev/
├── public/              # Static assets (images, QR code)
├── src/
│   ├── assets/          # Optimized images
│   ├── components/      # Astro components (sections & UI)
│   ├── content/         # Content collections (projects in en/es)
│   ├── i18n/            # Translation files (en.ts, es.ts)
│   ├── icons/           # SVG icon components
│   ├── layouts/         # Base layout with SEO
│   ├── pages/           # Routes (index & i18n pages)
│   ├── scripts/         # Client-side scripts
│   ├── styles/          # Global CSS
│   └── types/           # TypeScript definitions
├── astro.config.mjs     # Astro configuration
└── package.json         # Dependencies and scripts
```

<!-- ==================== GETTING STARTED SECTION ==================== -->

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jAlejandroGM/alguz.dev.git
cd alguz.dev
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Generate a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

<!-- ==================== LICENSE SECTION ==================== -->

## Usage

Feel free to fork this project and use it as a template for your own portfolio. If you do, a link back to this repository would be appreciated!

<!-- ==================== AUTHOR SECTION ==================== -->

## Author

Developed and designed with ☕ by **José Alejandro Guzmán Mendoza**  
📫 [GitHub](https://github.com/jAlejandroGM) | [LinkedIn](https://www.linkedin.com/in/josealejandrogm/)

---

_Personal portfolio showcasing web development projects and technical skills._
