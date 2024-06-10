let wins = 0
let draws = 0
let loses = 0
let ai = Math.floor(Math.random() * 3) + 1;
console.log(ai)
let chooser
function rock() {
    chooser = 1;
    document.getElementById('rock').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('paper').disabled = true;
    if (ai == 2) {
        document.getElementById('ws').className = 'w';
        document.getElementById('ws').innerHTML = 'you win!'
    } else if (ai == 3) {
        document.getElementById('ws').className = 'l';
        document.getElementById('ws').innerHTML = 'you lose';
    } else if (ai == 1) {
        document.getElementById('ws').className = 'd';
        document.getElementById('ws').innerHTML = 'draw';
    }
    if (chooser == 1 || chooser == 2 || chooser == 3) {
        document.getElementById('replay').className = 'r';
    }

}
function scissors() {
    chooser = 2;
    document.getElementById('rock').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('paper').disabled = true;
    if (ai == 3) {
        document.getElementById('ws').className = 'w';
        document.getElementById('ws').innerHTML = 'you win!'
    } else if (ai == 1) {
        document.getElementById('ws').className = 'l';
        document.getElementById('ws').innerHTML = 'you lose';
    } else if (ai == 2) {
        document.getElementById('ws').className = 'd';
        document.getElementById('ws').innerHTML = 'draw';
    }
    if (chooser == 1 || chooser == 2 || chooser == 3) {
        document.getElementById('replay').className = 'r';
    }

}
function paper() {
    chooser = 3;
    document.getElementById('rock').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('paper').disabled = true;
    if (ai == 1) {
        document.getElementById('ws').className = 'w';
        document.getElementById('ws').innerHTML = 'you win!'
    } else if (ai == 2) {
        document.getElementById('ws').className = 'l';
        document.getElementById('ws').innerHTML = 'you lose';
    } else if (ai == 3) {
        document.getElementById('ws').className = 'd';
        document.getElementById('ws').innerHTML = 'draw';
    }
    if (chooser == 1 || chooser == 2 || chooser == 3) {
        document.getElementById('replay').className = 'r';
    }

}
function rest() {
    chooser = 0;
    ai = 0;
    ai = Math.floor(Math.random() * 3) + 1;
    document.getElementById('replay').className = 'none';
    document.getElementById('ws').className = 'none';
    document.getElementById('rock').disabled = false;
    document.getElementById('scissors').disabled = false;
    document.getElementById('paper').disabled = false;
}