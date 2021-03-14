const form = document.querySelector("form");

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(function (response) {
      if (response.ok) {
        return console.log("Form successfully submitted");
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn(error);
    });
};

form.addEventListener("submit", handleSubmit);

// let myForm = document.getElementById('pizzaOrder');
//   let formData = new FormData(myForm)
//   fetch('/', {
//     method: 'POST',
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString()
//   }).then(() => console.log('Form successfully submitted')).catch((error) =>
//     alert(error))
