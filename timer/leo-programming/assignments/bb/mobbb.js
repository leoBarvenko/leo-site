let left = false;
let right = false;
let y = 0;
let x = 500;
let xd = 1;
let yd = 1;
let x1 = 0;
let x2 = 200;
let boardPosition = 0;
let score = 0;
let maxscore = 0;
let clickleft = false;
let clickright = false;

document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "ArrowLeft") {
        clickleft = true;
    }
    if (event.key === "d" || event.key === "ArrowRight") {
        clickright = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "a" || event.key === "ArrowLeft") {
        clickleft = false;
    }
    if (event.key === "d" || event.key === "ArrowRight") {
        clickright = false;
    }
});

document.addEventListener("touchstart", function(event) {
    let touchX = event.touches[0].clientX;
    if (touchX < window.innerWidth / 2) {
        clickleft = true;
    } else {
        clickright = true;
    }
});

document.addEventListener("touchend", function(event) {
    clickleft = false;
    clickright = false;
});

async function run() {
    while (true) {
        await checkWall();
        await sleep(5);
        x = x + xd;
        y = y + yd;
        go()
        showBall();
    }
}
function goleft() {
    left = true;
}
function goright() {
    right = true;
}

function go() {
    let board = document.querySelector('#board');
    boardPosition = parseInt(board.style.left) || 0;

    if (left) {
        board.style.left = (boardPosition - 50) + "px";
        x1 -= 50;
        x2 -= 50;
        left = false;
    }
    if (right) { // assuming board width is 200
        board.style.left = (boardPosition + 50) + "px";
        x1 += 50;
        x2 += 50;
        right = false;
    }
}

async function checkWall() {
    if (x > 1000) {
        xd = -1;
        return;
    } 
    if (x < 0) {
        xd = 1;
        return;
    }
    if (y > 830 && x > x1 && x < x2) {
        yd = -1;
        score += 1;
        if (score > maxscore) {
            maxscore = score;
        }
        document.getElementById("mobscore").innerHTML = `score : ${score} <br> max score : ${maxscore}`;
        return;
    } 
    if (y > 900) {
        yd = -1;
        score = 0;
        document.getElementById("mobscore").innerHTML = `score : 0 <br> max score : ${maxscore}`;
        return;
    }
    if (y < 0) {
        yd = 1;
    }
}

function showBall() {
    let circle = document.querySelector('#circle');
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize the game
document.addEventListener("DOMContentLoaded", function() {
    let board = document.querySelector('#board');
    board.style.left = "0px"; // Initialize the board position
    run();
});
