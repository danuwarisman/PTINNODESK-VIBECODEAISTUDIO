import { useEffect, useState, useRef } from 'react';

export function useCounter(endValue: number, duration: number = 1800, startImmediately: boolean = false) {
  const [count, setCount] = useState<number>(startImmediately ? endValue : 0);
  const [hasStarted, setHasStarted] = useState<boolean>(startImmediately);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (startImmediately) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasStarted, startImmediately]);

  useEffect(() => {
    if (!hasStarted) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(endValue);
      return;
    }

    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: easeOutExpo: progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * endValue;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, endValue, duration]);

  const formattedValue = Number.isInteger(endValue)
    ? Math.round(count).toLocaleString('id-ID')
    : count.toFixed(2);

  return { elementRef, count, formattedValue, hasStarted };
}
