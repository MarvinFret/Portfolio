const heroImageWrapper = document.getElementsByClassName(
  "hero__img-wrapper"
)[0];
const heroTextWrapper = document.getElementsByClassName(
  "hero__text-wrapper"
)[0];
document.addEventListener("scroll", function scaleHero() {
  if (this.documentElement.scrollTop < 500) {
    let shrink = 1 - this.documentElement.scrollTop / 500;
    let grow = this.documentElement.scrollTop / 100;
    heroImageWrapper.style.transform = "scale(" + shrink + ")";
    heroTextWrapper.style.transform = "scale(" + shrink + ")";
  }
});
