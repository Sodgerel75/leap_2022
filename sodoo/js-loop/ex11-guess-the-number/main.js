// //  1. 1-100 ийн хооронд random оор 1 утга авдаг randomNumber гэсэн variable зарлана уу.
// //  2. Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээргэй.
// //  3. Хэрвээ prompt - оос авсан утга нь randomNumber оос их бол "таны оруулсан тоо их байна" г.м чиглүүлэх маягаар хэвлэдэг байх.



const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Random Number = ' + randomNumber);
let i = 1;
let inputNumber;

do {
  inputNumber = Number(prompt('100 hurtelh too oruulna uu'));
  if (randomNumber < inputNumber) {
    alert('Таны оруулсан тоо RANDOM тооноос их байна');
  }
  else if (randomNumber > inputNumber) {
    alert('Таны оруулсан тоо RANDOM тооноос бага байна');
  }
  i++;
} while (randomNumber != inputNumber)
alert('Баяр хүргэе!!! Та таалаа. \nRandom Number = ' + randomNumber);
console.log('Баяр хүргэе!!! Та таалаа. Random Number = ' + randomNumber);
console.log(i + ' удаа оролдож үзсэн байна.');


