function solve() {
    let inputEl = document.querySelector('input#str');
    let input = inputEl.value.split(', ')
    let command = input[1].trim();
    let str = input[0];
    let result = document.querySelector('#result');

    let nameRegex = / ([A-Z][A-Za-z]*)-([A-Z][A-Za-z]*\.-)?([A-Z][A-Za-z]*) /g;
    let airportRegex = / ([A-Z]{3})\/([A-Z]{3}) /g;
    let flightNumberRegex = / ([A-Z]{1,3}\d{1,5}) /g;
    let companyRegex = /- ([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*) /g;

    const name = nameRegex.exec(str)[0].trim().replace(/-/g, ' ');
    const flightNumber = flightNumberRegex.exec(str)[1];
    const airportInfo = airportRegex.exec(str)
    const fromAirport = airportInfo[1];
    const toAirport = airportInfo[2];
    const companyName = companyRegex.exec(str)[1].replace('*', ' ');
    switch(command) {
        case 'name':
            result.textContent = `Mr/Ms, ${name}, have a nice flight!`;
        break;
        case 'flight':

            result.textContent = `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`;
        break;
        case 'company':
            result.textContent = `Have a nice flight with ${companyName}.`
        break;
        case 'all':
            result.textContent = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`;
        break;
    }

    inputEl.value = '';
}