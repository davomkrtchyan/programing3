var express = require('express');
var app = express();

var server = require('http').Server(app)
var io = require('socket.io')(server)
var fs = require('fs');

app.use(express.static('.'))
app.get('/', function (req, res) {
    res.redirect('index.html')
});
server.listen(3000, () => {
    console.log("serverr")
});




function matrixGenerator(matrixSize, grassCount, grassEaterCount, AmenaEaterCount) {
    var matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }


    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * 20);
        let y =  Math.floor(Math.random() * 20);

        matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * 20);
        let y =  Math.floor(Math.random() * 20);
        matrix[y][x] = 2;
    }
    for (let i = 0; i < AmenaEaterCount; i++) {
        let x = Math.floor(Math.random() * 20);
        let y =  Math.floor(Math.random() * 20);
        matrix[y][x] = 3;
    }

    return matrix
}




matrix = matrixGenerator(20, 5, 5, 5)
io.sockets.emit('send matrix', matrix)


grassArr = [];
grassEaterArr = [];
amenaEaterArr = [];
grassBuilderArr = [];
BombArr = [];

Grass = require("./grass")
AmenaGrassEater = require("./amenaGrassEater")
GrassEater = require("./grassEater")
Bomb = require("./bomb")
GrassBuilder = require("./grassBuilder")


function createobject(matrix) {
    console.log(matrix.length);
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
    io.sockets.emit('send matrix', matrix)
}


function game() {
    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < amenaEaterArr.length; i++) {
        const amena = amenaEaterArr[i];
        amena.eat();
    }
    for (let i = 0; i < grassBuilderArr.length; i++) {
        const build = grassBuilderArr[i];
        build.eat();
    }
    for (let i = 0; i < BombArr.length; i++) {
        const bomb = BombArr[i];
        bomb.mul();
        function bab() {
            bomb.babax()
        }
        setTimeout(bab, 3000);

    }
    io.sockets.emit('send matrix', matrix)
}

setInterval(game, 200)


io.on('connection', () => {
    createobject(matrix)
})