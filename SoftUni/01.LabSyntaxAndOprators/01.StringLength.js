function solve(arg1, arg2, arg3) {
    const length = arg1.length + arg2.length + arg3.length;
    const average = Math.floor(length / arguments.length);

    console.log(length);
    console.log(average);
}

solve('chocolate', 'ice cream', 'cake');

solve('pasta', '5', '22.3');