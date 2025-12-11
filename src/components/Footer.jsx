import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO, HERO_TEXT } from '../constants';

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

    const links = NAV_LINKS;
    const socials = SOCIAL_LINKS;

    return (
        <footer
            id="contact"
            ref={footerRef}
            className="py-20 bg-[--bg-primary]"
        >
            <div className="container">
                {/* Footer Grid */}
                <div className="footer-grid grid gap-12 mb-20 md:grid-cols-2 lg:grid-cols-4">
                    {/* Links */}
                    <div>
                        <h4 className="text-small mb-6">Links</h4>
                        <ul className="list-none">
                            {links.map((link) => (
                                <li key={link.name} className="mb-4">
                                    <a
                                        href={link.href}
                                        className="link-underline text-xl md:text-2xl font-light"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-small mb-6">Socials</h4>
                        <ul className="list-none">
                            {socials.map((social) => (
                                <li key={social.name} className="mb-4">
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-underline text-xl md:text-2xl font-light"
                                    >
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Local Time */}
                    <div>
                        <h4 className="text-small mb-6">Local Time</h4>
                        <p className="text-2xl md:text-4xl font-light">{localTime}</p>
                        <p className="text-small mt-2">Cairo, Egypt</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-small mb-6">Get In Touch</h4>
                        <a
                            href={`tel:${CONTACT_INFO.PHONE.replace(/\s/g, '')}`}
                            className="link-underline block text-lg font-light mb-3"
                        >
                            {CONTACT_INFO.PHONE_DISPLAY}
                        </a>
                        <a
                            href={`mailto:${CONTACT_INFO.EMAIL}`}
                            className="link-underline block text-lg font-light"
                        >
                            {CONTACT_INFO.EMAIL}
                        </a>
                    </div>
                </div>

                {/* Version Row */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-16">
                    <span className="text-small">{CONTACT_INFO.COPYRIGHT}</span>
                    <span className="text-small">{CONTACT_INFO.DESIGNER}</span>
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
                        className="text-mega text-[--bg-card] cursor-default select-none transition-colors duration-500"
                        onMouseEnter={(e) => e.target.style.color = 'var(--bg-card-hover)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--bg-card)'}
                    >
                        {HERO_TEXT.NAME}
                    </h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
