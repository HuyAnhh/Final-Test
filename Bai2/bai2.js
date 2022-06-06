let btnGetColor = document.querySelector(".btnGetColor")
let changeColor = document.querySelector(".changeColor")
let body = document.querySelector("body")

btnGetColor.addEventListener("click", () => {
    changeColor.style.display = "block"
})

let btnChangeColor = document.querySelectorAll(".btnChangeColor")
btnChangeColor.forEach(function (button) {
    button.addEventListener("click", (event) => {
        let color = (((event.target).parentElement).querySelector("span")).innerText
        body.style.backgroundColor = color
    })
})





