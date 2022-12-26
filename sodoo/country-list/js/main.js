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
        // console.log(country[0].name.common);

        const conAllDom = document.getElementById('conAll');

        // conAllDom.innerHTML = '';
        country.map((element) => {
            conAllDom.innerHTML += getCard(element)
        })
    })