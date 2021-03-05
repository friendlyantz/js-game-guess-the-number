'use strict';

// const secretNumber = Math.trunc(Math.random() * 20 + 1);
let secretNumber = 10
let score = 20;
let highscore = 0;


const message = (message) => {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess);
  console.log('secretnumber: ' + secretNumber, typeof secretNumber);

  // WIN OR ========
  // ==========

  // === evaluation LOGIC ====
  if (guess === secretNumber && score > 0) {
    document.querySelector('.number').textContent = secretNumber
    message('Congrats! Yeeew 🎆')
    document.querySelector('body').style.backgroundColor = '#68830a'
    highscore = score
  } else if (score < 1) { //FAIL
    document.querySelector('.number').textContent = secretNumber
    message('You lost🏳️')
    score = 0
  }

  if (!guess) {
    message('please type a positive number🚸')
  } else if (guess < secretNumber) {
    message('go up 📈')
    score--
  } else if (guess > secretNumber) {
    message('go down ↘️')
    score--
  }



  document.querySelector('.score').textContent = score
  document.querySelector('.highscore').textContent = highscore

})

// document.querySelector('.number').textContent = number


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // secretNumber = 2
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  message('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
