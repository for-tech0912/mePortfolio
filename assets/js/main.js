const portfolioData = [
    {
        title: 'Rewild Retreat Identity',
        category: 'social',
        description: 'Organic campaign tiles for a wellness retreat featuring calming palettes and playful typography.',
        aspectRatio: '1:1',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
        tags: ['Content Kit', 'Brand System'],
    },
    {
        title: 'Aura UI Library',
        category: 'web',
        description: 'Component-based marketing site with fluid grids, built with Tailwind and Astro.',
        aspectRatio: '16:9',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
        tags: ['Frontend', 'Accessibility'],
    },
    {
        title: 'Northwind KPI Lab',
        category: 'data',
        description: 'Executive dashboard visualizing retention cohorts and momentum metrics in real time.',
        aspectRatio: '16:9',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
        tags: ['Power BI', 'Storytelling'],
    },
    {
        title: 'Studio Fresco Social Stack',
        category: 'social',
        description: 'Modular carousel series optimized for Instagram and LinkedIn engagement.',
        aspectRatio: '9:16',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=600&q=80',
        tags: ['Campaign', 'Motion-ready'],
    },
    {
        title: 'Calm Cove Commerce',
        category: 'web',
        description: 'Headless commerce experience with editorial storytelling and soft gradients.',
        aspectRatio: '4:3',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
        tags: ['Shopify', 'Conversion'],
    },
    {
        title: 'FlowOps Insight Deck',
        category: 'data',
        description: 'Operational analytics that surface anomalies, crew velocity, and utilization.',
        aspectRatio: '4:3',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        tags: ['Data Viz', 'Automation'],
    },
    {
        title: 'Solstice Announce Pack',
        category: 'social',
        description: 'Launch kit of square and portrait assets with bold gradients and typography pairings.',
        aspectRatio: '1:1',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
        tags: ['Launch', 'Branding'],
    },
    {
        title: 'Horizon Studio Site',
        category: 'web',
        description: 'Scrolling narrative site blending illustration with crisp UI components.',
        aspectRatio: '16:9',
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80',
        tags: ['React', 'Performance'],
    },
    {
        title: 'Pulse Health Insights',
        category: 'data',
        description: 'Clinical KPI dashboards aligning patient experience, churn risk, and forecasting.',
        aspectRatio: '16:9',
        image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80',
        tags: ['Looker', 'Healthcare'],
    },
];

const socialMediaItems = [
    {
        title: 'Wellness Rituals',
        ratio: '1:1',
        description: 'Daily rituals carousel for mindful routines.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Peak Performance Tips',
        ratio: '1:1',
        description: 'Micro-learning posts for startups.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'SaaS Hero Banners',
        ratio: '16:9',
        description: 'Product launches across ad networks.',
        image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Summer Promo Series',
        ratio: '16:9',
        description: 'Seasonal promos pairing gradients with collage.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Creator Stories',
        ratio: '9:16',
        description: 'Portrait reels for community members.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80',
    },
    {
        title: 'Tech Drop Countdowns',
        ratio: '9:16',
        description: 'Launch teasers optimized for paid social.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80',
    },
];

const webProjects = [
    {
        title: 'Moss & Meadow Studio',
        description: 'Brand story site with editorial scrolling, 11ty + Tailwind.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
        live: '#',
        caseStudy: '#',
    },
    {
        title: 'Atlas Workspace',
        description: 'B2B SaaS marketing site with component tokens and Bootstrap grid.',
        image: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=900&q=80',
        live: '#',
        caseStudy: '#',
    },
    {
        title: 'Hikari Exhibition',
        description: 'Immersive WebGL moments paired with CMS-powered case studies.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
        live: '#',
        caseStudy: '#',
    },
];

const dataDashboards = [
    {
        title: 'Revenue Pulse',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
    },
    {
        title: 'Engagement Atlas',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=700&q=80',
    },
    {
        title: 'Growth Sprints',
        image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=700&q=80',
    },
    {
        title: 'Product Telemetry',
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=700&q=80',
    },
];

