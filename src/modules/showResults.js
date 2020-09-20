import buildQuiz from "./buildQuiz.js";
import questions from "./questions.js";

const resultsContainer = document.getElementById("results");

function showResults(quizContainer) {
  const answerContainers = questions.map((answers) => answers.correctAnswer);

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
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

export default showResults;
// capture selected answers into an array - check if itt
