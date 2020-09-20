import questions from "./questions.js";
import showResults from "./showResults.js";

const submitButton = document.getElementById("submit");
const quizContainer = document.getElementById("quiz");

function buildQuiz() {
  const output = [];

  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" class="radio-button" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
  submitButton.addEventListener("click", showResults(quizContainer));
}

export default buildQuiz;
