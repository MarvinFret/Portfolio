



// Get the modal
let modal = document.getElementsByClassName("modal")[0];
// Get main content of whole page
let main = document.getElementsByTagName("main")[0];

// When the user clicks the img, open the modal 
function openModal(imgSrc){
  let modalImg = document.getElementsByClassName("modal-content__modal-img")[0];
  modalImg.src = imgSrc;
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  modal.style.width = "100%";
  modal.style.height = "100%";
  // blur main
  main.classList.add("blur-2");
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  main.classList.remove("blur-2");
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  modal.style.width = "33%";
  modal.style.height = "25%";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  modal.style.width = "33%";
  modal.style.height = "25%";
  main.classList.remove("blur-2");
  }
}