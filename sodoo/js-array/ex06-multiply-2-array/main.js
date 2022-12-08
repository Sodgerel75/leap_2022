// Output: [12, 90, 782, 312, 408, 1]

let arr1 = [3, 45, 23, 78, 34]
let arr2 = [4, 2, 34, 4, 12, 1]

output = [];

for (let i = 0; i < arr1.length; i++) {
    output[i] = arr1[i] * arr2[i];
    if (arr1[i] == 'undefined') {
        console.log(arr1[i]);
    }

}
console.log(output);