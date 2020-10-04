/* (function () {
  function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
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
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

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

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const questions = [
    {
      question:
        "'He had a --- memory and he failed the memory test'. - Fill in the blank with one of the four options.",
      answers: {
        a: "Week",
        b: "EKe",
        c: "Woke",
        d: "Weak",
      },

      correctAnswer: "d",
    },

    {
      question:
        "'The dress still looks --- even after two months of use.' - Fill in the blank with one of the four options.",
      answers: {
        a: "New",
        b: "Knew",
        c: "Gnu",
        d: "Know",
      },

      correctAnswer: "a",
    },

    {
      question:
        "'The money he gave me helped me to --- over the difficult period.' - Fill in the blank with one of the four options.",
      answers: {
        a: "Tied",
        b: "Tried",
        c: "Tide",
        d: "Tired",
      },
      correctAnswer: "c",
    },

    {
      question:
        "'Eat everything on the plate, you should not --- food. - Fill in the blank with one of the four options.'",
      answers: {
        a: "Waste",
        b: "Waist",
        c: "West",
        d: "Vest",
      },
      correctAnswer: "a",
    },

    {
      question:
        "'He was asked to display his --- at the exhibition. - Fill in the blank with one of the four options.'",
      answers: {
        a: "Wear",
        b: "Ware",
        c: "Where",
        d: "Were",
      },
      correctAnswer: "b",
    },

    {
      question:
        "'You should --- the clothes well so they will dry faster. - Fill in the blank with one of the four options.'",
      answers: {
        a: "Ping",
        b: "Cringe",
        c: "Ring",
        d: "Wring",
      },
      correctAnswer: "d",
    },

    {
      question:
        "'This tree has a --- that is eight feet deep. - Fill in the blank with one of the four options.'",
      answers: {
        a: "Root",
        b: "Route",
        c: "Rate",
        d: "Rite",
      },
      correctAnswer: "a",
    },

    {
      question:
        "'He needs to take a --- as he has been exercising for two hours. - Fill in the blank with one of the four options.'",
      answers: {
        a: "Broke",
        b: "Bray",
        c: "Brake",
        d: "Break",
      },
      correctAnswer: "d",
    },

    {
      question:
        "'I have been wearing this --- of shoes for a long time. - Fill in the blank with one of the four options.'",
      answers: {
        a: "Pear",
        b: "Pare",
        c: "Pair",
        d: "Payer",
      },
      correctAnswer: "c",
    },

    {
      question:
        "'The --- man delivered the letter today. - Fill in the blank with one of the four options.'",
      answers: {
        a: "Male",
        b: "Mail",
        c: "Melee",
        d: "May",
      },
      correctAnswer: "b",
    },
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})(); */
