# MyCuba Hosting - Minecraft Server Hosting Platform

A modern, Minecraft-themed landing page for MyCuba Hosting - a Discord-based Minecraft server hosting service.

## 🎮 Features

### Modern Design
- **Minecraft-themed UI** with pixelated textures and blocky elements
- **Smooth animations** using Framer Motion
- **Responsive design** that works on all devices
- **Glassmorphism effects** and modern gradients
- **Accessibility-focused** with proper contrast and navigation

### Key Sections
1. **Hero Section** - Animated introduction with call-to-action
2. **How It Works** - 8-step visual guide with Minecraft-themed icons
3. **Support & Flexibility** - Feature showcase with hover animations
4. **Recruitment** - Guild-style job board for community positions
5. **Footer** - Modern footer with Discord integration

### Technical Features
- ⚡ **Next.js 15** for optimal performance
- 🎨 **Tailwind CSS** for rapid styling
- 🎭 **Framer Motion** for smooth animations
- 📱 **Fully responsive** design
- 🚀 **Optimized for SEO** with proper meta tags
- 🎯 **Scroll-triggered animations** for engaging UX

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

## 🎨 Customization

### Discord Link
Update the Discord invite link in the following components:
- `components/Header.js`
- `components/HeroSection.js`
- `components/HowItWorksSection.js`
- `components/RecruitmentSection.js`
- `components/Footer.js`

Replace `https://discord.gg/your-invite-link` with your actual Discord invite.

### Colors & Theming
The Minecraft color scheme is defined in `tailwind.config.js`:
- `minecraft-grass`: #7CB342
- `minecraft-dirt`: #8D6E63
- `minecraft-stone`: #616161
- `minecraft-emerald`: #50C878
- `minecraft-diamond`: #B9F2FF
- `minecraft-gold`: #FFD700

### Content Updates
- **Hero Section**: Edit `components/HeroSection.js`
- **How It Works**: Modify the `steps` array in `components/HowItWorksSection.js`
- **Support Features**: Update the `features` array in `components/SupportSection.js`
- **Recruitment**: Modify the `positions` array in `components/RecruitmentSection.js`

## 📁 Project Structure

```
├── components/
│   ├── Header.js              # Navigation header
│   ├── Footer.js              # Site footer
│   ├── HeroSection.js         # Main landing section
│   ├── HowItWorksSection.js   # Process explanation
│   ├── SupportSection.js      # Features showcase
│   ├── RecruitmentSection.js  # Job postings
│   ├── LoadingSpinner.js      # Loading component
│   └── utils/
│       └── scrollUtils.js     # Scroll utilities
├── pages/
│   ├── _app.js               # App wrapper with animations
│   └── index.js              # Main page
├── styles/
│   └── globals.css           # Global styles with Tailwind
├── public/
│   ├── favicon.svg           # Minecraft-themed favicon
│   └── favicon.ico           # Fallback favicon
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── next.config.js            # Next.js configuration
```

## 🎯 Key Features Explained

### Minecraft Theme
- **Pixel-perfect borders** that mimic Minecraft's UI
- **Color scheme** inspired by in-game blocks and items
- **Typography** using monospace fonts for that retro feel
- **Icons** that represent Minecraft tools and concepts

### Discord Integration
- **Direct Discord links** throughout the site
- **Community-focused messaging** that emphasizes Discord support
- **Recruitment section** styled like a Minecraft guild board

### Performance Optimizations
- **Lazy loading** for all sections
- **Optimized animations** that don't impact performance
- **Responsive images** and proper caching
- **SEO optimization** with meta tags and structured data

## 🚀 Deployment

This project is optimized for deployment on:
- **Netlify** (configured with `netlify.toml`)
- **Vercel** (Next.js native support)
- **Any static hosting** via `npm run export`

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited animation support)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

See `LICENSE` file for details.

---

**Built with ❤️ for the Minecraft community**
