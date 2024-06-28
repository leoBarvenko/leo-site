let alert = document.getElementById("alert");
let userDataJSON = localStorage.getItem("userdata");
let nick = JSON.parse(userDataJSON);
document.getElementById("nickname").innerHTML = nick[1];
alert.style.display = "none";
let timer = false;

let coins = 0;
let clicks = 0;
let totalClicks = 0;
let power = 1;
let price = 1;
let selling = 2;

let valuesOfGame = [coins, clicks, totalClicks, power, price, selling];
shopClose();
try {
    let dataJSON = localStorage.getItem("values");
    let value = JSON.parse(dataJSON);
    if (value && value.length === 6) {
        coins = value[0];
        clicks = value[1];
        totalClicks = value[2];
        power = value[3];
        price = value[4];
        selling = value[5];
        displayUpdate();
    }
} catch (error) {
    console.log("You don't have any saved data");
}
function clickPlus() {
    clicks += power;
    totalClicks += power;
    if (totalClicks == 10) {
        alert.innerHTML = `${nick[1]}, you can buy your <br> FIRST COIN:), go in the shop`;
        alert.style.display = "block";
        setTimeout(function () {
            alert.style.display = "none";
        }, 5000);
    }
    displayUpdate();
}

function displayUpdate() {
    let valuesOfGame = [coins, clicks, totalClicks, power, price, selling];
    document.getElementById('masterButton').innerHTML = `total clicks: ${totalClicks}`;
    document.getElementById('clicks').innerHTML = `clicks: ${clicks}`;
    document.getElementById('coins').innerHTML = `coins: ${coins}`;
    document.getElementById('upgrade').innerHTML = `${price} coins 🡢 ${selling} power`;
    valuesOfGame = [coins, clicks, totalClicks, power, price, selling];
    let dataJSON = JSON.stringify(valuesOfGame);
    localStorage.setItem("values", dataJSON);
}

function shopOpening() {
    document.body.style.backgroundColor = "gray";
    let shop = document.getElementsByClassName("shop");
    let notShop = document.getElementsByClassName("notShopCharacter");

    for (let i = 0; i < notShop.length; i++) {
        notShop[i].style.display = "none";
    }
    for (let a = 0; a < shop.length; a++) {
        shop[a].style.display = "block";
    }
}

function shopClose() {
    document.body.style.backgroundColor = "black";
    let shop = document.getElementsByClassName("shop");
    let notShop = document.getElementsByClassName("notShopCharacter");

    for (let i = 0; i < notShop.length; i++) {
        notShop[i].style.display = "block";
    }
    for (let a = 0; a < shop.length; a++) {
        shop[a].style.display = "none";
    }
}

function upgrade() {
    if (coins >= price) {
        coins -= price;
        selling *= 2;
        price *= 2;
        power *= 2;
        displayUpdate();
    } else {
        alert.innerHTML = `${nick[1]}, you don't have enough coins`;
        alert.style.display = "block";
        setTimeout(function () {
            alert.style.display = "none";
        }, 2000);
    }
}

function change() {
    if (clicks >= 10) {
        clicks -= 10;
        coins++;
        displayUpdate();
    } else {
        alert.innerHTML = `${nick[1]}, you don't have enough clicks`;
        alert.style.display = "block";
        setTimeout(function () {
            alert.style.display = "none";
        }, 2000);
    }
}

if(totalClicks == 100 || totalClicks > 100) {
    setTimeout(timerwatch()
, 1000)
}

function timerwatch() {
    timer = true;
}

function minigame() {
    //if(timer) {
        timer = false;
        alert.innerHTML = `sorry but i will make this in next update, see you in next update!`;
        alert.style.display = "block";
        setTimeout(function () {
            alert.style.display = "none";
        }, 3000);
        window.location.href = "minigame.html";
    //}
    }