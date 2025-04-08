const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const close = document.querySelector('.close')

menu.addEventListener('click', () => {
    sidebar.style.display = 'flex'
})

close.addEventListener('click', () => {
    sidebar.style.display = 'none'
    menu.style.display = 'block'
})