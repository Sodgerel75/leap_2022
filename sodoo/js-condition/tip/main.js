const tip1 = 3000;
const tip2 = 27500;
const tip3 = 100000;

// if (5000 >= tip1 && 30000 <= tip1) {
//   console.log(tip1 * 0.15);
// } else {
//   console.log(tip1 + (tip1 * 0.2));
// }


let tipResult1 = (5000 <= tip1 && tip1 <= + 30000) ? tip1 * 0.15 + tip1 : tip1 * 0.2 + tip1;
console.log(tipResult1);

let tipResult2 = (5000 <= tip2 && tip2 <= + 30000) ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
console.log(tipResult2);

let tipResult3 = (5000 <= tip3 && tip3 <= + 30000) ? tip3 * 0.15 + tip3 : tip3 * 0.2 + tip3;
console.log(tipResult3);


// const input = prompt('Give me your money');
// const numberInput = Number(input);
// let exTipResult = (5000 <= tip3 && 30000 >= tip3) ? tip3 * 0.15 + tip3 : tip3 * 0.2 + tip3;
// console.log(exTipResult);