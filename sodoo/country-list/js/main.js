async function searchFunc(event) {
    const searchVal = document.getElementById('input').value;
    console.log(searchVal);

    const country = await fetch('https://restcountries.com/v3.1/all');
    const countryJSON = await country.json();
    console.log(countryJSON);

    // const animesData = countryJSON.name;
    // console.log(animesData);

    const searchResult = countryJSON.filter(el =>
        el.name.common.toLowerCase().includes(searchVal.toLowerCase())
    )
    console.log(searchResult);

    const conAllDom = document.getElementById('conAll');
    let result = ''
    searchResult.map((element, index) => {
        result += getCard(element, index);
    })
    conAllDom.innerHTML = result;
}





function getCard(data) {
    return `
    <div class="card">
        <img src="${data.flags.png}" alt="">
        <h6>${data.name.official}</h6>
    </div>
    `
}

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((country) => {
        // console.log(country);
        // console.log(country[5].continents[0]);

        // country.map((element) => {
        //     console.log(country[element].continents[0]);
        // })

        const conAllDom = document.getElementById('conAll');

        // conAllDom.innerHTML = '';
        country.map((element) => {
            conAllDom.innerHTML += getCard(element)
        })
    })