let data;
let file;
let sumbit = document.getElementById("sumbit");
let notreg = document.getElementsByClassName("notreg");
let reg = document.getElementsByClassName("reg");
for(let i = 0; i < reg.length - 1; i++) {
    reg[i].style.display = "none"; 
    notreg[0].style.display = "block";
    reg[3].style.display = "none";
}
function back() {
    for(let i = 0; i < reg.length - 1; i++) {
        reg[i].style.display = "none"; 
        notreg[0].style.display = "block";
        reg[3].style.display = "none";
    }    
}
function regi() {
    for(let e = 0; e < reg.length - 1; e++) {
        notreg[0].style.display = "none"; 
        reg[e].style.display = "block";
        reg[3].style.display = "block";
    }
        
    };
    let password;
    let nickname;
    function savelocalstorage() {
        password = document.getElementById("password").value;
        nickname = document.getElementById("nickname").value;
        if (password == "" || nickname == "") {
                sumbit.disabled = true;
        }
        if (password != "" || nickname != "") {
            sumbit.disabled = false;
    }  
        data = [password, nickname];
        file = JSON.stringify(data);
        localStorage.setItem("userdata", file);
    }
    