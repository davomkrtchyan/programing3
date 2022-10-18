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

matrix = [];
grassArr = [];
grassEaterArr = [];
amenaEaterArr = [];
grassBuilderArr = [];
BombArr = [];

function matrixGenerator() {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
}
matrix = matrixGenerator()
io.sockets.emit('send matrix',  matrix)
