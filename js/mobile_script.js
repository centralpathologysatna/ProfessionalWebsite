const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});


const track = document.querySelector('.image-track');

if (track) {
    let startX = 0;
    let isTouching = false;

    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isTouching = true;
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('touchmove', e => {
        if (!isTouching) return;
        const moveX = e.touches[0].clientX - startX;
        track.style.transform = `translateX(${moveX}px)`;
    });

    track.addEventListener('touchend', () => {
        isTouching = false;
        track.style.animationPlayState = 'running';
        track.style.transform = '';
    });
}


let scrollTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        document.body.classList.add('micro-bounce');

        setTimeout(() => {
            document.body.classList.remove('micro-bounce');
        }, 400);
    }, 120);
});
