/******************************
 *  Menu Hamburger Miam miam
 ******************************/

const btnNavShow = document.querySelector(".nav-show")
const btnNavHide = document.querySelector(".nav-hide")
const navMenuMobile = document.querySelector(".collapse");
const navMenu = document.querySelector(".collapse")

btnNavShow.addEventListener("click", afficherNavigation);
btnNavHide.addEventListener("click", cacherNavigation);

function afficherNavigation() {
    const navMenu = document.querySelector(btnNavShow.dataset.target);
    navMenu.classList.remove("hide");
    btnNavShow.classList.add("hide");
    btnNavHide.classList.remove("hide");

    console.log(btnNavShow.dataset.target);
}

function cacherNavigation() {

    const navMenu = document.querySelector(btnNavHide.dataset.target);
    navMenu.classList.add("hide");
    btnNavShow.classList.remove("hide");
    btnNavHide.classList.add("hide");

    console.log(btnNavHide.dataset.target);
}