function getCard(data) {
    return `
    <div class="card">
        <img src="${data.images[0]}" alt="">
        <h6>${data.title}</h6>
        
    </div>
    `
}



fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((productsData) => {
        console.log(productsData);
        let products = productsData.products

        const conAllDom = document.getElementById('conAll');

        conAllDom.innerHTML = '';
        products.map((element) => {
            conAllDom.innerHTML += getCard(element)
        })




        // let searchButton = document.getElementById('search')
        // console.log(searchButton);

        // search.addEventListener('click', searchFunc)




        // let searchVal = document.getElementById('input').value
        // console.log(searchVal);

        // function searchFunc() {
        //     console.log('Search Test');
        //     const resultFiltered = products.title.filter(searchVal)
        //     if (resultFiltered ==) {

        //     }
        //     return result;

        // }
        // console.log(result);



    })