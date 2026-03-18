let valasz1 = document.getElementById("1.2_válasz")
let valasz2 = document.getElementById("2.2_válasz")
let valasz3 = document.getElementById("3_válasz").value
let valasz4 = document.getElementById("4_válasz").value
let valasz5 = document.getElementById("valasz5")
let valasz6 = document.querySelector("#valasz6 option:checked")
let valasz7 = document.querySelector("#valasz7 option:checked")
let valasz8 = document.querySelector("#valasz8 option:checked")
let valasz9 = document.querySelector("#valasz9 option:checked")
let valasz10 = document.querySelector("#valasz10 option:checked")
let valasz11 = document.getElementById("valasz+1")
let kiiras = document.getElementById("kiiras")

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
    if (valasz3 === "2") {
        return 1
    }
    return 0;
}
function ellenorzes_kerdes_4() {
    if (valasz4 === "66.66") {
        return 1;
    }
    return 0;
}
function ellenorzes_kerdes_5(params) {
    if (valasz5==="hitler" ) {
        return 1;
    }
    return 0;
}



function vegso_ellenorzes() {
    let összespont =0;
    összespont += ellenorzes_kerdes_1 
    összespont += ellenorzes_kerdes_2
    összespont += ellenorzes_kerdes_3
    összespont += ellenorzes_kerdes_4
    összespont += ellenorzes_kerdes_5
    összespont += ellenorzes_kerdes_6
    összespont += ellenorzes_kerdes_7
    összespont += ellenorzes_kerdes_8
    összespont += ellenorzes_kerdes_9
    összespont += ellenorzes_kerdes_10
    összespont += ellenorzes_kerdes_plusz
    kiiras.innerHTML("Ügyi vagy. Kész a teszt! Pontszámod: "+ összespont +"/10")
}
document.getElementById("kiertekel").addEventListener("click", ellenorzes)
