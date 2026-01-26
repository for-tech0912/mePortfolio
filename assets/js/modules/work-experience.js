import { workExperience } from '../data/work-experience.js';

export const initWorkExperience = () => {
    const container = document.getElementById('work-experience-grid');
    if (!container) return;

    container.innerHTML = workExperience
        .map(
            (experience) => `
        <div class="experience-card glass-card rounded-3xl bg-white/70 p-8 shadow gentle/40 hover:shadow-lg transition" data-reveal="item">
            <div class="space-y-4">
                <div>
                    <h3 class="font-display text-xl font-semibold text-deep-ink">${experience.title}</h3>
                    <p class="text-slate-600 mt-2">${experience.description}</p>
                </div>
                <ul class="space-y-2 list-disc list-inside text-sm text-slate-600">
                    ${experience.details.map((detail) => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        </div>
        `
        )
        .join('');
};
