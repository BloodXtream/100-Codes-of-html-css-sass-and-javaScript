const btn = document.querySelector('button')
const imgArr = [
    './img/chef.webp',
    './img/kuchto.webp',
    './img/luffy.webp',
    './img/luufi.webp',
    './img/sangi.webp',
    './img/zoro.jpeg'
]


btn.addEventListener('click', () => {
    // use the index randomly 
    const randomIndex = Math.floor(Math.random() * imgArr.length)
    const randomImgSrc = imgArr[randomIndex]

    // now crete an html elemement 
    const img = document.createElement('img')
    img.setAttribute('src', randomImgSrc)
    img.className = 'w-24 h-24 object-cover absolute rounded shadow-lg '


    // ab image randomely spown karne ke liye 
    const x = Math.random() * 1000
    const y = Math.random() * 500
    const z = Math.random() * 360
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    img.style.rotate = `${z}deg`

    document.body.appendChild(img)
})