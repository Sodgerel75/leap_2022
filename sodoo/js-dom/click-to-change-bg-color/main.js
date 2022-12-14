let colBtn = document.querySelector('#button2');
console.log(colBtn);

colBtn.addEventListener('click', backChange)


function backChange() {
    document.getElementById('pa1').style = 'background-color: red';
    document.getElementById('pa2').style = 'background-color: yellow';
}