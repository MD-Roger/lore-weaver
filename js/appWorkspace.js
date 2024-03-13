document.addEventListener("DOMContentLoaded", main)

function main() {



    const btnNewElement = document.getElementById("btnNewElement")
    const btnRootChanger = document.getElementById("btnRootChanger")
    const displaceSidebarBtn = document.getElementById("btnSidebar")

    btnNewElement.addEventListener("click", showElements)
    btnRootChanger.addEventListener("click", showRoots)
    displaceSidebarBtn.addEventListener('click', displaceSidebar)




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

    function displaceSidebar() {
        const tree = document.getElementById("tree")
        const sidebar = document.getElementById("sidebar")
        tree.classList.toggle("sidebarHidden")
        sidebar.classList.toggle("containerSidebar")
        sidebar.classList.toggle("sidebarPressed")
    }


}