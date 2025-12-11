// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
];

// Hero Section
export const HERO_TEXT = {
    NAME: "AHMED ABDELHAKEEM",
    LINES: [
        "HELLO! I'M AHMED ABDELHAKEEM",
        "FLUTTER DEVELOPER",
        "FRONTEND ENGINEER"
    ],
    SCROLL_INDICATOR: "scroll to reveal"
};

// About Section
export const ABOUT_STATS = [
    { number: '2+', label: 'Years of Experience' },
    { number: '6+', label: 'Projects Completed' },
];

export const SERVICES = [
    {
        title: 'Mobile Development',
        description: 'Building beautiful cross-platform mobile applications using Flutter and Dart, with Firebase integration for scalable backend solutions.',
        skills: ['Flutter', 'Dart', 'Firebase', 'Cross-platform'],
    },
    {
        title: 'Frontend Development',
        description: 'Creating responsive, modern web interfaces with clean code practices. Specializing in animations and interactive user experiences.',
        skills: ['JavaScript', 'Tailwind CSS', 'GSAP', 'HTML/CSS'],
    },
    {
        title: 'API & Backend',
        description: 'Developing RESTful APIs and backend architectures with focus on performance optimization and secure data handling.',
        skills: ['RESTful APIs', 'Python', 'Caching', 'Performance'],
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive user interfaces with attention to detail. Creating smooth animations and micro-interactions for enhanced UX.',
        skills: ['Figma', 'UI Design', 'Animations', 'Prototyping'],
    },
];

// Projects Section
// Note: You can replace the emoji with actual image paths if available
export const PROJECTS = [
    {
        title: 'Articles App',
        description: 'Flutter-based news application with clean architecture and modern UI design.',
        tags: ['Flutter', 'Dart', 'API'],
        emoji: '📰',
    },
    {
        title: 'Instagram Clone',
        description: 'Full-featured social media app with authentication, posts, and real-time updates.',
        tags: ['Flutter', 'Firebase', 'Auth'],
        emoji: '📷',
    },
    {
        title: 'Shopping API',
        description: 'RESTful API for e-commerce with product management and order processing.',
        tags: ['Flutter', 'REST API', 'E-commerce'],
        emoji: '🛒',
    },
    {
        title: 'Video Call Integration',
        description: 'Real-time video calling functionality using Flutter and WebRTC technology.',
        tags: ['Flutter', 'WebRTC', 'Real-time'],
        emoji: '📹',
    },
    {
        title: 'Liquid Glass UI',
        description: 'Modern glassmorphism UI components with smooth animations and effects.',
        tags: ['Flutter', 'UI/UX', 'Animations'],
        emoji: '✨',
    },
];

// Contact / Footer Section
export const CONTACT_INFO = {
    EMAIL: 'ahmedabdelhakem199@gmail.com',
    PHONE: '+20 110 474 2253',
    PHONE_DISPLAY: '+20 110 474 2253',
    LOCATION: 'Cairo, Egypt',
    COPYRIGHT: '2025 © Edition',
    DESIGNER: 'Designed & Developed by Ahmed Abdelhakeem',
};

export const SOCIAL_LINKS = [
    { name: 'Email', href: `mailto:${CONTACT_INFO.EMAIL}` },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'WhatsApp', href: 'https://wa.me/201104742253' },
    { name: 'GitHub', href: 'https://github.com' },
];
