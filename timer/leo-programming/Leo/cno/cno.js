let wins = 0;
let loses = 0;
function check() {
    const hum = Math.floor(Math.random() * 10);
    let num = document.getElementById("num").value;
    console.log(hum, num)
    if(num == hum) {
        document.getElementById("losewin").innerHTML = "you win!";
        document.getElementById("losewin").className = "green";
    } else if(num != hum) {
        document.getElementById("losewin").innerHTML = "you lose";
        document.getElementById("losewin").className = "red";
    }
    if(num == hum) {
        wins ++;
        document.getElementById("win").innerHTML = `wins: ${wins}`;
    } else if(num != hum) {
        loses ++;
        document.getElementById("lose").innerHTML = `loses: ${loses}`;
    }
}
