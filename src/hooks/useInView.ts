import { useEffect, useRef } from 'react';

/**
 * Adds the 'in-view' class to every element that matches `selector`
 * inside `rootRef` once it enters the viewport.
 */
export function useInView(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe every matching element in the document
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);

  return rootRef;
}
