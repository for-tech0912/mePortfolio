const MAX_SPARKLES = 60;
const SPARKLE_LIFETIME = 1100;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let sparkleLayer;
let rafLock = null;
let ambientTimer;

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const spawnSparkle = (x, y) => {
    if (!sparkleLayer || sparkleLayer.childElementCount >= MAX_SPARKLES) return;

    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty('--sparkle-size', `${randomBetween(6, 13)}px`);
    sparkle.style.setProperty('--sparkle-hue', `${randomBetween(150, 210)}`);
    sparkle.style.setProperty('--sparkle-dx', `${randomBetween(-36, 36)}px`);
    sparkle.style.setProperty('--sparkle-dy', `${randomBetween(-70, -20)}px`);
    sparkle.style.setProperty('--sparkle-delay', `${randomBetween(0, 120)}ms`);

    sparkleLayer.appendChild(sparkle);
    window.setTimeout(() => sparkle.remove(), SPARKLE_LIFETIME);
};

const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    if (rafLock) return;

    rafLock = window.requestAnimationFrame(() => {
        spawnSparkle(event.clientX, event.clientY);
        rafLock = null;
    });
};

const spawnAmbientSparkle = () => {
    const x = randomBetween(window.innerWidth * 0.1, window.innerWidth * 0.9);
    const y = randomBetween(window.innerHeight * 0.05, window.innerHeight * 0.6);
    spawnSparkle(x, y);

    ambientTimer = window.setTimeout(spawnAmbientSparkle, randomBetween(1200, 2200));
};

export const initSparkleEffects = () => {
    if (prefersReducedMotion()) return;

    sparkleLayer = document.createElement('div');
    sparkleLayer.className = 'sparkle-layer';
    sparkleLayer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(sparkleLayer);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    spawnAmbientSparkle();
};
