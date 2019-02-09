function solve(arr) {
    let matrix = [];
    for (const row of arr) {
        let newArr = row.split(' ').map(Number);
        matrix.push(newArr);
    }

    let counterA = 0;
    let counterB = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(col === row) {
                counterA += matrix[row][col];
            }
            if(row + col === matrix.length - 1) {
                counterB += matrix[row][col];
            }
        }
    }

    if(counterA === counterB) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row === col || row + col === matrix.length - 1) {
                    continue;
                }
                matrix[row][col] = counterA;
            }
            
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}

solve( ['1 1 1',
'1 1 1',
'1 1 0']);