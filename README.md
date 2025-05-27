# Jiji Ethiopia - Online Marketplace

A modern online marketplace built with Nuxt 3 and Tailwind CSS, allowing users to buy and sell items in Ethiopia.

## Features

- 🏠 Modern, responsive design
- 🔍 Advanced search functionality
- 📱 Mobile-first approach
- 🌓 Dark mode support
- 🌐 Multi-language support (Amharic/English)
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast and optimized performance

## Tech Stack

- [Nuxt 3](https://nuxt.com/) - The Vue.js Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jiji-ethiopia-app.git
   cd jiji-ethiopia-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
jiji-ethiopia/
│
├── assets/                      # Uncompiled assets (styles, images, fonts)
│   ├── images/                  # Static images
│   └── styles/                  # Tailwind custom styles, variables
│
├── components/                  # Reusable Vue components
│   ├── ui/                      # UI elements (buttons, inputs, modals)
│   ├── layout/                  # Layout parts (navbar, footer, sidebar)
│   ├── sections/                # Page sections (home, category)
│   └── shared/                  # Shared components (icons, tags, ratings)
│
├── layouts/                     # App-level layouts
│   └── default.vue              # Default layout with header/footer
│
├── pages/                       # Auto-routed pages
│   ├── index.vue                # Homepage
│   ├── category/                # Dynamic category pages
│   │   └── [slug].vue           # e.g., /category/electronics
│   ├── product/                 # Product detail pages
│   │   └── [id].vue             # e.g., /product/123
│   ├── contact.vue              # Contact page
│   ├── about.vue                # About page
│   └── faq.vue                  # FAQ page
│
├── public/                      # Public assets (favicon, robots.txt)
│
├── plugins/                     # Nuxt plugins (toast, swiper, etc.)
│
├── server/                      # API routes and server middleware
│
├── types/                       # TypeScript type definitions
│
├── constants/                   # App-wide constants (categories, config)
│
├── composables/                 # Reusable logic (fetch, auth, etc.)
│
├── middleware/                  # Navigation guards (auth, roles)
│
├── app.vue                      # Root Nuxt app component
├── nuxt.config.ts               # Nuxt configuration file
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Project metadata and dependencies
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Nuxt.js](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue.js](https://vuejs.org/)
- [Heroicons](https://heroicons.com/) 