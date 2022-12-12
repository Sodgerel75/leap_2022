
let n = toArrConverter(prompt("Ta hussen toogoo oruulna uu"));
n.reverse();
console.log(n);

if (n === n.reverse()) {
  console.log(n + ' is palindromic');
} else {
  console.log(n + ' is not palindromic');
}






function toArrConverter(str) {
  let words = str.split(' ');
  return words.join(', ').toLowerCase();
}

console.log(toArrConverter("123"))



















// let n = prompt("Ta hussen toogoo oruulna uu");
// let i = n.length;

// let flipNumber = '';


// console.log(n);
// while (0 < i) {
//   flipNumber = flipNumber + n.charAt(i - 1);
//   i--;
// }
// console.log(flipNumber);

// if (flipNumber == n) {
//   console.log('true');
// } else {
//   console.log('false');
// }