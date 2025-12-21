let observer;

const attachObserver = (element) => {
    if (!observer || !element || element.dataset.revealAttached) return;
    observer.observe(element);
    element.dataset.revealAttached = 'true';
};

const scanRevealTargets = () => {
    document.querySelectorAll('[data-reveal]').forEach((element) => attachObserver(element));
};

export const initRevealAnimations = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.querySelectorAll('[data-reveal]').forEach((element) => element.classList.add('is-visible'));
        return;
    }

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.18 }
    );

    scanRevealTargets();
    document.addEventListener('reveal:refresh', scanRevealTargets);
};
