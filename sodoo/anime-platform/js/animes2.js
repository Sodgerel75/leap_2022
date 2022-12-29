// let data = [];

// async function getData() {
//     const fetchedData = await fetch('https://api.jikan.moe/v4/top/anime')
//     const fetchedJSON = await fetchedData.json();
//     data = fetchedJSON.data;
//     // console.log(data);
// }
// getData();



let animeData = [];
let pagiData = {};

let pageNum = 1;
let currentPage = pageNum

async function callURL(event) {
    console.log(event.id);
    if (event.id == 'next') {
        console.log(' pre test');
        console.log(pageNum);
        console.log(currentPage);
        pageNum = Number(currentPage) + 1;
    } else if (event.id == 'pre') {
        pageNum = Number(currentPage) - 1;
    } else {
        pageNum = event.text
    }

    currentPage = pageNum


    console.log(pageNum);
    if (pageNum == undefined || pageNum < 1) {
        pageNum = 1;
        currentPage = 1;
    }
    if (pageNum >= 10) {
        pageNum = 10;
        currentPage = 10;
    }


    const fetchedData = await fetch(`https://api.jikan.moe/v4/top/anime?page=${pageNum}`)
    const fetchedJSON = await fetchedData.json();
    animeData = fetchedJSON.data;
    pagiData = fetchedJSON.pagination.current_page;
    console.log(animeData);
    // console.log('Current Page = ', pagiData);
    const conAllDom = document.getElementById('conAll');
    let result = ''
    animeData.map((element, index) => {
        result += getCard(element, index);
    })
    conAllDom.innerHTML = result; // Last Render
    let buttons = document.getElementsByClassName('showMore1');
    var btnsArr = Array.prototype.slice.call(buttons);
    // console.log(btnsArr);

    let buttonsMin = document.getElementsByClassName('showMore2');
    var btnsArrMin = Array.prototype.slice.call(buttonsMin);
    // console.log(btnsArrMin);

    btnsArr.map((btn, idx) => {
        btn.addEventListener('click', (event) => {
            const syn = document.getElementById(`synopsis_${idx}`)
            syn.style = 'display: none';

            const syn2 = document.getElementById(`synopsisDe_${idx}`)
            syn2.style = 'display: block';

            const buttonMin = document.getElementById(`min_${idx}`)
            buttonMin.style = 'display: block';
            const buttonMax = document.getElementById(`${idx}`)
            buttonMax.style = 'display: none';
        })
    })

    btnsArrMin.map((btn, idx) => {
        btn.addEventListener('click', (event) => {
            const syn = document.getElementById(`synopsis_${idx}`)
            syn.style = 'display: block';

            const syn2 = document.getElementById(`synopsisDe_${idx}`)
            syn2.style = 'display: none';

            const buttonMin = document.getElementById(`min_${idx}`)
            buttonMin.style = 'display: none';
            const buttonMax = document.getElementById(`${idx}`)
            buttonMax.style = 'display: block';
        })
    })

    getPagi(pageNum)
}


callURL(pageNum)

console.log('Data 1-----------------', animeData);


let conPagiDom = document.getElementById('pagination');
console.log(conPagiDom);

function getPagi(page) {
    conPagiDom.innerHTML = '';
    let pre = ` <a id="pre" href="#" onclick="callURL(this)"><i class="bi bi-caret-left"></i></a>`;
    conPagiDom.innerHTML += pre;
    let links;
    for (let i = 0; i < 10; i++) {
        // console.log('test');
        if (page == i + 1) {
            links = ` <a href="#" class="active" onclick="callURL(this)">${i + 1}</a>`;
            console.log(' test if');
        } else {
            links = ` <a href="#" onclick="callURL(this)">${i + 1}</a>`;
            console.log(' test else');
        }
        // console.log(links);
        conPagiDom.innerHTML += links;
    }
    let next = ` <a id="next" href="#" onclick="callURL(this)"><i class="bi bi-caret-right"></i></a>`;
    conPagiDom.innerHTML += next;
}





const select = document.getElementById('genre-selector');

select.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE

    // // 👇️ get selected VALUE even outside event handler
    // console.log(select.options[select.selectedIndex].value);

    // // 👇️ get selected TEXT in or outside event handler
    // console.log(select.options[select.selectedIndex].text);
    findGenre(event)
});


async function findGenre(event) {
    console.log(event.target.value);

    let searchValue = event.target.value;
    console.log(typeof searchValue);

    const searchResult = animeData.filter(el => {
        const result = el.genres.filter(genre => genre.name.toLowerCase().includes(searchValue.toLowerCase()))
        if (result.length > 0) {
            return el
        }
    })
    // ----------------- Render Code -------------------------
    const conAllDom = document.getElementById('conAll');
    let render = '';
    searchResult.map((element, index) => {
        render += getCard(element, index);
        conAllDom.innerHTML = render;
    })
}





async function searchFunc(event) {
    const searchVal = document.getElementById('input').value;
    console.log(searchVal);

    const searchResult = animeData.filter(el =>
        el.title.toLowerCase().includes(searchVal.toLowerCase())
    )
    console.log(searchResult);

    // ----------------- Render Code -------------------------
    const conAllDom = document.getElementById('conAll');
    let render = '';
    searchResult.map((element, index) => {
        render += getCard(element, index);
        conAllDom.innerHTML = render;
    })
}



function getCard(data, index) {
    // console.log(data.genres);
    const genres = data.genres.map(genre => {
        const result = `<a href="#">${genre.name}</a>`
        return result;
    })

    // console.log(data.themes);
    const themesText = data.themes.map(res => {
        const result = `<a href="${res.url}">${res.name}</a>`
        return result;
    })

    // console.log(data.demographics);
    const Demog = data.demographics.map(res => {
        const result = `<a href="${res.url}">${res.name}</a>`
        return result;
    })

    const studioName = data.studios.map(res => {
        const result = `${res.name}`
        return result;
    })

    const studioUrl = data.studios.map(res => {
        const result = `${res.url}`
        return result;
    })

    return `

    <div id="card" class="container">
            <div class="card-header">
                <h6>${data.title}</h6>
            </div>
            <div class="status-anime"
                style="display: flex; justify-content: space-between; background-color: rgb(245, 245, 245); align-items: center;">
                <i class="bi bi-play-btn-fill"></i>
                <p>${data.type}, ${data.year} | ${data.status.substring(0, 8)} | ${data.episodes} eps, ${data.duration.substring(0, 6)}</p>
                <i class="bi bi-broadcast-pin"></i>
            </div>
            <div class="genres" id="genres">
            ${genres.join('')}
            </div>
            <div class="row">
                <div>
                    <img src=${data.images.jpg.image_url} alt="" id="manga-image">
                </div>
                <div class="text-con">
                    <div class="synoText1" id="synopsis_${index}">${data.synopsis.substring(0, 150)}</div>
                    <div class="synoText2"  id="synopsisDe_${index}">${data.synopsis}</div>
                    <button id="${index}" class="showMore1" ><i class="bi bi-caret-down"></i></button>
                    <button id="min_${index}" class="showMore2" ><i class="bi bi-caret-up"></i></button>
                    <div>
                        <div id="studio"><b>Studio: </b><a href="${studioUrl}"> ${studioName}</a></div>
                        <div id="source"><b>Source: </b>${data.source}</div>
                        <div id="theme"><b>Theme: </b>${themesText.join(', ')}</div>
                        <div id="demo"><b>Demographic: </b>${Demog}</div>
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

