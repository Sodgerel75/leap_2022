const arr1 = [3, 45, 23, 78, 34];
const arr2 = [4, 2, 34, 4, 12, 1];

const res = sumArrs(arr1, arr2);
console.log(res);

function sumArrs(a, b) {
  let sum = [];
  for (let i = 0; i < b.length; i++) {
    if (a[i] == null) {
      a[i] = 1;
    }
    sum.push(a[i] * b[i]);
  }
  return sum;
}
