import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const footerRef = useRef(null);
    const [localTime, setLocalTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setLocalTime(now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Africa/Cairo'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);

        const ctx = gsap.context(() => {
            gsap.from('.footer-grid > div', {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            });

            gsap.from('.footer-name', {
                scrollTrigger: {
                    trigger: '.footer-name',
                    start: 'top 95%',
                    toggleActions: 'play none none reverse',
                },
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
        }, footerRef);

        return () => {
            clearInterval(interval);
            ctx.revert();
        };
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Work', href: '#works' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const socials = [
        { name: 'Email', href: 'mailto:ahmedabdelhakem199@gmail.com' },
        { name: 'LinkedIn', href: 'https://linkedin.com' },
        { name: 'WhatsApp', href: 'https://wa.me/201104742253' },
        { name: 'GitHub', href: 'https://github.com' },
    ];

    return (
        <footer
            id="contact"
            ref={footerRef}
            style={{
                padding: '80px 0',
                background: 'var(--bg-primary)',
                borderTop: '1px solid var(--border-subtle)',
            }}
        >
            <div className="container">
                {/* Footer Grid */}
                <div
                    className="footer-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '48px',
                        marginBottom: '80px',
                    }}
                >
                    {/* Links */}
                    <div>
                        <h4 className="text-small" style={{ marginBottom: '24px' }}>Links</h4>
                        <ul style={{ listStyle: 'none' }}>
                            {links.map((link) => (
                                <li key={link.name} style={{ marginBottom: '16px' }}>
                                    <a
                                        href={link.href}
                                        className="link-underline"
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 300,
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-small" style={{ marginBottom: '24px' }}>Socials</h4>
                        <ul style={{ listStyle: 'none' }}>
                            {socials.map((social) => (
                                <li key={social.name} style={{ marginBottom: '16px' }}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-underline"
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 300,
                                        }}
                                    >
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Local Time */}
                    <div>
                        <h4 className="text-small" style={{ marginBottom: '24px' }}>Local Time</h4>
                        <p style={{ fontSize: '2rem', fontWeight: 300 }}>{localTime}</p>
                        <p className="text-small" style={{ marginTop: '8px' }}>Cairo, Egypt</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-small" style={{ marginBottom: '24px' }}>Get In Touch</h4>
                        <a
                            href="tel:+201104742253"
                            className="link-underline"
                            style={{
                                display: 'block',
                                fontSize: '1.125rem',
                                fontWeight: 300,
                                marginBottom: '12px',
                            }}
                        >
                            +20 110 474 2253
                        </a>
                        <a
                            href="mailto:ahmedabdelhakem199@gmail.com"
                            className="link-underline"
                            style={{
                                display: 'block',
                                fontSize: '1.125rem',
                                fontWeight: 300,
                            }}
                        >
                            ahmedabdelhakem199@gmail.com
                        </a>
                    </div>
                </div>

                {/* Version Row */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '60px',
                        flexWrap: 'wrap',
                        gap: '16px',
                    }}
                >
                    <span className="text-small">2025 © Edition</span>
                    <span className="text-small">Designed & Developed by Ahmed</span>
                </div>

                {/* Large Name */}
                <div
                    className="footer-name"
                    style={{
                        textAlign: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(4rem, 20vw, 18rem)',
                            fontWeight: 900,
                            lineHeight: 0.85,
                            letterSpacing: '-0.03em',
                            color: 'var(--bg-card)',
                            cursor: 'default',
                            userSelect: 'none',
                            transition: 'color 0.5s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--bg-card-hover)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--bg-card)'}
                    >
                        AHMED
                    </h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
