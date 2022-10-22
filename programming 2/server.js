var express = require('express');
var app = express();
var server = require('socket.io')(server)
var io = require('socket.io')(server)
var fs = require('fs')
app.use(express.static('.'))
app.get('/', function (req, res) {
    res.redirect('index.html')
});
server.listen(3000, () => {
    console.log("serverr")
});




function matrixGenerator(matrixSize,grassCount,grassEaterCount,AmenaEaterCount) {
    var  matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }


    for (let i = 0; i < grassCount; i++) {
        let x = Math.round(Math.random() * 20);
        let y = Math.round(Math.random() * 20);
        matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x =  Math.round(Math.random() * 20);
        let y =  Math.round(Math.random() * 20);
        matrix[y][x] = 2;
    }
    for (let i = 0; i < AmenaEaterCount; i++) {
        let x =  Math.round(Math.random() * 20);
        let y =  Math.round(Math.random() * 20);
        matrix[y][x] = 3;
    }
}




matrix = matrixGenerator(20,5,5,5)
console.log(matrix);
io.sockets.emit('send matrix',  matrix)


grassArr = [];
grassEaterArr = [];
amenaEaterArr = [];
grassBuilderArr = [];
BombArr = [];

Grass = require("./Grass")
Grass = require("./amenaGrassEater")
Grass = require("./Bomb")
Grass = require("./GrassBuilder")
Grass = require("./GrassEater")



function createobject (){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                let amena = new AmenaGrassEater(x, y);
                amenaEaterArr.push(amena);
            }
            else if (matrix[y][x] == 4) {
                let build = new GrassBuilder(x, y);
                grassBuilderArr.push(build);
            }

        }
    }
    io.sockets.emit('send matrix',  matrix)
}
function game(){
    
    
    io.sockets.emit('send matrix',  matrix)
}
var statistic = {

}