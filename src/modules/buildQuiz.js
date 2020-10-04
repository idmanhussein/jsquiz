import questions from "./questions.js";

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");
  const output = [];

  questions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
      );
    }

    output.push(
      `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
              </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

export default buildQuiz;
