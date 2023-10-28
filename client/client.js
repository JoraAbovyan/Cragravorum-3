
var socket = io();

let erkarutyun = 300

function setup() {
    createCanvas(erkarutyun,erkarutyun);
    background('#acacac');
    // frameRate(2)

}

socket.on('Mymatrix', mydraw);
socket.on("Arrlengths", statistic);
socket.on("Gdays",Gday)
socket.on("Weather",weather)

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
    let InfectionStat = document.getElementById("infection")
    InfectionStat.innerHTML =stat.Infection
    

}

let exanak =document.getElementById("exanak")
let days = document.getElementById("day") 

function Gday(count){
    days.innerHTML = count
}

function weather (season){
         exanak.innerHTML = season;

        if(season === "Winter"){
            let winter = ["#acacac", "white", "#537FE7", "#443C68", "#301E67", " #655DBB","black"]
            color = winter
        }else if(season === "Spring"){
            let spring = ["gray", "green", "yellow","cyan", "red", "blue", "black" ]
            color = spring  
        }else if(season === "Summer"){
        
            let summer = ["gray", "green", "blue ", "#AF4319", "#3F220F", "#4D5061", "black" ]
            color = summer
        }else{
            let autumn = ["brown", "yellow", "#124559 ", "magenta", "orange", "purple", "black" ]
            color = autumn
        }
}

 
