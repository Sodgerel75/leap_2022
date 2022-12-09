const students = [
    {
        name: 'Khangai',
        birthOfYear: 1982,
        hobby: 'karate',
        single: false
    },
    {
        name: 'Sodoo',
        birthOfYear: 1984,
        hobby: 'hiking',
        single: false
    },
    {
        name: 'Bat',
        birthOfYear: 2004,
        hobby: 'singing',
        single: true
    },
    {
        name: "Гончигсумлай",
        birthOfYear: 1999,
        hobby: "морь",
        single: true
    },
]



// function findStudents(array) {
//     for (let i = 0; i < array.length; i++) {
//         let age = 2022 - array[i].birthOfYear;
//         if (age > 20) {
//             console.log(array[i].name + ' нас ' + age)
//         }
//         if (array[i].single) {
//             console.log('Ганц бие - ' + array[i].name)
//         }
//     }
// }


// findStudents(students);  //Khangai, Sodoo



function findOlderStudents(array) {
    let olderStudents = [];
    for (let i = 0; i < array.length; i++) {
        let age = 2022 - array[i].birthOfYear;
        if (age > 20) {
            olderStudents.push(array[i].name);
        }
    }
    return olderStudents;
}

console.log('20 - оос дээш насны сурагчид - ' + findOlderStudents(students).join(', '));




function studentAges(array) {
    let stuAges = [];
    for (let i = 0; i < array.length; i++) {
        stuAges.push(array[i].name + ' - ' + (2022 - array[i].birthOfYear));
        // console.log(stuAges);
    }
    return stuAges;
}

console.log('Сурагчдийн нас - ' + studentAges(students).join(' | '));




// findSingle function V1 (array)

// function findSingle(array) {
//     let single = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].single) {
//             single.push(array[i].name);
//         }
//     }
//     return single;
// }

// console.log('Ганц бие хүмүүс - ' + findSingle(students).join(', '));




// findSingle function V2 - (added symbol between elements)

function findSingle(array) {
    let single = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].single) {
            single = single + (array[i].name);
        } if (array[i].single && i < array.length - 1) {
            single = single + ', ';
        } else if (array[i].single) {
            single = single + '.';
        }
    }
    return single;
}

console.log('Ганц бие хүмүүс - ' + findSingle(students));

