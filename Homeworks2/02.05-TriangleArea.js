function calculateTriangleArea(sideA, sideB, sideC) {
    let sides = (sideA + sideB + sideC) / 2;

    let area = Math.sqrt(sides * (sides - sideA) * (sides - sideB) * (sides - sideC))
    return area;
}

console.log(calculateTriangleArea(2, 3.5, 4));