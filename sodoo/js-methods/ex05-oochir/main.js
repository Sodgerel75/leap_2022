

let oochir = ["Бат", "Дорж", "Пунцаг", "Готов", "Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар"];

console.log(oochir);
console.log(oochir.indexOf("Гончигсумлай"));

oochir.splice(oochir.indexOf("Гончигсумлай") + 1, 0, 'Egch 1', 'Egch 2')

console.log('Эгч нар дайрж орсны дараа - ' + oochir);
// console.log(oochir.pop());

let hasahHun = oochir.length - 10;
if (oochir.length >= 10) {
    console.log('Хасах хүний тоо - ' + hasahHun);
    oochir.splice(10, hasahHun);
}
console.log(oochir);
console.log('10 хүн үлдсэн оочир - ' + oochir);




