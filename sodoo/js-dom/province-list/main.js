// console.log(document.getElementById("aimag-101").innerHTML);
// console.log(document.getElementById("aimag-522").innerHTML);
// console.log(document.getElementById("aimag-315").innerHTML);

// // document.getElementById("aimag-315").innerHTML = "Bavaria";

// document.getElementById("aimagNames").style = 'font-size: 20px; color: blue;'
// document.getElementById("aimag-315").style = 'font-size: 30px; color: red; padding: 20px; margin: 20px; border: 1px solid red; background-color: pink;'

// document.getElementsByClassName("khangai")[0].style = 'font-size: 30px; color: red; padding: 20px; margin: 20px; border: 1px solid red; background-color: pink;'

// for (let i = 0; i < document.getElementsByClassName("khangai").length; i++) {
//     document.getElementsByClassName("khangai")[i].style = 'font-size: 30px; color: green;';

// }

// for (let i = 0; i < document.getElementsByClassName("baruun").length; i++) {
//     document.getElementsByClassName("baruun")[i].style = 'font-size: 30px; color: orange;';

// }


// console.log(document.getElementById("aimagNames").id);

// const liLenght = document.getElementById("aimagNames").getElementsByTagName("li").length;
// console.log(document.getElementById("aimagNames").getElementsByTagName('li')[liLenght - 1].innerHTML);

// document.getElementsByTagName('span')[0].innerHTML = "MONGOL";



// console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes('aimag-1'));


let styleUngu = 'font-size: 30px; color: green; background-color: yellow; padding: 5px 20px; border-radius: 5px; margin: 5px;'
let styleUngu2 = 'font-size: 30px; color: black; background-color: red; padding: 5px 20px; border-radius: 5px; margin: 5px;'

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-1')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = 'font-size: 30px; color: yellow; background-color: orange; padding: 5px 20px; border-radius: 5px; margin: 5px;'
    }

    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-2')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = 'font-size: 30px; color: pink; background-color: green; padding: 5px 20px; border-radius: 5px; margin: 5px;'
    }

    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-3')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = 'font-size: 30px; color: green; background-color: cyan; padding: 5px 20px; border-radius: 5px; margin: 5px;'
    }

    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-4')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = styleUngu
    }
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-5')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = styleUngu2
    }
}


console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes('aimag-1').style = 'font-size: 30px; color: green;');



// console.log(document.querySelector('#aimagNames'));

// console.log(document.querySelector('.khangai'));
// console.log(document.getElementsByClassName("khangai"));
// console.log(document.querySelectorAll('.khangai'));


// document.querySelector('#demo').innerHTML = "Date : " + Date();


// document.querySelector('img').src = 'img/download.jpeg';
// document.querySelector('img').style = 'border: 2px solid red; border-radius: 20px';
// console.log(document.querySelector('img').src = 'img/download.jpeg');



// const newDiv = document.createElement("h2");
// const newContent = document.createTextNode("Манай сайтад тавтай морил");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("body");
// const h1 = document.querySelector('h1');
// h1.appendChild(newDiv)
// main[0].appendChild(newDiv);




