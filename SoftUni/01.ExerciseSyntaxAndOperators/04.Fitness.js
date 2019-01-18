function solve(day, service, time) {
    let price = 0;
    switch(day) {
        case "Saturday":
        case "Sunday":
            switch(service) {
                case "Fitness": price = 8.00; break;
                case "Sauna": price = 7.00; break;
                case "Instructor": price = 15.00; break;
            }
            break;
        default:
        if(time > 15.00) {
            price += 2.50;
        }
        switch(service) {
            case "Fitness": price = 5.00; break;
            case "Sauna": price = 4.00; break;
            case "Instructor": price = 10.00; break;       
        }
    }
    console.log(price);
}

solve('Monday', 'Sauna', 15.30);
solve('Sunday', 'Fitness', 22.00);
