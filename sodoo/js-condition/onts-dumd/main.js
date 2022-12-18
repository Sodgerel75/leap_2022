// Onts dumd is bad is his lessons

const studentPoint = Number(prompt('Give me your score'));
const studentName = prompt("Give me your student name");

let studentResult1 = 'Very Bad';
let studentResult2 = 'Bad';
let studentResult3 = 'Medium';
let studentResult4 = 'Good';
let studentResult5 = 'Super';


if (studentPoint < 60) {
  // alert(studentName + ' - ' + studentResult1);
  console.log(`${studentName} - ${studentPoint} - ${studentResult1}`)
} else if (60 <= studentPoint && studentPoint < 70) {
  // alert(studentName + ' - ' + studentResult2);
  console.log(`${studentName} - ${studentPoint} - ${studentResult2}`)
} else if (70 <= studentPoint && studentPoint < 80) {
  // alert(studentName + ' - ' + studentResult3);
  console.log(`${studentName} - ${studentPoint} - ${studentResult3}`)
} else if (80 <= studentPoint && studentPoint < 90) {
  // alert(studentName + ' - ' + studentResult4);
  console.log(`${studentName} - ${studentPoint} - ${studentResult4}`)
} else if (90 <= studentPoint && studentPoint <= 100) {
  // alert(studentName + ' - ' + studentResult5);
  console.log(`${studentName} - ${studentPoint} - ${studentResult5}`)
} else {
  alert('100 dotor onoogoo oruulna uu');
}

// alert(studentName + ' - ' + studentPoint + ' - ' + studentResult1);

// console.log(`${studentName} - ${studentPoint} - ${studentResult1}`);
// console.log(`${studentName} \n${studentPoint} \n${studentResult1}`);