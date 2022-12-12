/*
1. Давхар давталт 1
Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
Input: 5
Output:
 - 1 
 - 1 2 
 - 1 2 3 
 - 1 2 3 4 
 - 1 2 3 4 5
2. Давхар давталт 2
Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
Input: 5
Output:
- 5 4 3 2 1 
- 5 4 3 2 
- 5 4 3 
- 5 4 
- 5
*/

console.log('------1. Давхар давталт 1------')

// let maxNum = Number(prompt('Gime me number'));
let maxNum = 5;
let count = 1;
let output = '';
console.log('Input = ' + maxNum);
while (count <= maxNum) {
    // console.log(count);
    output = output + count + ' ';
    count = count + 1;
    console.log(output);
}
// console.log('Давталт - ' + count);
// console.log('Output = ' + output);

// let number = Number(prompt("Input number"));
// let sum = "";

// for(let i = 1; i <= number; i++) {
//     for(let j = 1; j <= i; j++ ) {
//         sum += j + " ";
//     }
//     sum += "\n";
// }
// console.log(sum + "\n\n");



// console.log('------2. Давхар давталт 2------')   // GOYO PATERN GARSAN



let pattern = "";
for (let i = 1; i <= maxNum; i++) {
    for (let j = maxNum; j >= i; j--) {
        pattern += j + ' ';
    }
    pattern += "\n";
}
console.log(pattern);












// // let maxNum = Number(prompt('Gime me number'));
// let i = 0;
// let input = 5;
// let output = '';

// console.log('Input = ' + input);

// while (input > i) {
//     // console.log(count);
//     output = output + ' ' + input;

//     console.log(output);

//     input = input - 1;

// }



// console.log('');
// console.log('Давталт - ' + i);
// console.log(output);


// while (5 > i) {

//     console.log(output.slice(0, -2));
//     i++;
// }




// console.log('------2. Давхар давталт 2------')   // GOYO PATERN GARSAN

// // let maxNum = Number(prompt('Gime me number'));
// let maxNum = 5;
// let count = 1;
// let output = '';
// console.log('Input = ' + maxNum);
// while (count <= maxNum) {
//     // console.log(count);
//     output = count + ' ' + output;
//     count = count + 1;
//     console.log(output);
// }
// console.log('Давталт - ' + count);
// console.log('Output = ' + output);








// console.log('');
// console.log('------2. Давхар давталт 2------')


// // let inputNumber = Number(prompt('Gime me number'));
// let inputNumber = 5;
// let rangeNumber = 9;


// console.log('Input: ' + inputNumber)
// while (inputNumber <= rangeNumber) {
//     console.log(rangeNumber);
//     rangeNumber = rangeNumber - 1;
// }




