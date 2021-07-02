'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct answer';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = ' Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = ' Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
