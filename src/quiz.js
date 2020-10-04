import questions from "./modules/questions.js";
import buildQuiz from "./modules/buildQuiz.js";
import showResults from "./modules/showResults.js";
import showSlide from "./modules/showSlide.js";
import showNextSlide from "./modules/showSlide.js";
import showPreviousSlide from "./modules/showSlide.js";

// it would be nice to import the questions from another file. a json file for eg.
// but an imported function would be fine for now.

//This is where the entire execution of the script is done, but everything it uses is global,
//nothing is passed to the buildQuiz function. So when we look at quizContainer, it is always
//referred to from somewhere else, which makes it hard to follow what is happening.
buildQuiz();

// I have refactored the repeated code into a function called addClickToButton
// What it shows is that by moving the code that is repeated out to a function,
// it reduces the complexity of the code. Before the submit button was defined above,
// and the things that were done to each button were spread about.
// By moving it all together, we make it easier to read!
