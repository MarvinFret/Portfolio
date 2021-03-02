const observer = new IntersectionObserver(
  function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
      document.addEventListener("scroll", fanPhones);
    }
    if (entries[0].isIntersecting === false)
      document.removeEventListener("scroll", fanPhones);
  },
  { threshold: [0] }
);

observer.observe(document.querySelector(".projects-section__phone"));

function fanPhones() {
  let deg =
    100 -
    document.querySelector(".projects-section__phone").getBoundingClientRect()
      .top /
      10;
  if (deg > 0 && deg <= 60) {
    document
      .querySelectorAll(".projects-section__phone")
      .forEach((el, index) => {
        if (deg <= 15) el.style.transform = "rotate(" + deg + "deg)";
        if (index > 0 && deg <= 30)
          el.style.transform = "rotate(" + deg + "deg)";
        if (index > 1 && deg <= 45)
          el.style.transform = "rotate(" + deg + "deg)";
        if (index > 2) el.style.transform = "rotate(" + deg + "deg)";
      });
  }
}
