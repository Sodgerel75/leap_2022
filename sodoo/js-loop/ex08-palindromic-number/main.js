// 12345 -> 54321 n хувьсагчийн утгыг тоог урвуул.


let n = prompt("Ta hussen toogoo oruulna uu");
let i = n.length;

let flipNumber = '';

console.log(i);
console.log(n);
while (0 < i) {
  flipNumber = flipNumber + n.charAt(i - 1);
  i--;
}
console.log(flipNumber);