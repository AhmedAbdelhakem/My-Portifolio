// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

// Hero Section
export const HERO_TEXT = {
    NAME: "AHMED ABDELHAKEEM",
    LINES: [
        "HELLO! I'M AHMED ABDELHAKEEM",
        "FLUTTER DEVELOPER &",
        "FRONTEND DEVELOPER"
    ],
    SCROLL_INDICATOR: "scroll to reveal"
};

// About Section
export const ABOUT_STATS = [
    { number: '2+', label: 'Years of Experience' },
    { number: '10+', label: 'Projects Completed' },
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
        title: 'Backend & Database',
        description: 'Developing RESTful APIs, optimizing database performance, and ensuring secure data handling with modern backend technologies.',
        skills: ['RESTful APIs', 'Firebase', 'PostgreSQL', 'Performance'],
    },
    {
        title: 'UI/UX Design',
        description: 'Designing intuitive user interfaces with attention to detail. Creating smooth animations and micro-interactions for enhanced UX.',
        skills: ['Figma', 'UI Design', 'Animations', 'Prototyping'],
    },
];

export const EXPERIENCES = [
    {
        role: "Flutter & Frontend Developer",
        company: "INSITE OOH / OUTSITE Billboards",
        duration: "Mar 2023 – Present",
        description: "Leading the development of scalable mobile and web applications for the digital and out-of-home landscape. Built custom 2D/3D map inventory systems and maintained RESTful API architectures.",
        link: "https://outsiteooh.com/",
        skills: ["Flutter", "React", "WordPress", "3D/2D Maps", "REST API", "Tailwind CSS", "Firebase", "Agile"],
        achievements: [
            "Developed responsive website with custom 3D/2D map inventory system",
            "Built and maintained RESTful API backend to enhance scalability",
            "Created reusable components using Business logic and Tailwind CSS",
            "Optimized UI/UX for better user engagement and conversion"
        ]
    }
];

// Projects Section
// Note: You can replace the emoji with actual image paths if available
export const PROJECTS = [
    {
        title: 'Articles-App',
        description: 'Welcome to the documentation for Articles-App! This site will help you understand, install, use, and contribute to the Articles-App project.',
        tags: ['Dart', 'Objective-C', 'Java'],
        emoji: '📰',
        link: 'https://github.com/AhmedAbdelhakem/Articles-App'
    },
    {
        title: 'instegram-firebase',
        description: 'A Flutter application template that integrates with Firebase to provide core social media features similar to Instagram.',
        tags: ['Dart', 'Firebase', 'Flutter'],
        emoji: '📷',
        link: 'https://github.com/AhmedAbdelhakem/instegam-firebase'
    },
    {
        title: 'shopping-API',
        description: 'A robust backend API for shopping applications, built with modern best practices.',
        tags: ['Dart', 'API', 'Backend'],
        emoji: '🛒',
        link: 'https://github.com/AhmedAbdelhakem/shopping-API'
    },
    {
        title: 'TEC-TAC-TOE',
        description: 'A simple and interactive Tic-Tac-Toe game application built to demonstrate core programming concepts and user interface design.',
        tags: ['Dart', 'Game', 'Flutter'],
        emoji: '🎲',
        link: 'https://github.com/AhmedAbdelhakem/TEC-TAC-TOE'
    },
    {
        title: 'Videocall-Integration-app',
        description: 'A Flutter application for seamless video call integration, demonstrating how to add real-time video communication features.',
        tags: ['Flutter', 'Video', 'Real-time'],
        emoji: '📹',
        link: 'https://github.com/AhmedAbdelhakem/Videocall-Integration-app'
    },
    {
        title: 'Liquid-Glass-UI',
        description: 'A visually stunning Flutter UI demo project featuring modern glassmorphism and liquid-style design elements.',
        tags: ['UI/UX', 'Glassmorphism'],
        emoji: '✨',
        link: 'https://github.com/AhmedAbdelhakem/Liquid-Glass-UI'
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
