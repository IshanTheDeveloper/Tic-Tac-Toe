let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button"); 
let newGameBtn = document.querySelector("#newButton"); 
let msg = document.querySelector("#mssg");
let turnO = true;//flag
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { 
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let box1val = boxes[pattern[0]].innerText;
        let box2val = boxes[pattern[1]].innerText;
        let box3val = boxes[pattern[2]].innerText;

        if (box1val !== "" && box2val !== "" && box3val !== "") {
            if (box1val === box2val && box2val === box3val) {
                showWinner(box1val);
                return;
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`; 
    msg.style.opacity="1";
    disableBoxes();
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

resetButton.addEventListener("click", () => {
    resetGame();
});

// Function to reset the game
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
       
    });
    turnO = true;
};
 newGameBtn.addEventListener("click",resetGame);


