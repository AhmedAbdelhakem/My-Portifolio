import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const sectionRef = useRef(null);
    const projectsRef = useRef([]);

    const projects = [
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.projects-header > *', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });

            projectsRef.current.forEach((project, index) => {
                if (project) {
                    gsap.from(project, {
                        scrollTrigger: {
                            trigger: project,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                        y: 80,
                        opacity: 0,
                        duration: 0.8,
                        delay: index * 0.08,
                        ease: 'power3.out',
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="works" ref={sectionRef} className="section">
            <div className="container">
                {/* Section Header */}
                <div className="projects-header" style={{ marginBottom: '80px' }}>
                    <h2 className="text-heading-xl" style={{ marginBottom: '16px' }}>
                        WORKS
                    </h2>
                    <p className="text-body" style={{ maxWidth: '500px' }}>
                        Explore my journey and the projects that define my craft.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectsRef.current[index] = el)}
                            className="card"
                            style={{
                                cursor: 'pointer',
                                padding: 0,
                                overflow: 'hidden',
                            }}
                        >
                            {/* Project Image/Emoji Area */}
                            <div
                                style={{
                                    aspectRatio: '4/3',
                                    background: 'linear-gradient(135deg, var(--bg-card-hover), var(--bg-card))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem',
                                    transition: 'transform 0.5s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {project.emoji}
                            </div>

                            {/* Project Info */}
                            <div style={{ padding: '24px' }}>
                                <h3
                                    style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        marginBottom: '8px',
                                        color: 'var(--text-primary)',
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="text-body"
                                    style={{
                                        fontSize: '0.875rem',
                                        marginBottom: '16px',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="tag"
                                            style={{ fontSize: '0.65rem', padding: '4px 10px' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <button className="btn btn-secondary">
                        View All Projects
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
