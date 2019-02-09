function solve(array) {
    let sortedArr = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sortedArr.join('\n'));
}

solve(['test', 
'Deny', 
'omen', 
'OMEN',
'Default']);