'use client'
// src/utils/smoothScroll.ts

export const smoothScrollTo = (targetSelector: string, duration: number = 1000) => {
  const targetElement = document.querySelector(targetSelector);
  if (targetElement) {
    const startY = window.pageYOffset;
    const targetY = targetElement.getBoundingClientRect().top + startY;
    const startTime = performance.now();

    const animateScroll = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOutCubic = (t: number): number =>
        (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + (targetY - startY) * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
};
