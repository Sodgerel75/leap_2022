console.log('----- BOM ------');
// console.log(window);
// // window.alert('hello');


// window.open('https://google.com', 'hello');

// window.confirm('Hello');

// let result = window.confirm('Do you wanna to Quit?')
// console.log(result);

// let message = result ? 'Та ОК товчийг дарлаа' :
//     'Та Cancel товчийг дарсан';
// alert(message);


let alertButton = document.getElementById('alertButton');
let cancelButton = document.getElementById('cancelButton');
let timeoutID;
function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
}
function clearAlert() {
    clearTimeout(timeoutID);
}




alertButton.addEventListener('click', () => {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
});

cancelButton.addEventListener('click', () => {
    console.log(timeoutID);
    window.clear(timeoutID);

})

console.log(timeoutID);



setTimeout(() => {
    console.log('Time out is running');
}, 5000)

let counter = 0;

// setInterval(startInterval, 1000);



function runTimerInterval() {
    window.setInterval(startInterval, 10);
}


function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    // myTimer.innerHTML = now;
    myTimer.innerHTML = now.getHours() + ' ' + now.getMinutes() + ' ' + now.getSeconds() + ' ' + now.getMilliseconds();

}

let startButton = document.getElementById('starter');

startButton.addEventListener('click', runTimerInterval);



let colorButton = document.getElementById('colorChanger');

function randomColor() {
    document.getElementById('bodyCol').style = 'background-color: red';
}

colorButton.addEventListener('click', randomColor);

