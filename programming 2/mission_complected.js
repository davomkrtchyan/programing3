var socket = io();


// var matrixSize = +prompt('Input Matrx size!(default = 30)') || 30
// var side = +prompt('Input the size of the square(default = 20)') || 20

var side = 20
var matrixSize = 30

function setup() {
    frameRate(60);   
    createCanvas(matrixSize * side, matrixSize * side);

}



function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.3
            textSize(toBot);
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#FCF6B1");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 3) {
                fill("#F72C25");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 4) {
                fill("#0fdbff");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 5) {
                fill("#2D1E2F");
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



    socket.on('send matrix', nkarel)




function AddGrass() {
    console.log('AddGrass');
    socket.emit("AddGrass")
}
function AddGrassEater() {
    console.log('AddGrassEater');
    socket.emit("AddGrassEater")
}
function AddAmenaEater() {
    console.log('AddAmenaEater');
    socket.emit("AddAmenaEater")
}
function AddBuilder() {
    console.log('AddBuilder');
    socket.emit("AddBuilder")
}
function AddBomb() {
    console.log('AddBomb');
    socket.emit("AddBomb")
}