function scoreToHTML(str) {
    let array = JSON.parse(str);
    let result = '<table>\n';
    result += '  <tr><th>name</th><th>score</th></tr>\n';

    for (const obj of array) {
        result += `  <tr><td>${htmlEscape(obj['name'])}</td><td>${htmlEscape(obj['score'])}</td></tr>\n`;
    }
    result += '</table>';

    return result;

    function htmlEscape(words) {
        return words.toString().replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

console.log(scoreToHTML('[{"name":"Totio","score":479}, {"name":"Moncho","score":500}]'));
console.log(scoreToHTML('[{"name":"Totio & Kompi","score":100}, {"name":"Moncho, Vikco & Belena iAbalka","score":500}]'));
