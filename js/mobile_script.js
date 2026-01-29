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

document.addEventListener("DOMContentLoaded", () => {

    let startX = 0;
    let startY = 0;
    const minSwipeDistance = 70;

    document.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const diffX = endX - startX;
        const diffY = endY - startY;

        // Ignore vertical scroll
        if (Math.abs(diffX) < Math.abs(diffY)) return;
        if (Math.abs(diffX) < minSwipeDistance) return;

        const navLinks = Array.from(document.querySelectorAll("nav a"));
        if (!navLinks.length) return;

        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        const currentIndex = navLinks.findIndex(link =>
            link.getAttribute("href").includes(currentPage)
        );

        if (currentIndex === -1) return;

        // Swipe LEFT → Next page
        if (diffX < 0 && currentIndex < navLinks.length - 1) {
            window.location.href = navLinks[currentIndex + 1].href;
        }

        // Swipe RIGHT → Previous page
        if (diffX > 0 && currentIndex > 0) {
            window.location.href = navLinks[currentIndex - 1].href;
        }
    });

});
