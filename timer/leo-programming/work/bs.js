let timer = 3;
let gems = 0;
let coins = 0;
showTimer();

function showTimer() {
    if (timer == -1) {
        document.querySelector('.giftno').className = "gift";
        
    }
    if (timer == -1) return;
    document.getElementById('time').innerHTML = timer;
    timer--;

    setTimeout(showTimer, 1000);
}

function free() {
    if (timer == -1) {
        timer = 0
        let ai = Math.floor(Math.random() * 50);
        console.log(ai);
        document.querySelector('.gift').className = "giftno";
        let ai2 = Math.floor(Math.random() * 10000) + 1000;
        gems = gems + ai;
        coins = coins + ai2;
        console.log(ai2);
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        timer = timer + 3;
        document.getElementById('time').innerHTML = timer;
        showTimer();
    }
}

function rare() {
    if (gems > 160 && coins > 15000) {
        gems -= 160;
        coins -= 15000;
        document.querySelector('.sandy').innerHTML = "sandy rare<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function superrare() {
    if(gems > 300 && coins > 200000) {
        gems -= 300;
        coins -= 200000;
        document.querySelector('.amber').innerHTML = "amber super rare<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function epic() {
    if(gems > 500 && coins > 300000) {
        gems -= 500;
        coins -= 300000;
        document.querySelector('.leon').innerHTML = "leon epic<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function mythic() {
    if(gems > 700 && coins > 700000) {
        gems -= 700;
        coins -= 400000;
        document.querySelector('.crow').innerHTML = "crow epic<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function legend() {
    if(gems > 1000 && coins > 2500000) {
        gems -= 1000;
        coins -= 2500000;
        document.querySelector('.spike').innerHTML = "spike legendary<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

//sandy
function sandyrare() {
    if(gems > 100 && coins > 25000) {
        gems -= 100;
        coins -= 25000;
        document.querySelector('#ssr').innerHTML = "silver sandy<br>rare skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function sandysrare() {
    if(coins > 50000 && gems > 200) {
        gems -= 200;
        coins -= 50000;
        document.querySelector('#sssr').innerHTML = "gold sandy<br>super rare skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function sandyepic() {
    if(coins > 60000 && gems > 600) {
        gems -= 600;
        coins -= 60000;
        document.querySelector('#sse').innerHTML = "sugar rush sandy<br>epic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function sandymythic() {
    if(coins > 75000 && gems > 800) {
        gems -= 800;
        coins -= 75000;
        document.querySelector('#ssm').innerHTML = "sandy koya<br>mythic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function sandyleg() {
    if(coins > 1000 && gems > 1000000) {
        gems -= 1000;
        coins -= 1000000;
        document.querySelector('#ssl').innerHTML = "sandy lantern<br>legendary skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

//amber
function amberrare() {
    if(gems > 100 && coins > 25000) {
        gems -= 100;
        coins -= 25000;
        document.querySelector('#asr').innerHTML = "black fire<br>rare skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;

    }
}

function ambersrare() {
    if(coins > 50000 && gems > 200) {
        gems -= 200;
        coins -= 50000;
        document.querySelector('#assr').innerHTML = "silver amber<br>super rare skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    
    }
}

function amberepic() {
    if(coins > 60000 && gems > 600) {
        gems -= 600;
        coins -= 60000;
        document.querySelector('#ase').innerHTML = "gold amber<br>epic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

function ambermythic() {
    if(coins > 75000 && gems > 800) {
        gems -= 800;
        coins -= 75000;
        document.querySelector('#asm').innerHTML = "amber de la vega<br>mythic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

function amberleg() {
    if(coins > 1000 && gems > 1000000) {
        gems -= 1000;
        coins -= 1000000;
        document.querySelector('#asl').innerHTML = "frost queen amber<br>legendary skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

//leon
function leonrare() {
    if(gems > 100 && coins > 25000) {
        gems -= 100;
        coins -= 25000;
        document.querySelector('#lsr').innerHTML = "silver leon<br>rare<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;

    }
}

function leonsrare() {
    if(coins > 50000 && gems > 200) {
        gems -= 200;
        coins -= 50000;
        document.querySelector('#lssr').innerHTML = "gold leon<br>super rare skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    
    }
}

function leonepic() {
    if(coins > 60000 && gems > 600) {
        gems -= 600;
        coins -= 60000;
        document.querySelector('#lse').innerHTML = "leon the stray<br>epic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function leonmythic() {
    if(coins > 75000 && gems > 800) {
        gems -= 800;
        coins -= 75000;
        document.querySelector('#lsm').innerHTML = "dino leon<br>mythic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

function leonleg() {
    if(coins > 1000 && gems > 1000000) {
        gems -= 1000;
        coins -= 1000000;
        document.querySelector('#lsl').innerHTML = "sally leon<br>legendary skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

//crow
function crowrare() {
    if(gems > 100 && coins > 25000) {
        gems -= 100;
        coins -= 25000;
        document.querySelector('#csr').innerHTML = "silver crow<br>rare skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function crowsrare() {
    if(coins > 50000 && gems > 200) {
        gems -= 200;
        coins -= 50000;
        document.querySelector('#cssr').innerHTML = "gold crow<br>super rare skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    
    }
}

function crowepic() {
    if(coins > 60000 && gems > 600) {
        gems -= 600;
        coins -= 60000;
        document.querySelector('#cse').innerHTML = "crowbone<br>epic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

function crowmythic() {
    if(coins > 75000 && gems > 800) {
        gems -= 800;
        coins -= 75000;
        document.querySelector('#csm').innerHTML = "mecha crow<br>mythic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

function crowleg() {
    if(coins > 1000 && gems > 1000000) {
        gems -= 1000;
        coins -= 1000000;
        document.querySelector('#csl').innerHTML = "phoenix crow<br>legendary skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

//spike
function spikerare() {
    if(gems > 100 && coins > 25000) {
        gems -= 100;
        coins -= 25000;
        document.querySelector('#spisr').innerHTML = "silver spike<br>rare<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;

    }
}

function spikesrare() {
    if(coins > 50000 && gems > 200) {
        gems -= 200;
        coins -= 50000;
        document.querySelector('#spissr').innerHTML = "gold spike<br>super rare<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
    }
}

function spikeepic() {
    if(coins > 60000 && gems > 600) {
        gems -= 600;
        coins -= 60000;
        document.querySelector('#spise').innerHTML = "mask spike<br>epic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

function spikemythic() {
    if(coins > 75000 && gems > 800) {
        gems -= 800;
        coins -= 75000;
        document.querySelector('#spism').innerHTML = "logmas spike<br>mythic skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}

function spikeleg() {
    if(coins > 1000 && gems > 1000000) {
        gems -= 1000;
        coins -= 1000000;
        document.querySelector('#spisl').innerHTML = "robospike<br>legendary skin<br>purchased";
        document.querySelector('#gems').innerHTML = gems;
        document.querySelector('#coins').innerHTML = coins;
        
    }
}