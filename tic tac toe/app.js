const startMessege = document.querySelector(".start-container"), choseBtns = document.querySelectorAll(".btns button"), boxes = document.querySelectorAll(".box"),
    gameArea = document.querySelector(".game-container"), indicators = document.querySelectorAll(".turn"), endMessege = document.querySelector(".messege-container"),
    replayBtn = document.querySelector(".Replay"), link = document.querySelector("a"), audios = document.querySelectorAll("audio");

let player, state, moves = [], computer;

let totalMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8], MovesTaken = [];

//console.log(boxes.length)


const gameEnd = (point) => {
    setTimeout(() => {
        gameArea.classList.remove("active");
        endMessege.classList.add("active");

        if (point == 'x') {
            if (player == "X") {
                endMessege.querySelector("h1").innerHTML = "You won the game!";
                audios[1].play();
            }
            else {
                endMessege.querySelector("h1").innerHTML = "Computer won the game!";
                audios[2].play();
            }
        }
        else if (point == 'o') {
            if (player == "O") {
                endMessege.querySelector("h1").innerHTML = "You won the game!";
                audios[1].play();
            }
            else {
                endMessege.querySelector("h1").innerHTML = "Computer won the game!";
                audios[2].play();
            }
        }
        else {
            endMessege.querySelector("h1").innerHTML = "Game has drawn!";
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
    else if (MovesTaken.length == 9) {
        gameEnd('d');
    }
}




const computerMove = () => {
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].classList.add("deactivate");
    }
    //console.log("computer moving");
    let randomNum = Math.floor(Math.random() * totalMoves.length);
    //console.log("random number: ", randomNum);

    setTimeout(() => {
        if (computer == "X") {
            boxes[totalMoves[randomNum]].innerHTML = "X";
            indicators[0].classList.remove("active");
            indicators[1].classList.add("active");
        }
        else {
            boxes[totalMoves[randomNum]].innerHTML = "O";
            indicators[1].classList.remove("active");
            indicators[0].classList.add("active");
        }
        audios[0].play();

        MovesTaken.push(totalMoves[randomNum]);
        //console.log("moves taken: ", MovesTaken);
        //console.log("random number in array: ", totalMoves[randomNum]);
        let indexNum = totalMoves.indexOf(totalMoves[randomNum]);
        //console.log("index of random number in array: ", indexNum);
        totalMoves.splice(indexNum, 1);
        //console.log("remaining moves: ", totalMoves);
        checkStatus();



        for (let n = 0; n < 9; n++) {
            if (n == MovesTaken[n]) {
                continue;
            }
            else {
                boxes[n].classList.remove("deactivate");
            }
        }
    }, 1000)


}

const startGame = (p) => {
    player = p;
    let firstTurn = Math.floor(Math.random() * 2);
    if (p == "X") {
        computer = "O";
    }
    else {
        computer = "X";
    }

    if (firstTurn == 1) {
        computerMove();
        state = 1;
    }
    else {
        if (computer == "X") {
            indicators[1].classList.add("active");
        }
        else {
            indicators[0].classList.add("active");
        }
    }

}


choseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        startGame(btn.dataset.value);
        startMessege.classList.remove("active");
        link.classList.remove("active");
        gameArea.classList.add("active")
    })
})


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerHTML != "X" && box.innerHTML != "O") {
            if (player == "X") {
                box.innerHTML = "X";
                indicators[0].classList.remove("active");
                indicators[1].classList.add("active");
            }
            else {
                box.innerHTML = "O";
                indicators[1].classList.remove("active");
                indicators[0].classList.add("active");
            }
            //console.log(box.dataset.position - 1);
            audios[0].play();
            let index = totalMoves.indexOf(parseInt(box.dataset.position));
            totalMoves.splice(index, 1);
            //console.log("player given: ", box.dataset.position);
            //console.log("remaing moves: ", totalMoves);
            MovesTaken.push(parseInt(box.dataset.position));
            //console.log(MovesTaken);
            for (let j = 0; j < boxes.length; j++) {
                boxes[j].classList.add("deactivate");
            }
            checkStatus();

            if (MovesTaken.length < 9) {
                computerMove();
            }
        }
    })
})

replayBtn.addEventListener("click", () => {
    for (let m = 0; m < boxes.length; m++) {
        boxes[m].innerHTML = "";
        boxes[m].classList.remove("deactivate");

        totalMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        MovesTaken = [];
        endMessege.classList.remove("active");
        startMessege.classList.add("active");
        link.classList.add("active");
    }
})