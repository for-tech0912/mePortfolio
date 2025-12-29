import { fashionItems } from '../data/fashion.js';

const MAX_VISIBLE_ITEMS = 5;
const root = document.getElementById('fashion-gallery');
const section = document.getElementById('fashion-gallery-section');

const buildCard = (src, index, isExtra = false) => `
  <article class="aspect-card" data-ratio="1:1" data-reveal="item" ${isExtra ? 'data-extra="true" hidden' : ''}>
    <div class="media-shell">
      <button
        type="button"
        class="media-trigger"
        data-lightbox=""
        data-lightbox-src="${src}"
        data-lightbox-group="fashion-square"
        data-lightbox-index="${index}"
        aria-label="Open fashion ad image ${index + 1}"
      >
        <img src="${src}" alt="E-Commerce Fashion Ad ${index + 1}" loading="lazy" />
      </button>
    </div>
  </article>
`;

const initShowMoreControls = () => {
  const btn = section?.querySelector('[data-toggle-group="fashion-square"]');
  if (!btn || !root) return;

  btn.addEventListener('click', () => {
    const extraCards = root.querySelectorAll('[data-extra="true"]');
    if (!extraCards.length) return;

    const isExpanded = section.classList.toggle('is-expanded');
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
};

export const initFashionGallery = () => {
  if (!root || !section) return;
  const indexed = fashionItems.map((item, i) => ({ src: item.image, index: i }));
  const hasExtra = indexed.length > MAX_VISIBLE_ITEMS;

  root.innerHTML = indexed
    .map(({ src, index }, pos) => buildCard(src, index, pos >= MAX_VISIBLE_ITEMS))
    .join('');

  if (hasExtra) {
    const wrapper = document.createElement('div');
    wrapper.className = 'show-more-wrapper';
    wrapper.innerHTML = `
      <button type="button" class="show-more-btn" data-toggle-group="fashion-square" aria-expanded="false">
        Show more
      </button>
    `;
    section.appendChild(wrapper);
    initShowMoreControls();
  }

  document.dispatchEvent(new CustomEvent('reveal:refresh'));
};
