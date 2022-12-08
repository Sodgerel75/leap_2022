// let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ] 
// Sort the array using  method
// Reverse the array using  method
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies


let array = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon", "Amazon"]

console.log(array);


// Sort the array using  method
array.sort();
console.log(array);


// Reverse the array using  method
array.reverse();
console.log(array);





console.log('Remove the middle IT company or companies from the array');


let dund;
let ustgah
if (array.length % 2 == 1) {
    dund = array.length / 2;
    ustgah = 1
} else {
    dund = array.length / 2 - 1
    ustgah = 2
}

array.splice(dund, ustgah,);
console.log(array);


// arrayTegsh.splice(dund, ustgah,);
// console.log(array);

console.log('Remove the first IT company from the array ');
array.shift();
console.log(array);

// Remove the last IT company from the array
array.pop();
console.log(array);

console.log('Remove all IT companies');

array.splice(0, array.length, 'hooson');
console.log(array);


