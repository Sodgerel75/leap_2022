const registerNumber = prompt('Give me your register number');

const registerChar1 = registerNumber.substr(0, 1);
const registerChar2 = registerNumber.substr(1, 2);
const registerNum = registerNumber.substr(2, 9);
// console.log(registerChar);
// console.log(Number(registerChar));
// console.log(Number('ABC'));

console.log(Number(registerChar1));

if (!Number.isInteger(Number(registerChar1)) && !Number.isInteger(Number(registerChar2)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
    console.log('Your register characters are correct ')
} else {
    console.log('Your register characters are wrong')
}
