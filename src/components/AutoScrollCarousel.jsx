import React, { useRef, useEffect } from 'react';

const AutoScrollCarousel = ({ children, speed = 0.5 }) => {
    const ref = useRef(null);
    const animRef = useRef(null);
    const pausedRef = useRef(false);
    const resumeTimer = useRef(null);

    const resumeAfterDelay = () => {
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => {
            pausedRef.current = false;
        }, 2000);
    };

    const handleUserInteraction = () => {
        pausedRef.current = true;
        resumeAfterDelay();
    };

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const tick = () => {
            if (!pausedRef.current) {
                el.scrollLeft += speed;
                // Loop back to start seamlessly when reaching the end
                if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
                    el.scrollLeft = 0;
                }
            }
            animRef.current = requestAnimationFrame(tick);
        };

        animRef.current = requestAnimationFrame(tick);

        el.addEventListener('mouseenter', handleUserInteraction);
        el.addEventListener('touchstart', handleUserInteraction, { passive: true });
        el.addEventListener('scroll', handleUserInteraction, { passive: true });

        return () => {
            cancelAnimationFrame(animRef.current);
            clearTimeout(resumeTimer.current);
            el.removeEventListener('mouseenter', handleUserInteraction);
            el.removeEventListener('touchstart', handleUserInteraction);
            el.removeEventListener('scroll', handleUserInteraction);
        };
    }, [speed]);

    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '10px',
                paddingBottom: '10px',
                scrollbarWidth: 'none',       /* Firefox */
                msOverflowStyle: 'none',      /* IE */
                cursor: 'grab',
            }}
        >
            {children}
        </div>
    );
};

export default AutoScrollCarousel;
