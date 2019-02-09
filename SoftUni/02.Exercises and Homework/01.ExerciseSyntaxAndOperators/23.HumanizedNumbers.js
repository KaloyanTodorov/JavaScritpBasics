function solve(input) {
    const numbers = input.split(/\D+/gm).filter(a => a !== '');

    for (const number of numbers) {
        let ending = '';
        switch(number[number.length - 1]) {
            case '1': 
                if(number.length > 1 && number[number.length - 2] !== '1' ||
                    number.length === 1) {
                    ending = 'st'; break;
                }
            case '2':
                if(number.length > 1 && number[number.length - 2] !== '1' ||
                    number.length === 1) {
                    ending = 'nd'; break;
                }
            case '3': 
                if(number.length > 1 && number[number.length - 2] !== '1' ||
                    number.length === 1) {
                    ending = 'rd'; break;
                }
            default: ending = 'th'; break;
        }

        console.log(number + ending);
    }
}

solve('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.');
solve('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');