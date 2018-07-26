function findBiggestOf3Numbers(array) {
    let [firstNumber, secondNumber, thirdNumber] = array.map(Number);

    return Math.max(firstNumber, secondNumber, thirdNumber);
}

console.log(findBiggestOf3Numbers([5, -2, 7]));
console.log(findBiggestOf3Numbers([130, 5, 99]));
console.log(findBiggestOf3Numbers([43, 43.2, 43.1]));
console.log(findBiggestOf3Numbers([5, 5, 5]));
console.log(findBiggestOf3Numbers([-10, -20, -30]));
