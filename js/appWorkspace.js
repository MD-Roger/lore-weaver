document.addEventListener("DOMContentLoaded", main)

function main() {



    const btnNewElement = document.getElementById("btnNewElement")
    const btnRootChanger = document.getElementById("btnRootChanger")

    btnNewElement.addEventListener("click", showElements)
    btnRootChanger.addEventListener("click", showRoots)




    function showElements() {
        const listNewElement = document.getElementById("listNewElement")
        listNewElement.classList.toggle("hide");


}


    function showRoots(){
        const listRoots = document.getElementById("listRoots")
        const burgerRoots = document.getElementById("dropDownShow")
        const burgerRootsHide = document.getElementById("dropDownHide")
        listRoots.classList.toggle("hide");
        burgerRoots.classList.toggle("hide");
        burgerRootsHide.classList.toggle("hide");

}


}