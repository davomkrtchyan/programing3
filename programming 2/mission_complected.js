var socket = io()

var side = 20 

function setup() {
    createCanvas(20* side, 20* side);
    // background('#acacac');


}
// function AddGrass() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(matrixSize));
//         let y = Math.floor(random(matrixSize));
//         matrix[y][x] = 1;
//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 let gr = new Grass(x, y);
//                 grassArr.push(gr);
//             }

//         }
//     }
// }
// function AddGrassEater() {
    
//     for (let i = 0; i < 1; i++) {
//         var emptyCells = super.choseCell(0)
//         let x = emptyCells[Math.floor(Math.random()* emptyCells.length )] ;
//         let y = emptyCells[Math.floor(Math.random()* emptyCells.length )] 
//         matrix[y][x] = 2;
//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 2) {
//                 let eater = new GrassEater(x, y);
//                 grassEaterArr.push(eater);
//             }

//         }
//     }
// }
// function AddAmenaEater() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(matrixSize));
//         let y = Math.floor(random(matrixSize));
//         matrix[y][x] = 3;
//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 3) {
//                 let amena = new AmenaGrassEater(x, y);
//                 amenaEaterArr.push(amena);
//             }

//         }
//     }
// }
function AddBuilder() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 4;

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                let build = new GrassBuilder(x, y);
                grassBuilderArr.push(build);
            }

        }
    }
}
// function AddBomb() {
//     for (let i = 0; i < 1; i++) {
//         let x = Math.floor(random(matrixSize));
//         let y = Math.floor(random(matrixSize));
//         matrix[y][x] = 5;

//     }
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 5) {
//                 let bomb = new Bomb(x, y);
//                 BombArr.push(bomb);
//             }

//         }
//     }
// }


function nkarel(matrix) {
console.log(matrix.length);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.3
            textSize(toBot);
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
 
            }
            else if (matrix[y][x] == 4) {
                fill("#0fdbff");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 6) {
                fill("orange");
                rect(x * side, y * side, side, side);
                text('', x * side, y * side + toBot);
                
            }

        }
    }
    
    
    
}
socket.on('send matrix' , nkarel)