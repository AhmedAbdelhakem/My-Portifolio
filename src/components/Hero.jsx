import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import magicSphereVideo from '../assets/3d-liquid-magic-sphere.mp4';
import { HERO_TEXT } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const lines = HERO_TEXT.LINES;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Select all characters of each line
            const line1Chars = containerRef.current.querySelectorAll('.line-0 .char');
            const line2Chars = containerRef.current.querySelectorAll('.line-1 .char');
            const line3Chars = containerRef.current.querySelectorAll('.line-2 .char');

            // Initial state: Hidden
            gsap.set([line1Chars, line2Chars, line3Chars], { opacity: 0, y: 30 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    pin: contentRef.current,
                }
            });

            // Step 1: Reveal Line 1 Characters
            tl.to(line1Chars, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power2.out'
            });

            // Step 2: Reveal Line 2 Characters
            // Added delay to separate steps
            tl.to(line2Chars, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power2.out'
            }, "+=0.2");

            // Step 3: Reveal Line 3 Characters
            tl.to(line3Chars, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power2.out'
            }, "+=0.2");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const renderLine = (text, lineIndex) => {
        return text.split('').map((char, charIndex) => (
            <span
                key={`${lineIndex}-${charIndex}`}
                className="char inline-block"
                style={{
                    whiteSpace: char === ' ' ? 'pre-wrap' : 'normal',
                }}
            >
                {char}
            </span>
        ));
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-[350vh] overflow-hidden bg-[--color-bg-primary]"
        >
            {/* Background Video - Loop */}
            <div className="fixed top-0 left-0 z-0 h-screen w-screen pointer-events-none opacity-60">
                <video
                    src={magicSphereVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
            </div>

            <div
                ref={contentRef}
                className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4"
            >
                <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
                    {lines.map((line, index) => (
                        <h1
                            key={index}
                            className={`text-display m-0 line-${index} ${index === 0 ? 'mb-4' : ''}`}
                            style={{
                                fontSize: index === 0 ? 'clamp(1.5rem, 4vw, 3.5rem)' : 'clamp(1rem, 3vw, 2.5rem)',
                                color: index === 0 ? 'white' : 'var(--text-secondary)'
                            }}
                        >
                            {renderLine(line, index)}
                        </h1>
                    ))}
                </div>

                {/* Simple scroll indicator */}
                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
                    <span className="text-small animate-pulse tracking-[0.3em] opacity-70">
                        {HERO_TEXT.SCROLL_INDICATOR}
                    </span>
                    <div className="h-[60px] w-px bg-gradient-to-b from-[--color-text-muted] to-transparent" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
