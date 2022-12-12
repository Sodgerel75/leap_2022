// console.log('events');

let myButton = document.getElementById('my-btn');
console.log(myButton);


let color = 'white';

function changeCol() {
    console.log('clicked');
    if (color === 'white') {
        color = 'green';
        myButton.style = `background-color: ${color}`;

    } else {
        color = 'white';
        myButton.style = `background-color: ${color}`;

    }
}

myButton.addEventListener("click", changeCol);


// let arrowFunc = () => {

// }

// myButton.addEventListener('click', () => {
//     myButton.style = 'background-color:red;'
// })





// let registerButton = document.querySelector('#register');
// console.log(registerButton);
// registerButton.disabled = true;











let colBtn = document.querySelector('#button2');
console.log(colBtn);

colBtn.addEventListener('click', backChange)


function backChange() {
    document.getElementById('pa1').style = 'background-color: red';
    document.getElementById('pa2').style = 'background-color: blue';
}
