let start = document.getElementById("start");
let go = document.getElementById("go");
let btn = document.getElementById("btn");
let clicker = document.getElementById("clicker");
let leagues = document.getElementById("league");
start.style.display = "block";
go.style.display = "none";
btn.style.display = "none";
clicker.style.display = "none";
leagues.style.display = "none";
function startTheGame() {
    start.style.display = "none";
    go.style.display = "block";
    btn.style.display = "block";
    clicker.style.display = "none";
    leagues.style.display = "none";

}