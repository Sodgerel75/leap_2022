console.log('---------array methods------');

// array at function 

function findAd(arr, index) {

    return arr[index];
}


const array1 = [1, 2, 3, 4, 5];

console.log(findAd(array1, 0));
console.log(findAd(array1, 4));


console.log(array1.at(0));
console.log(array1.at(2));



function arrConcat(arr1, arr2) {
    let concatedArray = []

    // arr.push()
    for (let i = 0; i < arr2.length; i++) {
        concatedArray.push(arr2[i]);

    }
    for (let i = 0; i < arr1.length; i++) {
        concatedArray.push(arr1[i]);
    }
    return concatedArray
}



let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
const arrNew = arr1 + arr2;
console.log(arrNew);

console.log(arrConcat(arr1, arr2));
console.log(arrConcat(arr2, arr1));


// arr1 = [1, 2, 3] arr2 = [4, 5, 6] => arr 3 = [5,7,9]

function arrayElement(arr1, arr2) {
    let sum = [];
    for (let i = 0; i < arr1.length; i++) {
        sum[i] = arr1[i] + arr2[i]
    }
    return sum;
}

console.log(arrayElement(arr1, arr2));



// array includes


console.log('array includes');

// arr1 = [2,4,5] => 5->true 3-> false

let arrayIncludes = function (arr, number) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
            found = true;
            break;
        }

    }
    return found;
}

const arrayInc = [2, 4, 5]
console.log(arrayIncludes(arrayInc, 2));
console.log(arrayIncludes(arrayInc, 5));
console.log(arrayIncludes(arrayInc, 3));

// array implicit function includes
console.log('method includes of ');

console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));


// arr1 = [1,2,3] => 3 index ? => 2

let fincIndex = function (arr, number) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
            index = i;
        }

    }
    return index;
}

const arrIndex = [1, 2, 3]
console.log(fincIndex(arrIndex, 3)); // -> 2
console.log(fincIndex(arrIndex, 2)); // -> 1
console.log(fincIndex(arrIndex, 10)); // -> -1

console.log('now it is time to test index of method array');
console.log(arrIndex.indexOf(3));
console.log(arrIndex.indexOf(2));
console.log(arrIndex.indexOf(10));

const animals = ['chono', 'buhun', 'temee', 'nugas', 'buhun']

console.log(animals.indexOf('buhen'));

// arr1 = [1,2,3] => 123

let funcJoin = (arr, symbol) => {
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            symbol = '';
        }
        output = output + arr[i] + symbol;

    }
    return output;
}
const arrayJoin = [1, 2, 3]
console.log(funcJoin(arrayJoin, " + | + "));

console.log('array join method');

const jiguurten = ['Elee', 'Heree', 'Galuu']
console.log(jiguurten.join());
console.log(jiguurten.join(''));
console.log(jiguurten.join('-$-'));


// arr1 = [1,2,3] => pop => 1,2

let popFunc = (arr) => {
    const lastIndex = arr.length - 1;
    let poppedArray = []

    for (let i = 0; i < arr.length; i++) {
        if (i != lastIndex) {
            poppedArray.push(arr[i]);
        }
    }
    return poppedArray;
}

const popArray = [1, 2, 3];
console.log(popFunc(popArray));
console.log(popFunc([12, 4, 3, 5, 6]));

console.log('pop array method');
const popArrayResult = [3, 4, 5, 6, 7];
popArrayResult.pop();
console.log(popArrayResult);


popArray.forEach((e, index) => {
    console.log(e, '-', index);
})
