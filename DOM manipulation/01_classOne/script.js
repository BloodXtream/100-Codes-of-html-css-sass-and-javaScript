const name = document.querySelector('.name');
const img = document.querySelector('img');
const btn = document.querySelector('.btn');
const p = document.querySelector('p');
let flag = 0
btn.addEventListener('click', () => {
    if (flag === 0) {
        btn.style.backgroundColor = "red"
        btn.innerHTML = "UnFollow"
        p.innerHTML = "You guys are Friends"
        flag = 1
    } else {
        btn.style.backgroundColor = " rgb(70, 114, 165)"
        btn.innerHTML = "Follow"
        p.innerHTML = "Follow to become friends"
        flag = 0
    }
})
