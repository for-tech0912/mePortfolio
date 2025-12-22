// Inject small decorative animated GIFs into the page (hero area by default).
export function initDecorativeAnimations(options = {}) {
    const cfg = Object.assign({
        containerSelector: '.hero-visual',
        gifSrc: 'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif',
        alt: 'decorative animation',
        className: 'hero-visual__gif',
        delay: 350,
    }, options);

    const container = document.querySelector(cfg.containerSelector);
    if (!container) return null;

    // prevent duplicate
    if (container.querySelector(`.${cfg.className}`)) return null;

    const img = document.createElement('img');
    img.src = cfg.gifSrc;
    img.alt = cfg.alt;
    img.className = cfg.className;
    img.loading = 'lazy';
    img.setAttribute('aria-hidden', 'true');

    // insert and reveal after a tiny delay
    container.style.position = container.style.position || getComputedStyle(container).position === 'static' ? 'relative' : container.style.position;
    container.appendChild(img);
    setTimeout(() => img.classList.add('is-visible'), cfg.delay);

    return {
        setSource(src) { img.src = src; },
        remove() { img.remove(); }
    };
}
