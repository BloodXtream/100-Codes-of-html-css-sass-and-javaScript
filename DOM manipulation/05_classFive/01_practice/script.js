const arr = [
    {
        userName: 'Pragyanam',
        age: 22,
        isMarried: false,
        image: 'https://images.unsplash.com/photo-1741514374526-8bc710b6b312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8'
    },
    {
        userName: 'run',
        age: 41,
        isMarried: true,
        image: 'https://images.unsplash.com/photo-1741805190625-7386d2180e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        userName: 'loli ',
        age: 18,
        isMarried: false,
        image: 'https://images.unsplash.com/photo-1741802856123-04d9f001270f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D'
    },
]

let clutter = ''
arr.forEach((e) => {
    clutter += `<div class="card">
        <div class="image">
            <img src="${e.image}"
                alt="Error">
        </div>
        <h1>Name : ${e.userName}</h1>
        <h2>Age : ${e.age}</h2>
        <h2>Married : ${e.isMarried}</h2>

    </div>`
})

const body = document.querySelector('body')
body.innerHTML = clutter