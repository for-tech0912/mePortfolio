import { webProjects } from '../data/web-projects.js';

const webProjectsGrid = document.getElementById('web-projects');

const slugify = (value = '') => {
    const slug = value
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return slug || 'project';
};

const getGalleryItems = (project) => {
    const rawGallery = Array.isArray(project.gallery)
        ? project.gallery
        : Array.isArray(project.images)
        ? project.images
        : [];

    const filtered = rawGallery.filter(Boolean);
    const featured = project.image || filtered[0] || '';

    if (!featured) {
        return [];
    }

    const rest = filtered.filter((src) => src && src !== featured);

    return [featured, ...rest];
};

// Hidden buttons keep gallery sources out of the layout while exposing them to the lightbox.
const buildGalleryProxies = (items, groupId, label) => {
    if (!groupId || items.length <= 1) return '';
    const proxies = items
        .slice(1)
        .map(
            (src, index) => `
            <button type="button"
                class="lightbox-proxy"
                data-lightbox="${label}"
                data-lightbox-src="${src}"
                data-lightbox-group="${groupId}"
                data-lightbox-index="${index + 1}"
                tabindex="-1"
                aria-hidden="true"
            ></button>`
        )
        .join('');
    return `<div class="lightbox-proxies" aria-hidden="true" style="display:none;">${proxies}</div>`;
};

const buildProject = (project, index) => {
    const galleryItems = getGalleryItems(project);
    const featuredImage = galleryItems[0] || project.image || '';
    const hasGallery = galleryItems.length > 1;
    const groupSeed = project.title || `project-${index}`;
    const galleryGroup = hasGallery ? `web-project-${slugify(groupSeed)}` : '';
    const galleryAttributes = hasGallery ? ` data-lightbox-group="${galleryGroup}" data-lightbox-index="0"` : '';
    const proxiesMarkup = buildGalleryProxies(galleryItems, galleryGroup, project.title);

    return `
        <article class="project-card" data-reveal="item">
            <div class="media-shell">
                <button type="button" class="media-trigger" data-lightbox="${project.title}" data-lightbox-src="${featuredImage}"${galleryAttributes}>
                    <img src="${featuredImage}" alt="${project.title} website preview" />
                    <span class="sr-only">Open ${project.title} preview</span>
                </button>
                ${proxiesMarkup}
            </div>
            <div class="content">
                <div>
                    <h3 class="font-display text-xl">${project.title}</h3>
                    <p class="text-slate-600">${project.description}</p>
                </div>
                <div class="actions">
                    <a href="${project.live}" class="btn-primary" target="_blank" rel="noreferrer">View Live</a>
                    <a href="${project.caseStudy}" class="btn-ghost" target="_blank" rel="noreferrer">View Project</a>
                </div>
            </div>
        </article>
    `;
};

export const initWebProjects = () => {
    if (!webProjectsGrid) return;
    webProjectsGrid.innerHTML = webProjects.map((project, index) => buildProject(project, index)).join('');
    document.dispatchEvent(new CustomEvent('reveal:refresh'));
};
