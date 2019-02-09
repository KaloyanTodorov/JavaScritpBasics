function checkValidity(points) {
    let [x1, y1, x2, y2] = points.map(Number);
    let [x0, y0] = [0, 0];

    let distanceX0toA = findDistance(x1, y1, x0, y0);
    let distanceX0toB = findDistance(x2, y2, x0, y0);
    let distanceAtoB = findDistance(x1, y1, x2, y2);

    printResult(distanceX0toA, x1, y1, x0, y0);
    printResult(distanceX0toB, x2, y2, x0, y0);
    printResult(distanceAtoB, x1, y1, x2, y2);


    function findDistance(x1, y1, x2, y2) {
        // if (x1 === x2) {
        //     return Math.max(y1, y2) - Math.min(y1, y2);
        // }
        //
        // if (y1 === y2) {
        //     return Math.max(x1, x2) - Math.min(x1, x2);
        // }

        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    function printResult(distance, x1, y1, x2, y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distance) ? 'valid' : 'invalid'}`)
    }
}

//checkValidity([3, 0, 0, 4]);
checkValidity([2, 1, 1, 1]);


// let a = Math.sqrt(3 * 3 + 0 * 0);
// let b = Math.sqrt(0 * 0 + 4 * 4);
// console.log(Math.sqrt(a * a + b * b));