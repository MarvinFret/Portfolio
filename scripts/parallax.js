const heroImageWrapper = document.getElementsByClassName(
  "hero__img-wrapper"
)[0];
document.addEventListener("scroll", function () {
  let shrink = 1 - this.documentElement.scrollTop / 500;
  let grow = this.documentElement.scrollTop / 100;
  heroImageWrapper.style.transform = "scale(" + shrink + ")";
  // heroImageWrapper.style.filter = 'blur(' + grow + 'px)';
  // heroImageWrapper.style.top = grow + 'px';
});
