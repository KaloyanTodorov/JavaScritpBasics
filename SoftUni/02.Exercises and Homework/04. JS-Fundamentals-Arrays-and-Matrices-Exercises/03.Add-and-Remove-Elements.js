function solve(arr) {
    let resultArr = arr.reduce((accumulator, element, index) => {
        if(element === 'add') {
            accumulator.push(index + 1);
        } else if(element === 'remove') {
            accumulator.pop();
        }
        return accumulator;
    }, []);

    if(resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve([
    'add',
    'add',
    'remove',
    'add',
    'add',
])