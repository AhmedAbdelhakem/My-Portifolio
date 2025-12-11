import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import magicSphereVideo from '../assets/3d-liquid-magic-sphere.mp4';
import { HERO_TEXT } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);

    const lines = HERO_TEXT.LINES;

    useEffect(() => {
        const allChars = textRef.current.querySelectorAll('.char');

        const ctx = gsap.context(() => {
            // Initial text state: Transparent white
            gsap.set(allChars, {
                color: 'rgba(255, 255, 255, 0)',
                textShadow: 'none'
            });

            // Text Reveal Animation aligned with scroll
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1, // Smooth scrolling effect
                pin: textRef.current, // Pin the text while animating
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalChars = allChars.length;

                    // Animate each character based on scroll progress
                    allChars.forEach((char, index) => {
                        const charStart = index / totalChars;
                        const charEnd = (index + 1) / totalChars;

                        let charProgress = 0;
                        if (progress >= charEnd) {
                            charProgress = 1;
                        } else if (progress > charStart) {
                            charProgress = (progress - charStart) / (charEnd - charStart);
                            charProgress = charProgress * charProgress * charProgress;
                        }

                        // Interpolate alpha from 0 to 1 (transparent to white)
                        gsap.set(char, {
                            color: `rgba(255, 255, 255, ${charProgress})`,
                            textShadow: charProgress > 0.5
                                ? `0 0 ${charProgress * 30}px rgba(255, 255, 255, ${charProgress * 0.2})`
                                : 'none',
                        });
                    });
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const renderLine = (text, lineIndex) => {
        return text.split('').map((char, charIndex) => (
            <span
                key={`${lineIndex}-${charIndex}`}
                className="char"
                style={{
                    display: 'inline-block',
                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-[500vh] overflow-hidden bg-[--color-bg-primary]"
        >
            {/* Background Video - Loop */}
            <div className="fixed top-0 left-0 z-0 h-screen w-screen pointer-events-none opacity-60">
                <video
                    ref={videoRef}
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
                ref={textRef}
                className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center"
            >
                {lines.map((line, index) => (
                    <h1
                        key={index}
                        className="text-display text-center m-0"
                    >
                        {renderLine(line, index)}
                    </h1>
                ))}

                {/* Simple scroll indicator */}
                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
                    <span className="text-small animate-pulse tracking-[0.3em]">
                        {HERO_TEXT.SCROLL_INDICATOR}
                    </span>
                    <div className="h-[60px] w-px bg-gradient-to-b from-[--color-text-muted] to-transparent" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
