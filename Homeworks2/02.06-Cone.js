function Cone(radius, height) {
    let volume = Math.PI * radius * radius * height / 3;

    console.log(volume);

    let area = Math.PI * radius * (radius + Math.sqrt(height * height + radius * radius))

    console.log(area)
}

Cone(3, 5);