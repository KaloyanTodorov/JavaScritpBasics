function sumAndVAT(input) {
    let sum = 0;

    for (let num of input) {
        sum += num;
    }

    let vat = sum * 0.20;
    let total = sum + vat;
    //
    // console.log(`sum = ${sum}`);
    // console.log(`vat = ${vat}`);
    // console.log(`total = ${sum + vat}`);

    console.log(sum);
    console.log(vat);
    console.log(total);
}


sumAndVAT([3.12,
5,
18,
19.24,
1953.2262,
0.001564,
1.1445]);