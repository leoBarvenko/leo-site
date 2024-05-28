let clicks = 0;
let totalClicks = 0;
let money = 0;  
  let shop = document.getElementsByClassName("shop");
  let notShop = document.getElementsByClassName("notShopCharacter");
function clickPlus() {
    clicks++;
    totalClicks++;
    displayUpdate();
}

function displayUpdate() {
    document.getElementById('masterButton').innerHTML = `total clicks: ${clicks}`;
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