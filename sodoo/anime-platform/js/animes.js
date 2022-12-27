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
    console.log('TEst');
    console.log(event.target.value);
    // const searchVal = document.getElementById('input').value;
    // console.log(searchVal);

    const animes = await fetch('https://api.jikan.moe/v4/top/anime');
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;
    console.log(animesData);

    const genres = data.genres.map(genre => {
        const result = genre.name
        return result;
    })
    console.log(genres);



    // console.log(genres);
    // const searchResult = animesData.filter(el =>
    //     el.title.toLowerCase().includes(searchVal.toLowerCase())
    // )
    // console.log(searchResult);

    // const conAllDom = document.getElementById('conAll');
    // let result = ''
    // searchResult.map((element, index) => {
    //     result += getCard(element, index);
    // })
    // conAllDom.innerHTML = result;
}








async function searchFunc(event) {
    const searchVal = document.getElementById('input').value;
    console.log(searchVal);

    const animes = await fetch('https://api.jikan.moe/v4/top/anime');
    const animesJSON = await animes.json();
    const animesData = animesJSON.data;
    // console.log(animesData);
    const searchResult = animesData.filter(el =>
        el.title.toLowerCase().includes(searchVal.toLowerCase())
    )
    console.log(searchResult);

    const conAllDom = document.getElementById('conAll');
    let result = ''
    searchResult.map((element, index) => {
        result += getCard(element, index);
    })
    conAllDom.innerHTML = result;
}

// document.addEventListener('keydown', function (event) {
//     alert(event.keyCode);
//     searchFunc();
// });

function getCard(data, index) {
    // console.log(data.genres);
    const genres = data.genres.map(genre => {
        const result = `<a href="#">${genre.name}</a>`
        return result;
    })
    // console.log(genres);

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
                    <div class="synoText1" id="synopsis_${index}">${data.synopsis.substring(0, 200)}</div>
                    <div class="synoText2"  id="synopsisDe_${index}">${data.synopsis}</div>
                    <button id="${index}" class="showMore1" ><i class="bi bi-caret-down"></i></button>
                    <button id="min_${index}" class="showMore2" ><i class="bi bi-caret-up"></i></button>
                    <div>
                        <div id="studio"><b>Studio: </b><a href="${data.studios[0].url}"> ${data.studios[0].name}</a></div>
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


fetch('https://api.jikan.moe/v4/top/anime')
    .then((result) => result.json())
    .then((topAnimes) => {
        // console.log(topAnimes);
        const top25 = topAnimes.data;
        console.log(top25);
        const conAllDom = document.getElementById('conAll');
        let result = ''
        top25.map((element, index) => {
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
    })

