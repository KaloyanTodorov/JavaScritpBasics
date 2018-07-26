function roundWith(array) {

    let number = array[0];
    let precision = array[1];

    if (precision > 15) {
        precision = 15;
    }


    return Number(number.toFixed(precision));
}

console.log(roundWith([3.1415926535897932384626433832795, 20]));
console.log(roundWith([10.5, 6]));