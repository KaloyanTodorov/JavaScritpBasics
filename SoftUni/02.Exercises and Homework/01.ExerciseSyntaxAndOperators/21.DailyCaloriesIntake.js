function solve(personData, numberOfWorkouts) {
    const [gender, weight, height, age] = personData;

    let calories = 0;
    if(gender === 'm') {
        calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    } else if (gender === 'f') {
        calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }

    let activeFactor = 0;
    switch(numberOfWorkouts) {
        case 0: activeFactor = 1.2; break;
        case 1:
        case 2: activeFactor = 1.375; break;
        case 3: 
        case 4:
        case 5: activeFactor = 1.55; break;
        case 6:
        case 7: activeFactor = 1.725; break;
        default: activeFactor = 1.90; break;
    }

    const caloriesNeeded = (calories * activeFactor).toFixed(0);
    console.log(caloriesNeeded);
}

solve(['f', 46, 157, 32], 5);
solve(['m', 86, 185, 25], 3);