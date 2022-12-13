
function runTimerInterval() {
    window.setInterval(startInterval, 10);
}


function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    // myTimer.innerHTML = now;
    myTimer.innerHTML = now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds() + '-' + now.getMilliseconds();

}

runTimerInterval();

let startButton = document.getElementById('starter');

startButton.addEventListener('click', runTimerInterval);



