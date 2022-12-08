// . const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// . add 'Meat' in the beginning of your shopping cart if it has not been already added
// . add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log(shoppingCart);

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

console.log(shoppingCart);



console.log(shoppingCart.indexOf('Honey'));
shoppingCart.splice(4, 1,);
console.log(shoppingCart);


console.log(shoppingCart.indexOf('Tea'));
shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);