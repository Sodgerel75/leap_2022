function findMax(a, b) {
    return Math.max(a, b);
}
console.log('1.findMax(2, 8)');
console.log('Max number is = ', findMax(2, 8));

function findNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return `Found number index = ` + i;
        }
    }
    return -1;
}

const a = [1, 2, 3, 4, 5];
const b = ["a", "b", "c", "d"];
console.log(findNumberInArray(a, 6)); // -1
console.log(findNumberInArray(a, 4)); // 2

console.log(findNumberInArray(b, "b")); // 3
console.log(findNumberInArray(b, "e")); // -1


function randomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    const c = Math.floor(Math.random() * (max - min + 1) + min);
    return c;
}
console.log('2-10 random number = ', randomNumber(2, 10));

function findAverage(arr) {
    let sum = 0;
    arr.map((el) => sum += el);
    return sum / arr.length;
}
console.log(findAverage(a)); // 3

function findSum(arr) {
    let sum = 0;
    arr.map((el) => sum += el)
    return sum;
}
console.log(findSum(a)); // 15

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(9));
console.log(isPrime(10));


console.log("ABC".toLocaleLowerCase());

function strToLowerCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
        // arr[i] = arr[i].toLowerCase();
    }
    return arr;
}
console.log(strToLowerCase(b));