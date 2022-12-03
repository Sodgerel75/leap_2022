//Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна

// n!=1⋅2⋅3⋅⋯⋅n

// 5! = 120 / 1*2*3*4*5/



/// ------------------ v1 -------------------

// let n = Number(prompt("Ta hussen toogoo oruulna uu"));
// let i = n - 1;
// let sum = n;         // urjih uyd zaaval 1 gesen utgatai ehlene.
// console.log('Оруулсан тоо = ' + sum);
// while (i > 0) {
//   sum = sum * (n - 1);
//   i--;
//   n--;
// }

// // alert('факториал тоо = ' + sum);
// console.log('Факториал тоо = ' + sum);




/// ------------------ v2 -------------------

let n = Number(prompt("Ta hussen toogoo oruulna uu"));
let sum = n;

console.log('Оруулсан тоо = ' + sum);

if (n === 0 || n === 1) {
  console.log('Факториал тоо = 1');
} else {
  while (n > 1) {
    n--;
    sum = sum * n;

  }
  // alert('факториал тоо = ' + sum);
  console.log('Факториал тоо = ' + sum);
}



