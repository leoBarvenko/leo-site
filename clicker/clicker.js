let clicks = 0;
let totalClicks = 0;
let coins = 0; 
let power = 1; 
let price = 1;
let selling = 2;
  let shop = document.getElementsByClassName("shop");
  let notShop = document.getElementsByClassName("notShopCharacter");
  for(let a = 0; a < shop.length; a++) {
    shop[a].style.display = "none";
 }
function clickPlus() {
    clicks += power;
    totalClicks += power;
    displayUpdate();
}

function displayUpdate() {
    document.getElementById('masterButton').innerHTML = `total clicks: ${totalClicks}`;
    document.getElementById('clicks').innerHTML = `clicks: ${clicks}`;
    document.getElementById('coins').innerHTML = `coins: ${coins}`;
    document.getElementById('upgrade').innerHTML = `${price} coins 🡢 ${selling} clicks`;
}

function shopOpening() {
document.body.style.backgroundColor = "gray";
 for(let i = 0; i < notShop.length; i++) {
notShop[i].style.display = "none";
 }
 for(let a = 0; a < shop.length; a++) {
    shop[a].style.display = "block";
 }
}

function shopClose() {
    document.body.style.backgroundColor = "white";
    for(let i = 0; i < notShop.length; i++) {
        notShop[i].style.display = "block";
         }
         for(let a = 0; a < shop.length; a++) {
            shop[a].style.display = "none";
         }
}
function upgrade() {
if (coins == price || coins > price) {
    coins -= price;
    selling *= 2;
    price *= 2;
    power *= 2;
    displayUpdate();
} else {
    alert('you not enogh coins')
}
}
function change() {
    if (clicks > 10 || clicks == 10) {
        clicks -= 10;
        coins++;
        displayUpdate();
    } else {
        alert('you not enogh clicks');
    }
}