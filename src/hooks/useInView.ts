import { useEffect } from 'react';

/**
 * Re-runs whenever `trigger` changes (pass pathname so it re-observes
 * after every route transition). Sets up an IntersectionObserver that
 * adds the 'in-view' class to each matching element once it enters the viewport.
 */
export function useInView(trigger?: string) {
  useEffect(() => {
    let observer: IntersectionObserver;

    // Small delay lets React finish painting the new route's DOM
    const timerId = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((el) => observer.observe(el));
    }, 60);

    return () => {
      clearTimeout(timerId);
      observer?.disconnect();
    };
  }, [trigger]);
}
