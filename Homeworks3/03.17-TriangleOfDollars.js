function printTriangle(number) {
    let signs = '$';
    for (let i = 1; i <= number; i++) {
        console.log(signs);
        signs += '$'
    }
}

printTriangle(3);
printTriangle(2);
printTriangle(4);