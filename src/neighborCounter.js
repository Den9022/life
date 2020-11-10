
module.exports = function (cellChar) {

    return function count(row, cell, grid) {
        const checkCells = [
            checkCell(row - 1, cell - 1, grid),
            checkCell(row - 1, cell, grid),
            checkCell(row - 1, cell + 1, grid),

            checkCell(row, cell - 1, grid),
            checkCell(row, cell + 1, grid),

            checkCell(row + 1, cell - 1, grid),
            checkCell(row + 1, cell, grid),
            checkCell(row + 1, cell + 1, grid)
        ];

        return checkCells.reduce((prev, current) => prev + current, 0);
    }

    function checkCell(row, cell, grid) {
        return grid[row] && grid[row][cell] === cellChar
            ? 1
            : 0;
    }
}