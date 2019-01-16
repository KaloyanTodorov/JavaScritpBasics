function solve(input) {
    const inputType = typeof(input);
    if(inputType === "number") {
        const result = (Math.PI * Math.pow(Number(input), 2)).toFixed(2);
        console.log(result);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
        return;
    }

}

solve({asd: '5.33'});
solve(4);