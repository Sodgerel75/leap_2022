function tip(money) {
  if (5000 <= money && money <= 30000) {
    return money + money * 0.15;
  } else {
    return money + money * 0.2;
  }
}

console.log(tip(3000));
