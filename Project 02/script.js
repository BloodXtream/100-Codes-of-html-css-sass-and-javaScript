const container = document.querySelector("#container")
const i = document.querySelector("i")


container.addEventListener("dblclick", () => {
    i.style.transform = "translate(-50%, -50%) scale(1)"
    i.style.color = "crimson"
    i.style.opacity = "0.6"

    setTimeout(() => {
        i.style.opacity = "0"
    }, 800)

    setTimeout(() => {
        i.style.transform = "translate(-50%, -50%) scale(0)"
    }, 800)
})
