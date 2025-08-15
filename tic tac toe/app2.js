boxes = document.querySelectorAll(".box"),
    gameArea = document.querySelector(".game-container"), indicators = document.querySelectorAll(".turn"), endMessege = document.querySelector(".messege-container"),
    replayBtn = document.querySelector(".Replay"), audios = document.querySelectorAll("audio");



let state, moveCount = 0;


const gameEnd = (point) => {
    setTimeout(() => {
        gameArea.classList.remove("active");
        endMessege.classList.add("active");

        if (point == 'x') {
            endMessege.querySelector("h1").innerHTML = "Plyer X won the game!";
            audios[1].play();
        }
        else if (point == 'o') {
            endMessege.querySelector("h1").innerHTML = "Plyer O won the game!";
            audios[1].play();
        }
        else {
            endMessege.querySelector("h1").innerHTML = "Game has drawn!";
            audios[2].play();
        }
    }, 700)
}

const checkStatus = () => {
    if (boxes[0].innerHTML == "X" && boxes[1].innerHTML == "X" && boxes[2].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[3].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[5].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[6].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[0].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[6].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[1].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[7].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[2].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[8].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[0].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[8].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[2].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[6].innerHTML == "X") {
        gameEnd('x');
    }
    else if (boxes[0].innerHTML == "O" && boxes[1].innerHTML == "O" && boxes[2].innerHTML == "O") {
        gameEnd('o');
    }
    else if (boxes[3].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[5].innerHTML == "O") {
        gameEnd('o');
    }
    else if (boxes[6].innerHTML == "O" && boxes[7].innerHTML == "O" && boxes[8].innerHTML == "O") {
        gameEnd('o');
    }
    else if (boxes[0].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[6].innerHTML == "O") {
        gameEnd('o');
    }
    else if (boxes[1].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[7].innerHTML == "O") {
        gameEnd('o');
    }
    else if (boxes[2].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[8].innerHTML == "O") {
        gameEnd('o');
    }
    else if (boxes[0].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[8].innerHTML == "O") {
        gameEnd('o');
    }
    else if (boxes[2].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[6].innerHTML == "O") {
        gameEnd('o');
    }
    else if (moveCount == 9) {
        gameEnd('d');
    }
}


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (state == 0) {
            audios[0].play();
            box.innerHTML = "X";
            box.classList.add("deactivate");
            state = 1;
            checkStatus();
            indicators[0].classList.remove("active");
            indicators[1].classList.add("active");
            moveCount++;
        }
        else {
            audios[0].play();
            box.innerHTML = "O";
            box.classList.add("deactivate");
            state = 0;
            checkStatus();
            indicators[1].classList.remove("active");
            indicators[0].classList.add("active");
            moveCount++;
        }
    })
})

const choseRandomOne = () => {
    let random = Math.floor(Math.random() * 2);

    if (random == 0) {
        state = 0;
        indicators[1].classList.remove("active");
        indicators[0].classList.add("active");
    }
    else {
        state = 1;
        indicators[0].classList.remove("active");
        indicators[1].classList.add("active");
    }
}

window.addEventListener("load", choseRandomOne());


replayBtn.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("deactivate");
    }
    moveCount = 0;
    endMessege.classList.remove("active");
    gameArea.classList.add("active");
})