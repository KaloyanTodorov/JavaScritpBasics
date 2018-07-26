function printFigureOfFourSquares(number) {
    console.log(`+${'-'.repeat(number - 2)}+${'-'.repeat(number - 2)}+`);
    if (number === 2) {
        return;
    }

    if (number >= 5 ) {
        for (let i = 0; i < Math.ceil((number - 4) / 2); i++) {
            console.log(`|${' '.repeat(number - 2)}|${' '.repeat(number - 2)}|`);
        }
    }
    console.log(`+${'-'.repeat(number - 2)}+${'-'.repeat(number - 2)}+`);

    if (number >= 5 ) {
        for (let i = 0; i < Math.ceil((number - 4) / 2); i++) {
            console.log(`|${' '.repeat(number - 2)}|${' '.repeat(number - 2)}|`);
        }
    }

    console.log(`+${'-'.repeat(number - 2)}+${'-'.repeat(number - 2)}+`);

}

printFigureOfFourSquares(2);
printFigureOfFourSquares(3);
printFigureOfFourSquares(4);
printFigureOfFourSquares(5);
printFigureOfFourSquares(6);
printFigureOfFourSquares(7);
printFigureOfFourSquares(8);
