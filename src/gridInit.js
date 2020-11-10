module.exports = {
    empty: empty,
    withSeed: withSeed
}

function empty(emptyChar, rows, columns) {
    let empty = [];
    for (let i = 0; i < rows; i += 1) {
        empty.push([]);
        for (let j = 0; j < columns; j += 1) {
            empty[i].push(emptyChar);
        }
    }
    return empty;
}

function withSeed(emptyChar, cellChar, rows, columns, seedArray) {
    let seed = empty(emptyChar, rows, columns);

    seedArray.forEach(coordinate => {
        const row = coordinate.row;
        if (row >= rows) {
            throw new Error(`Row in { ${coordinate.row} , ${coordinate.column} } is out of bounds. Max is ${rows}`)
        }

        const column = coordinate.column;
        if (column >= columns) {
            throw new Error(`Row in { ${coordinate.row} , ${coordinate.column} } is out of bounds. Max is ${columns}`)
        }

        seed[row][column] = cellChar;
    });

    return seed;
}