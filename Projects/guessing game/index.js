//initializating some value
let totalAttempt = 5;
let attempt = 0;
let totalWons = 0;
let totalLost = 0;

//finding element
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = document.querySelector("#guessingNumber");
const checkButton = document.querySelector("#check");
const resultText = document.querySelector(".resultText");
const lostWonMsg = document.createElement("p");
const remainingAttempts = document.querySelector(".remainingAttempts");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    attempt++;
    if(attempt===5){
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }if(attempt<6){
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML=`Remaining attempt:${totalAttempt-attempt}`;
    }
    guessingNumber.value="";
})

function checkResult(guessingNumber) {

    const randomNumber = getRandomNumber(5);
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `You have won`;
        totalWons++;

    } else {
        resultText.innerHTML = `You have lost ; the random
        number was : ${randomNumber}`
        totalLost++;
    }

    lostWonMsg.innerHTML = `Won:${totalWons},lost:${totalLost}`;
    lostWonMsg.classList.add(".large-text");
    cardBody.appendChild(lostWonMsg);

}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}