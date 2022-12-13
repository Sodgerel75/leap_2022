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
    myTimer.innerHTML = now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds() + '-' + now.getMilliseconds();

}

let startButton = document.getElementById('starter');

startButton.addEventListener('click', runTimerInterval);



let colorButton = document.getElementById('colorChanger');

function randomColor() {
    document.getElementById('bodyCol').style = 'background-color: red';
}

colorButton.addEventListener('click', randomColor);

