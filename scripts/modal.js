// Get the modal
const modal = document.querySelector(".modal");
// Get main tag of whole page
const main = document.querySelector("main");
// Get the modal main img container
const modalImg = document.querySelector(".modal-content__img");
// Get the modal slide wrapper
const slidesWrapper = document.querySelector(".modal-content__slides-wrapper");
const modalSlide = document.createElement("IMG");
const modalSlideSelector = document.querySelectorAll(".modal-content__slide");
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
  removeAllChildNodes(slidesWrapper);
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
  projectData.ProjectImgs.forEach((img, index) => {
    let projectImg = document.createElement("IMG");
    projectImg.src = img;
    projectImg.onclick = function (event) {
      const slides = document.getElementsByClassName("modal-content__slide");
      for (let i = 0; i < slides.length; i++)
        slides[i].classList.remove("slide--active");
      event.target.classList.add("slide--active");
      modalImg.src = img;
    };
    projectImg.classList.add("modal-content__slide");
    slidesWrapper.appendChild(projectImg);
  });
  document.querySelector(".modal-content__slide").classList.add("slide--active");
  modalHeader.innerHTML = projectData.Title;
  modalImg.src = projectData.ProjectImgs[0];
  modalText.innerHTML = projectData.Text;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
