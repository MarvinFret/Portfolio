// Get the modal
const modal = document.querySelector(".modal");
// Get main tag of whole page
const main = document.querySelector("main");
// Get the modal main img container
const modalImg = document.querySelector(".modal-content__img");
//Get the modal main text container
const modalText = document.querySelector(".modal-content__text");
//get the modal header container
const modalHeader = document.querySelector(".modal-content__header");

// When the user clicks the img, open the modal
async function openModal(projectTitle) {
  setTextAndImages(projectTitle);
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  modal.style.width = "100%";
  modal.style.height = "100%";
  // main
  main.classList.add("blur-2");
  document.body.classList.add("disable-scrolling");
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  modal.style.width = "33%";
  modal.style.height = "25%";
  //main
  main.classList.remove("blur-2");
  document.body.classList.remove("disable-scrolling");
}

async function setTextAndImages(projectTitle) {
  const response = await fetcher.fetchFile();
  const projectData = response.Projects.filter(
    (project, index) => project.Title === projectTitle
  )[0];
  modalHeader.text = projectData.Title;
  modalImg.src = projectData.MainImageURL;
  modalText.innerHTML = projectData.Text;
}

function switchImg(e) {
  modalImg.src = e.src;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
