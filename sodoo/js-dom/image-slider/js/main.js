let imgCon = document.getElementById('container').children;
imgCon[0].style.width = '600%';
for (let i = 0; i < imgCon.length; i++) {
    imgCon[i].addEventListener('click', (self) => {
        console.log(self.target);
        for (let j = 0; j < imgCon.length; j++) {
            if (j !== i) {
                imgCon[j].style = 'width: 100%;'
                imgCon[j].innerHTML = '';
            }
        }
        self.target.style = 'width:600%';
        imgCon[i].innerHTML = '<h2>TEST</h2>'
    })
}
