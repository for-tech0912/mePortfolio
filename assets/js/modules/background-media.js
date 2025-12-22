// Lightweight background media helper: video or gif/image.
export function initBackgroundMedia(options = {}) {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cfg = Object.assign({
        type: 'video', // 'video' or 'image'
        src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
        poster: '',
        opacity: 0.55,
        muted: true,
        autoplay: true,
        loop: true,
    }, options);

    // If reduce motion is preferred, fall back to a still image when possible
    if (prefersReducedMotion && cfg.type === 'video') {
        cfg.type = 'image';
        if (!cfg.src || cfg.src.endsWith('.mp4')) {
            // try to use a still poster if provided, otherwise keep the video but don't autoplay
            if (cfg.poster) cfg.src = cfg.poster;
        }
    }

    const container = document.createElement('div');
    container.className = 'background-media';
    container.setAttribute('aria-hidden', 'true');

    function setOpacity(el, value) { el.style.opacity = String(value); }

    if (cfg.type === 'video') {
        const video = document.createElement('video');
        video.className = 'background-media__media background-media__video';
        video.src = cfg.src;
        if (cfg.poster) video.poster = cfg.poster;
        video.autoplay = !!cfg.autoplay && !prefersReducedMotion;
        video.muted = !!cfg.muted;
        video.loop = !!cfg.loop;
        video.playsInline = true;
        video.preload = 'auto';
        setOpacity(video, cfg.opacity);
        container.appendChild(video);
        // attempt to play when ready
        video.addEventListener('canplay', () => { video.play().catch(() => {}); });
    } else {
        const img = document.createElement('img');
        img.className = 'background-media__media background-media__img';
        img.src = cfg.src;
        img.alt = '';
        img.loading = 'lazy';
        setOpacity(img, cfg.opacity);
        container.appendChild(img);
    }

    document.body.prepend(container);

    return {
        setSource(src, type = 'video') {
            if (type === 'video') {
                let v = container.querySelector('video');
                if (!v) {
                    // replace image with video
                    container.innerHTML = '';
                    initBackgroundMedia(Object.assign({}, cfg, { src, type: 'video' }));
                    return;
                }
                v.src = src;
                v.load();
                v.play().catch(() => {});
            } else {
                let i = container.querySelector('img');
                if (!i) {
                    container.innerHTML = '';
                    initBackgroundMedia(Object.assign({}, cfg, { src, type: 'image' }));
                    return;
                }
                i.src = src;
            }
        },
        remove() { container.remove(); }
    };
}
