const startBtn = document.querySelector("#startBtn");
const timer = document.querySelector("#Timer");
let time = 75;

const questionsArr = [
  {
    question: "What does JS stand for?",
    options: ["Javascript", "Not Javascript", "Java", "Juicy Slices"],
    answer: "Javascript",
    id: 1,
  },
  {
    question: "What does CS stand for ",
    options: [
      "Javascript",
      "Computer Science",
      "Coffee Supreme",
      "Computer Stuff",
    ],
    answer: "Computer Science",
    id: 2,
  },
  {
    question: "What does CS stand for ",
    options: [
      "Javascript",
      "Computer Science",
      "Coffee Supreme",
      "Computer Stuff",
    ],
    answer: "Computer Science",
    id: 3,
  },
];
let questionIndex = 0;

function startTimer() {
  //add timer

  //timer
  setInterval(function () {
    time--;
    timer.textContent = time;
  }, 1000);
}

function displayQuestions() {
  if (questionIndex < questionsArr.length + 1) {
    console.log(questionsArr[questionIndex]);

    displayAnswers(questionsArr[questionIndex].options);
  }
}

function displayAnswers(options) {
  for (let index = 0; index < options.length; index++) {
    console.log(options[index]);
  }

  // if the chosen answer matches the answer in your question object, increase the questionIndex by 1
}

function nextQuestion() {}
function selectAnswer() {}
function submitAnswer() {}

function startQuiz() {
  startTimer();
  displayQuestions();
}

startBtn.addEventListener("click", startQuiz);
