import { skills } from '../data/skills.js';

const skillsGrid = document.getElementById('skills-grid');

const buildSkill = (skill) => `
    <article class="skill-card" data-reveal="item">
        <div class="icon" aria-hidden="true">
            <i class="bi ${skill.icon}" aria-hidden="true"></i>
        </div>
        <h3 class="font-display text-lg">${skill.name}</h3>
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">${skill.tools}</p>
    </article>
`;

export const initSkillsGrid = () => {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = skills.map((skill) => buildSkill(skill)).join('');
    document.dispatchEvent(new CustomEvent('reveal:refresh'));
};
