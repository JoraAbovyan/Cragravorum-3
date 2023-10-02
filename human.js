class Human {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [];
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
        this.getNewCoordinates()
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let newCell = random(this.chooseCell(5));

        if (newCell) {

            let newHuman = new Human(newCell[0], newCell[1], this.index);

            HumanArr.push(newHuman);

            matrix[newCell[1]][newCell[0]] = 3;
        }
    }
    move() {
        let emptyCells = this.chooseCell(5);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {

        let grassCells = this.chooseCell(4);
        let newCell = grassCells[Math.floor(Math.random() * grassCells.length)];
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (let i in EaterArr) {      
                if (EaterArr[i].x == newX && EaterArr[i].y == newY) {
                    EaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 6) {
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
        for (let i in HumanArr) {
            if (this.x == HumanArr[i].x && this.y == HumanArr[i].y) {
                HumanArr.splice(i, 1);
                break;
            }
        }
    }
}