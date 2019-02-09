function solve(array) {
    let resultArray = [];
    resultArray.push(array[0]);
    let currentBiggest = array[0];

    if(array.length > 1) {
        for (let index = 1; index < array.length; index++) {
            const element = array[index];

            if(currentBiggest <= element) {
                currentBiggest = element;
                resultArray.push(element);
            }
        }
    }

    console.log(resultArray.join('\n'));
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]);
