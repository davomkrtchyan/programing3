var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('start');

});


matrix = [];
grassArr = [];
grassEaterArr = [];
amenaEaterArr = [];
grassBuilderArr = [];
BombArr = [];

AmenaGrassEater = require("./AmenaGrassEater")
Grass = require("./Grass")
GrassBuilder = require("./GrassBuilder")
GrassEater = require("./GrassEater")
Bomb = require("./Bomb")





var matrixSize = 30



function matrixGenerator() {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
}

matrixGenerator()

io.sockets.emit("send matrix", matrix)

function AddRandom(grassCount, grassEaterCount, AmenaEaterCount) {
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);

        matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 2;
    }
    for (let i = 0; i < AmenaEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 3;
    }
}
AddRandom(5, 5, 5)



function createObject() {
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
    io.sockets.emit("send matrix", matrix);
}
setInterval(game, 200)


setInterval(function () {
    date = Date.now()
}, 1000)

function AddGrass() {
    console.log('AddGrass');
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }

        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddGrassEater() {
    console.log('AddGrassEater');
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 2;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }

        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddAmenaEater() {
    console.log('AddAmenaEater');
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 3;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                let amena = new AmenaGrassEater(x, y);
                amenaEaterArr.push(amena);
            }

        }
    }
    io.sockets.emit("send matrix", matrix);
}
function AddBuilder() {
    console.log('AddBuilder');
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
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
    io.sockets.emit("send matrix", matrix);
}
function AddBomb() {
    console.log('AddBomb');
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * matrixSize);;
        let y = Math.floor(Math.random() * matrixSize);;
        matrix[y][x] = 5;

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                let bomb = new Bomb(x, y);
                BombArr.push(bomb);
            }

        }
    }
    io.sockets.emit("send matrix", matrix);
}


io.on('connection', function (socket) {

    createObject()
    socket.on("AddGrass", AddGrass);
    socket.on("AddGrassEater", AddGrassEater);
    socket.on("AddAmenaEater", AddAmenaEater);
    socket.on("AddBuilder", AddBuilder);
    socket.on("AddBomb", AddBomb);
});


var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){

    })
},1000)


