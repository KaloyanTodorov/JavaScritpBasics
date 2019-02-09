function heroicInventory(array) {
    let result = [];
    for (const inputLine of array) {
        let obj = {};
        let args = inputLine.split(' / ').filter(a => a !== '');

        let items = [];
        if(args.length === 3) {
            items = args[2].split(', ');
        }
        obj.name = args[0];
        obj.level = Number(args[1]);
        obj.items = items;

        result.push(obj);
    }

    return JSON.stringify(result);
}

console.log(heroicInventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / "]));