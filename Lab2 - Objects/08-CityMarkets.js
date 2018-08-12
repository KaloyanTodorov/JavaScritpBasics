function cityMarkets(array) {
    let map = new Map();
    for (const arrayElement of array) {
        let [town, product, quantity, price] = arrayElement.split(/\s+->\s+|\s+:\s+/g);
        let income = Number(quantity) * Number(price);

        if(!map.has(town)) {
            map.set(town, new Map());
        }

        map.get(town).set(product, income);

    }

//    console.log(map);
    for (const [town, products] of map) {
        console.log(`Town - ${town}`)
        for (const [product, income] of products) {
            console.log(`$$$${product} : ${income}`);
        }


    }
}

cityMarkets(["Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3",
    "Sofia -> Audi Q7 -> 200 : 100000"]);