function solve(fruit, weight, price) {
    const weightInKgs = weight / 1000;
    const totalPrice = weightInKgs * price;
    
    console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${weightInKgs.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.71);
solve('apple', 1563, 2.35);

