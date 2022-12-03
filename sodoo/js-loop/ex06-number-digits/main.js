// Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга.
// example: input = 1234567; digit: = 7;



let n = Number(prompt('Hussen toogoo oruulna uu'));
let i = 0;

while (n !== 0) {

  n = Math.floor(n / 10);
  i++;

}
console.log('Number of Digits = ' + i)
alert('Number of Digits = ' + i)


