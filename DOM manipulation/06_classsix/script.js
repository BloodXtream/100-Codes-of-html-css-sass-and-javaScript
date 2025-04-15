const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLable = document.querySelector('.error-lable')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')


checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allGoalsAdded = [...inputFields].every((input) => {
            return input.value
        })
        if (allGoalsAdded) {
            checkbox.parentElement.classList.toggle('compleated')
            progressValue.style.width = '33.33%'
        } else {
            errorLable.parentElement.classList.add('show-error')
        }
    })
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        errorLable.parentElement.classList.remove('show-error')
    })
})
