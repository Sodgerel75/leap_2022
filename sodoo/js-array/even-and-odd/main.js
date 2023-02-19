let nAll = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
console.log(nAll);

sumEven = 0;
sumOdd = 0;
for (let i = 0; i < nAll.length; i++) {
  if (nAll[i] % 2 == 0) {
    sumEven += 1;
  } else {
    sumOdd += 1;
  }
}
console.log("Even Numbers = " + sumEven);
console.log("Even Numbers = " + sumOdd);
