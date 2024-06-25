import { questions } from './data.js';

const progressValueEl = document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');
const choice3El = document.querySelector('.choice3');
const choice4El = document.querySelector('.choice4');

let currentNumber = 0;
let sum = 0;

function renderQuestion() {
  if (currentNumber === questions.length) {
    showResultPage();
    return;
  }
  const question = questions[currentNumber];

  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  choice3El.innerHTML = question.choices[2].text;
  choice4El.innerHTML = question.choices[3].text;
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%';
}
function nextQuestion(choiceNumber) {
  const question = questions[currentNumber];
  sum = sum + question.choices[choiceNumber].value;
  // mbti = 'i' or  'e'
  currentNumber = currentNumber + 1;
  renderQuestion();
}
function showResultPage() {
  location.href = './results.html?sum=' + sum; // 쿼리스트링
}
renderQuestion();

choice1El.addEventListener('click', function () {
  nextQuestion(0);
});
choice2El.addEventListener('click', function () {
  nextQuestion(1);
});
choice3El.addEventListener('click', function () {
  nextQuestion(2);
});
choice4El.addEventListener('click', function () {
  nextQuestion(3);
});
//renderQuestion();
