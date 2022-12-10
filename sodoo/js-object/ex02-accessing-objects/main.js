let students = [
    {
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male"
    },
    {
        name: 'Индра',
        age: 19,
        gender: "female"
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
    {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
    {
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
]
// console.log(students);



// findSameAge function V1 (array)

function findSameAge(array) {
    let sameAge = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].age == array[i].age) {
            sameAge.push(array[i].name);
        }
    }
    return sameAge;
}

console.log('Ижилхэн настай - ' + findSameAge(students).join(', '));

