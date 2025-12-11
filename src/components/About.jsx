import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const stats = [
        { number: '2+', label: 'Years of Experience' },
        { number: '6+', label: 'Projects Completed' },
    ];

    const services = [
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stat-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            });

            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                        y: 80,
                        opacity: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: 'power3.out',
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="section">
            <div className="container">
                {/* Stats Section */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '80px',
                        marginBottom: '120px',
                    }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item"
                            style={{ textAlign: 'center' }}
                        >
                            <div
                                className="text-heading-xl"
                                style={{ marginBottom: '8px' }}
                            >
                                {stat.number}
                            </div>
                            <div className="text-small">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="card"
                        >
                            <h3
                                className="text-heading-md"
                                style={{ marginBottom: '16px' }}
                            >
                                {service.title}
                            </h3>
                            <p
                                className="text-body"
                                style={{ marginBottom: '24px' }}
                            >
                                {service.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {service.skills.map((skill, i) => (
                                    <span key={i} className="tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
