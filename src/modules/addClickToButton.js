import showResults from "./showResults.js";
const submitButton = addClickToButton("submit", showResults);

export default function addClickToButton(buttonId, slide) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", slide);
  return button;
}
