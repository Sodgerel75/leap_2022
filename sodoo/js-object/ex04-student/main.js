const students = [
    {
        name: 'Khangai',
        birthOfDay: 1982,
        hobby: 'karate',
        single: false
    },
    {
        name: 'Sodoo',
        birthOfDay: 1984,
        hobby: 'hiking',
        single: false
    },
    {
        name: 'Bat',
        birthOfDay: 2004,
        hobby: 'singing',
        single: true
    },
]



function findOlderStudents(array) {
    for (let i = 0; i < array.length; i++) {
        let age = 2022 - array[i].birthOfDay;
        if (age > 20) {
            console.log(array[i].name + ' нас ' + age)
        }
        if (array[i].single) {
            console.log('Ганц бие - ' + array[i].name)
        }
    }
}


findOlderStudents(students);  //Khangai, Sodoo