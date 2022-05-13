'use strict';
//storing datas into variables
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const initialValue1 = document.querySelector('#score--0');
const initialValue2 = document.getElementById('score--1');
const invisibleDice = document.querySelector('.dice');
const CS2 = document.querySelector('.current-score');

let btnNew = document.querySelector('.btn--new');
let rollADice = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

//hiding the dice
invisibleDice.classList.add('hidden');
let score, currentScore, ActivePlayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  ActivePlayer = 0;
  playing = true;
  initialValue1.textContent = 0;
  initialValue2.textContent = 0;

  current0.textContent = 0;
  current1.textContent = 0;

  invisibleDice.classList.add('hidden');

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');

  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${ActivePlayer}`).textContent = 0;
  // current0.textContent = 0;
  // current1.textContent = 0;
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;

  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

rollADice.addEventListener('click', function () {
  if (playing === true) {
    const randomdice = Math.trunc(Math.random() * 6) + 1;

    invisibleDice.classList.remove('hidden');

    invisibleDice.src = `dice-${randomdice}.png`;

    if (randomdice !== 1) {
      currentScore += randomdice;
      document.getElementById(
        `current--${ActivePlayer}`
      ).textContent = currentScore;

      // current0.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[ActivePlayer] += currentScore;
    document.getElementById(`score--${ActivePlayer}`).textContent =
      score[ActivePlayer];
    if (score[ActivePlayer] >= 100) {
      playing = false;
      invisibleDice.classList.add('hidden');
      document
        .querySelector(`.player--${ActivePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${ActivePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
