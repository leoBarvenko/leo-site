let data;
let file;
let password;
let nickname;
let nickchek;
let passchek;
let log = document.getElementsByClassName("log");
let notlog = document.getElementsByClassName("notlog");
let sumbit = document.getElementById("sumbit");
let notreg = document.getElementsByClassName("notreg");
let reg = document.getElementsByClassName("reg");
for (let i = 0; i < reg.length; i++) {
    reg[i].style.display = "none"; // Скрыть все элементы reg
    if (i < notreg.length) {
        notreg[i].style.display = "block"; // Показать соответствующие элементы notreg, если они существуют
    }
    if (i < log.length) {
        log[i].style.display = "none"; // Скрыть все элементы log
    }
    if (i < notlog.length) {
        notlog[i].style.display = "block"; // Показать соответствующие элементы notlog, если они существуют
    }
}

// Дополнительные правила вне цикла
if (reg.length > 3) {
    reg[3].style.display = "none"; // Скрыть четвертый элемент reg, если он существует
}

if (notreg.length > 0) {
    notreg[0].style.display = "block"; // Показать первый элемент notreg, если он существует
}


function back() {
    for (let i = 0; i < reg.length; i++) {
        reg[i].style.display = "none"; // Скрыть все элементы reg
        if (i < notreg.length) {
            notreg[i].style.display = "block"; // Показать соответствующие элементы notreg, если они существуют
        }
        if (i < log.length) {
            log[i].style.display = "none"; // Скрыть все элементы log
        }
        if (i < notlog.length) {
            notlog[i].style.display = "block"; // Показать соответствующие элементы notlog, если они существуют
        }
    }
    
    // Дополнительные правила вне цикла
    if (reg.length > 3) {
        reg[3].style.display = "none"; // Скрыть четвертый элемент reg, если он существует
    }
    
    if (notreg.length > 0) {
        notreg[0].style.display = "block"; // Показать первый элемент notreg, если он существует
    }
           }    


function regi() {
    for (let i = 0; i < reg.length; i++) {
        reg[i].style.display = "block"; // Скрыть все элементы reg
        if (i < notreg.length) {
            notreg[i].style.display = "none"; // Показать соответствующие элементы notreg, если они существуют
        }
        if (i < log.length) {
            log[i].style.display = "none"; // Скрыть все элементы log
        }
        if (i < notlog.length) {
            notlog[i].style.display = "block"; // Показать соответствующие элементы notlog, если они существуют
        }
    }
    
    // Дополнительные правила вне цикла
    if (reg.length > 3) {
        reg[3].style.display = "block"; // Скрыть четвертый элемент reg, если он существует
    }
    
    if (notreg.length > 0) {
        notreg[0].style.display = "none"; // Показать первый элемент notreg, если он существует
    }
    
        
    };
    
    function savelocalstorage() {
        password = document.getElementById("password").value;
        nickname = document.getElementById("nickname").value;
        if (password == "" || nickname == "") {
                sumbit.disabled = true;
        }
        if (password != "" || nickname != "") {
            sumbit.disabled = false;
             data = [password, nickname];
        file = JSON.stringify(data);
        localStorage.setItem("userdata", file);
        window.location.href = "clicker.html";
    }  
       

    }

    function login() {
        for (let i = 0; i < reg.length; i++) {
            reg[i].style.display = "none"; // Скрыть все элементы reg
            if (i < notreg.length) {
                notreg[i].style.display = "none"; // Показать соответствующие элементы notreg, если они существуют
            }
            if (i < log.length) {
                log[i].style.display = "block"; // Скрыть все элементы log
            }
            if (i < notlog.length) {
                notlog[i].style.display = "none"; // Показать соответствующие элементы notlog, если они существуют
            }
        }
        
        // Дополнительные правила вне цикла
        if (reg.length > 3) {
            reg[3].style.display = "none"; // Скрыть четвертый элемент reg, если он существует
        }
        
        if (notreg.length > 0) {
            notreg[0].style.display = "none"; // Показать первый элемент notreg, если он существует
        }
        
       
    }
    
    function sir() {
            nickchek = document.getElementById("nicklog").value;
            passchek = document.getElementById("passlog").value;
            data = localStorage.getItem("userdata");
            let userData = JSON.parse(data);
            

            if(nickchek == userData[1] && passchek == userData[0]) {
                window.location.href = "clicker.html";
            } 
        }
        
        function guest() {
            nickname = "guest1488";
            password = 1488;
            console.log(password + "< your pincode");
            data = [password, nickname];
            file = JSON.stringify(data);
            localStorage.setItem("userdata" , file);
            window.location.href = "clicker.html"
        }
    