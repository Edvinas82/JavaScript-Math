let r = +prompt ("Įveskite skaičių");
let plotas = apskritimoPlotas (r);
console.log("apskritimoPlotas yra" + plotas);

function apskritimoPlotas(r) {
    return 2 * Math.PI * r;
}