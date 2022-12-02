const number = prompt("Duriing 3n too oruulna uu");

const too1 = Number(number.substr(0, 1));
const too2 = Number(number.substr(1, 1));
const too3 = Number(number.substr(2, 1));

console.log(too1);
console.log(too2);
console.log(too3);

let niilber = too1 + too2 + too3;

if (number.length == 3 && Number.isInteger(Number(number))) {
    console.log("Цифрүүдийн нийлбэр = " + niilber);
} else {
    alert("3 orontoi too oruulna uu");
    console.error("3 orontoi too oruulna uu");
}
