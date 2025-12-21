const filterButtons = document.querySelectorAll('[data-target-section]');

const scrollToSection = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const initFilterControls = () => {
    if (!filterButtons.length) return;

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.targetSection;
            if (!targetId) return;

            if (btn.classList.contains('active')) {
                scrollToSection(targetId);
                return;
            }

            filterButtons.forEach((button) => button.classList.remove('active'));
            btn.classList.add('active');
            scrollToSection(targetId);
        });
    });
};
