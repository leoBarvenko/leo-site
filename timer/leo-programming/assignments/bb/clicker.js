let clicks = 0;
let totalClicks = 0;
let money = 0;
function clickPlus() {
    clicks++;
    totalClicks++;
    displayUpdate();
}

function displayUpdate() {
    document.getElementById('masterButton').innerHTML = `total clicks: ${clicks}`;
}

function shopOpening() {
    
}