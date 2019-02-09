function numbersAsString(number){
    let stringNums = '';
    for(let i = 1; i <= Number(number); i++){
        stringNums += `${i}`;
    }

    console.log(stringNums);
}

numbersAsString('5');