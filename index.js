let valasz1 = document.getElementById("1.2_válasz")
let valasz2 = document.getElementById("2.2_válasz")
let valasz3 = document.getElementById("3_válasz").value
let valasz4 = document.getElementById("4_válasz").value
let valasz5 = document.getElementById("5_válasz").value
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

document.getElementById("kiertekel").addEventListener("click", ellenorzes)

function vegso_ellenorzes() {
    let összespont =0;
    összespont = ellenorzes_kerdes_1 
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1
    összespont = ellenorzes_kerdes_1

}