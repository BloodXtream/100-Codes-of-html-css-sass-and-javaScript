const btn = document.querySelector('button')
const img1 = document.querySelector('.imgOne')
const img2 = document.querySelector('.imgTwo')


btn.addEventListener('click', () => {
    const imgOne = img1.getAttribute('src')
    const imgTwo = img2.getAttribute('src')

    img1.setAttribute('src', imgTwo)
    img2.setAttribute('src', imgOne)
})