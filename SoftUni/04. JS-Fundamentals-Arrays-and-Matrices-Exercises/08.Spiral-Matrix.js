function solve(matrixRow, matrixCol) {
    let matrix = [];
    
    for (let row = 0; row < matrixRow; row++) {
        matrix[row] = [];
        for (let col = 0; col < matrixCol; col++) {
            matrix[row][col] = 0;
        }
    }
    
    let counter = 1;
    let direction = 'right';
    let currentRow = 0;
    let currentCol = 0;
    for (let row = 0; row < matrixRow * matrixCol; row++) {
        matrix[currentRow][currentCol] = counter;
        counter++;

        if(direction === 'right') {
            if(currentCol + 1 >= matrixCol || matrix[currentRow][currentCol + 1] !== 0) {
                direction = 'down';
                currentRow++;
            } else {
                currentCol++;
            }
        } else if(direction === 'down') {
            if(currentRow + 1 >= matrixRow || matrix[currentRow + 1] [currentCol] !== 0) {
                direction = 'left';
                currentCol--;
            } else {
                currentRow++;
            }
        } else if(direction === 'left') {
            if(currentCol - 1 < 0 || matrix[currentRow][currentCol - 1] !== 0) {
                direction = 'up';
                currentRow--;
            } else {
                currentCol--;
            }
        } else if(direction === 'up') {
            if(currentRow - 1 < 0 || matrix[currentRow - 1][currentCol] !== 0) {
                direction = 'right';
                currentCol++;
            } else {
                currentRow--;
            }
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

solve(5, 7);