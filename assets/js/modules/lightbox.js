let lightboxRoot;
let galleryState = { items: [], index: 0, active: false };

const buildLightbox = () => {
    lightboxRoot = document.createElement('div');
    lightboxRoot.className = 'lightbox hidden';
    lightboxRoot.innerHTML = `
        <div class="lightbox-overlay" data-lightbox-close></div>
        <figure class="lightbox-panel" role="dialog" aria-modal="true" aria-label="Media preview">
            <button type="button" class="lightbox-close" data-lightbox-close aria-label="Close preview">×</button>
            <div class="lightbox-controls" aria-hidden="true">
                <button type="button" class="lightbox-nav lightbox-nav--prev" data-lightbox-prev aria-label="Previous image">‹</button>
                <button type="button" class="lightbox-nav lightbox-nav--next" data-lightbox-next aria-label="Next image">›</button>
            </div>
            <img src="" alt="Expanded preview" />
            <figcaption class="lightbox-caption"></figcaption>
        </figure>
    `;
    document.body.appendChild(lightboxRoot);
};

const setLightboxContent = (src, label) => {
    const image = lightboxRoot.querySelector('img');
    const caption = lightboxRoot.querySelector('.lightbox-caption');
    if (image) {
        image.src = src;
        image.alt = label;
    }
    if (caption) {
        caption.textContent = label;
    }
};

const resetGalleryState = () => {
    galleryState = { items: [], index: 0, active: false };
    if (lightboxRoot) {
        lightboxRoot.classList.remove('has-gallery');
    }
};

const setGalleryState = (items, index) => {
    galleryState = {
        items,
        index,
        active: items.length > 1,
    };
    lightboxRoot.classList.toggle('has-gallery', galleryState.active);
};

const showGalleryItem = () => {
    if (!galleryState.items.length) return;
    const current = galleryState.items[galleryState.index];
    setLightboxContent(current.src, current.label);
};

const stepGallery = (delta) => {
    if (!galleryState.active) return;
    const total = galleryState.items.length;
    galleryState.index = (galleryState.index + delta + total) % total;
    showGalleryItem();
};

const openLightbox = (src, label, galleryItems = [], galleryIndex = 0) => {
    if (!lightboxRoot) return;
    const items = galleryItems.length ? galleryItems : [{ src, label }];
    const index = Math.min(Math.max(galleryIndex, 0), items.length - 1);
    setGalleryState(items, index);
    showGalleryItem();
    lightboxRoot.classList.remove('hidden');
    document.body.classList.add('lock-scroll');
};

const closeLightbox = () => {
    if (!lightboxRoot) return;
    lightboxRoot.classList.add('hidden');
    document.body.classList.remove('lock-scroll');
    resetGalleryState();
};

const handleTriggerClick = (trigger) => {
    const src = trigger.dataset.lightboxSrc;
    const label = trigger.dataset.lightbox || 'Media preview';
    const group = trigger.dataset.lightboxGroup;

    if (group) {
        const nodes = Array.from(document.querySelectorAll(`[data-lightbox-group="${group}"]`)).filter(
            (node) => !node.closest('[hidden]') && !node.hasAttribute('hidden')
        );
        if (!nodes.length) {
            openLightbox(src, label);
            return;
        }
        const galleryItems = nodes.map((node) => ({
            src: node.dataset.lightboxSrc,
            label: node.dataset.lightbox || label,
        }));
        const providedIndex = Number(trigger.dataset.lightboxIndex);
        const fallbackIndex = nodes.indexOf(trigger);
        const startIndex = Number.isNaN(providedIndex) ? Math.max(fallbackIndex, 0) : providedIndex;
        const initialItem = galleryItems[startIndex] || { src, label };
        openLightbox(initialItem.src, initialItem.label, galleryItems, startIndex);
        return;
    }

    openLightbox(src, label);
};

const bindNavigation = () => {
    const prevButton = lightboxRoot.querySelector('[data-lightbox-prev]');
    const nextButton = lightboxRoot.querySelector('[data-lightbox-next]');

    if (prevButton) {
        prevButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            stepGallery(-1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            stepGallery(1);
        });
    }
};

const isLightboxOpen = () => lightboxRoot && !lightboxRoot.classList.contains('hidden');

export const initLightbox = () => {
    buildLightbox();
    bindNavigation();

    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-lightbox-src]');
        if (trigger) {
            event.preventDefault();
            handleTriggerClick(trigger);
            return;
        }

        if (event.target.closest('[data-lightbox-close]')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
            return;
        }

        if (!isLightboxOpen()) return;

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            stepGallery(1);
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            stepGallery(-1);
        }
    });
};
