
import { useState, useEffect, useRef } from 'react';
import { useInView } from './useInView';

export const useCountUp = (target: number, duration: number = 2000, startValue: number = 0) => {
    const [count, setCount] = useState(startValue);
    const { ref, isInView } = useInView({ threshold: 0.5 });
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        if (isInView) {
            let start: number | null = null;
            const range = target - startValue;

            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                setCount(Math.floor(progress * range + startValue));
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
    }, [isInView, target, duration, startValue]);

    return { count, ref };
};