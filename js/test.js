document.addEventListener("DOMContentLoaded", main)

function main() {


const btnTest = document.querySelectorAll(".testBtn")

btnTest.forEach((btn) => {
    btn.addEventListener("click", display)
  })

function display() {
    console.log("click registered")
    const displayBase = document.querySelector(".displayBase")
    const displayClicked = document.querySelector(".displayClicked")
    displayBase.classList.toggle("hidden")
    displayClicked.classList.toggle("hidden")

}


}