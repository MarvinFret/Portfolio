// document.querySelector("contact-form").addEventListener("submit", handleSubmit);

// const handleSubmit = (e) => {
//   e.preventDefault()
//   let myForm = document.querySelector('contact-form');
//   let formData = new FormData(myForm)
//   console.log(formData);
// fetch('/', {
//   method: 'POST',
//   headers: { "Content-Type": "application/x-www-form-urlencoded" },
//   body: new URLSearchParams(formData).toString()
// }).then(() => console.log('Form successfully submitted')).catch((error) =>
//   alert(error))
// }

// async function sendForm(e, form) {
//   e.preventDefault();
//   console.log(this)
//   try{
//   let res = await fetch('/', { method: "post", body: new FormData(form) });
//   console.log(res.json())
//   console.log("We send post asynchronously (AJAX)");
//   } catch(err){console.log(err)}
// }

contactForm.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch('/', {
    method: 'POST',
    body: new FormData(contactForm)
  });

  let result = await response.json();

  alert(result.message);
};
