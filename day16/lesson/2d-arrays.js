/**
 * Problem
 * 
 *  Example-1 : Battleship
 * 
 *  | 0 | 0 | 0 | x | x | x | 0 |
 *  | 0 | 0 | 0 | x | x | x | 0 |
 *  | 0 | 0 | 0 | x | x | x | 0 |
 *  | 0 | 0 | 0 | x | x | x | 0 |
 *  | 0 | 0 | 0 | x | x | x | 0 |
 *  | 0 | 0 | 0 | x | x | x | 0 |
 * 
 * Example-2 : Tic Tac Toe
 * 
 *  col1 col2 col3
 *  | x  | o  | x | row1
 *  | o  | o  | x | row2
 *  | x  | x  | o | row3
 * 
 * 
 * 
 */

let row1 = ['x', 'o', 'x'];
let row2 = ['o', 'o', 'x'];
let row3 = ['x', 'x', 'o'];

console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe =
    [['x', 'o', 'x'],
    ['o', 'o', 'x'],
    ['x', 'x', 'o']
    ];

console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);

// tictactoe[0][1] = 'x';

//input -tictactoe iin bagana bolood muriin indexiig daraalluulj avaad
// 3 dahid udaad n yugaar solihiiig n ugnu.


let rowInput = Number(prompt('Row position ?') - 1)
let colInput = Number(prompt('Col position ?') - 1)
let input = prompt('Uurchluh utgaa oruulna uu');
tictactoe[rowInput][colInput] = input;

// tictactoe buh murnii elementuudiig hevle

// for (let i = 0; i < tictactoe.length; i++) {
//     console.log(tictactoe[i]);
// }

console.log('for loop with for loop');
for (let i = 0; i < tictactoe.length; i++) {

    // console.log(tictactoe[i]);
    let output = '';

    for (let j = 0; j < tictactoe[i].length; j++) {
        output = output + "| " + tictactoe[i][j] + " |";
        // console.log(tictactoe[i][j]);

    }
    console.log(output);
}
