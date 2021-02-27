// Get the modal
const modal = document.getElementsByClassName("modal")[0];
// Get main content of whole page
const main = document.getElementsByTagName("main")[0];
// Get the main img
const modalImg = document.getElementsByClassName("modal-content__img")[0];

// When the user clicks the img, open the modal
async function openModal(project, e) {
  console.log(await fetcher.fetchFile())
  modalImg.src = e.src;
  setText(project);
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

function setText(project) {
  const textEl = document.getElementsByClassName("modal-content__text")[0];
  if (project === "shopme") {
    textEl.innerHTML =
      "This is shopme. I've designed and coded this app to help people out when they are struggling with their groceries. It was fun. To be continued!";
  }
  if (project === "wap") {
    textEl.innerHTML =
      "This is Wap. I've designed and coded this app to help people find a nice spot in nature. It's like google maps but for hipsters and nature lovers. Enjoy!";
  }
  if (project === "deep") {
    textEl.innerHTML =
      "This is deep. I've designed this webshop for bass enthusiast. The goal is to put only a few, high-class and carefully selected basses in the spotlight. The shop is supposed to be less loaded then average instrument retailers to help the user focus on what matters: a good bass.";
  }
  if (project === "mail") {
    const form = document.getElementsByTagName("form");
    console.log(Array.from(form));
    textEl.innerHTML = form;
  }
}

function switchImg(e) {
  modalImg.src = e.src;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
    modal.style.width = "33%";
    modal.style.height = "25%";
    main.classList.remove("blur-2");
  }
};
