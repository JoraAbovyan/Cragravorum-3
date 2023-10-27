let LivingCreature = require("./LivingCreature");
let random = require("./random");
module.exports = class Infection extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        let newCell = random(this.chooseCell(1));

        if (newCell) {

            let newInfection = new Infection(newCell[0], newCell[1], this.index);

            InfectionArr.push(newInfection);

            matrix[newCell[1]][newCell[0]] = 6;
        }
    }
    move() {
        let emptyCells = this.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
        let grassCells = this.chooseCell(1);
        let newCell = grassCells[Math.floor(Math.random() * grassCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (let i in GrassArr) {
                if (GrassArr[i].x == newX && GrassArr[i].y == newY) {
                    GrassArr.splice(i, 2);
                    break;
                }
            }
            if (this.energy >= 9) {
                this.mul();
            }
        } else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    // eatGE() {
    //     let grassCells = this.chooseCell(2);
    //     let newCell = grassCells[Math.floor(Math.random() * grassCells.length)];
    //     if (newCell) {
    //         let newX = newCell[0];
    //         let newY = newCell[1];
    //         matrix[newY][newX] = 6;
    //         matrix[this.y][this.x] = 0;
    //         this.x = newX;
    //         this.y = newY;
    //         this.energy++;
    //         for (let i in GrassEaterArr) {
    //             if (GrassEaterArr[i].x == newX && GrassEaterArr[i].y == newY) {
    //                 GrassEaterArr.splice(i, 2);
    //                 break;
    //             }
    //         }
    //         if (this.energy >= 9) {
    //             this.mul();
    //         }
    //     } else {
    //         this.move();
    //         this.energy--;
    //         if (this.energy <= 0) {
    //             this.die();
    //         }
    //     }
    // } 
    // eatP() {

    //     let grassCells = this.chooseCell(3);
    //     let newCell = grassCells[Math.floor(Math.random() * grassCells.length)];
    //     if (newCell) {
    //         let newX = newCell[0];
    //         let newY = newCell[1];
    //         matrix[newY][newX] = 6;
    //         matrix[this.y][this.x] = 0;
    //         this.x = newX;
    //         this.y = newY;
    //         this.energy++;
    //         for (let i in PredatorArr) {
    //             if (PredatorArr[i].x == newX && PredatorArr[i].y == newY) {
    //                 PredatorArr.splice(i, 2);
    //                 break;
    //             }
    //         }
    //         if (this.energy >= 8) {
    //             this.mul();
    //         }
    //     } else {
    //         this.move();
    //         this.energy--;
    //         if (this.energy <= 0) {
    //             this.die();
    //         }
    //     }

    // }  
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in InfectionArr) {
            if (this.x == InfectionArr[i].x && this.y == InfectionArr[i].y) {
                InfectionArr.splice(i, 1);
                break;
            }
        }
    }
}

