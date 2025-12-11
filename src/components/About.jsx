import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_STATS, SERVICES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const stats = ABOUT_STATS;
    const services = SERVICES;

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
                <div className="flex flex-wrap justify-center gap-20 mb-30">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item text-center">
                            <div className="text-heading-xl mb-2">
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
                            <h3 className="text-heading-md mb-4">
                                {service.title}
                            </h3>
                            <p className="text-body mb-6">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
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
