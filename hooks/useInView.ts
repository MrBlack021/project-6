
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewReturn {
    ref: RefObject<HTMLDivElement>;
    isInView: boolean;
}

export const useInView = (options?: IntersectionObserverInit): UseInViewReturn => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: 0.1, ...options }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return { ref, isInView };
};