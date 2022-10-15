let x = +prompt("Įveskite pirmą skaičių");
let y = +prompt("Įveskite antrą skaičių");
console.log(Math.random());
console.log(isvestiRandomNuoXIkiY(10, 1240));

function isvestiRandomNuoXIkiY(x) {
    return Math.random() * (y-x) + x;
}