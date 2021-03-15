const form = document.querySelector("form");

const submitButton = document.querySelector(".contact-form__submit-button");
const letterIllu = document.querySelector(".contact-form__letter-illu");
const letterIlluWrapper = document.querySelector(
  ".contact-form__letter-illu-wrapper"
);

const handleSubmit = (e) => {
  e.preventDefault();
  if (checkRequiredFields()) {
    letterIlluWrapper.classList.add("send");
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(function (response) {
        if (response.ok) {
          console.log("Form successfully submitted");
          letterIlluWrapper.innerHTML = "Success!";
          return;
        }
        return Promise.reject(response);
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.warn(error);
        setTimeout(function () {
          letterIlluWrapper.innerHTML = "Failed &times;";
        }, 400);
      })
      .finally(() => {
        setTimeout(function () {
          letterIlluWrapper.classList.remove("send");
        }, 400);
      });
  }
  if (!checkRequiredFields()) console.log("fields requoired");
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

function checkRequiredFields() {
  let fullname = document.querySelector("#fullname").value.replace(/\s/g, '');
  let email = document.querySelector("#email").value.replace(/\s/g, '');
  let subject = document.querySelector("#subject").value.replace(/\s/g, '');
  let message = document.querySelector("#message").value.replace(/\s/g, '');
  if (fullname && email && subject && message) return true;
  return false;
}
