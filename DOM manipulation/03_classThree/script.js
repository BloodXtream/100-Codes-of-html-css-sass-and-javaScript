const btn = document.querySelector('button');
const bar = document.querySelector('.progress-bar');
const h5 = document.querySelector('h5');

let progress = 0;
btn.addEventListener('click', () => {
    btn.disabled = true
    let interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            h5.innerHTML = `${progress}%`;
            bar.style.width = `${progress}%`
        } else {
            clearInterval(interval);
            btn.innerHTML = 'Downloaded'
            btn.style.color = 'white'
            btn.style.backgroundColor = "red"
        }
    }, 50)
})