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

async function sendForm(e, form) {
  try{
  e.preventDefault();
  console.log(new FormData(form));
  let res = await fetch(form.action, { method: "post", body: new FormData(form) });
  console.log(res.json())
  console.log("We send post asynchronously (AJAX)");
  } catch(err){console.log(err)}
}
