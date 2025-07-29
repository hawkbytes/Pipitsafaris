# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Pipit Safaris - Premium African Safari Tours

![Pipit Safaris Banner](https://img.shields.io/badge/Pipit%20Safaris-African%20Adventures-orange?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)

## 🦁 Overview

Pipit Safaris is your gateway to unforgettable African adventures. We specialize in premium safari tours, wildlife photography expeditions, and authentic cultural experiences across the most spectacular landscapes of Africa. From the Big Five to breathtaking sunsets, we create memories that last a lifetime.

## ✨ Our Services

### � Big Five Safaris
- **Expert Guides**: Professional wildlife guides with decades of experience
- **Prime Locations**: Access to the best game reserves and national parks
- **Guaranteed Sightings**: Track lions, leopards, rhinoceros, elephants, and buffalo

### 🏕️ Luxury Safari Camps
- **Premium Accommodations**: World-class safari lodges and tented camps
- **Gourmet Dining**: Fresh, local cuisine prepared by expert chefs
- **Comfort in the Wild**: Modern amenities in stunning natural settings

### 🌅 Cultural Experiences
- **Local Communities**: Authentic interactions with indigenous tribes
- **Traditional Crafts**: Learn ancient skills and support local artisans
- **Cultural Heritage**: Discover the rich history and traditions of Africa

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Styled Components with Safari-themed design
- **Backend**: Node.js + Express (planned)
- **Database**: MongoDB for bookings and customer management (planned)
- **Payment**: Stripe integration for secure payments (planned)

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pipitsafaris-website.git
   cd pipitsafaris-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to see the application

## 🏗️ Project Structure

```
pipitsafaris-website/
├── public/                 # Static assets and safari images
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Tour pages, booking forms
│   ├── services/         # Booking API, payment processing
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json
└── README.md
```

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

Pipit Safaris website embraces the natural beauty of Africa with:
- **Earth tone gradients** representing African landscapes
- **Safari-inspired colors** (browns, oranges, greens, gold)
- **Wildlife icons** for visual storytelling
- **Responsive design** for mobile safari planning
- **Smooth animations** mimicking natural movements

## 🗺️ Safari Destinations

### Popular Parks & Reserves
- **Serengeti National Park** - The Great Migration
- **Maasai Mara** - Big Five territory
- **Ngorongoro Crater** - Natural wildlife amphitheater
- **Kruger National Park** - South Africa's flagship park
- **Chobe National Park** - Elephant capital of the world

## 🔮 Roadmap

### Phase 1 - Foundation (Current)
- [x] React + Vite setup with safari theme
- [x] Styled Components with African color palette
- [x] Responsive safari-themed design
- [x] Interactive booking counter

### Phase 2 - Booking System (Next)
- [ ] Tour package listings
- [ ] Online booking system
- [ ] Payment integration (Stripe)
- [ ] Customer management

### Phase 3 - Enhanced Features
- [ ] Photo gallery with wildlife images
- [ ] Interactive maps of safari routes
- [ ] Customer reviews and testimonials
- [ ] Blog with safari tips and stories

### Phase 4 - Advanced Features
- [ ] Virtual reality safari previews
- [ ] Live webcams from parks
- [ ] Mobile app for safari guides
- [ ] Multi-language support

## 🤝 Contributing

We welcome contributions to make Pipit Safaris even better! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-safari-feature`)
3. Commit your changes (`git commit -m 'Add amazing safari feature'`)
4. Push to the branch (`git push origin feature/amazing-safari-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌍 Contact

- **Website**: www.pipitsafaris.com
- **Email**: info@pipitsafaris.com
- **Phone**: +255 XXX XXX XXX
- **Address**: Arusha, Tanzania

## � Acknowledgments

- African wildlife conservation organizations
- Local communities and safari guides
- React team for the amazing framework
- Styled Components for beautiful styling
- The open-source community

---

**Made with ❤️ for African Wildlife Conservation**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
