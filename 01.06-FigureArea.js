function calculateArea(w, h, W, H) {
    let area1 = w * h;
    let area2 = W * H;

    let removeArea = Math.min(w, W) * Math.min(h, H);

    let result  = area1 + area2 - removeArea;
    return result;
}

console.log(calculateArea(2, 4, 5, 3));