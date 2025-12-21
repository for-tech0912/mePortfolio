import { dataDashboards } from '../data/data-dashboards.js';

const dataGallery = document.getElementById('data-gallery');

const buildCard = (item) => {
    const ctaMarkup = item.ctaHref
        ? `<a href="${item.ctaHref}" class="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600" target="_blank" rel="noreferrer">
                ${item.ctaLabel || 'View Project'}
                <span aria-hidden="true">→</span>
            </a>`
        : '';

    return `
        <figure class="data-card" data-reveal="item">
            <div class="media-shell">
                <button type="button" class="media-trigger" data-lightbox="${item.title}" data-lightbox-src="${item.image}">
                    <img src="${item.image}" alt="${item.title} dashboard preview" />
                    <span class="sr-only">Open ${item.title} preview</span>
                </button>
            </div>
            <figcaption class="mt-2 text-sm text-slate-500">
                <p class="font-semibold text-slate-900">${item.title}</p>
                <p class="text-sm text-slate-600">${item.description}</p>
                ${ctaMarkup}
            </figcaption>
        </figure>
    `;
};

export const initDataGallery = () => {
    if (!dataGallery) return;
    dataGallery.innerHTML = dataDashboards.map((item) => buildCard(item)).join('');
    document.dispatchEvent(new CustomEvent('reveal:refresh'));
};
