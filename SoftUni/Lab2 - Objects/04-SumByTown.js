function sumByTown(array) {

    let towns = {};

    for (let i = 0; i < array.length; i++) {
        let key = array[i];
        if(towns[key] === undefined) {
            towns[key] = 0;
        }
        towns[key] += Number(array[i + 1]);
        i++;
    }

    return JSON.stringify(towns);
}

console.log(sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));
console.log(sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']));