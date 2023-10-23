var express = require("express");
let random = require("./random");
var fs = require("fs");
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
let Infection = require("./infection");




GrassArr = []
GrassEaterArr = []
PredatorArr = []
EaterArr = []
HumanArr = []
InfectionArr = []


sideCount = 16;



function matrixG(a) {
    let matrix = []
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {
            matrix[i].push(0)

        }
    }

    return matrix
}


function Generation(count, character, matrix) {
    let p = 0;
    while (p < count) {
        let k = Math.floor(random(sideCount))
        let l = Math.floor(random(sideCount))
        if (matrix[k][l] == 0) {
            matrix[k][l] = character
        }
        p++;
    }
}



function createOBJ() {

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
            if (matrix[y][x] == 6) {
                let Infectionobj = new Infection(x, y, 6)
                InfetionArr.push(Infectionobj)

            }

        }

    }
}

matrix = matrixG(sideCount);
Generation(30, 1, matrix);
Generation(10, 2, matrix);
Generation(7, 3, matrix);
Generation(10, 4, matrix);
Generation(10, 5, matrix);

createOBJ();

function start() {
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
    stat = {
        "Grass": GrassArr.length,
        "Grasseater": GrassEaterArr.length,
        "Predator": PredatorArr.length,
        "Eater": EaterArr.length,
        "Human": Human.length,
        "Infection" : InfectionArr.length
    }
    statistic = JSON.stringify(stat);
    fs.writeFileSync("Stat.json", statistic);
 
    io.sockets.emit("Mymatrix", matrix);
}



setInterval(infoSend,3000)

function infoSend(){
  var info =   fs.readFileSync("Stat.json").toString();
    io.sockets.emit("Arrlengths",stat);
  
}


setInterval(start, 1000)



io.on('connection', function (socket) {
    socket.emit("Mymatrix", matrix);

});




