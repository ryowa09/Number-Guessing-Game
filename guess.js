const numBox = document.getElementById("numBox");
const result = document.getElementById("result");
const attempts = document.getElementById("attempts");

const minNum = 1;
const maxNum = 50;

let randomNum;
let input;
let attemptCount = 0;

function gameStart() {
    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    
    guessBtn.disabled = false;
    numBox.disabled = false;
    startBtn.disabled = true;
}

function guess() {
    input = Number(numBox.value);

    if (input < minNum || input > maxNum || input == "") {
        result.textContent = `${minNum} - ${maxNum} lang ang ilalagay mo nigga`;
    }
    else {
        if (input === randomNum) {
            result.textContent = `Ang galing mo NIGGA! Ang tamang number ay: ${randomNum}`;
            attemptCount++;
            attempts.textContent = `${attemptCount}`;
            startBtn.disabled = true;
            guessBtn.disabled = true;
        }
        else if (input < randomNum) {
            result.textContent = "Mababa! Taasan mo pa negro";
            attemptCount++;
            attempts.textContent = `${attemptCount}`;
        }
        else {
            result.textContent = "Mataas! Babaan mo negro";
            attemptCount++;
            attempts.textContent = `${attemptCount}`;
        }
    }
}

function resetGame() {
    attemptCount = 0; // Reset attempts
    attempts.textContent = ""
    numBox.value = ""; // Clear the input field
    result.textContent = "NIGGA"; // Clear the result text // Reset attempts text
    guessBtn.disabled = true; // Disable the Guess button until game starts
    numBox.disabled = true; // Disable the input box
    startBtn.disabled = false;
}