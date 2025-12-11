# Ahmed Abdelhakeem Portfolio

A modern, high-performance portfolio website built with **React**, **Vite**, **Tailwind CSS v4**, and **GSAP**. The design features a sleek black-and-white aesthetic, continuous video backgrounds, and smooth scroll-triggered animations.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Key Features

### 🎥 Hero Section
- **Dynamic Background**: Continuous, looping 3D liquid sphere video (`3d-liquid-magic-sphere.mp4`).
- **Text Reveal**: Character-by-character text reveal animation ("HELLO! I'M AHMED ABDELHAKEEM") that fades from transparent to white on scroll.
- **Scroll Indicator**: Animated scroll prompt guiding users to explore further.

### 🎨 Clean & Modern Design
- **Theme**: Minimalist Black & White (Dark Mode default).
- **Typography**: Responsive typography using fluid `clamp()` values for perfect scaling on Mobile, Tablet, and Desktop.
- **Glassmorphism**: Subtle glass effects on the Navbar for a premium feel.

### 🏗️ Architecture
- **Clean Architecture**: separation of concerns.
- **`src/constants/index.js`**: Single source of truth for all static content (Nav Links, Hero Text, Project Data, Contact Info).
- **Component-Based**: Modular, reusable components (`Hero`, `Navbar`, `About`, `Projects`, `Footer`).

### 📱 Responsive Layout
- **Mobile First**: Fully optimized for small screens (iPhone SE+) up to large desktop monitors.
- **Adaptive Grid**: Projects and Footer layouts automatically adjust columns based on viewport size.

## 📂 Project Structure

```bash
src/
├── assets/          # Images, Videos, Fonts
├── components/      # UI Components (Hero, Navbar, Footer, etc.)
├── constants/       # Static Data (Clean Architecture)
│   └── index.js     # Centralized content file
├── index.css        # Global Styles & Tailwind @theme configuration
├── App.jsx          # Main Application Component
└── main.jsx         # Entry Point
```

## 🛠️ Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🔄 Recent Updates

- **Global Text Update**: Updated all references to "Ahmed Abdelhakeem".
- **Responsive Sizing**: Optimized Hero and Footer typography to handle longer names without breaking layout.
- **Refactoring**: Converted all inline styles to Tailwind CSS utility classes.
- **Data Extraction**: Moved all hardcoded text to `src/constants/index.js` for easy maintenance.

---

**Designed & Developed by Ahmed Abdelhakeem**
