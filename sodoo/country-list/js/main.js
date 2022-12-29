let data = [];

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((country) => {
        data = country
        console.log(data);
        console.log('called');
        // ----------------------- Render Code ------------------------
        const conAllDom = document.getElementById('conAll');
        conAllDom.innerHTML = '';
        data.map((element) => {
            conAllDom.innerHTML += getCard(element)
            // console.log(element.continents[0]);
        })
    })

const select = document.getElementById('continents');

select.addEventListener('change', function handleChange(event) {
    // console.log(event.target.value);
    selectCountry(event);
})

function selectCountry(event) {
    // console.log(event.target.value);
    let searchValue = event.target.value.toLowerCase();
    console.log(searchValue);
    // console.log(typeof searchValue);

    const selectResult = data.filter(el =>
        el.continents[0].toLowerCase().includes(searchValue)
    )
    console.log(selectResult);
    // console.log(selectResult.length);
    document.getElementById('howMany').innerHTML = ` Улсын тоо = ${selectResult.length}`;
    // ----------------------- Render Code ------------------------
    const conAllDom = document.getElementById('conAll');
    conAllDom.innerHTML = '';
    selectResult.map((element) => {
        conAllDom.innerHTML += getCard(element)
    })

    // let too = [];
    // for (let i = 0; i < selectResult.length; i++) {
    //     too.push(selectResult[0].population)
    // }
    // console.log(too);
}


const ranksSelecter = document.getElementById('ranks')
ranksSelecter.addEventListener('change', function handleChange(event) {
    rankFunc(event);
})

// const rankedResult = data.population.sort();
// console.log(rankedResult);

function rankFunc(event) {
    console.log(event.target.value);
    if (event.target.value == 'Хүн амын тоогоор') {
        console.log('----TEST-HUN AM-------');
    }





}





async function searchFunc(event) {
    const searchVal = document.getElementById('input').value;
    console.log(searchVal);

    // const country = await fetch('https://restcountries.com/v3.1/all');
    // const countryJSON = await country.json();
    // console.log(countryJSON);

    const searchResult = data.filter(el =>
        el.name.official.toLowerCase().includes(searchVal.toLowerCase())
    )
    console.log(searchResult);
    document.getElementById('howMany').innerHTML = ` Улсын тоо = ${searchResult.length}`;
    // ----------------------- Render Code ------------------------
    const conAllDom = document.getElementById('conAll');
    conAllDom.innerHTML = '';
    searchResult.map((element) => {
        conAllDom.innerHTML += getCard(element)
        // console.log(element.population);
    })
}

function getCard(data) {
    return `
    <div class="card">
        <img src="${data.flags.png}" alt="">
        <div>
        <h6>${data.name.official}</h6>
        <span class="pop">Population: ${(data.population / 1.0e+6).toFixed(2)} M</span>
        </div>
    </div>`
}

