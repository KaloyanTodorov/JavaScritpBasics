function printIfInsideVolume(array) {

    for (let i = 0; i < array.length; i += 3) {
        console.log(inVolumne(array[i], array[i + 1], array[i + 2]));

    }

    function inVolumne(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        if (x1 <= x && x <= x2) {
            if (y1 <= y && y <= y2) {
                if (z1 <= z && z <= z2) {
                    return 'inside';
                }
            }
        }

        return 'outside';
    }
}
//
// printIfInsideVolume([8, 20, 22]);

printIfInsideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);