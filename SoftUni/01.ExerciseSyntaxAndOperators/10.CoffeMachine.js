function solve(arr) {
    let incomeReport = 0;
    for (const order of arr) {
        const tokens = order.split(', ');
        let price = 0;

        const typeOfBevarage = {
            tea: 0.80,
            coffee: {
                caffeine: 0.80,
                decaf: 0.90,
            },
        };
        
        const coinsInserted = tokens[0];
        const bevarage = tokens[1];
        price += typeOfBevarage.coffee[tokens[2]] || typeOfBevarage[bevarage];
        const sugar = (tokens[tokens.length - 1] > 0 ? price += 0.10 : price);

        if(tokens.indexOf('milk') > -1) {
            price += 0.10;
        }

        if(coinsInserted >= price) {
            const change = coinsInserted - price;
            console.log(`You ordered ${bevarage}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            incomeReport += price;
        } else {
            const moneyNeeded = price - coinsInserted;
            console.log(`Not enough money for ${bevarage}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${incomeReport.toFixed(2)}$`)
}

solve(['1.00, coffee, caffeine, milk, 4',
'0.40, tea, milk, 2',
'1.00, coffee, decaf, 0']);

solve(['8.00, coffee, decaf, 4',
'1.00, tea, 2']);
