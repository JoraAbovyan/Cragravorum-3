var express = require("express");
var app = express();

app.use(express.static("../client"));

var server = require('http').createServer(app); // add
var io = require('socket.io')(server); // add

app.get("/", function (req, res) {
res.redirect("index.html");
});

server.listen(3000, function () { // add
console.log("Example is running on port 3000");
});

///////////

let Grass = require("./grass");
let GrassEater = require("./grasseater");
let Predator = require("./predator");
let Eater = require("./eater");
let Human = require("./human");

var matrix = [];
let side = 20

let GrassArr = []
let GrassEaterArr = []
let PredatorArr = []
let EaterArr = []
let HumanArr = []
const sideCount = 16;



function matrixG(a) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {
            matrix[i].push(0)

        }
    }
}

function Generation(count, character) {
    let p = 0;
    while (p < count) {
        let k = Math.floor(random(0, sideCount))
        let l = Math.floor(random(0, sideCount))
        if (matrix[k][l] == 0) {
            matrix[k][l] = character
        }
        p++;
    }
}

matrixG(sideCount)
Generation(30, 1);
Generation(10, 2);
Generation(7, 3);
Generation(10, 4);
Generation(10, 5);

function createOBJ(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grassobj = new Grass(x, y, 1)
                GrassArr.push(grassobj)

            }
            if (matrix[y][x] == 2) {
                let GrassEaterobj = new GrassEater(x, y, 2)
                GrassEaterArr.push(GrassEaterobj)

            }
            if (matrix[y][x] == 3) {
                let Predatorobj = new Predator(x, y, 3)
                PredatorArr.push(Predatorobj)

            }
            if (matrix[y][x] == 4) {
                let Eaterobj = new Eater(x, y, 4)
                EaterArr.push(Eaterobj)

            }
            if (matrix[y][x] == 5) {
                let Humanobj = new Human(x, y, 5)
                HumanArr.push(Humanobj)

            }
        }

    }
}


function start(){
    for (let i = 0; i < GrassArr.length; i++) {
        GrassArr[i].mull()
    }
    for (let i = 0; i < GrassEaterArr.length; i++) {
        GrassEaterArr[i].eat()
    }
    for (let i = 0; i < PredatorArr.length; i++) {
        PredatorArr[i].eat()
    }
    for (let i = 0; i < EaterArr.length; i++) {
        EaterArr[i].eat()
    }
    for (let i = 0; i < HumanArr.length; i++) {
        HumanArr[i].eat()
    }
}


io.on('connection', function (socket) {
   
      socket.emit("Mymatrix", matrix);
    // socket.on("send message", function (data) {
    //     messages.push(data);
    //     io.sockets.emit("display message", data);
    // });
 });
 
    
 
 

 