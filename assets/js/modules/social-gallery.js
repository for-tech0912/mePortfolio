import { socialMediaItems } from '../data/social.js';

const ratioCopy = {
    '1:1': 'Square posts',
    '4:3': 'AI generated art',
    '16:9': 'Landscape content',
};

const MAX_VISIBLE_ITEMS = 5;

const socialMediaGroups = document.getElementById('social-media-groups');

const buildAspectCard = (item, ratio, index, isExtra = false) => `
    <article class="aspect-card" data-ratio="${ratio}" data-reveal="item" ${isExtra ? 'data-extra="true" hidden' : ''}>
        <div class="media-shell">
            <button
                type="button"
                class="media-trigger"
                data-lightbox="${item.title}"
                data-lightbox-src="${item.image}"
                data-lightbox-group="social-${ratio}"
                data-lightbox-index="${index}"
            >
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
                <span class="sr-only">Open ${item.title} preview</span>
            </button>
        </div>
    </article>
`;

const buildGroup = (ratio) => {
    const items = socialMediaItems.filter((item) => item.ratio === ratio);
    if (!items.length) return '';

    const indexedItems = items.map((item, index) => ({ item, index }));
    const hasExtra = indexedItems.length > MAX_VISIBLE_ITEMS;
    const groupId = `social-${ratio.replace(':', '-')}`;

    return `
        <div class="aspect-group" data-reveal="item" data-ratio-group="${groupId}">
            <div class="mb-4 flex items-center justify-between">
                <h3 class="font-display text-lg">${ratio} Format</h3>
                <p class="ratio-tag">${ratioCopy[ratio]}</p>
            </div>
            <div class="aspect-grid" data-group="${groupId}">
                ${indexedItems
                    .map(({ item, index }, position) => buildAspectCard(item, ratio, index, position >= MAX_VISIBLE_ITEMS))
                    .join('')}
            </div>
            ${
                hasExtra
                    ? `
            <div class="show-more-wrapper">
                <button type="button" class="show-more-btn" data-toggle-group="${groupId}" aria-expanded="false">
                    Show more
                </button>
            </div>
            `
                    : ''
            }
        </div>
    `;
};

const initShowMoreControls = () => {
    const toggleButtons = socialMediaGroups?.querySelectorAll('[data-toggle-group]');
    if (!toggleButtons?.length) return;

    toggleButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const groupId = btn.dataset.toggleGroup;
            if (!groupId) return;

            const group = socialMediaGroups.querySelector(`[data-ratio-group="${groupId}"]`);
            if (!group) return;

            const extraCards = group.querySelectorAll('[data-extra="true"]');
            if (!extraCards.length) return;

            const isExpanded = group.classList.toggle('is-expanded');
            extraCards.forEach((card) => {
                if (isExpanded) {
                    card.removeAttribute('hidden');
                } else {
                    card.setAttribute('hidden', '');
                }
            });

            btn.textContent = isExpanded ? 'Show less' : 'Show more';
            btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        });
    });
};

export const initSocialGallery = () => {
    if (!socialMediaGroups) return;
    const ratios = ['1:1', '4:3', '16:9'];
    socialMediaGroups.innerHTML = ratios.map((ratio) => buildGroup(ratio)).join('');
    initShowMoreControls();
    document.dispatchEvent(new CustomEvent('reveal:refresh'));
};
