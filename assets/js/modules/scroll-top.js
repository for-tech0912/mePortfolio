const SCROLL_THRESHOLD = 420;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const initScrollToTop = () => {
    const control = document.getElementById('back-to-top');
    if (!control) return;

    const toggleVisibility = () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            control.classList.add('is-visible');
        } else {
            control.classList.remove('is-visible');
        }
    };

    control.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });
        control.blur();
    });

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
};
