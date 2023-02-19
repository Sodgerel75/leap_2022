let nAll = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
console.log(nAll);

let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < nAll.length; i++) {
  if (nAll[i] % 2 == 0) {
    sumEven += 1;
  } else {
    sumOdd += 1;
  }
}
console.log("Even Numbers = " + sumEven);
console.log("Odd Numbers = " + sumOdd);
