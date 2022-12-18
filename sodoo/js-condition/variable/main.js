console.log('\n1. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.');

let a = 85;
let b = 75;
let c = 96;
let d = 69;

if (a > 80 && b > 80 && c > 80 && d > 80) {
  console.log(a + b + c + d);
}

let sum = 0;
if (a > 80) {
  sum = sum + a;
}
if (b > 80) {
  sum = sum + b;
}
if (c > 80) {
  sum = sum + c;
}
if (d > 80) {
  sum = sum + d;
}

console.log(`80-аас их тооны нийлбэр = ${sum}`);



console.log('\n2. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:');

let a1 = 3, b1 = 7, c1 = 2, d1 = 4;

let multiD = 1;
if (a1 < 5) {
  multiD = multiD * a1;
}
if (b1 < 5) {
  multiD = multiD * b1;
}
if (c1 < 5) {
  multiD = multiD * c1;
}
if (d1 < 5) {
  multiD = multiD * d1;
}

console.log(`5-аас бага тоонуудын үржвэр = ${multiD}`);