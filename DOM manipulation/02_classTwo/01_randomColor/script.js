const btn = document.querySelector('.btn');
const box = document.querySelector('#box');
const rgb = document.querySelector('.rgb');

btn.addEventListener('click', () => {
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    rgb.innerHTML = `rgb(${c1},${c2},${c3})`;
})