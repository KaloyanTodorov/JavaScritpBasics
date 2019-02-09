function assignProperties(array) {
    let property1 = array[0];
    let value1 = array[1];
    let property2 = array[2];
    let value2 = array[3];
    let property3 = array[4];
    let value3 = array[5];

    let object = {};
    object[property1] = value1;
    object[property2] = value2;
    object[property3] = value3;

    return object;
    // return `{ ${property1 !== '' ? property1 : "''"}: '${value1}', ${property2 !== '' ? property2 : "''"}: '${value2}', ${property3 !== '' ? property3 : "''"}: '${value3}' }`;
}

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']));
console.log(assignProperties(['','','','','','','' ]));
console.log(assignProperties([undefined,'undefined','','','','']));