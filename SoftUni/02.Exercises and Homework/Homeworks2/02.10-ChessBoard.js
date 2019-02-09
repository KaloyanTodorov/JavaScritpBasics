function printChessboard(number) {
    let counter = 0;

    console.log(`<div class="chessboard">`);
    for (let i = 0; i < number; i++) {
        console.log(`<div>`);
        for (let j = 0; j < number; j++) {

            console.log(`<span class="${counter % 2 === 0 ? 'black' : 'white'}"></span>`);
            counter++;
        }
        if (number % 2 === 0 ) {
            counter++;
        }

        console.log(`</div>`);
    }

    console.log(`</div>`);
}

printChessboard(4);