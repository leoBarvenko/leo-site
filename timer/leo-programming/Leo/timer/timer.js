// start
let sec = 0;
let min = 0;
let interval
function start() {
    interval = setInterval(() => {
        
        document.querySelector('#seconds').innerHTML = sec < 10 ? `0${sec}` : sec;
        if (sec == 60) {
            sec = 0;
            min++;
            document.querySelector('#min').innerHTML = min;
        }
    sec++;
    }, 1000)
}
// stop
function stop() {
    clearInterval(interval);
}
// reset
function reset() {
    sec = 0;
    min = 0;
    document.querySelector('#min').innerHTML = min;
    document.querySelector('#seconds').innerHTML = sec;
}
// biutiful
// if(sec == 9) {
//     let del = document.querySelector('.10sdel').innerHTML = ' ';
// }