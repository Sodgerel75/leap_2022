console.log('Find out even numbers from 1-10')

const max = 10;
let count = 1;

while (count <= 10) {
    if (count % 2 == 0) {
        console.log(count);
    }
    count = count + 1;
}


// console.log('\n\nFind out all the odd numbers from 1 to 20')


// const maxNumber = 20;
// let countNumber = 1;

// while (countNumber <= 20) {
//     if (countNumber % 2 != 0) {
//         console.log(countNumber);
//     }
//     countNumber = countNumber + 1;
// }




// let str = "life is beautiful";
// let count = 0;


// while (count < str.length) {
//     console.log(str.charAt(count));
//     count++; //count = count + 1;
// }




// let max = 10;

// for (let i = 1; i <= max; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let max = 20;

// for (let i = 1; i <= max; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }




// let str = 'life is beautiful';

// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }








// ----------Square n - д prompt  ашиглан утга оруулахад n*n харьцаатай дөрвөлжин хэвлэх.


// let n = Number(prompt('Toogoo oruulna uu'));
// console.log('Oruulsan too = ' + n);
// console.log('Square = ' + n + 'x' + n);
// let i = 2;
// let od = '* ';

// console.log(od.repeat(n));
// console.log('');
// while (i < n) {
//     console.log(od + '  '.repeat(n - 2) + od);
//     console.log('');
//     i++;
// }
// console.log(od.repeat(n));





// ------------- while loop ашиглан пирамид хийх.-------------------------


// let n = Number(prompt('Toogoo oruulna uu'));
// console.log('Oruulsan too = ' + n);

// let i = 1;
// let od = '* ';

// // console.log(' '.repeat(n - 8) + 'HAPPY NEW YEAR')
// while (i <= n) {
//     console.log(' '.repeat(n - i) + od.repeat(i));
//     i++;
// }