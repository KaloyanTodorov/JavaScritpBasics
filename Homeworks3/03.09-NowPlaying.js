function nowPlaying(array) {
    let songName = array[0];
    let artist = array[1];
    let duration = array[2];

    return `Now Playing: ${artist} - ${songName} [${duration}]`;
}

console.log(nowPlaying(['Number One', 'Nelly', '4:09']));
