import { initFilterControls } from './modules/filter-controls.js';
import { initSocialGallery } from './modules/social-gallery.js';
import { initWebProjects } from './modules/web-projects.js';
import { initDataGallery } from './modules/data-gallery.js';
import { initSkillsGrid } from './modules/skills-grid.js';
import { initLightbox } from './modules/lightbox.js';
import { initRevealAnimations } from './modules/animations.js';
import { initStatCounters, syncYear } from './modules/meta.js';
import { initScrollToTop } from './modules/scroll-top.js';
import { initSparkleEffects } from './modules/sparkles.js';

const initApp = () => {
    initFilterControls();
    initSocialGallery();
    initWebProjects();
    initDataGallery();
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
