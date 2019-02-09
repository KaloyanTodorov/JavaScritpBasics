function cookingByNumbers(array) {
    let number = array[0];
    for (let i = 1; i <array.length ; i++) {
        number = cooking(number, array[i]);
        console.log(number);
    }
    
    function cooking(number, operation) {
        switch (operation) {
            case'chop': return chop(number);
            case 'dice': return dice(number);
            case 'spice': return spice(number);
            case 'bake': return bake(number);
            case 'fillet': return fillet(number);
        }
    }
    
    function chop(number) {
        return number / 2;
    }
    
    function dice(number) {
        return Math.sqrt(number);
    }
    
    function spice(number) {
        return number + 1;
    }
    
    function bake(number) {
        return number * 3;
    }
    
    function fillet(number) {
        return number * 0.8;
    }
}

cookingByNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);