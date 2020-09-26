(function () {
  function buildQuiz() {
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

    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
  }

  function showSlide(n) {
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

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");

  // it would be nice to import the questions from another file. a json file for eg.
  // but an imported function would be fine for now.
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
      //this answer should be d
      correctAnswer: "a",
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
      //this answer should be a
      correctAnswer: "b",
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

  //This is where the entire execution of the script is done, but everything it uses is global,
  //nothing is passed to the buildQuiz function. So when we look at quizContainer, it is always
  //referred to from somewhere else, which makes it hard to follow what is happening.
  buildQuiz();

  // I have refactored the repeated code into a function called addClickToButton
  // What it shows is that by moving the code that is repeated out to a function,
  // it reduces the complexity of the code. Before the submit button was defined above,
  // and the things that were done to each button were spread about.
  // By moving it all together, we make it easier to read!
  const previousButton = addClickToButton("previous", showPreviousSlide);
  const nextButton = addClickToButton("next", showNextSlide);
  const submitButton = addClickToButton("submit", showResults);

  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);
})();

function addClickToButton(buttonId, slide) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", slide);
  return button;
}

