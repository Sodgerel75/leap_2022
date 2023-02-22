let n = 12341;
let array = n.toString().split("");
console.log(array);

let sum = 0;
for (let i = 0; i < 10; i++) {
  if (array[i] == i) {
    sum = 1;
    console.log(i + 1 + ": " + sum);
  } else {
    console.log(i + ": " + "0");
  }
}
