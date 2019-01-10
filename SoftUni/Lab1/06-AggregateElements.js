function aggregateElements(array) {
    let sum = 0;
    let inversedSum = 0;
    let concat = '';

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        inversedSum += 1 / array[i];
        concat += array[i];
    }

    console.log(sum);
    console.log(inversedSum);
    console.log(concat);
}

aggregateElements([2, 4, 8, 16]);

