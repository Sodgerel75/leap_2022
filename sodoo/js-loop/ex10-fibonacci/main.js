//   prompt оор n тоо орж ирэхэд тухайн n хүртлэх ширхэг Fibonacci дарааллын тоог хэвлэнэ үү.
//   Example 1: input (5) -> 1 1 2 3 5 




let n = prompt('Too oruulna uu');
console.log(n + ' хүртэлх тооны Fibonacci тоонууд');

let f1 = 0;
let f2 = 1;

console.log(f1);
console.log(f2);

let sum;

sum = f1 + f2;

while (sum <= n) {
  console.log(sum);
  f1 = f2;
  f2 = sum;
  sum = f1 + f2;
}

