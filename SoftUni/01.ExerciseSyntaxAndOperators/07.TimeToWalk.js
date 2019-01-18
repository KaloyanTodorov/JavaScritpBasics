function solve(steps, footprintLength, speed) {
    const distanceInMeters = steps * footprintLength;
    const speedInMperS = speed / 3.6;
    const time = Math.round(distanceInMeters / speedInMperS + Math.floor(distanceInMeters / 500) * 60);

    let hours = Math.floor(time / 3600);
    if(hours < 10) {
        hours = '' + 0 + hours;
    }
    let minutes = Math.floor(time / 60);
    if(minutes < 10) {
        minutes = '' + 0 + minutes;
    }
    let seconds = Math.floor(time % 60);
    if(seconds < 10) {
        seconds = '' + 0 + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(40000, 0.60, 5);
solve(2564, 0.70, 5.5);