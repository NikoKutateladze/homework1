let randomNumberGenerateButton = document.getElementById('generate-random-number');
let checkButton = document.getElementById('check-number');
let startAgainBtn = document.getElementById('start-again');
let myNumber = document.getElementById('my-number');
let randomNum = document.getElementById('random-number');

let randomNumber = Math.floor(Math.random() * 100) + 1;
amountOfAttempts = 0;



randomNumberGenerateButton.addEventListener("click", function () {
    checkButton.classList.remove('hidden');
    startAgainBtn.classList.remove('hidden');
    myNumber.classList.remove('hidden');
    randomNumberGenerateButton.classList.add('hidden');

})
startAgainBtn.addEventListener("click", () => {
    amountOfAttempts = 0;
    checkButton.classList.add('hidden');
    startAgainBtn.classList.add('hidden');
    myNumber.classList.add('hidden');
    randomNumberGenerateButton.classList.remove('hidden');

    randomNumber = Math.floor(Math.random() * 100) + 1;
})
checkButton.addEventListener("click", () => {
    amountOfAttempts += 1;

    console.log(randomNumber);

    if (randomNumber == Number(myNumber.value)) {
        randomNum.textContent = 'YOU WON!';
        alert(`Congrats you guessed the random Number on ${amountOfAttempts} try The page will Refresh automatically`);
        location.reload();
    }
    if (randomNumber != Number(myNumber.value) & Number(myNumber.value) > randomNumber) {
        randomNum.textContent = 'TRY AGAIN'
        alert(`Incorrect Number , ${Number(myNumber.value)} is more than random number ${10 - amountOfAttempts} tries left`)
    }
    if (randomNumber != Number(myNumber.value) & Number(myNumber.value) < randomNumber) {
        randomNum.textContent = 'TRY AGAIN'
        alert(`Incorrect Number , ${Number(myNumber.value)} is less than random number ${10 - amountOfAttempts} tries left`)
    }
    if (10 - amountOfAttempts == 0) {
        alert('Click PLay Again to Play one more time')
    }
})