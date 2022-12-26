// console.log('------------- User Profile Ex ---------------');



function getCard(data) {
    return `
    <div class="card">
        <div class="card-header" style = "background-color: rgb(${randomRgbColor()})">
            <img src="${data.picture.large}" alt="">
            <h6>${data.name.first} ${data.name.last}</h6>
            <p>${data.email}</p>
            <p>${data.phone}</p>
        </div>
        <ul>
            <li><i class="bi bi-circle-fill" style = "color: rgb(${randomRgbColor()})"></i> Post Code - ${data.location.postcode}</li>
            <li><i class="bi bi-circle-fill" style = "color: rgb(${randomRgbColor()})"></i> Location - ${data.location.city}, ${data.location.country}</li>
            <li><i class="bi bi-circle-fill" style = "color: rgb(${randomRgbColor()})"></i> Facebook - ${data.login.username}</li>
        </ul>
        <p class="money">Total Amount Spent $ ${data.location.street.number}</p>
    </div>
    `


}

fetch('https://randomuser.me/api')
    .then((result) => result.json())
    .then((randomUsers) => {
        console.log(randomUsers);

        const user = randomUsers.results[0]
        console.log(user.name.first);

        const conAllDom = document.getElementById('conAll');
        conAllDom.innerHTML = getCard(user)
    })

fetch('https://randomuser.me/api')
    .then((result) => result.json())
    .then((randomUsers) => {
        const user = randomUsers.results[0]
        const conAllDom = document.getElementById('conAll2');
        conAllDom.innerHTML = getCard(user)
    })

fetch('https://randomuser.me/api')
    .then((result) => result.json())
    .then((randomUsers) => {
        const user = randomUsers.results[0]
        const conAllDom = document.getElementById('conAll3');
        conAllDom.innerHTML = getCard(user)
    })

function randomRgbColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b].toString();
}


let color = document.getElementsByTagName('card-header').style = `"background-color: rgb(${randomRgbColor()})"`;
console.log(color);





