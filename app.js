const startBtn = document.querySelector("#startBtn");
const timer = document.querySelector("#Timer");
let time = 75;

const questionsArr = [
  {
    question: "What does JS stand for?",
    options: ["Javascript", "Not Javascript", "Java", "Juicy Slices"],
    answer: "Javascript",
  },
  {
    question: "What does CS stand for ",
    options: [
      "Javascript",
      "Computer Science",
      "Coffee Supreme",
      "Juicy Slices",
    ],
    answer: "Computer Science",
  },
  {
    question: "What does CS stand for ",
    options: [
      "Javascript",
      "Computer Science",
      "Coffee Supreme",
      "Juicy Slices",
    ],
    answer: "Computer Science",
  },
];

startBtn.addEventListener("click", function () {
  //add timer

  setInterval(function () {
    time--;
    timer.textContent = time;
  }, 1000);
});

function nextQuestion() {}

function selectAnswer() {}

function submitAnswer() {}
