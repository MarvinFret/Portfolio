const form = document.querySelector("form");
const submitButton = document.querySelector(".contact-form__submit-button");
const letterIllu = document.querySelector(".contact-form__letter-illu");
const letterIlluWrapper = document.querySelector(
  ".contact-form__letter-illu-wrapper"
);
const textWarning = document.querySelector(
  ".contact-form__required-fields-warning"
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
          letterIlluWrapper.innerHTML =
            "<span class='contact-form__send-success slide-in-from-bottom'>Successfully Send &#10004;</span>";
          form.reset();
          return;
        }
        return Promise.reject(response);
      })
      .catch(function (error) {
        console.warn(error);
        setTimeout(function () {
          letterIlluWrapper.innerHTML =
            "<span class='contact-form__send-warning slide-in-from-bottom'>Sending Failed &#10008;</span>";
        }, 400);
      })
      .finally(() => {
        setTimeout(function () {
          letterIlluWrapper.classList.remove("send");
        }, 400);
      });
  }
  if (!checkRequiredFields()) {
    setTimeout(function () {
      letterIllu.classList.remove("shake");
      textWarning.classList.add("slide-in-from-bottom");
      textWarning.style.opacity = 1;
    }, 400);
  }
};

function flipImg(e) {
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
}

function checkRequiredFields() {
  let fullname = document.querySelector("#fullname").value.replace(/\s/g, "");
  let email = document.querySelector("#email").value.replace(/\s/g, "");
  let subject = document.querySelector("#subject").value.replace(/\s/g, "");
  let message = document.querySelector("#message").value.replace(/\s/g, "");
  if (fullname && email && subject && message) {
    if (textWarning.classList.contains("slide-in-from-bottom")) {
      textWarning.classList.remove("slide-in-from-bottom");
      textWarning.classList.add("slide-out-to-bottom");
      setTimeout(function () {
      textWarning.style.opacity = 0;
    }, 400);
    }
    
    return true;
  }
  letterIllu.classList.add("shake");
  return false;
}

form.addEventListener("submit", handleSubmit);
submitButton.addEventListener("mouseenter", flipImg);
submitButton.addEventListener("mouseleave", flipImg);
