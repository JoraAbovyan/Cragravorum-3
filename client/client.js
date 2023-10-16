import { log } from "util";

function setup() {
    createCanvas(side * matrix[0].length, side * matrix.length);
    background('#acacac');
    frameRate(2)

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
            } else if (matrix[y][x] == 3) {
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
}
socket.on('Mymatrix', matrix);

function handleMatrix(info){
console.log(info);

}