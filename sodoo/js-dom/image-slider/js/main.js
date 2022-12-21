// let button1 = document.getElementById('img1')
// let button2 = document.getElementById('img2')
// let button3 = document.getElementById('img3')
// let button4 = document.getElementById('img4')
// let button5 = document.getElementById('img5')

// button1.addEventListener('click', reSize1)
// button2.addEventListener('click', reSize2)
// button3.addEventListener('click', reSize3)
// button4.addEventListener('click', reSize4)
// button5.addEventListener('click', reSize5)

// function reSize1() {

//     for (let i = 0; i < document.getElementsByClassName("col").length; i++) {
//         document.getElementsByClassName("col")[i].style.width = '100%';
//     }
//     document.getElementById('img1').style.width = '300%';
//     console.log('clicked');
// }

// function reSize2() {
//     document.getElementById('img1').style.width = '100%';
//     document.getElementById('img2').style.width = '300%';
//     document.getElementById('img3').style.width = '100%';
//     document.getElementById('img4').style.width = '100%';
//     document.getElementById('img5').style.width = '100%';
//     console.log('clicked');
// }

// function reSize3() {
//     document.getElementById('img1').style.width = '100%';
//     document.getElementById('img2').style.width = '100%';
//     document.getElementById('img3').style.width = '300%';
//     document.getElementById('img4').style.width = '100%';
//     document.getElementById('img5').style.width = '100%';
//     console.log('clicked');
// }

// function reSize4() {
//     document.getElementById('img1').style.width = '100%';
//     document.getElementById('img2').style.width = '100%';
//     document.getElementById('img3').style.width = '100%';
//     document.getElementById('img4').style.width = '300%';
//     document.getElementById('img5').style.width = '100%';
//     console.log('clicked');
// }

// function reSize5() {
//     document.getElementById('img1').style.width = '100%';
//     document.getElementById('img2').style.width = '100%';
//     document.getElementById('img3').style.width = '100%';
//     document.getElementById('img4').style.width = '100%';
//     document.getElementById('img5').style.width = '300%';
//     console.log('clicked');
// }



let imgCon = document.getElementById('container').children;
imgCon[0].style.width = '300%';
for (let i = 0; i < imgCon.length; i++) {
    imgCon[i].addEventListener('click', (self) => {
        console.log(self.target);
        for (let j = 0; j < imgCon.length; j++) {
            if (j !== i) {
                imgCon[j].style = 'width: 100%;'
                imgCon[j].innerHTML = '';
            }
        }
        self.target.style = 'width:300%';
        imgCon[i].innerHTML = 'test'
    })
}

