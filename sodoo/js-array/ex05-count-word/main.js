//  Array дотор гараас орсон үг хэдэн ширхэг орсныг тоолдог алгоритм бичнэ үү.
//  Input: нүүрс
//  Output: нүүрс гэдэг үг 2 орсон байна.

let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];


// let find = prompt('Хайх үгээ оруулна уу');
let find = 'нүүрс';
console.log(find);
console.log(data.includes(find));
let sum = 0;
for (let i = 0; i < data.length; i++) {
  if (data.includes(find)) {
    console.log('trueee')
    sum = sum + 1;
  }
}
console.log(sum);



document.getElementById("demo").innerHTML = sum;