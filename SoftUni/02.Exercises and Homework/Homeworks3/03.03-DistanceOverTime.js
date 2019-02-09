function calculateDistance(array) {
    let speedA = array[0] / 3.6;
    let speedB = array[1] / 3.6;
    let time = array[2];

    let distanceA = speedA * time;
    let distanceB = speedB * time;

    console.log(Math.max(distanceA, distanceB) - Math.min(distanceA, distanceB));
}

calculateDistance([0, 60, 3600]);
calculateDistance([11, 10, 120]);
calculateDistance([5, -5, 40]);

calculateDistance([-55, -5, 40]);