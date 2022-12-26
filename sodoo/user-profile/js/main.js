// console.log('------------- User Profile Ex ---------------');

const card = document.querySelectorAll('#card');

function getCard(data) {
    return `
    <div id="card" class="container">
            <div class="card-header">
                <h6>${data.title}</h6>
            </div>
            <div class="status-anime"
                style="display: flex; justify-content: space-between; background-color: rgb(245, 245, 245); align-items: center;">
                <i class="bi bi-play-btn-fill"></i>
                <p>${data.type}, ${data.year} | ${data.status.substring(0, 8)} | ${data.episodes}, ${data.duration.substring(0, 6)}</p>
                <i class="bi bi-broadcast-pin"></i>
            </div>
            <div class="genres" id="genres">
            </div>
            <div class="row">
                <div>
                    <img src=${data.images.jpg.image_url} alt="" id="manga-image">
                </div>
                <div class="text-con">
                    <div id="synopsis">${data.synopsis.substring(0, 250)}</div>
                    <button id="switcher"><i class="bi bi-caret-down"></i></button>
                    <div>
                        <div id="studio"><b>Studio: </b><a href="${data.studios[0].url}"> ${data.studios[0].name}</a></div>
                        <div id="source"><b>Source: </b>${data.source}</div>
                        <div id="theme"><b>Theme: </b>TEST</div>
                        <div id="demo"><b>Demographic: </b><a href="">TEST</a></div>
                    </div>
                </div>
            </div>
            <div class="row footer">
                <div id="score"><i class="bi bi-star"></i> ${data.score}</div>
                <div id="members"><i class="bi bi-person-fill"></i> ${(data.members / 1.0e+6).toFixed(1)} M</div>
                <button>Add to List</button>
            </div>
        </div>
    `
}

// fetch('https://api.jikan.moe/v4/top/anime')
//     .then((result) => result.json())
//     .then((topAnimes) => {
//         // console.log(topAnimes);
//         const top25 = topAnimes.data;
//         // console.log(top25);

//         const conAllDom = document.getElementById('conAll');
//         // console.log(conAllDom);

//         conAllDom.innerHTML = '';
//         top25.map((element) => {
//             conAllDom.innerHTML += getCard(element)
//         })
//     })



fetch('https://randomuser.me/api')
    .then((result) => result.json())
    .then((topAnimes) => {
        // console.log(topAnimes);
        const top25 = topAnimes.data;
        // console.log(top25);

        const conAllDom = document.getElementById('conAll');
        // console.log(conAllDom);

        conAllDom.innerHTML = '';
        top25.map((element) => {
            conAllDom.innerHTML += getCard(element)
        })
    })