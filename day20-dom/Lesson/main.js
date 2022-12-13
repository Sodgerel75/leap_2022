console.log('Day - 20 - DOM');

document.getElementById("helloText").innerHTML = "Hello WORLD!";

document.getElementsByClassName("dummy")[0].innerHTML = "HELLO DUMMY";
document.getElementsByClassName("dummy")[1].innerHTML = "HELLO DUMMY";
document.getElementsByClassName("dummy")[2].innerHTML = "HELLO DUMMY SPAN";

console.log(document.getElementsByClassName("dummy")[0]);