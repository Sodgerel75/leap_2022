// let str = 'life is beautiful';

// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }




// ex - 9



// let n = prompt('Duriin to oruul');
// let i = 0; // string uyd
// let sum = 0;


// while (i < n.length) {
//     console.log(n.charAt(i));
//     sum = sum + Number(n.charAt(i));
//     i++;
// }
// console.log('Oruulsan too = ' + n);
// console.log('Niilber = ' + sum);




// let n = prompt('Duriin to oruul');   // string uyd
// let sum = 0;


// for (let i = 0; i < n.length; i++) {
//     console.log(n.charAt(i));
//     sum = sum + Number(n.charAt(i));

// }
// console.log('Oruulsan too = ' + n);
// console.log('Niilber = ' + sum);



// While 

// let sum = 0;
// let rem = 0;


// let n = prompt('Duriin to oruul');   // number uyd
// console.log('Oruulsan too = ' + n);

// while (n > 0) {
//     rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10);
// }

// console.log('Niilber = ' + sum);


// For 


let sum = 0, rem = 0, n = Number(prompt('Duriin to oruul'));

for (; n > 0;) {
    rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10);
}

console.log(sum);
















