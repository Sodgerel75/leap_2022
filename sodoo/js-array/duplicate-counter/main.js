let n = 12341;
let array = n.toString().split("");

console.log(array);

for (let i = 0; i < 10; i++) {
  console.log(i + ": " + array.filter((el) => el == i).length);
}
