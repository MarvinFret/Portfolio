// Get the modal
let modal = document.getElementsByClassName("modal")[0];

// Get the button that opens the modal
let btn = document.getElementsByClassName("showcase-content__img")[0];

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let main = document.getElementsByTagName("main")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  modal.style.width = "100%";
  modal.style.height = "100%";
  // blur main
  main.classList.add("blur-2");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  main.classList.remove("blur-2");
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  modal.style.width = "33%";
  modal.style.height = "25%";
  // main.classList.remove("scale-down");
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