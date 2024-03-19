document.addEventListener("DOMContentLoaded", main)

function main() {



    const btnNewElement = document.getElementById("btnNewElement")
    const btnRootChanger = document.getElementById("btnRootChanger")
    const displaceSidebarBtn = document.getElementById("btnSidebar")
    const btnFolder = document.getElementById("btnFolder")
    const tree = document.querySelector(".treeCollapse")
    let idCounter = 1

    btnNewElement.addEventListener("click", showElements)
    btnRootChanger.addEventListener("click", showRoots)
    displaceSidebarBtn.addEventListener('click', displaceSidebar)
    btnFolder.addEventListener("click", newFolder)


   

    function  newFolder(){

       

       

        //Construction du folder//
       const newTreeElement = document.createElement("div");

       newTreeElement.classList.add("treeElement");
       
        const newFolder = document.createElement("div");
        newFolder.classList.add("folder");
        newFolder.id ="folder" + idCounter;

        const newButton = document.createElement("button");
        newButton.classList.add("buttonFolder")
        newButton.id ="buttonFolder" + idCounter;
        
        const newPlus = document.createElement("img");
        newPlus.classList.add("folderDeploy")
        newPlus.src="assets/plus-symbol-button.png";
        newPlus.id ="plus" + idCounter;
        const newMinus = document.createElement("img");
        newMinus.classList.add("folderRetract")
        newMinus.id= "minus"+ idCounter;
        newMinus.src="assets/minus-symbol.png";
        const newPar = document.createElement("p");
        newPar.innerHTML="PHP"
        const displayFunction = displayFactory(idCounter);

        // Use the display function as the onclick event handler
        newButton.onclick = displayFunction;
      
    // assemblage du folder//
        newButton.appendChild(newPlus);
        newButton.appendChild(newMinus);
        newFolder.appendChild(newButton);
        newFolder.appendChild(newPar);
        newTreeElement.appendChild(newFolder);
        tree.appendChild(newTreeElement);
        
        //On ajoute le folder au tree
        idCounter++
        console.log(idCounter)
    }
    function displayFactory(toto) {
        return function () {
          display(toto);
        }
      }

      function display(toto) {
        console.log("click registered for folder " + toto);
        const displayBase = document.getElementById("plus" + toto)
        const displayClicked = document.getElementById("minus" + toto)
        displayBase.classList.toggle("folderRetract")
        displayClicked.classList.toggle("folderRetract")
      }



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