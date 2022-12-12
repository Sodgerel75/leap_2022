console.log('aimag');

console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-522").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);

document.getElementById("aimag-315").innerHTML = "Bavaria";

document.getElementById("aimagNames").style = 'font-size: 20px; color: blue;'
document.getElementById("aimag-315").style = 'font-size: 30px; color: red; padding: 20px; margin: 20px; border: 1px solid red; background-color: pink;'

document.getElementsByClassName("khangai")[0].style = 'font-size: 30px; color: red; padding: 20px; margin: 20px; border: 1px solid red; background-color: pink;'

for (let i = 0; i < document.getElementsByClassName("khangai").length; i++) {
    document.getElementsByClassName("khangai")[i].style = 'font-size: 30px; color: green;';

}

for (let i = 0; i < document.getElementsByClassName("baruun").length; i++) {
    document.getElementsByClassName("baruun")[i].style = 'font-size: 30px; color: orange;';

}


console.log(document.getElementById("aimagNames").id);

const liLenght = document.getElementById("aimagNames").getElementsByTagName("li").length;
console.log(document.getElementById("aimagNames").getElementsByTagName('li')[liLenght - 1].innerHTML);

document.getElementsByTagName('span')[0].innerHTML = "MONGOL";



console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes('aimag-1'));


let styleUngu = 'font-size: 30px; color: orange; border: 1px solid green; background-color: #FEFF33'

for (let i = 0; i < document.getElementById('aimagNames').getElementsByTagName("li").length; i++) {
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-1')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = 'font-size: 30px; color: yellow;'
    }

    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-2')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = 'font-size: 30px; color: pink;'
    }

    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-3')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = 'font-size: 30px; color: green; border: 1px solid green;'
    }

    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes('aimag-4')) {
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = styleUngu
    }


}


console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes('aimag-1').style = 'font-size: 30px; color: green;');