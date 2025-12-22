import { initFilterControls } from './modules/filter-controls.js';
import { initSocialGallery } from './modules/social-gallery.js';
import { initWebProjects } from './modules/web-projects.js';
import { initDataGallery } from './modules/data-gallery.js';
import { initSkillsGrid } from './modules/skills-grid.js';
import { initAIGallery } from './modules/ai-gallery.js';
import { initLightbox } from './modules/lightbox.js';
import { initRevealAnimations } from './modules/animations.js';
import { initStatCounters, syncYear } from './modules/meta.js';
import { initScrollToTop } from './modules/scroll-top.js';
import { initSparkleEffects } from './modules/sparkles.js';
import { initBackgroundMedia } from './modules/background-media.js';

const initApp = () => {
    // initialize a site-wide background media (video or animated gif)
    // default uses a small sample video; replace or disable by passing options here
    try {
        // keep a reference on `window.__bgMedia` so you can change or remove it from the console
        // Example: window.__bgMedia.setSource('https://...gif', 'image') or window.__bgMedia.remove()
        window.__bgMedia = initBackgroundMedia({
            type: 'video',
            src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
            opacity: 0.42,
        });
    } catch (e) {
        // fail silently if background media can't be created
        console.warn('background media init failed', e);
    }
    initFilterControls();
    initSocialGallery();
    initWebProjects();
    initDataGallery();
    initAIGallery();
    initSkillsGrid();
    initLightbox();
    initRevealAnimations();
    syncYear();
    initStatCounters();
    initScrollToTop();
    initSparkleEffects();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
