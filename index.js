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

function ellenorzes_kerdes_6() {
    if(valasz6.value == "Több mint 45 millió") {
        console.log('asd')
    }
    return 0
}
function ellenorzes_kerdes_7() {
    if (valasz7.value == 1) {}
}
document.getElementById("kiertekel").addEventListener("click", ellenorzes_kerdes_6)