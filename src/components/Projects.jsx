import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const sectionRef = useRef(null);
    const projectsRef = useRef([]);
    const projects = PROJECTS;

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
                <div className="projects-header mb-20 flex flex-col items-center justify-center">
                    <h2 className="text-heading-xl mb-4">
                        WORKS
                    </h2>
                    <p className="text-body max-w-[500px]">
                        Explore my journey and the projects that define my craft.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid-3">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={(el) => (projectsRef.current[index] = el)}
                            className="card p-0 overflow-hidden block"
                        >
                            {/* Project Image/Emoji Area */}
                            <div
                                className="aspect-[4/3] flex items-center justify-center text-[4rem] bg-gradient-to-br from-[--bg-card-hover] to-[--bg-card] transition-transform duration-500 ease-out hover:scale-105"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {project.emoji}
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-[--text-primary]">
                                    {project.title}
                                </h3>
                                <p className="text-body text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="tag text-[0.65rem] px-2.5 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-15 text-center">
                    <a href='https://github.com/AhmedAbdelhakem?tab=repositories' target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        View All Projects
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
