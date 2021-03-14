const form = document.querySelector("form");
const submitButton = document.querySelector(".contact-form__submit-button");
const letterIllu = document.querySelector(".contact-form__letter-illu");
const letterIlluWrapper = document.querySelector(
  ".contact-form__letter-illu-wrapper"
);

const handleSubmit = (e) => {
  e.preventDefault();
  letterIlluWrapper.classList.add("send");
  const formData = new FormData(form);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Form successfully submitted");
        letterIlluWrapper.innerHTML="Success!";
        return
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn(error);
      letterIlluWrapper.innerHTML="Failed &times;";
    })
    .finally(() => {
        
      setTimeout(function(){letterIlluWrapper.classList.remove("send")},400);
    });
};

const flipImg = (e) => {
  e.preventDefault;

  letterIllu.classList.add("flip");

  setTimeout(function () {
    if (e.type === "mouseenter") {
      letterIllu.src = "../img/illu/Letter_front.png";
    }
    if (e.type === "mouseleave") {
      letterIllu.src = "../img/illu/Letter_back.png";
    }
  }, 150);

  setTimeout(function () {
    letterIllu.classList.remove("flip");
  }, 300);
};

form.addEventListener("submit", handleSubmit);
submitButton.addEventListener("mouseenter", flipImg);
submitButton.addEventListener("mouseleave", flipImg);
