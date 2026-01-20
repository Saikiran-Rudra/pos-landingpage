# SyncServe POS Landing Page

A modern, high-converting landing page for **SyncServe POS** — a B2B SaaS Point of Sale system designed for the Indian food industry.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.5-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-0055FF?logo=framer&logoColor=white)

---

## ✨ Features

- **Responsive Design** — Fully mobile-first, adapts seamlessly to all screen sizes
- **Smooth Animations** — Powered by Framer Motion for engaging user experience
- **Modern UI** — Clean, professional design with Tailwind CSS styling
- **Contact Form** — Integrated Web3Forms for lead capture
- **Video Demo** — Embedded YouTube video showcase
- **Pricing Section** — Clear pricing tiers with feature comparison

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Utility-first Styling |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |

---

## 📁 Project Structure

```
POS LANDING/
├── public/
│   ├── favicon.svg
│   └── images/           # Product screenshots & assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroIllustration.jsx
│   │   ├── TrustSection.jsx
│   │   ├── Features.jsx
│   │   ├── ProductPreview.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── VideoDemo.jsx
│   │   ├── Pricing.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd POS-LANDING
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

---

## 📧 Contact Form Setup

The footer contact form uses [Web3Forms](https://web3forms.com/). To configure:

1. Sign up at Web3Forms
2. Get your access key
3. Update the access key in `Footer.jsx`

---

## 📄 License

This project is private and proprietary.

---

<p align="center">
  Made with ❤️ for <strong>SyncServe POS</strong>
</p>
