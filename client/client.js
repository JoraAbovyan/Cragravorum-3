var socket = io();

let erkarutyun = 400

function setup() {
    createCanvas(erkarutyun,erkarutyun);
    background('#acacac');
    // frameRate(2)

}

socket.on('Mymatrix', mydraw);

function mydraw(matrix) {
console.log(matrix);


    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")             
            } else if (matrix[y][x] == 2) {
                fill("yellow")  
                            
            } else if (matrix[y][x] == 3) {
                fill("cyan")               
            }
            else if (matrix[y][x] == 4) {
                fill("red")              
            }
            else if (matrix[y][x] == 5) {
                fill("blue")                
            }
            else if (matrix[y][x] == 6) {
                fill("black")                
            }
            else {
                fill("gray")   
            }
            //rect(50,50,200,200)
            console.log(erkarutyun, (erkarutyun / matrix.length) * y)
           rect((erkarutyun / matrix.length)* x, (erkarutyun / matrix.length) * y, erkarutyun / matrix.length, erkarutyun / matrix.length)
        }
    }
}


// function handleMatrix(info){
// console.log(info);

// }