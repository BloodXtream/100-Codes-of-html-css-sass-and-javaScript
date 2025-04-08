const arr = [
    {
        companyName: 'Amazon',
        src: 'img/amazon.png',
        positon: 'Senior UI/UX Designer',
        time: 'Part-Time',
        level: 'Senior Level',
        salary: 120
    },
    {
        companyName: 'Google',
        src: 'img/google.png',
        positon: 'Graphic Designer',
        time: 'Full-Time',
        level: 'Flexible Schedule',
        salary: 250
    },
    {
        companyName: 'Mahindra',
        src: 'img/mahindra.png',
        positon: 'Senior Motion Designer',
        time: 'Contract',
        level: 'Remote',
        salary: 200
    },
    {
        companyName: 'Meta',
        src: 'img/meta.webp',
        positon: 'Junior UX/UI Designer',
        time: 'Full-Time',
        level: 'In Office',
        salary: 175
    },
    {
        companyName: 'Apple',
        src: 'img/apple.webp',
        positon: 'MERN Deverloper',
        time: 'Part-Time',
        level: 'Remote',
        salary: 225
    }
]

let clutter = ''

arr.forEach((e) => {
    clutter += `<div class="card">
            <div class="top">
                <img src="${e.src}" alt="">
                <p>Save</p>
            </div>
            <div class="middle">
                <h3>${e.companyName}</h3>
                <h1>${e.positon}</h1>
                <h3>
                    <span>${e.time}</span>
                    <span>${e.level}</span>
                </h3>
            </div>
            <div class="bottom">
                <h1>$${e.salary}/hr</h1>
                <button>Apply Now</button>
            </div>
        </div>`
})

const main = document.querySelector('.main')
main.innerHTML = clutter