// 1. "Comments can make code readable" - нэг мөртэй коммент болгох 
// Comments can make code readable

// 2. "Javascript lesson begin" - нэг мөртэй коммент болгох 
// Javascript lesson begin

// 3. "Comments can make code readable" олон мөртэй коммент болгох 
/*
Comments 
can make 
code readable
*/

// 4. Variable.js нэртэй файл үүсгэх, number, string, boolean, undefined, null зэрэг утгуудыг өгөх 
let messageTest1 = 100; // number
let messageTest2 = 'Hello'; // string
let messageTest3 = true; // boolean
let messageTest4;
let messageTest5 = null;

// 5. Datatypes.js нэртэй файл үүсгэх, typeof ашиглан өөр, өөр, төрлийн утгуудыг шалгах, number, string, boolean, undefined,  null гэх мэт 
console.log(typeof (messageTest1));
console.log(typeof (messageTest2));
console.log(typeof (messageTest3));
console.log(typeof (messageTest4));
console.log(typeof (messageTest5));

//6. Утга оноогоогүй хувьсагч зарлах 
let nickName;

// 7. Утга оноосон хувьсагч зарлах 
let fName = 'Sodoo';

// 8. Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах  
let firstName;
let lastName;
let maritalStatus;
let county;
let age;

// 9. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах
let firstNameIs = 'Gold', myAge = 20, martStatus = true, myCountry = 'Mongolia';

// 10. Гурвалжингийн периметрийг олох 
let a = 3, b = 4, c = 5;
let triP = a + b + c;

// 11. Тойргийн талбайг олох 
let P = 3.14;
let r = 6
let circleArea = P * (r * r);

// 12. m = y2-y1/x2-x1 хариуг олох 
let y2 = 8, y1 = 2, x2 = 4, x1 = 2;
let m = y2 - y1 / x2 - x1;
console.log(m);

// 13. 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?
let Gegabyte = 8000000000;
let bit = 15 * Gegabyte;
console.log('15 Gegabyte = ' + bit + ' bit');

// 14. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
let MB = 8000000;
let bitRate = (MB * 15) / 3;
console.log('BIT Rate = ' + bitRate + ' bit/s');

// 15. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.
let side1 = 5, side2 = 6, side3 = 7;
let semiPeri = (side1 + side2 + side3) / 2;
console.log(semiPeri);
let triAr = Math.sqrt(semiPeri * (semiPeri - side1) * (semiPeri - side2) * (semiPeri - side3));
console.log(triAr);

// 16. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
let C = 10
let Fahrenheit = (C * 9) / 5 + 32
console.log(Fahrenheit);

// 17. Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.
let F = 50
let Celsius = (F - 32) * 5 / 9;
console.log(Celsius);

// 18. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// Өгөгдсөн 2 тооны нийлбэр нь 25
// Өгөгдсөн 2 тооны ялгавар нь 5
let aToo = 30, bToo = 20;
console.log('Өгөгдсөн 2 тооны нийлбэр нь ' + (aToo + bToo));
console.log('Өгөгдсөн 2 тооны ялгавар нь ' + (aToo - bToo));
console.log('Өгөгдсөн 2 тооны үржвэр нь ' + (aToo * bToo));
console.log('Өгөгдсөн 2 тооны хуваах нь ' + (aToo / bToo));
console.log('Өгөгдсөн 2 тооны үлдэгдэл нь ' + (aToo % bToo));

// 19. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
let centi = 0.393700787;
let inch = 10 * 0.393700787;
console.log("10 cm = " + inch);

let inchBod = 2.54;
let centiBod = 10 * inchBod;
console.log("10 inch = " + centiBod);

// 20. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.
let Rad = 5;
let cirAr = P * Rad * Rad;
let cirL = 2 * P * Rad;
console.log("Radius 5 үед тайлбай = " + cirAr);
console.log("Radius 5 үед тойрог урт = " + cirL);

// 21. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич
let ortoo = 356;
console.log('356 үед эхний цифр = ' + Math.floor(ortoo / 100));

// 22. Доорх Baby Shark дууны үгийг хамгийн ихдээ 12 хувьсагч ашиглан орлуулан бичээд console дээр дарааллуулан хэвлэж харуулна уу.
// https://www.google.com/search?q=baby+shark+lyrics&oq=bab&aqs=chrome.0.69i59j46i67j69i57j46i67j0i67l4j46i67j46i512.868j0j7&sourceid=chrome&ie=UTF-8

var doo = ", doo-doo, doo-doo";
var a1 = "Baby Shark";
var b1 = "Mommy Shark"
var c1 = "Daddy Shark"
var d = "Grandma Shark"
var e = "Let's go hant"
var f = "Run away"
var g = "Safe at last"
var h = "it's the end"

console.log(a1 + doo);
console.log(a1 + doo);
console.log(a1 + doo);
console.log(a1);
console.log(b1 + doo);
console.log(b1 + doo);
console.log(b1 + doo);
console.log(b1);
console.log(c1 + doo);
console.log(c1 + doo);
console.log(c1 + doo);
console.log(c1);
console.log(d + doo);
console.log(d + doo);
console.log(d + doo);
console.log(d);
console.log(e + doo);
console.log(e + doo);
console.log(e + doo);
console.log(e);
console.log(f + doo);
console.log(f + doo);
console.log(f + doo);
console.log(f);
console.log(g + doo);
console.log(g + doo);
console.log(g + doo);
console.log(g);
console.log(h + doo);
console.log(h + doo);
console.log(h + doo);
console.log(h);