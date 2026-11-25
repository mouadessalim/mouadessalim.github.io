<div align="center">

### _Medical Student & Full-Stack Software Developer_

[![Live Site](https://img.shields.io/badge/LIVE%20SITE-mouadessalim.github.io-059669?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mouadessalim.github.io)
[![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br />

<p align="center">
  <b>Personal portfolio of Mouad Essalim — medical student and self-taught web developer.</b>
</p>

---

</div>

## Overview

Static-first personal site built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4. Styled around a structured clinical chart (`ME-2026-08`) with an interactive 11-stage stack timeline, background notes, archived open-source repositories, and structured JSON-LD metadata.

---

## ✨ Key Architectural Features

- **⚡ Modern Stack Foundation**: Built on Next.js 16 (App Router), React 19, and Tailwind CSS v4 with full static output optimization.
- **🩺 Clinical Design System**: Custom medical case-file visual language, monospaced indices (`PRJ-01`, `BG-01`, `BG-02`), live ECG pulse indicators, and responsive grid layouts.
- **🧭 Interactive Roadmap**: Interactive milestone timeline charting 11 evolutionary stages from Bash Snake to full-stack production systems.
- **🔍 Comprehensive SEO & GEO**:
  - Semantic Schema.org `Person` & `WebSite` JSON-LD structured graph data.
  - Dynamically generated `sitemap.xml`, `robots.txt`, and web app `manifest.json`.
  - Rich OpenGraph & Twitter metadata cards with pre-configured viewport themes.
- **♿ Precision Accessibility & Performance**: Semantic HTML5 landmark structure, high-contrast dark/light OKLCH color palettes, and sub-second paint times.

---

## 🧰 Tech Stack & Tools

<table>
  <tr>
    <td width="25%" valign="top"><b>Core Framework</b></td>
    <td width="75%">
      <img src="https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
      <img src="https://img.shields.io/badge/React%2019-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/TypeScript%205.7-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td width="25%" valign="top"><b>Styling & Aesthetics</b></td>
    <td width="75%">
      <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
      <img src="https://img.shields.io/badge/PostCSS%208-DD3A0A?style=flat-square&logo=postcss&logoColor=white" />
      <img src="https://img.shields.io/badge/Lucide%20Icons-F56565?style=flat-square&logo=lucide&logoColor=white" />
      <img src="https://img.shields.io/badge/OKLCH%20Color%20Spaces-7C3AED?style=flat-square" />
    </td>
  </tr>
  <tr>
    <td width="25%" valign="top"><b>Typography</b></td>
    <td width="75%">
      <code>Manrope</code> (Editorial Display) & <code>Geist Mono</code> (Diagnostic Telemetry) via <code>next/font</code>
    </td>
  </tr>
  <tr>
    <td width="25%" valign="top"><b>Deployment</b></td>
    <td width="75%">
      <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" />
      <img src="https://img.shields.io/badge/Static%20Export-059669?style=flat-square&logo=vercel&logoColor=white" />
    </td>
  </tr>
</table>

---

## 📁 Repository Structure

```tree
my-portfolio/
├── 📂 app/                    # Next.js App Router root
│   ├── 📂 components/         # Modular React UI components
│   │   ├── ui/               # Shared atomic primitives (Badge, Container, Heading)
│   │   ├── header.tsx        # Sticky clinical header & telemetry
│   │   ├── hero-section.tsx  # Case file hero & subject identity
│   │   ├── practice-section.tsx # Philosophy & medical perspective
│   │   ├── roadmap-section.tsx # Interactive journey & milestone chart
│   │   ├── projects-section.tsx # Curated case records & source links
│   │   ├── observation-section.tsx # Clinical diagnostic notes
│   │   └── footer.tsx        # Case closure & communication channels
│   ├── 📂 lib/                # Data models & portfolio definitions
│   │   └── portfolio.ts      # Structured project, practice, & journey records
│   ├── globals.css           # Global tokens, OKLCH palette, animations
│   ├── layout.tsx            # Root layout, Google Fonts, JSON-LD Schema
│   ├── page.tsx              # Main portfolio page entry
│   ├── manifest.ts           # Web app manifest generator
│   ├── robots.ts             # SEO robots.txt generator
│   └── sitemap.ts            # Dynamic sitemap generator
├── 📂 public/                 # Static assets, favicons, OG images
├── package.json              # Dependencies and deployment scripts
├── postcss.config.mjs        # PostCSS pipeline for Tailwind v4
└── tsconfig.json             # Strict TypeScript configuration
```

---

## ⚡ Development & Build

### Prerequisites

- Node.js `20.x` or higher
- npm / yarn / pnpm

### 1. Clone & Install

```bash
git clone https://github.com/mouadessalim/mouadessalim.github.io.git
cd mouadessalim.github.io
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export

```bash
npm run build
```

Generates a static production bundle in the `./out` directory ready for any CDN or static host.
