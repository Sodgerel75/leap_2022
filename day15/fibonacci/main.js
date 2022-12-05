let f1 = 0;
let f2 = 1;

let n = 0;

let m = Number(prompt('Too oruulna uu'));

console.log(f1);
console.log(f2);

while (n < m) {
    let f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    n++;
    console.log(f3)
}