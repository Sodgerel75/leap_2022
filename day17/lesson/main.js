function pow(number, exponent) {
    let multiply = 1;
    for (let i = 1; i <= exponent; i++) {
        multiply = multiply * number;
    }
    return multiply;
}
let result = pow(2, 3);

console.log(result);

console.log(pow(4, 3));
console.log(Math.pow(4, 3));




// Хоёр тооны утгыг хооронд харьцуулаад аль багыг нь хэвлээд true / false буцаадаг функц бичнэ үү. Функцын нэр  нь findMin

function findMin(x, y) {
    if (x > y) {
        return y;
    } else {
        return x;
    }
}

let min = findMin(20, 10);

console.log(min);


// Өгөгдсөн array-ны элементүүлэг хэвлэдэг функц бичнэ үү. Функцын нэр нь printArray


// function printArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         let ners = array[i];
//         console.log(ners);
//     }
// }

// let arr = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// printArray(arr);


// Өгөгдсөн array-наас хамгийн их утгыг нь олоод буцаадаг функц бичнэ үү. Функцын нэр нь findArrayMax. Функцээ expression хэлбэрээр бичнэ үү.




let findArrayMax = function (arr) {
    let max = -99999999;
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i])
            max = arr[i];
    }
    return max;
}


// Өгөгдсөн тоон array-ны утгуудыг бүгдийг нь нэмээд дундажыг нь олоод буцаадаг функц бичнэ үү. Функцын нэр нь findArrayAverage. Функцээ arrow expression function хэлбэрээр бичнэ үү.


let findArrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    const averNum = sum / arr.length;
    return averNum;
}

let sodooArr = [1, 2, 51, 3, 8, 5, 6]

console.log('Max number = ' + findArrayMax(sodooArr));
console.log('Average number = ' + findArrayAverage(sodooArr));





function findOntsDumd(points) {
    if (points < 60) {
        return "Very bad";
    } else if (points >= 60 && points < 70) {
        return "Satisfied";

    } else if (points >= 70 && points < 80) {
        return "Average";

    } else if (points >= 80 && points < 90) {
        return "Good";
    } else if (90 <= points && points <= 100) {
        return "Very Good"
    } else {
        "Please give me Points between 0 - 100";
    }
}


let inputPoint = Number(prompt('Gime me Student Point'));
let inputStudentName = prompt('Gime me Student Name');
let pointResult = findOntsDumd(inputPoint);

console.log(`${inputStudentName} - ${inputPoint} - ${pointResult}`);