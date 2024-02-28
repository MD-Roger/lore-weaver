/******************************
 *  Menu Hamburger Miam miam
 ******************************/
document.addEventListener("DOMContentLoaded", main)

function main() {

    const btnHamShow = document.querySelector(".hamShow")
    const btnUserHamShow = document.querySelector(".userHamShow")
    const btnHamHide = document.querySelector(".hamHide")
    const btnUserHamHide = document.querySelector(".userHamHide")



    btnHamShow.addEventListener("click", hamShow)
    btnHamHide.addEventListener("click", hamHide)
    btnUserHamShow.addEventListener("click", userHamShow)
    btnUserHamHide.addEventListener("click", userHamHide)


    // function show(classModif){
    //     classModif.classList.add("hide")
    // }

    function hamShow() {
        const hamMenu = document.querySelector(btnHamShow.dataset.target)
        hamMenu.classList.toggle("hide")
        btnHamShow.classList.toggle("hide")
        btnHamHide.classList.toggle("hide")
        console.log(btnHamShow.dataset.target)

    }

    function hamHide() {
        const hamMenu = document.querySelector(btnHamHide.dataset.target)
        hamMenu.classList.add("hide")
        btnHamShow.classList.remove("hide")
        btnHamHide.classList.add("hide")
    }

    function userHamShow() {
        const hamMenu = document.querySelector(btnUserHamShow.dataset.target)
        hamMenu.classList.toggle("responsiveHide")
        btnUserHamShow.classList.toggle("responsiveHide")
        btnUserHamHide.classList.toggle("responsiveHide")
        console.log(btnUserHamShow.dataset.target)

    }

    function userHamHide() {
        const hamMenu = document.querySelector(btnUserHamHide.dataset.target)
        hamMenu.classList.toggle("responsiveHide")
        btnUserHamShow.classList.toggle("responsiveHide")
        btnUserHamHide.classList.toggle("responsiveHide")
    }

}

