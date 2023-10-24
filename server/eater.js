let LivingCreature = require("./LivingCreature");
let random = require("./random");
module.exports = class Eater extends LivingCreature {
    constructor(x, y , index){
    super(x, y, index);
    this.energy = 7;
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
        let newCell = random(this.chooseCell(4));

        if (newCell) {

            let newEater = new Eater(newCell[0], newCell[1], this.index);

            EaterArr.push(newEater);

            matrix[newCell[1]][newCell[0]] = 4;
        }
    }
    move() {
        let emptyCells = this.chooseCell(4);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {

        let grassCells = this.chooseCell(3);
        let newCell = grassCells[Math.floor(Math.random() * grassCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (let i in PredatorArr) {
                if (PredatorArr[i].x == newX && PredatorArr[i].y == newY) {
                    PredatorArr.splice(i, 2);
                    break;
                }
            }
            if (this.energy >= 8) {
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

    die() {
        matrix[this.y][this.x] = 0;
        for (let i in EaterArr) {
            if (this.x == EaterArr[i].x && this.y == EaterArr[i].y) {
                EaterArr.splice(i, 1);
                break;
            }
        }
    }
}