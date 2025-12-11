import { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Works', href: '#works' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass' : ''
                }`}
            style={{
                padding: scrolled ? '16px 0' : '24px 0',
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a
                    href="#home"
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                    }}
                >
                    AHMED
                </a>

                {/* Desktop Navigation */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="link-underline"
                            style={{
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                fontWeight: 500,
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        padding: '8px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <span
                        style={{
                            width: '24px',
                            height: '2px',
                            background: 'var(--text-primary)',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                        }}
                    />
                    <span
                        style={{
                            width: '24px',
                            height: '2px',
                            background: 'var(--text-primary)',
                            transition: 'all 0.3s ease',
                            opacity: menuOpen ? 0 : 1,
                        }}
                    />
                    <span
                        style={{
                            width: '24px',
                            height: '2px',
                            background: 'var(--text-primary)',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                        }}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className="glass md:hidden"
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    padding: menuOpen ? '32px 0' : '0',
                    opacity: menuOpen ? 1 : 0,
                    visibility: menuOpen ? 'visible' : 'hidden',
                    transition: 'all 0.3s ease',
                    maxHeight: menuOpen ? '400px' : '0',
                    overflow: 'hidden',
                }}
            >
                <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 300,
                                letterSpacing: '0.1em',
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
