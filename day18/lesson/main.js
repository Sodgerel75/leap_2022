// console.log('Day - 18 Array-Method, String-Method, Object');

// // SHIFT

// // arr1=[1,2,3] => shift(arr) => [2,3]

// let shiftArr = (arr) => {
//     let tempArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i != 0) {
//             tempArray.push(arr[i]);
//         }
//     }
//     return tempArray;
// }


// let arr1 = [1, 2, 3, 5, 6];
// console.log(shiftArr(arr1));
// // console.log('array shift method');



// console.log('UNSHIFT METHOD');

// let unshiftArray = function (arr, number) {
//     let tempArray = [];
//     tempArray.push(number);
//     for (let i = 0; i < arr.length; i++) {
//         tempArray.push(arr[i])

//     }
//     return tempArray;
// }

// let arr2 = [5, 6, 7]
// console.log(unshiftArray(arr2, 1));

// console.log(arr2.unshift(4));


// sortArray = [1, 2, 8, 7, -1, 10];

// function sortingAlgorithm(arr) {

//     for (let i = 0; i < arr.length - 2; i++) {
//         let indexMin = i;
//         for (let j = i + 1; j < arr.length - 1; j++); {
//             if (arr[j] < arr[indexMin]) {
//                 indexMin = j;
//             }
//         }
//         return arr[i];
//         arr[i] = arr[indexMin];
//         arr[indexMin] = temp;

//     }
//     return arr;
// }

// console.log(sortingAlgorithm(sortArray));




// console.log('--------Array Sorting------');

// const names = ['Marlaa', 'Javkhaa', 'Javkhlan', 'Marlaa']

// names.sort();
// console.log(names);


// function arrayReverse(arr) {
//     let tempArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         tempArray.push(arr[i]);

//     }
//     return tempArray;
// }

// let arrReverse = [4, 5, 1, 8]
// console.log(arrayReverse(arrReverse));

// const numbers = ['one', 'two', 'three'];
// console.log('array1: ', numbers);
// const reversed = numbers.reverse();
// console.log('reversed: ', reversed);


// const nameSlice = ['bat', 'dorj', 'purev', 'davaa', 'tomor'];
// console.log(nameSlice.slice(2));



function nameSliceFunc(arr, index) {
    // tempArray = [];                                  // version 1
    // for (let i = index; i < arr.length; i++) {
    //     tempArray.push(arr[i]);

    // }
    // return tempArray;
    for (let i = 0; i < index; i++) {                   // version 2
        arr.shift()
    }
    return arr;
}

console.log(nameSliceFunc([1, 2, 3, 4, 5,], 3)); // [4,5]



console.log('Splice Mehtod');

const spliceNames = ['Davaa', 'Lkhagvaa', 'Purev', 'Bymbaa'];
spliceNames.splice(1, 0, 'Myagmar');
spliceNames.splice(4, 0, 'Baasan');
spliceNames.splice(6, 0, 'Nym');


console.log(spliceNames);