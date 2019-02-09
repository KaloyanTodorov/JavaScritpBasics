function calculateBoxes(bottles, capcacity) {

    let numberOfBoxes = bottles / capcacity;

    console.log(Math.ceil( numberOfBoxes));
}

calculateBoxes(5, 10);