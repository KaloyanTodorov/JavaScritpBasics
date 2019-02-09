function solve(arr) {
    const step = Number(arr.pop());
    let resultArr = arr.reduce((acc, element, index) => {
        if(index % step === 0) {
            acc.push(element);
        }
        return acc;
    }, [])

    console.log(resultArr.join('\n'));
}

solve(['1', 
'2',
'3', 
'4', 
'5', 
'6'])
