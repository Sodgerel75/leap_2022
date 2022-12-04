//  example 1: input = "Hello World", output = "hELLO wORLD"
//  example 2: input = "This Is STRING!", output = "tHIS iS string!"


let input = "Hello World";
let i = input.length;
let output = '';

console.log('Оруулсан үг = ' + input);

while (0 < i) {
  let useg = input.charAt(i - 1);

  if (useg == useg.toUpperCase()) {
    useg = useg.toLowerCase();
  } else {
    if (useg == useg.toLowerCase()) {
      useg = useg.toUpperCase();
    }
  }
  output = useg + output;
  i--;
}
console.log('Хувирсан үг = ' + output);


