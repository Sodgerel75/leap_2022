let data = [];

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((country) => {
        data = country
        console.log(data);
        // console.log(country[5].continents[0]);

        // country.map((element) => {
        //     console.log(country[element].continents[0]);
        // })

        // ----------------------- Render Code ------------------------
        const conAllDom = document.getElementById('conAll');
        conAllDom.innerHTML = '';
        country.map((element) => {
            conAllDom.innerHTML += getCard(element)
        })
        // ----------------------- Render Code ------------------------
    })







async function searchFunc(event) {
    const searchVal = document.getElementById('input').value;
    console.log(searchVal);

    // const country = await fetch('https://restcountries.com/v3.1/all');
    // const countryJSON = await country.json();
    // console.log(countryJSON);

    const searchResult = data.filter(el =>
        el.name.common.toLowerCase().includes(searchVal.toLowerCase())
    )
    console.log(searchResult);

    // ----------------------- Render Code ------------------------
    const conAllDom = document.getElementById('conAll');
    conAllDom.innerHTML = '';
    searchResult.map((element) => {
        conAllDom.innerHTML += getCard(element)
    })
    // ----------------------- Render Code ------------------------
}





function getCard(data) {
    return `
    <div class="card">
        <img src="${data.flags.png}" alt="">
        <h6>${data.name.official}</h6>
    </div>
    `
}

