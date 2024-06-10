let y = 0;
let x = 500;
let xd = 1
let yd = 1;
let x1 = 0;
let x2 = 200;
let boardPosition;
let key
let isDown;
let score = 0;
let maxscore = 0;
run();
for ( e = 0; e =! 1; e++) {
            let circle = document.querySelector('#circle');
    circle.style.left = "-100px";
    circle.style.top = "-100px";
        }
async function run() {
    for (i = 0; i < 20000000000000; i++) {

        
        
        await checkWall();
        await sleep(5);
        x = x + xd;
        y = y + yd;
        showBall();
        keyfinder()
        
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
    if (y > 830 && x < x2 && x > x1) {
        yd = -1;
        console.log(score);
    score = score + 1;
    if(score > maxscore) {
        maxscore = score;
    }
    document.getElementById("score").innerHTML = `score : ${score} <br> max score : ${maxscore}`;

        return;
    } 
    if (y > 900) {
        yd = -1;
        score = 0;
        document.getElementById("score").innerHTML = `score : 0 <br>max score : ${maxscore}`;
        
        return;
    }
    
    if (y < 0) {
        yd = 1;
    }
}

function keyfinder() {
    const board = document.getElementById("board");
  
    document.addEventListener("keydown", function(event) {
    event.preventDefault();
   
        if (isDown) return;
     key = event.key;
     boardPosition = parseInt(board.style.left) || 0;
  
      if (key == "a" || key == "ф") {
        board.style.left = (boardPosition - 30) + "px";
        
        x1 -= 30;
        x2 -= 30;
        console.log(x1, x2);

      } else if (key == "d"|| key == "в") {
        board.style.left = (boardPosition + 30) + "px";
        x1 = x1+ 30;
        x2 = x2 + 30;
        console.log(x1, x2);
      }
      isDown = true;
    });
    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        isDown = false;
    });
}
function keyfinderLeft() {
    board.style.left = (boardPosition - 30) + "px";
        x1 -= 30;
        x2 -= 30;
        console.log(x1, x2);
}
  
function keyfinderRight() {
    board.style.left = (boardPosition + 30) + "px";
        x1 = x1+ 30;
        x2 = x2 + 30;
        console.log(x1, x2);
}

// function showboard() {
//     if (key == "a") {
//         board.style.left = (boardPosition - 0.1) + "px";
//       } else if (key == "d") {
//         board.style.left = (boardPosition + 0.1) + "px";
//       }
//       console.log("left", board.style.left);
// }L
  


function showBall() {
    circle = document.querySelector('#circle');
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}