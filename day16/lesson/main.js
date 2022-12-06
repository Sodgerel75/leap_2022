let nAll = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
console.log(nAll);

for (let i = 0; i < nAll.length; i++) {
    if (nAll[i] % 2 == 0) {
        nAll[i] = nAll[i] + 4;
        console.log('Even Numbers = ' + nAll[i]);
    } else {
        nAll[i] = nAll[i] - 5;
        console.log('Odd Numbers = ' + nAll[i]);
    }
    // console.log(i);
}


// for (let i = 0; i < nAll.length; i++) {
//     if (nAll[i] % 2 != 0) {
//         nAll[i] = nAll[i] - 5;
//         console.log('Odd Numbers = ' + nAll[i]);
//     }
//     // console.log(i);
// }

console.log(nAll);


console.log('');

console.table(nAll);













// let arrays = [1, 2, 5, 3, 5, 6, 7, 8];
// console.log(arrays);

// for (let i = 0; i < arrays.length; i++) {
//     console.log(arrays[i] + 1);
//     arrays[i] = arrays[i] + 10;
// }
// console.log(arrays)