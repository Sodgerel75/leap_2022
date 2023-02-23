function bill(money) {
  if (5000 <= money && money <= 30000) {
    return money + money * 0.15;
  } else {
    return money + money * 0.2;
  }
}

console.log(bill(3000));
console.log(bill(27500));
console.log(bill(100000));

function tip(money) {
  if (5000 <= money && money <= 30000) {
    return money * 0.15;
  } else {
    return money * 0.2;
  }
}

console.log(tip(3000));
console.log(tip(27500));
console.log(tip(100000));

function average(a, b, c) {
  return (a + b + c / 3).toFixed();
}

console.log("Average :", average(3000, 27500, 100000));
