import { useState, useEffect, useRef } from 'react';
import { useInView } from './useInView';

// Update the return type to reflect the new object structure
export const useCountUp = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const { ref, isInView } = useInView({ threshold: 0.5 });
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        if (isInView) {
            let start: number | null = null;
            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                setCount(Math.floor(progress * target));
                if (progress < 1) {
                    animationFrameId.current = requestAnimationFrame(step);
                }
            };
            animationFrameId.current = requestAnimationFrame(step);
        }

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [isInView, target, duration]);

    // Return an object with the count and the ref to be attached to the component
    return { count, ref };
};