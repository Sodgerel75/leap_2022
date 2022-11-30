// let a = "hi";
// let b = "hi";
// console.log(a < b);
// console.log(a == b);
// console.log(a === b);



// let c = 10;
// let d = "10";
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d);




// let e = true;
// let f = false;
// console.log(e < f);
// console.log(e > f);

// let result = 10;
// if (result > 10) {
//     console.log('more than 10');
// } else {
//     console.log('less than 10');
// }


// result > 10 ? console.log('more than 10') : console.log('less than 10')
// result > 10 ? (result < 11 ? console.log('test') : console.log('hi')) : console.log('less than 10')




// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// if (5000 >= tip1 && 30000 <= tip1) {
//     console.log(tip1 * 0.15);
// } else {
//     console.log(tip1 + (tip1 * 0.2));
// }


// let tipResult1 = (5000 >= tip1 && 3000 <= tip1) ? tip1 * 0.15 + tip1 : tip1 * 0.2 + tip1;
// console.log(tipResult1);

// let tipResult2 = (5000 >= tip2 && 3000 <= tip2) ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
// console.log(tipResult2);

// let tipResult3 = (5000 >= tip3 && 3000 <= tip3) ? tip3 * 0.15 + tip3 : tip3 * 0.2 + tip3;
// console.log(tipResult3);


// const input = prompt('Give me your money');
// const numberInput = Number(input);
// let exTipResult = (5000 <= tip3 && 30000 >= tip3) ? tip3 * 0.15 + tip3 : tip3 * 0.2 + tip3;
// console.log(exTipResult);




// Onts dumd is bad is his lessons

// const studentPoint = Number(prompt('Give me your score'));
// const studentName = prompt("Give me your student name");

// let studentResult1 = 'Very Bad';
// let studentResult2 = 'Bad';
// let studentResult3 = 'Medium';
// let studentResult4 = 'Good';
// let studentResult5 = 'Super';


// if (studentPoint < 60) {
//     alert(studentName + ' - ' + studentResult1);
// } else if (60 <= studentPoint && studentPoint < 70) {
//     alert(studentName + ' - ' + studentResult2);
// } else if (70 <= studentPoint && studentPoint < 80) {
//     alert(studentName + ' - ' + studentResult3);
// } else if (80 <= studentPoint && studentPoint < 90) {
//     alert(studentName + ' - ' + studentResult4);
// } else if (90 <= studentPoint && studentPoint < 100) {
//     alert(studentName + ' - ' + studentResult5);
// } else {
//     alert('100 dotor onoogoo oruulna uu');
// }

// alert(studentName + ' - ' + studentPoint + ' - ' + studentResult1);

// console.log(`${studentName} - ${studentPoint} - ${studentResult1}`);
// console.log(`${studentName} \n${studentPoint} \n${studentResult1}`);



// alert(`t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n\n \t The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page`);




// const str = "Life, the universe and everything. ";
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str[1]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// let firstName = "John";
// let fullName = firstName.concat(' ', 'Smith');
// console.log(fullName);
// console.log(firstName);


// const dugaar = prompt("Enter Register Number")
// if (dugaar.length == 10) {
//     // alert("Done");
// } else {
//     alert("10 orontoi dugaar oruulna uu");
// }

// console.log(dugaar.charAt(0));
// console.log(dugaar[1]);


// console.log(dugaar.substr(0, 2));
// console.log(dugaar.substr(2, 9));

// if (Number(dugaar.substr(0, 2)) != NaN) {
//     console.log("useg mung");
// } else if (Number(dugaar.substr(0, 2)) == NaN) {
//     console.log("useg oroh yostoi");
// }


// console.log(Number('abc'));
// console.log(Number.isInteger(Number('abc')));
// console.log(Number('12345678'));
// console.log(Number.isInteger(Number('1231456666')));




// const registerNumber = prompt('Give me your register number');


// const registerChar1 = registerNumber.substr(0, 1);
// const registerChar2 = registerNumber.substr(1, 2);
// const registerNum = registerNumber.substr(2, 9);
// // console.log(registerChar);
// // console.log(Number(registerChar));
// // console.log(Number('ABC'));

// console.log(Number(registerChar1));

// if (!Number.isInteger(Number(registerChar1)) && !Number.isInteger(Number(registerChar2)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
//     console.log('Your register characters are correct ')
// } else {
//     console.log('Your register characters are wrong')
// }




const phoheNumber = prompt("Utasnii dugaaraa oruul");

const plus = phoheNumber.substr(0, 1);
const too = phoheNumber.substr(1, 3);
const number = phoheNumber.substr(4, 8);

console.log(plus);
console.log(too);
console.log(number);

if (phoheNumber.length == 12 && plus == "+" && too == 976 && Number.isInteger(Number(number))) {
    console.log("Phone Number Correct");
} else {
    alert("Your Phone Number Wrong");
    console.error("Your Phone Number Wrong");

    if (phoheNumber.length != 12) {
        alert("Utasnii dugaaraa 12 orontoi oruulna uu")
    }

    if (plus != "+") {
        alert("+ temdeg oruulna uu")
    }

    if (plus != 976) {
        alert("Ulsiin code buruu baina")
    }

}
