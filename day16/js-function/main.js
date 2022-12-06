// console.log('------JS-Function------');

// // function declaration

// function f() {
//     console.log('Hello function');
// }

// // function call

// f();

// // 1.

// function f1(x, y) {
//     console.log(x * x + y * y);
// }
// f1(2, 3);

// // 2.

// function f2(x, y) {
//     console.log(Math.pow(x + y, 2));
// }
// f2(2, 2);
// f2(2, 3);
// f2(3, 3);


// // 3.

// function E(m, c) {
//     console.log(m * (Math.pow(c, 2)));
// }

// const c = 300000;

// E(73, c);
// E(60, c);


// // 4.  f(x) = x!    // Factorial

// function factorial(x) {
//     let multiplication = 1;
//     for (let i = 1; i <= x; i++) {
//         multiplication = multiplication * i;

//     }
//     console.log(multiplication);
// }
// factorial(5);


// // 5.

// function f5(x, y) {
//     console.log(Math.cos(x) - Math.sin(y));
// }
// f5(2, 2);


// // 6.

// function f6(x) {
//     console.log(Math.pow(x, 3) + Math.pow(x, 2) + 5 * x + 12);
// }

// f6(2);

// // 7.

// function f7(x) {
//     console.log(Math.pow(x, 2));
// }
// f7(6);

// // 9.

// function f9(x) {
//     console.log(Math.sqrt(x));
// }
// f9(64);









// let nAll = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
// console.log(nAll);

// function isEven(x) {
//     if (x % 2 == 0) {
//         // console.log('Its is a even numbeer');
//         return true;
//     } else {
//         // console.log('Its odd number');
//         return false;
//     }
//     return 1;
// }
// console.log(isEven(nAll[0]));
// console.log(isEven(nAll[1]));


// // isEven(100);
// // isEven(3)



// // addTwoNumbers

// function add2(x, y) {
//     return x + y;
// }
// console.log(add2(4, 5));

// // multiply

// function multi2(x, y) {
//     return x * y;
// }
// console.log(multi2(4, 5));

// function multi3(x, y, z) {
//     const m = x * y * z;
//     return m;
// }
// const result = multi3(4, 5, 6);
// console.log(result);


// for (let i = 0; i < nAll; i++) {
//     if (isEven(nAll[i])) {
//         nAll[i] = nAll[i] + 4;
//     } else {
//         nAll[i] = nAll[i] - 5;
//     }
// }
// console.log(nAll);



// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.


// let num1 = Number(prompt('Gime me first number'));
// let num2 = Number(prompt('Gime me second number'));

// // if (x < y) {
// //     console.log(y + ' is bigger than ' + x);
// // } else {
// //     console.log(x + ' is bigger than ' + y);
// // }


// function findMax(x, y) {
//     if (x < y) {
//         console.log(y + ' is bigger than ' + x);
//     } else {
//         console.log(x + ' is bigger than ' + y);
//     }
// }

// findMax(num1, num2);






// let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];

// function sortDigit() {
//     arr.arraySorter

// }
// console.log(arr);