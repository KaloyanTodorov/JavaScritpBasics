function isLeapYear(year) {
    if (year % 200 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return "yes";
    } else {
        return "no";
    }
}

console.log(isLeapYear(2004));