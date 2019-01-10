function stringifyObject(array) {
    array.shift();
    for (let i = 0; i < array.length; i++) {
        let values = array[i].split(/\s*\|\s*/).filter(a => a !== '');
        array[i] = {
            Town: values[0],
            Latitude: Number(values[1]),
            Longitude: Number(values[2])
        }
    }
    console.log(JSON.stringify(array));

    // let string = '{"id": 15, "town": "Sofia", "population": "1.9mln"}';
    // let obj = JSON.parse(string);
    // console.log(obj);
}

stringifyObject([
    '| Town | Latitude | Longitude | ',
    '| Sofia | 42.234325 | 23.3200043 | ',
    '| Beijing | 39.1239843 | 116.363523 |'
]);