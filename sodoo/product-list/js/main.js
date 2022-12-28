let data = [];

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((productsData) => {
        console.log(productsData);
        data = productsData.products
        console.log(data);

        // ----------------------- Render Code ------------------------
        const conAllDom = document.getElementById('conAll');
        conAllDom.innerHTML = '';
        data.map((element) => {
            conAllDom.innerHTML += getCard(element)
        })
    })

function getCard(data) {
    return `
<div>        <div class="card">
<img src="${data.images[0]}" alt="">
<h5>${data.title}</h5>
<h6>Price: ${data.price} USD</h6>
<p id="desc">${data.description}</p>

</div>
<button class="btn" href="#">ADD TO CARD</button>
</div>
        `
}


const searchValue = document.getElementById('input');
searchValue.addEventListener('change', function handleChange(event) {
    console.log(event.target.value);
    searchFunc(event)
})

function searchFunc(event) {
    console.log('test');

    const searchValue = document.getElementById('input').value.toLowerCase();
    console.log(searchValue);

    const searchResult = data.filter(el =>
        el.title.toLowerCase().includes(searchValue)
    )
    console.log(searchResult);

    // ----------------------- Render Code ------------------------
    const conAllDom = document.getElementById('conAll');
    conAllDom.innerHTML = '';
    searchResult.map((element) => {
        conAllDom.innerHTML += getCard(element)
    })
}

