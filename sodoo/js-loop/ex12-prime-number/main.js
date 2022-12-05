let n = prompt('Too oruulna uu');
let m = Math.sqrt(n);
let isPrime = true;

for (let i = 2; i <= m; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(n + ' - Prime number');
} else {
    console.log(n + ' - Is not prime number');
}