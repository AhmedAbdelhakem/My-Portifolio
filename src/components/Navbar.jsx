import { useState, useEffect } from 'react';
import { NAV_LINKS, HERO_TEXT } from '../constants';

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

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'py-6'
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold tracking-[0.1em] text-[--text-primary] no-underline"
                >
                    {HERO_TEXT.NAME}
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="link-underline text-xs uppercase tracking-[0.15em] font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
                >
                    <span
                        className={`w-6 h-0.5 bg-[--text-primary] transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-[--text-primary] transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-[--text-primary] transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`glass md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'py-8 opacity-100 visible max-h-[400px]' : 'py-0 opacity-0 invisible max-h-0'
                    }`}
            >
                <div className="container flex flex-col gap-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl font-light tracking-[0.1em] text-[--text-secondary] no-underline transition-colors duration-300 hover:text-[--text-primary]"
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
