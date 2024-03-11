/******************************
 *  Menu Hamburger Miam miam
 ******************************/
document.addEventListener("DOMContentLoaded", main)

function main() {

    const btnHamShow = document.querySelector(".hamShow")
    const btnHamHide = document.querySelector(".hamHide")
    const btnHamParams = document.getElementById("btnParams")
  




    btnHamShow.addEventListener("click", hamShow)
    btnHamHide.addEventListener("click", hamHide)
    btnHamParams.addEventListener("click", toggleParams)




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

    function toggleParams() {
        const params = document.getElementById("ulParams")
        params.classList.add("ulParams");
        params.classList.toggle("hide");
    }

 
}
