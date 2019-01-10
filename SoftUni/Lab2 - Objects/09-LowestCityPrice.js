function lowestCityPrices(array) {
    let map = new Map();
    for (const element of array) {
        let [town, product, price] = element.split(/ \| /g);

        if(!map.has(product)) {
            map.set(product, new Map());
        }

        map.get(product).set(town, price);
    }

    printLowestPrice(map);

    function printLowestPrice(map) {
        for (const [product, priceAndTown] of map) {
            let minPrice = Math.min();
            let townWithMinPrice = '';
            for (const [town, price] of priceAndTown) {

                if (Number(price) < minPrice) {
                    minPrice = Number(price);
                    townWithMinPrice = town;
                }
            }

            console.log(`${product} -> ${minPrice} (${townWithMinPrice})`);
        }
    }

}

// lowestCityPrices(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 0.5',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10',
//     'New York | Sample Product | 1000.5',]);

lowestCityPrices([
    'Mexico City | Audi | 1000',
    'Sofia City | Audi | 2000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 1.50',

'Mexico City | BMW | 99999',
    'Mexico City | Audi | 2000',
    'Sofia City | BMW | 100']);