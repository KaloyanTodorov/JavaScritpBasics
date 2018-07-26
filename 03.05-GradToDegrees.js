function gradsToDegrees(grads) {
    let degrees = (grads * 360 / 400) % 360;

    if(degrees < 0) {
        degrees += 360;
    }

    return degrees;
}

console.log(gradsToDegrees(100));
console.log(gradsToDegrees(400));
console.log(gradsToDegrees(850));
console.log(gradsToDegrees(-50));