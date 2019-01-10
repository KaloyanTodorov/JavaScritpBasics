function lastDayOfPreviousMonth(array) {
    let day = array[0];
    let month = array[1];
    let year = array[2];

    let firstDayOfCurrentMonth = new Date(year, month - 1 , 1 - 1);

    return firstDayOfCurrentMonth.getDate();
}

console.log(lastDayOfPreviousMonth([17, 3, 2002]));
console.log(lastDayOfPreviousMonth([13, 12, 2004]));
console.log(lastDayOfPreviousMonth([31, 1, 2000]));