// Input: [4, 2, 34, 4, 1, 12, 1, 4]
// Output: [4, 1]

let arr = [4, 2, 34, 4, 1, 12, 1, 4];

let duplicates = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (!duplicates.includes(arr[i])) {
        if (arr[i] == arr[j]) {
          duplicates.push(arr[i]);
        }
      }
    }
  }
}
console.log(duplicates);

// const findDuplicates = (arry) =>
//   arry.filter((item, index) => arry.indexOf(item) !== index);

// console.log(findDuplicates(arr));

// let uniqueNumber = duplicates.filter((c, index) => {
//   return duplicates.indexOf(c) === index;
// });

// console.log(uniqueNumber);
