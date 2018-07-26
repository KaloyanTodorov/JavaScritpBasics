function distanceIn3D(array) {
    let pointx1 = array[0];
    let pointx2 = array[1];
    let pointx3 = array[2];
    let pointy1 = array[3];
    let pointy2 = array[4];
    let pointy3 = array[5];

    return console.log(Math.sqrt(
        Math.pow(pointx1 - pointy1, 2) +
        Math.pow(pointx2 - pointy2, 2) +
        Math.pow(pointx3 - pointy3, 2)));
}

distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);