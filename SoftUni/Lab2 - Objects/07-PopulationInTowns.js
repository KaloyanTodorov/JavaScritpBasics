function populationInTowns(array) {
    let result = new Map();
    for (const pair of array) {
        let newPair = pair.split(/\s+<->\s+/g);
        let key = newPair[0];
        let value = newPair[1];
        if(!result.has(key)) {
            result.set(key, 0);
        }
        result.set(key, Number(result.get(key)) + Number(value));
    }
    for (const [key, value] of result) {
        console.log(`${key} : ${value}`);
    }
}

populationInTowns(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000', 'Sofia   <-> 20000']);
console.log('\n')
populationInTowns(['Istanbul <-> 100000\n',
'Honk Kong <-> 2100004\n',
'Jerusalem <-> 2352344\n',
'Mexico City <-> 23401925\n',
'Istanbul <-> 1000\n']);