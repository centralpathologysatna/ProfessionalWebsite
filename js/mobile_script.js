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

/* ===== MOBILE SWIPE NAVIGATION ===== */

if (window.innerWidth <= 768) {

    let startX = 0;
    let endX = 0;
    const minSwipeDistance = 70; // avoid accidental swipes

    document.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', e => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const diff = endX - startX;

        if (Math.abs(diff) < minSwipeDistance) return;

        const navLinks = Array.from(document.querySelectorAll('nav a'));
        const currentPath = window.location.pathname.split('/').pop();

        const currentIndex = navLinks.findIndex(
            link => link.getAttribute('href') === currentPath
        );

        if (currentIndex === -1) return;

        // Swipe LEFT → Next page
        if (diff < 0 && currentIndex < navLinks.length - 1) {
            document.body.classList.add('swipe-left');
            window.location.href = navLinks[currentIndex + 1].href;
        }

        // Swipe RIGHT → Previous page
        if (diff > 0 && currentIndex > 0) {
            document.body.classList.add('swipe-right');
            window.location.href = navLinks[currentIndex - 1].href;
        }
    }
}