const skills = [
    { name: 'Project Ops', tools: 'Asana · Google Drive · Microsoft Office', icon: 'bi-kanban' },
    { name: 'Content Creation', tools: 'Canva · CapCut', icon: 'bi-brush' },
    { name: 'BI Dashboards', tools: 'Looker · Tableau', icon: 'bi-bar-chart-line' },
    { name: 'Frontend Core', tools: 'HTML · CSS · React', icon: 'bi-code-slash' },
    { name: 'Backend & Scripts', tools: 'PHP · Python · Node · Express', icon: 'bi-terminal' },
    { name: 'Databases', tools: 'PostgreSQL · MongoDB', icon: 'bi-database' },
    { name: 'UI Frameworks', tools: 'Bootstrap · Tailwind', icon: 'bi-layers' },
    { name: 'Design Systems', tools: 'Figma', icon: 'bi-bounding-box-circles' },
];

const portfolioGrid = document.getElementById('portfolio-grid');
const socialMediaGroups = document.getElementById('social-media-groups');
const webProjectsGrid = document.getElementById('web-projects');
const dataGallery = document.getElementById('data-gallery');
const skillsGrid = document.getElementById('skills-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

const renderPortfolio = (filter = 'all') => {
    const fragment = document.createDocumentFragment();

    portfolioData
        .filter((item) => (filter === 'all' ? true : item.category === filter))
        .forEach((item) => {
            const card = document.createElement('article');
            card.className = 'portfolio-card';
            card.dataset.category = item.category;

            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="content">
                    <div class="badge">
                        <span>${item.category === 'social' ? 'Social' : item.category === 'web' ? 'Web' : 'Data'}</span>
                        <span class="ratio-tag">${item.aspectRatio}</span>
                    </div>
                    <h3 class="font-display text-xl">${item.title}</h3>
                    <p class="text-slate-600">${item.description}</p>
                    <div class="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                        ${item.tags.map((tag) => `<span>#${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            fragment.appendChild(card);
        });

    portfolioGrid.innerHTML = '';
    portfolioGrid.appendChild(fragment);
};

const renderSocialMediaGroups = () => {
    const ratios = ['1:1', '16:9', '9:16'];
    const fragment = document.createDocumentFragment();

    ratios.forEach((ratio) => {
        const group = document.createElement('div');
        group.className = 'aspect-group';
        group.innerHTML = `
            <div class="mb-4 flex items-center justify-between">
                <h3 class="font-display text-lg">${ratio} Format</h3>
                <p class="ratio-tag">${ratio === '1:1' ? 'Square posts' : ratio === '16:9' ? 'Landscape content' : 'Portrait stories'}</p>
            </div>
            <div class="aspect-grid">
                ${socialMediaItems
                    .filter((item) => item.ratio === ratio)
                    .map(
                        (item) => `
                        <div class="aspect-card">
                            <img src="${item.image}" alt="${item.title}">
                            <div class="hover-text">
                                <div>
                                    <p class="text-sm font-semibold">${item.title}</p>
                                    <p class="text-xs opacity-80">${item.description}</p>
                                </div>
                            </div>
                        </div>
                    `
                    )
                    .join('')}
            </div>
        `;
        fragment.appendChild(group);
    });

    socialMediaGroups.appendChild(fragment);
};

const renderWebProjects = () => {
    const fragment = document.createDocumentFragment();
    webProjects.forEach((project) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
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
        `;
        fragment.appendChild(card);
    });
    webProjectsGrid.appendChild(fragment);
};

const renderDataGallery = () => {
    const fragment = document.createDocumentFragment();
    dataDashboards.forEach((item) => {
        const card = document.createElement('figure');
        card.className = 'data-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <figcaption class="mt-2 text-sm text-slate-500">${item.title}</figcaption>
        `;
        fragment.appendChild(card);
    });
    dataGallery.appendChild(fragment);
};

const renderSkills = () => {
    const fragment = document.createDocumentFragment();
    skills.forEach((skill) => {
        const card = document.createElement('article');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="icon" aria-hidden="true">
                <i class="bi ${skill.icon}" aria-hidden="true"></i>
            </div>
            <h3 class="font-display text-lg">${skill.name}</h3>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-500">${skill.tools}</p>
        `;
        fragment.appendChild(card);
    });
    skillsGrid.appendChild(fragment);
};

const setupFilters = () => {
    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((button) => button.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });
};

const setYear = () => {
    const yearTarget = document.getElementById('year');
    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }
};

const init = () => {
    renderPortfolio();
    renderSocialMediaGroups();
    renderWebProjects();
    renderDataGallery();
    renderSkills();
    setupFilters();
    setYear();
};

init();
