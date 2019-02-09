function solve(matrix) {
    let sumOfArr = 0;
    let arrayOfSums = [];
    for (let row = 0; row < matrix.length; row++) {
        sumOfArr = matrix[row].reduce((total, num) => {
            return total + num;
        })
        arrayOfSums.push(sumOfArr);
        if(row === 0) {
            continue;
        }
        if(arrayOfSums[row] !== arrayOfSums[row - 1]) {
            console.log( "false");
            return;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if(colSum !== sumOfArr) {
            return false;
        }
    }
    console.log("true");
}

console.log(solve([[1, 0, 0], [-1, 2]]));