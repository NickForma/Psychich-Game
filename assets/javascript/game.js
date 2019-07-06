window.onload = function () {

    let letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)].toLowerCase();
    console.log(randomLetter);

    let newLetter = function(nextLetter){
        randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)].toLowerCase();
        console.log(randomLetter);
        guessesCount = [];
        guessesLeftCount = 10;
    }


    let winsCount = 0;
    let lossesCount = 0;
    let guessesLeftCount = 10;
    let guessesCount = [];

    let wins = document.getElementById("wins");
    let losses = document.getElementById("losses");
    let guessesLeft = document.getElementById("guessesLeft");
    let guesses = document.getElementById("guessCount");

    //user Input
    document.addEventListener("keyup", function (e) {
        let key = e.key.toLowerCase();
        compareLetter(key);
        guessesCount.push(key);
    })

    // comparing imput to randomLetter
    let compareLetter = function (letter) {
        console.log(letter);
        if (letter === randomLetter) {
            alert("You're Right!");
            winsCount++;
            wins.innerText = winsCount;
            newLetter();

        }if (guessesLeftCount === 0) {
            alert("You're Wrong!");
            lossesCount++;
            losses.innerText = lossesCount;
            newLetter();
            
        } else {
            guessesLeftCount--;
            guessesLeft.innerText = guessesLeftCount;
            guesses.innerText = guessesCount;
        }


    }
















}