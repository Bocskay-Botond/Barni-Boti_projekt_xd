let valasz1 = document.getElementById("1.2_válasz")
let valasz2 = document.getElementById("2.2_válasz")
let valasz3 = document.getElementById("3_válasz")
let valasz4 = document.getElementById("4_válasz")
let valasz5 = document.getElementById("5_válasz")
let valasz6 = document.getElementById("valasz6")
let valasz7 = document.getElementById("valasz7")
let valasz8 = document.getElementById("valasz8")//ezek nem lesznek jók mrt ha az elején ellenörzöd nm fogja sztm figyelembe venni h a kitöltő mit választ... 
let valasz9 = document.getElementById("valasz9")
let valasz10 = document.getElementById("valasz10")
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
    if (valasz3.value === "2") {
        return 1
    }
    return 0;
}
function ellenorzes_kerdes_4() {
    if (valasz4.value === "66.66") {
        return 1;
    }
    return 0;
}
function ellenorzes_kerdes_5(params) {
    if (valasz5.value==="hitler" ) {
        return 1;
    }
    return 0;
}
function ellenorzes_kerdes_6() {
    if (valasz6.value == "45") {
        return 1
    }
    return 0
}
function ellenorzes_kerdes_7() {
    if (valasz7.value == "sztalin") {
        return 1
    }
    return 0
}
function ellenorzes_kerdes_8() {
    if (valasz8.value == "1939") {
        return 1
    }
    return 0
}
function ellenorzes_kerdes_9() {
    if (valasz9.value == "1942") {
        return 1
    }
    return 0
}
function ellenorzes_kerdes_10() {
    if (valasz10.value == "lila") {
        return 1
    }
    return 0
}
function ellenorzes_kerdes_plusz() {
    if (valasz11 == 18) {
        return 1
    }
    return 0
}


function vegso_ellenorzes() {
    let összespont =0;
    összespont += ellenorzes_kerdes_1();
    összespont += ellenorzes_kerdes_2();
    összespont += ellenorzes_kerdes_3();
    összespont += ellenorzes_kerdes_4();
    összespont += ellenorzes_kerdes_5();
    összespont += ellenorzes_kerdes_6();
    összespont += ellenorzes_kerdes_7();
    összespont += ellenorzes_kerdes_8();
    összespont += ellenorzes_kerdes_9();
    összespont += ellenorzes_kerdes_10();
    összespont += ellenorzes_kerdes_plusz();
    kiiras.innerHTML ="Ügyi vagy. Kész a teszt! Pontszámod: "+ összespont +"/11";
}
document.getElementById("kiertekel").addEventListener("click", vegso_ellenorzes);