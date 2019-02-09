function solve([rows, cols, startX, startY]) {
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startX), Math.abs(col - startY)) + 1;
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

solve([3, 3, 2, 2])