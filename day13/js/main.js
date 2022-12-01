// Day 13


// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));



// const budget = 1_000_000_000;
// console.log(budget);



// const degree = 45;
// let rad = degree * (Math.PI / 180);
// console.log(rad.toFixed(4));



// let a = 5, b = 9;
// const diff = Math.abs(a - b);
// console.log(diff);

// // Deeshee buhel bolgono
// console.log(Math.ceil(.95));
// console.log(Math.ceil(7.004));
// console.log(Math.ceil(-7.004));


// // Dooshoo buhel
// console.log(Math.floor(5.95));
// console.log(Math.floor(5.05));
// console.log(Math.floor(-5.05));

// // Oiroltsoo buhel too
// console.log(Math.round(0.9));
// console.log(Math.round(5.95));
// console.log(Math.round(-5.05));

// // ihiig n oloh
// console.log(Math.max(1, 7, 3))
// console.log(Math.max(-1, -7, -2))

// // bagiig n oloh
// console.log(Math.min(1, 7, 3))
// console.log(Math.min(-1, -7, -2))

// // zereg bodoh
// console.log(Math.pow(7, 3));

// //
// console.log(Math.sqrt(45));

// x2 = y2 + z2  x=? input: y=15, z=24
// let y = Number(prompt('Gime y'));
// let z = Number(prompt('Gime z'));
// alert('x = ' + Math.round(Math.sqrt((Math.pow(y, 2) + Math.pow(z, 2)))));

// Tegees negiig hoorond duriin butarhai too
// console.log(Math.floor(Math.random() * 6 + 1));
// console.log(Math.ceil(Math.random() * 6));

// console.log('------BODLOGO-------')

// let tooA = Number(prompt('Ehnii toogoo oruul'));
// let tooB = Number(prompt('Daraagiin toogoo oruul'));

// let max = Math.max(tooA, tooB);
// let min = Math.min(tooA, tooB);
// console.log('Max too = ' + max);
// console.log('Min too = ' + min);

// console.log('Random too = ' + Math.round(Math.random() * (max - min) + min));


// let count = 1;
// let howMany = prompt('Home many time?')
// while (count <= Number(howMany)) {
//     console.log('Random too = ' + Math.round(Math.random() * (max - min) + min));
//     count = count + 1;
// }


// Loops

// let count = 1;
// console.log('loop started')
// while (count <= 10) {
//     console.log(count);
//     count = count + 1;
// }

// console.log('loop ended')



// let answer = 'yes';

// while (answer == 'yes') {
//     answer = prompt('Ta togloomoo urgeljluuleh uu, yes or no').toLocaleLowerCase();
//     if (answer == 'yes') {
//         alert('Thanks');
//     }
// }
// console.log('GAME OVER');




let maxNum = Number(prompt('Gime me number')); // 3
let count = 0;
let sum = 0;

while (count <= maxNum) {
    // console.log(count);
    sum = sum + count;
    console.log(count);
    count = count + 1;


}

console.log(sum);








