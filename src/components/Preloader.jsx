import { useRef } from 'react';
import gsap from 'gsap';
import welcomeVideo from '../assets/Welcome.webm';

function Preloader({ onComplete }) {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        // Fade out animation
        gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: onComplete
        });
    };

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <video
                ref={videoRef}
                src={welcomeVideo}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-80 h-80 object-cover"
            />
        </div>
    );
}

export default Preloader;
