import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import magicSphereVideo from '../assets/3d-liquid-magic-sphere.mp4';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);

    const lines = [
        "HI! I'M AHMED",
        "FLUTTER DEVELOPER",
        "FRONTEND ENGINEER"
    ];

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
            style={{
                minHeight: '500vh',
                background: 'var(--color-bg-primary)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Video - Loop */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 0, // Behind text
                    pointerEvents: 'none',
                    opacity: 0.6,
                }}
            >
                <video
                    ref={videoRef}
                    src={magicSphereVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                {/* Overlay gradient */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent, #000)',
                        opacity: 0.8
                    }}
                />
            </div>

            <div
                ref={textRef}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {lines.map((line, index) => (
                    <h1
                        key={index}
                        className="text-display"
                        style={{
                            textAlign: 'center',
                            marginBottom: index < lines.length - 1 ? '0' : '0',
                        }}
                    >
                        {renderLine(line, index)}
                    </h1>
                ))}

                {/* Simple scroll indicator */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                >
                    <span
                        className="text-small animate-pulse"
                        style={{ letterSpacing: '0.3em' }}
                    >
                        scroll to reveal
                    </span>
                    <div
                        style={{
                            width: '1px',
                            height: '60px',
                            background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
