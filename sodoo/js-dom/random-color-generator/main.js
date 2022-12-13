



function randomRgbColor() {
    let r = Math.floor(Math.random() * 255) + 1;;
    let g = Math.floor(Math.random() * 255) + 1;;
    let b = Math.floor(Math.random() * 255) + 1;;
    return [r, g, b];
}
let colorCode = randomRgbColor().toString()
console.log(colorCode)






let colorButton = document.getElementById('colorChanger');

function randomColor() {
    randomRgbColor();
    document.getElementById('bodyCol').style = `background-color: rgb(${colorCode})`;

}

colorButton.addEventListener('click', randomColor);


