import { useState, useEffect, useRef } from 'react';

interface TypewriterTitleProps {
    text: string;
    className?: string;
    speed?: number; // ms per character
    delay?: number; // ms before starting
}

export default function TypewriterTitle({
    text,
    className = '',
    speed = 45,
    delay = 0,
}: TypewriterTitleProps) {
    const [displayed, setDisplayed] = useState('');
    const [started, setStarted] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const ref = useRef<HTMLHeadingElement>(null);

    // Trigger when element enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    observer.disconnect();
                    setTimeout(() => setStarted(true), delay);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    // Type characters one by one
    useEffect(() => {
        if (!started) return;
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(interval);
                // Hide cursor after done
                setTimeout(() => setShowCursor(false), 800);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <h2 ref={ref} className={className}>
            {displayed}
            {showCursor && (
                <span
                    className="inline-block w-[3px] h-[0.85em] bg-blue-500 ml-1 align-middle animate-pulse rounded-sm"
                    aria-hidden="true"
                />
            )}
        </h2>
    );
}
