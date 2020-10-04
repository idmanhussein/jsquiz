import buildQuiz from "./buildQuiz.js";
import questions from "./questions.js";

buildQuiz();
function showResults() {
  const quizContainer = document.getElementById("quiz");
  const answerContainers = quizContainer.querySelectorAll(".answers");
  const resultsContainer = document.getElementById("results");

  let numCorrect = 0;

  questions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;

      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

export default showResults;
