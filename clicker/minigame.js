let start = document.getElementById("start");
let go = document.getElementById("go");
let btn = document.getElementById("btn");
let clicker = document.getElementById("clicker");
let tim = document.getElementById("time")
let clicks = 0;
let starting = false;
start.style.display = "block";
go.style.display = "none";
btn.style.display = "none";
clicker.style.display = "none";
function startTheGame() {
    start.style.display = "none";
    go.style.display = "block";
    btn.style.display = "block";
    clicker.style.display = "none";
}

function going() {
    go.style.display = "none";
    starting = true;
    setTimeout(() => {
        stop()
    }, 10000)
    setInterval(time(), 1000)
}

function time() {
    tim.innerHTML = "seconds left" + time;
}

function clickplus() {
    if(starting == true) {
        clicks++;
        btn.innerHTML = "clicks" + clicks + "(2X)";
    }
}

function stop() {
    btn.style.display = "none";
    clicker.style.display = "block";
    leagues.style.display = "block";
    clicks = clicks * 2;
}

function goInClicker() {
    let valuesJSON = localStorage.getItem("values");
    
    let values = JSON.parse(valuesJSON);
    console.log(values);
    values[1] += clicks;
    console.log(values);
    if(values[2] < values[1]) {
        values[2] = values[1]
    }
    valuesJSON = JSON.stringify(values);
    valuesJSON = localStorage.setItem("values", valuesJSON);
    window.location.href = "clicker.html";
}