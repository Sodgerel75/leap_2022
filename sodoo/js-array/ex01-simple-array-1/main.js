// Gime number of arrays = 1, 2, 3, 4, 5, 6, 7, 8
//      Output new array = 2, 3, 6, 4, 6, ,7 ,8 ,8
// Array item value change
// use of FOR LOOP



let arrays = [1, 2, 5, 3, 5, 6, 7, 8];
console.log(arrays);
console.log(arrays.length);

for (let i = 0; i < arrays.length; i++) {
  console.log(arrays[i] + 1);
  arrays[i] = arrays[i] + 10;
}
console.log(arrays)


