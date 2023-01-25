console.log("DOM Project");

const body = document.body;
const slides = document.querySelectorAll(".slide");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

let activeSlide = 0;

// console.log(slides[0].getElementsByClassName.backgriundImage)

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide, index) => {
    index === activeSlide
      ? slide.classList.add("active")
      : slide.classList.remove("active");
  });
}

setBgToBody();

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});
