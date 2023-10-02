var matrix = [];
let characterCount = 5;
let side = 20
let GrassArr = []
let GrassEaterArr = []
let PredatorArr = []
let EaterArr = []
let HumanArr = []
// HI
function setup() {
    MatrixGenerator()
    createCanvas(side * matrix[0].length, side * matrix.length);
    background('#acacac');
    frameRate(10)

}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
                rect(side * x, side * y, side, side)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(side * x, side * y, side, side)
            }else if (matrix[y][x] == 3) {
                fill("cyan")
                rect(side * x, side * y, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill("red")
                rect(side * x, side * y, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill("blue")
                rect(side * x, side * y, side, side)
            }
            else {
                fill("gray")
                rect(side * x, side * y, side, side)
            }
        }
    }


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

function MatrixGenerator() {
    for (var y = 0; y < side; ++y) {
        matrix[y] = [];
        for (var x = 0; x < side; ++x) {
            matrix[y][x] = Math.round(random(0, characterCount));
        }
    }
}