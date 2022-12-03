// ----------Square n - д prompt  ашиглан утга оруулахад n*n харьцаатай дөрвөлжин хэвлэх.


let n = Number(prompt('Toogoo oruulna uu'));
console.log('Oruulsan too = ' + n);
console.log('Square = ' + n + 'x' + n);
let i = 2;
let od = '* ';

console.log(od.repeat(n));
console.log('');
while (i < n) {
  console.log(od + '  '.repeat(n - 2) + od);
  console.log('');
  i++;
}
console.log(od.repeat(n));