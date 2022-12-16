console.log('------Guess My Number by Sodoo--------');

const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log('Random Number = ' + randomNumber);

// ------------------ Restart Game -------------------------

// const restartButton = document.getElementById('restart');
// restartButton.addEventListener('click', resGame);

// function resGame() {
//   const randomNumber = Math.floor(Math.random() * 20) + 1;
//   console.log('Random Number = ' + randomNumber);
// }



// ------------------ Start Game -------------------------


const checkButton = document.getElementById('check');
checkButton.addEventListener('click', guessNum);


function guessNum() {
  function resGame() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log('Random Number = ' + randomNumber);
  }


  let inputNumber = document.getElementById('gInput');

  if (randomNumber < inputNumber.value) {
    // alert('Таны оруулсан тоо RANDOM тооноос их байна');
    document.getElementById('message').innerHTML = 'Их байна'

  }
  else if (randomNumber > inputNumber.value) {
    // alert('Таны оруулсан тоо RANDOM тооноос бага байна');
    document.getElementById('message').innerHTML = 'Бага байна'
  }
  //     i++;
  //  while (randomNumber != inputNumber.value)
  //   // alert('Баяр хүргэе!!! Та таалаа. \nRandom Number = ' + randomNumber);
  //   document.getElementById('message').innerHTML = 'Зөв таалаа'
  //   // console.log('Баяр хүргэе!!! Та таалаа. Random Number = ' + randomNumber);
  //   console.log(i + ' удаа оролдож үзсэн байна.');

  console.log(inputNumber.value);
  console.log('clicked');

}



















// let i = 1;
// let inputNumber;

// do {
//   inputNumber = Number(prompt('100 hurtelh too oruulna uu'));
//   inputNumber = document.getElementsByClassName('guess');
//   if (randomNumber < inputNumber) {
//     // alert('Таны оруулсан тоо RANDOM тооноос их байна');
//     console.log(document.getElementsByClassName('message').innerHTML);
//     document.getElementsByClassName('message').innerHTML = 'Таны оруулсан тоо RANDOM тооноос их байна'

//   }
//   else if (randomNumber > inputNumber) {
//     // alert('Таны оруулсан тоо RANDOM тооноос бага байна');
//   }
//   i++;
// } while (randomNumber != inputNumber)
// // alert('Баяр хүргэе!!! Та таалаа. \nRandom Number = ' + randomNumber);
// console.log('Баяр хүргэе!!! Та таалаа. Random Number = ' + randomNumber);
// console.log(i + ' удаа оролдож үзсэн байна.');








