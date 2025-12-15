import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function Experience() {
    const sectionRef = useRef(null);
    const experienceRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.experience-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });

            experienceRef.current.forEach((exp, index) => {
                if (exp) {
                    gsap.from(exp, {
                        scrollTrigger: {
                            trigger: exp,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0,
                        duration: 1,
                        delay: 0.2,
                        ease: 'power3.out',
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="section bg-[--bg-secondary]">
            <div className="container">
                <div className="experience-header text-center mb-20">
                    <h2 className="text-heading-xl mb-4">EXPERIENCE</h2>
                    <p className="text-body max-w-[500px] mx-auto">
                        My professional journey and career highlights.
                    </p>
                </div>

                <div className="flex flex-col gap-10">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={index}
                            ref={(el) => (experienceRef.current[index] = el)}
                            className="card p-8 md:p-10 relative overflow-hidden group hover:border-[--accent] transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-[--text-primary] mb-2">{exp.role}</h3>
                                    {exp.link ? (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[--accent] font-medium text-lg hover:underline flex items-center gap-2"
                                        >
                                            {exp.company}
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    ) : (
                                        <p className="text-[--accent] font-medium text-lg">{exp.company}</p>
                                    )}
                                </div>
                                <span className="inline-block px-4 py-1.5 rounded-full border border-[--border-light] text-sm text-[--text-secondary] mt-4 md:mt-0">
                                    {exp.duration}
                                </span>
                            </div>

                            <p className="text-body mb-8 max-w-3xl">
                                {exp.description}
                            </p>

                            {exp.achievements && (
                                <ul className="list-disc list-inside space-y-2 mb-8 text-[--text-secondary]">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[--accent] opacity-[0.03] rounded-bl-full pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
