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


function sendForm(e,form) {
  fetch(form.action,{method:'post', body: new FormData(form)});

  console.log('We send post asynchronously (AJAX)');
  e.preventDefault();
}