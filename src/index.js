import showResults from "./modules/showResults.js";
import questions from "./modules/questions.js";
import buildQuiz from "./modules/buildQuiz.js";

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", showResults);
