function solve(input) {
    const inputAsArr = (input + '').split('');
    let areSameNumbers = true;
    let sum = Number(inputAsArr[0]);
    for(let i = 1; i < inputAsArr.length; i++) {
        if(inputAsArr[i - 1] !== inputAsArr[i]) {
            areSameNumbers = false;
        }
        sum += Number(inputAsArr[i]);
    }

    console.log(areSameNumbers);
    console.log(sum);
}

solve(22222222);
solve(1234);