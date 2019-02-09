function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);

    let oneDay = 24 * 60 * 60 * 1000;
    let nextDay = new Date(date.getTime() + oneDay);

    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDay = nextDay.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}

nextDay(2016, 9, 30);