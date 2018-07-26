function compoundInterest(array) {
    let principalSum = array[0];
    let interestRate = array[1] / 100;
    let compoundingFrequency = 12 / array[2];
    let overallLenght = array[3];

    let compoundInterest = principalSum * Math.pow(1 + interestRate / compoundingFrequency, compoundingFrequency * overallLenght);

    return compoundInterest.toFixed(2);
}

console.log(compoundInterest([1500, 4.3, 3, 6]));
console.log(compoundInterest([100000, 5, 12, 25]));