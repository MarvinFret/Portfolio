let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, type) {
  showSlides((slideIndex += n), type);
}

// Thumbnail image controls
function currentSlide(n, type) {
  showSlides((slideIndex = n), type);
}

function showSlides(n, type) {
  const slides = document.getElementsByClassName("main-content__slide");
  const dots = document.getElementsByClassName("dot-wrapper__dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].classList.remove("slide-right", "slide-left", "fade");
  slides[slideIndex - 1].style.display = "block";
  if (type === "dot") slides[slideIndex - 1].classList.add("fade");
  if (type === "right") slides[slideIndex - 1].classList.add("slide-right");
  if (type === "left") slides[slideIndex - 1].classList.add("slide-left");
  dots[slideIndex - 1].className += " active";
  changeTitleAndModalText(slideIndex);
}

function changeTitleAndModalText(n) {
  const title = document.getElementsByClassName("showcase-content__heading")[
    n - 1
  ];
  if (n === 1) {
    title.innerHTML = "Shopme";
  }
  if (n === 2) {
    title.innerHTML = "Wap";
  }
  if (n === 3) {
    title.innerHTML = "Deep";
  }
}
