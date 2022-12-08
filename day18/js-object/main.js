console.log('Lesson Objects');

let rabbit1 = {
    color: 'White',
    rName: 'Chandaga',
    gender: 'male',
    age: 2,
    jump: function () {
        console.log('Sorry, i broke my leg, i cannot jump');
    },
    sayMyName: function (myName, ungu, nas) {
        console.log(`Your name is ${myName}`);
        console.log(`Your color is ${ungu}`);
        console.log(`Your age is ${nas}`);
    }
}

console.log(rabbit1);
console.log(rabbit1.color);
rabbit1.color = 'Shavhai'
console.log(rabbit1);
rabbit1.jump();
rabbit1.sayMyName('Sodoo', 'bor', 33);

let rabbit2 = {
    color: 'Black',
    rName: 'Zayats',
    gender: 'female',
    age: 4,
    delden: true,
    jump: function () {
        console.log('I can jump');
    }
}

console.log('$$$$$$$$$$$$$$$$$$');
console.log(rabbit2);
rabbit2.jump();

let rabbits = [rabbit1, rabbit2]
console.log(rabbits);