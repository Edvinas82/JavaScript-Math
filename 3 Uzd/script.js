let a = 10;
let b = 1240;
console.log(atsitiktinisSkaicius (a, b));



function atsitiktinisSkaicius(a, b) {
    let x = Math.random() * (b - a) + a;
    return x;
}