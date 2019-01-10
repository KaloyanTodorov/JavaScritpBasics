function convertToFeet(inches) {
    let feet = Math.floor(inches / 12);
    let remainingInches = inches % 12;

    return `${feet}'-${remainingInches}"`;
}

console.log(convertToFeet(36));
console.log(convertToFeet(55));
console.log(convertToFeet(11));
