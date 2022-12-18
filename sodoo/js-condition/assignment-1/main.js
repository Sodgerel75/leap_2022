console.log('\n-------------1------------');

let i = 4 > 3; //true
console.log(i);

let iii = 4 < 3; //false
console.log(iii);

let ii = 4 >= 3; // true
console.log(ii);

let iv = 4 <= 3; // false
console.log(iv);

let v = 4 == 4; // true
console.log(v);

let vi = 4 === 4; // true
console.log(vi);

let vii = 4 != 4; // false
console.log(vii);

let iix = 4 !== 4; // false
console.log(iix);

let ix = 4 != "4"; // false
console.log(ix);

let x = 4 == "4"; // true
console.log(x);

let xi = 4 === "4"; // false
console.log(xi);


console.log('\n-------------2------------');

let one = 4 > 3 && 10 < 12; // true
console.log(one);

let two = 4 > 3 && 10 > 12; // false
console.log(two);

let three = 4 > 3 || 10 < 12; // true
console.log(three);

let four = 4 > 3 || 10 > 12; // true
console.log(four);

let five = !(4 > 3); // false
console.log(five);

let six = !(4 < 3); // true
console.log(six);

let eight = !(4 > 3 && 10 < 12); // false
console.log(eight);

let nine = !(4 > 3 && 10 > 12); // true
console.log(nine);

let ten = !(4 === "4"); // true
console.log(ten);


console.log('\n-------------3------------');

let myAge = 38;
let yourAge = Number(prompt("Насаа оруулна уу"));

if (myAge > yourAge) {
  console.log('Im older than you'); 30
} else {
  console.log('You are older than me');
}


console.log('\n-------------4------------');

let inputD = Number(prompt("Өдөрөө тоогоор оруулна уу"));

if (inputD <= 5) {
  console.log('Ажлын өдөр'); 30
} else {
  console.log('Амралтын өдөр');
}


console.log('\n-------------5------------');

let hours = Number(prompt('Ажилласан цагаа оруулна уу'))
let ratePerHour = 28;
let salary = hours * ratePerHour;
console.log('Таны цалин = ' + salary + ' k');
