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


function findGender(array) {
    let maleStudents = 0;
    let femaleStudents = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].gender == 'male') {
            maleStudents = maleStudents + 1;
        } else {
            femaleStudents = femaleStudents + 1;
        }
    }
    let genderSort = { male: maleStudents, female: femaleStudents };
    return genderSort
}
// console.log(students);
console.log(findGender(students));






function findAverageAge(array) {
    let ages = 0;
    for (let i = 0; i < array.length; i++) {
        ages = ages + array[i].age;
    }
    // console.log(array.length);
    // console.log(ages / array.length);
    return ages / array.length;
}

console.log('Сурагчдын дундаж нас = ' + findAverageAge(students));




function OvogAdd(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].ovog = 'Боржигон';
    }
    return array;
}
console.log(OvogAdd(students));







// const findUnique = new Set((array).map(x => {
//     return x.age
// }))

// if (findUnique.size < (array).length) {
//     console.log("duplicates found!")
// } else {
//     console.log("Done!")
// }

// findUnique(students)


// console.log((students[i].age) == (students[i].age));

// console.log(students[0].age);
// console.log(students[2].age);

// function findSameAge(array) {
//     let sameAge = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].age.some(array[i].age)) {
//             sameAge.push(sortedArr[i].name)
//         }
//     }
//     return sameAge;
// }

// console.log(findSameAge(students));



// const findDuplicates = (arr) => {
//     let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
//     // JS by default uses a crappy string compare.
//     // (we use slice to clone the array so the
//     // original array won't be modified)
//     let results = [];
//     for (let i = 0; i < sorted_arr.length - 1; i++) {
//         if (sorted_arr[i + 1] == sorted_arr[i]) {
//             results.push(sorted_arr[i]);
//         }
//     }
//     return results;
// }

// let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
// console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);