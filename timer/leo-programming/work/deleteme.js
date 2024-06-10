let username = 'el'
let age = 10;
let profesion = 'programist';

const person = {
    username: 'el',
    age: 10,
    profesion: 'programist'
}

function helol() {
    const name2 = document.getElementById("name").value;
    alert(`hello, ${name2}`);
}

function greener() {
    const gren = document.querySelector('.red');
    document.getElementsByClassName(`green`).innerHTML = `im green`;
    document.getElementsByClassName(`red`).innerHTML = `im red`;
    gren.classList.toggle('green');
}
console.log(person.age);
console.log(person.username);
console.log(person.profesion);
addEventListener('sumbit', nr);
function nr(event) {
    event.preventDefalt();
}

setTimeout(function() {
    let res
let hotel = Math.floor(Math.random() * 10);
if(hotel == 0 || hotel == 1 || hotel == 2 || hotel == 3 || hotel == 4 || hotel == 5) {
    res = true;
    console.log('we watch hev rooms...');
} else {
    console.log('we watch hev rooms...');
}
    if(res == true) {
    console.log('hev rooms');
} else {
    console.log('dont hev rooms');
}}, 2000)

