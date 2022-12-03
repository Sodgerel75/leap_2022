let n = Number(prompt('Toogoo oruulna uu'));
console.log('Oruulsan too = ' + n);

let i = 1;
let od = '* ';

// console.log(' '.repeat(n - 8) + 'HAPPY NEW YEAR')
while (i <= n) {
  console.log(' '.repeat(n - i) + od.repeat(i));
  i++;
}