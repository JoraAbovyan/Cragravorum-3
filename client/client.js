
var socket = io();

let erkarutyun = 300

function setup() {
    createCanvas(erkarutyun,erkarutyun);
    background('#acacac');
    // frameRate(2)

}

socket.on('Mymatrix', mydraw);
socket.on("Arrlengths", statistic);

let color = ["gray","green", "yellow", "cyan", "red", "blue", "black"]

function mydraw(matrix) {
// console.log(matrix);


    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {         
            } else if (matrix[y][x] == 2) { 
                         
            } else if (matrix[y][x] == 3) {              
            }
            else if (matrix[y][x] == 4) {            
            }
            else if (matrix[y][x] == 5) {              
            }
            else if (matrix[y][x] == 6) {          
            }

            fill(color[matrix[y][x]])
           rect((erkarutyun / matrix.length)* x, (erkarutyun / matrix.length) * y, erkarutyun / matrix.length, erkarutyun / matrix.length)
        }
    }
    
}
// rect((erkarutyun / matrix.length)* x, (erkarutyun / matrix.length) * y, erkarutyun / matrix.length, erkarutyun / matrix.length)
function statistic (stat){

    let grassStat = document.getElementById("grass")
    grassStat.innerHTML =stat.Grass
    let grassEStat = document.getElementById("grassE")
    grassEStat.innerHTML =stat.Grasseater
    let PredatorStat = document.getElementById("predator")
    PredatorStat.innerHTML =stat.Predator
    let EaterStat = document.getElementById("eater")
    EaterStat.innerHTML =stat.Eater
    let HumanStat = document.getElementById("human")
    HumanStat.innerHTML =stat.Human
    

}
let spring =document.getElementById("spring")
let summer =document.getElementById("summer")
let autumn=document.getElementById("autumn")
let winter =document.getElementById("winter")
let exanak =document.getElementById("exanak")
function changeSpring(){
exanak.innerHTML = "Spring"
}
function changeSummer(){
    exanak.innerHTML = "Summer"
}
function changeAutumn(){
    exanak.innerHTML = "Autumn"
}
function changeWinter(){
    exanak.innerHTML = "Winter"
}

spring.addEventListener("click",changeSpring) 
summer.addEventListener("click",changeSummer) 
autumn.addEventListener("click",changeAutumn) 
winter.addEventListener("click",changeWinter) 

spring.addEventListener("click", () => {
    let winter = ["gray", "green", "yellow","cyan", "red", "blue", "black", ]
    color = winter
   
})
summer.addEventListener("click", () => {
    let summer = ["gray", "green", "blue ", "#AF4319", "#3F220F", "#4D5061", "black", ]
    color = summer
   
})
autumn.addEventListener("click", () => {
    let autumn = ["brown", "yellow", "#124559 ", "magenta", "orange", "purple", "black", ]
    color = autumn
   
})


winter.addEventListener("click", () => {
    let winter = ["#acacac", "white", "#537FE7", "#443C68", "#301E67", " #655DBB",]
    color = winter
   
})


