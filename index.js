let valasz1 = document.getElementById("1.2_válasz")
let valasz2 = document.getElementById("2.2_válasz")
let valasz3 = document.getElementById("valasz3")
let valasz4 = document.getElementById("valasz4")
let valasz5 = document.getElementById("valasz5")
let valasz6 = document.getElementById("valasz6")
let valasz7 = document.getElementById("valasz7")
let valasz8 = document.getElementById("valasz8")
let valasz9 = document.getElementById("valasz9")
let valasz10 = document.getElementById("valasz10")
let valasz11 = document.getElementById("valasz+1")

function ellenorzes_kerdes_1() {
    if (valasz1.checked) {
        return 1;
    }
    return 0;
}
function ellenorzes_kerdes_2() {
    if (valasz2.checked) {
        return 1;
    }
    return 0;
}
function ellenorzes_kerdes_3(params) {
    
}

document.getElementById("kiertekel").addEventListener("click", ellenorzes)