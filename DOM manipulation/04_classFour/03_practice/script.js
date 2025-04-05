window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');
    const crsr = document.querySelector('.cursor');

    main.addEventListener('mousemove', (e) => {
        crsr.style.left = `${e.x}px`
        crsr.style.top = `${e.y}px`
    });
});
