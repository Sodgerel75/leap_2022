const users = [
    {
        name: 'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
    },
    {
        name: 'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    {
        name: 'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
    },
    {
        name: 'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
    },
    {
        name: 'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    {
        name: 'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
    },
    {
        name: 'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
    }
]


// 1. Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.

function printUser(array, too) {
    let userOb = array[too];
    return userOb;
}

console.log(printUser(users, 0));


// 2. Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.

function findMoreSkills(array) {
    let moreSkills = [];
    let moreSkillsUser = [];
    for (let i = 0; i < array.length; i++) {
        moreSkills.push(array[i].skills.length)
        // if (Math.max.apply(null, moreSkills)) {
        //     moreSkillsUser.push(array[i].name);
        // }
    }
    // return moreSkillsUser;
    return Math.max.apply(null, moreSkills);
}

console.log(findMoreSkills(users));







// Array.prototype.max = function () {
//     return Math.max.apply(null, this);
// };

// let p = [35, 2, 65, 7, 8, 9, 12, 121, 33, 99];

// console.log(`Max value is: ${p.max()}`);
// console.log(`Max value is: ${findMoreSkills(users).max()}`);






// 3. Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.

function findLogin50(array) {
    let tempUsers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].points >= 50 && array[i].isLoggedIn == true) {
            tempUsers.push(array[i].name);
        }
    }
    return tempUsers;
}
console.log('Нэвтэрсэн хэрэглэгч = ' + findLogin50(users).length);
console.log('50-аас дээш оноо авсан  - ' + findLogin50(users).join(', '));


// 4. Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.

function findMern(array) {
    let mernUser = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].skills.includes('MongoDB') && array[i].skills.includes('Express') && array[i].skills.includes('React') && array[i].skills.includes('Node')) {
            mernUser.push(array[i].name);
        }
    }
    return mernUser;
}
console.log('MERN stack users: ' + findMern(users).join(', '));











// function findGender(array) {
//     let maleStudents = 0;
//     let femaleStudents = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i].gender == 'male') {
//             maleStudents = maleStudents + 1;
//         } else {
//             femaleStudents = femaleStudents + 1;
//         }
//     }
//     let genderSort = { male: maleStudents, female: femaleStudents };
//     return genderSort
// }
// // console.log(students);
// console.log(findGender(students));



// function findAverageAge(array) {
//     let ages = 0;
//     for (let i = 0; i < array.length; i++) {
//         ages = ages + array[i].age;
//     }
//     // console.log(array.length);
//     // console.log(ages / array.length);
//     return ages / array.length;
// }

// console.log('Сурагчдын дундаж нас = ' + findAverageAge(students));



// function OvogAdd(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i].ovog = 'Боржигон';
//     }
//     return array;
// }
// console.log(OvogAdd(students));



