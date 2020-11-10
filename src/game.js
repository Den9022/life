
const neighborCounter = require('./neighborCounter');
const cellLifeTime = require('./cellLifeTime');
const copyAtCenter = require('./copyAtCenter');
const gridInit = require('./gridInit');


class Game {

    constructor(cellChar, emptyChar, rows, columns, seed) {
        this.grid = gridInit.empty(emptyChar, rows, columns);
        this.prevGrid = gridInit.empty(emptyChar, rows, columns);

        copyAtCenter(this.grid, seed);

        this.neighbors = neighborCounter(cellChar);
        this.currentCellChar = cellChar;
        this.currentEmptyChar = emptyChar;
        this.prevGrid;

    }


    update() {

        let grid = this.grid;
        const newGrid = [];
        for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
            newGrid.push([]);
            for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex += 1) {

                const neighborCount = this.neighbors(rowIndex, columnIndex, grid);

                const alive = grid[rowIndex][columnIndex] === this.currentCellChar;
                const shouldItLive = cellLifeTime.shouldItLive(alive, neighborCount);

                newGrid[rowIndex][columnIndex] = shouldItLive ? this.currentCellChar : this.currentEmptyChar;
            }
        }
        this.grid = newGrid;
        this.prevGrid = grid;
    }

    draw(which) {

        let grid;
        if(which == 'prev'){
            grid = this.prevGrid ;
        }
        if(which == 'next'){
            grid = this.grid ;
        }
        const drawing = grid.map(row => row.join('')).join('\n');
        return drawing;
    }

}
module.exports = Game
