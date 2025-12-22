import { aiGalleryItems } from '../data/social.js';

const aiGalleryRoot = document.getElementById('ai-gallery');
const aiGallerySection = document.getElementById('ai-gallery-section');
const MAX_VISIBLE_AI_ITEMS = 4;

const buildAICard = (item, index, isExtra = false) => `
    <article class="ai-card" data-reveal="item" ${isExtra ? 'data-extra="true" hidden' : ''}>
        <div class="media-shell ai-card__media">
            <button
                type="button"
                class="media-trigger"
                data-lightbox="${item.title}"
                data-lightbox-src="${item.image}"
                data-lightbox-group="ai-gallery"
                data-lightbox-index="${index}"
            >
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <span class="sr-only">Open ${item.title} preview</span>
            </button>
        </div>
        <div class="ai-card__body">
            <span class="badge">AI Generated</span>
            <div>
                <h3 class="ai-card__title">${item.title}</h3>
                ${item.description ? `<p class="ai-card__description">${item.description}</p>` : ''}
            </div>
        </div>
    </article>
`;

const getExtraCards = () => Array.from(aiGalleryRoot?.querySelectorAll('[data-extra="true"]') ?? []);

const toggleExtraVisibility = (showAll) => {
    getExtraCards().forEach((card) => {
        if (showAll) {
            card.removeAttribute('hidden');
        } else {
            card.setAttribute('hidden', '');
        }
    });
};

const removeToggleWrapper = () => {
    const wrapper = aiGallerySection?.querySelector('[data-ai-toggle-wrapper]');
    if (wrapper) {
        wrapper.remove();
    }
};

const ensureToggleWrapper = () => {
    if (!aiGalleryRoot || !aiGallerySection) return null;
    let wrapper = aiGallerySection.querySelector('[data-ai-toggle-wrapper]');

    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.className = 'show-more-wrapper';
        wrapper.dataset.aiToggleWrapper = 'true';
        wrapper.innerHTML = `
            <button type="button" class="show-more-btn" data-ai-toggle aria-expanded="false">
                Show more
            </button>
        `;
        aiGalleryRoot.insertAdjacentElement('afterend', wrapper);
    }

    return wrapper.querySelector('[data-ai-toggle]');
};

const setupToggle = () => {
    const toggleBtn = ensureToggleWrapper();
    if (!toggleBtn) return;

    toggleBtn.textContent = 'Show more';
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleExtraVisibility(false);

    toggleBtn.onclick = () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        const nextState = !isExpanded;
        toggleExtraVisibility(nextState);
        toggleBtn.textContent = nextState ? 'Show less' : 'Show more';
        toggleBtn.setAttribute('aria-expanded', nextState ? 'true' : 'false');
    };
};

export const initAIGallery = () => {
    if (!aiGalleryRoot) return;

    const hasExtra = aiGalleryItems.length > MAX_VISIBLE_AI_ITEMS;
    aiGalleryRoot.innerHTML = aiGalleryItems
        .map((item, index) => buildAICard(item, index, index >= MAX_VISIBLE_AI_ITEMS))
        .join('');

    if (hasExtra) {
        setupToggle();
    } else {
        removeToggleWrapper();
    }

    document.dispatchEvent(new CustomEvent('reveal:refresh'));
};
