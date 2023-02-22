function findEven(a, b) {
  let sumEven = [];
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    if (i % 2 == 0) {
      sumEven.push(i);
    }
  }
  console.log(sumEven);
}

function findOdd(a, b) {
  let sumOdd = [];
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    if (i % 2 !== 0) {
      sumOdd.push(i);
    }
  }
  console.log(sumOdd);
}

findEven(10, 25);
findOdd(50, 29);
