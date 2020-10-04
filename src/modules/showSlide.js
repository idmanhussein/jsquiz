import buildQuiz from "./buildQuiz.js";
import showResults from "./showResults.js";
import addClickToButton from "./addClickToButton.js";

buildQuiz();
showResults();

export default function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  //we can refactor these display changes to a couple functions
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

const nextButton = addClickToButton("next", showNextSlide);
const previousButton = addClickToButton("previous", showPreviousSlide);
function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
