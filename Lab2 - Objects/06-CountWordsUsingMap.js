function countWordsWithMap(array) {
    let map = new Map();
    let input = array.join(' ')
        .toLowerCase()
        .split(/\W/g)
        .filter(a => a != '')
        .forEach(word => {
            if(!map.has(word)) {
                map.set(word, 0);
            }
            map.set(word, Number(map.get(word) + 1));

        });

    let newMap = new Map([...map.entries()].sort())
    // let sortedMapByKeys = Array.from(map.keys()).sort();
    // for (const key of sortedMapByKeys) {
    //     console.log(`${key} -> ${map.get(key)} times`);
    // }

    for (const [key, value] of newMap) {
        console.log(`'${key}' -> ${value} times`);
    }
    //return newMap;
}

countWordsWithMap([`Far too slow, you're far too slow.`, `sdfsdf sdfdff, fff, fAr`]);