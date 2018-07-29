function modifyAverage(number) {
    let numToStr = number.toString();

    while (calcAverageOfNums(numToStr) <= 5) {
        numToStr = numToStr + '9';
    }

    return Number(numToStr);

    function calcAverageOfNums(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }

        return sum / num.length;
    }
}

console.log(modifyAverage(5));