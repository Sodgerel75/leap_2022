function randomRgbColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}

function randomColor() {
    document.getElementById('bodyCol').style = `background-color: rgb(${randomRgbColor().toString()})`;

}

let colorButton = document.getElementById('colorChanger');
colorButton.addEventListener('click', randomColor);


