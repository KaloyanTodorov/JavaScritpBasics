function roadRadar(array) {
    let speed = array[0];
    let zone = array[1];

    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);
    if (infraction){
        console.log(infraction);
    }

    function getLimit(zone) {
        switch (zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    
    function getInfraction(speed, limit) {
        let overspeed = speed - limit;
        if (overspeed <= 0) {
            return false;
        } else {
            if (0 < overspeed && overspeed <= 20) {
                return 'speeding';
            } else if(20 < overspeed && overspeed <= 40 ) {
                return 'excessive speeding';
            }
            return 'reckless driving';
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']	);
