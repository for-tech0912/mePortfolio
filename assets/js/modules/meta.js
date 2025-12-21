const formatValue = (value, suffix = '') => `${value}${suffix ?? ''}`;

const animateCounter = (element) => {
    const targetValue = Number(element.dataset.countTarget || 0);
    const suffix = element.dataset.countSuffix || '';
    const duration = 1200;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = () => {
        frame += 1;
        const progress = Math.min(frame / totalFrames, 1);
        const currentValue = Math.floor(progress * targetValue);
        element.textContent = formatValue(currentValue, suffix);
        if (progress < 1) {
            requestAnimationFrame(counter);
        } else {
            element.textContent = formatValue(targetValue, suffix);
        }
    };

    requestAnimationFrame(counter);
};

export const syncYear = () => {
    const yearTarget = document.getElementById('year');
    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }
};

export const initStatCounters = () => {
    const targets = document.querySelectorAll('[data-count-target]');
    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        targets.forEach((element) => {
            const value = Number(element.dataset.countTarget || 0);
            element.textContent = formatValue(value, element.dataset.countSuffix);
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );

    targets.forEach((element) => observer.observe(element));
};
