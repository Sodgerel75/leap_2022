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



// let dog = {
//     breed: 'Golden Retriever',
//     dogName: 'Banhar',
//     color: 'Yellow',
//     age: 3,
//     character: 'Дөлгөөн тайван зантай, маш ухаантай',
// }

// console.log(dog);

// console.log(dog.breed, dog.dogName, dog.color, dog.age, dog.character);







// let rabbit1 = {
//     color: 'White',
//     rName: 'Chandaga',
//     gender: 'male',
//     age: 2,
//     jump: function () {
//         console.log('Sorry, i broke my leg, i cannot jump');
//     },
//     sayMyName: function (myName, ungu, nas) {
//         console.log(`Your name is ${myName}`);
//         console.log(`Your color is ${ungu}`);
//         console.log(`Your age is ${nas}`);
//     }
// }

// console.log(rabbit1);
// console.log(rabbit1.color);
// rabbit1.color = 'Shavhai'
// console.log(rabbit1);
// rabbit1.jump();
// rabbit1.sayMyName('Sodoo', 'bor', 33);

// let rabbit2 = {
//     color: 'Black',
//     rName: 'Zayats',
//     gender: 'female',
//     age: 4,
//     delden: true,
//     jump: function () {
//         console.log('I can jump');
//     }
// }

// console.log('$$$$$$$$$$$$$$$$$$');
// console.log(rabbit2);
// rabbit2.jump();

// let rabbits = [rabbit1, rabbit2]
// console.log(rabbits);