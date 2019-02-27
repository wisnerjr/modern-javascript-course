let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.querySelector('#id');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

loadEventsListeners();

function loadEventsListeners() {
    guessBtn.addEventListener('click', function () {
        let guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        } else {
            if (guess === winningNum) {
                gameOver(true, `${winningNum} is correct!! YOU WIN!`);
            } else {
                guessesLeft--;
                if (guessesLeft === 0) {
                    gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
                } else {
                    guessInput.style.borderColor = 'red';
                    setMessage(`Guess is not correct. ${guessesLeft} guesses left.`, 'red');
                    guessInput.value = '';
                }
            }
        }
    });

    game.addEventListener('mousedown', function(e) {
        if(e.target.className === 'play-again') {
            window.location.reload();
        }
    });F
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color = won ? 'green' : 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    guessBtn.value = 'Play again?';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}