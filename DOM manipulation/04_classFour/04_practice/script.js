const lastScroll = 0
const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScroll) {
        nav.style.transform = 'translateY(-100%)'
    } else {
        nav.style.transform = 'translateY(0)'
    }
    lastScroll = scrollTop
})