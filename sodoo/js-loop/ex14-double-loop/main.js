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

let maxNum = Number(prompt('Gime me number'));
let pattern1 = "";
for (let i = 1; i <= maxNum; i++) {
    for (let j = 1; j < i; j++) {
        pattern1 += j + ' ';
    }
    pattern1 += i + "\n";
}
console.log(pattern1);

console.log('------2. Давхар давталт 2------')   // GOYO PATERN GARSAN

let pattern = "";
for (let i = 1; i <= maxNum; i++) {
    for (let j = maxNum; j >= i; j--) {
        pattern += j + ' ';
    }
    pattern += "\n";
}
console.log(pattern);


document.getElementById('pat').innerHTML = pattern1
document.getElementById('pat2').innerHTML = pattern







// let maxNum = 5;
// let count = 1;
// let output = '';
// console.log('Input = ' + maxNum);
// while (count <= maxNum) {
//     // console.log(count);
//     output = output + count + ' ';
//     count = count + 1;
//     console.log(output);
// }

