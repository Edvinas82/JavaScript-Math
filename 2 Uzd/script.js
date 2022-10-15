let x = +prompt("Įveskite pirmą sskaičių");
let y = +prompt("Įveskite anrą skaičių");
let l = vektoriausIlgis;
console.log("vektoriausIlgis yra" + l);

function vektoriausIlgis(x, y) {
    return Math.sqrt (x**2 + y**2);
}