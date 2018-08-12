function fromJSONtoHTMLtable(input) {
    let array = JSON.parse(input);
    let result = '<table>\n';
    let headerPrinted = false;
    for (const obj of array) {

        if (!headerPrinted) {
            let keys = Object.keys(obj);
            result += '    <tr>';
            keys.forEach(function (key) {
                result += '<th>' + htmlEscape(key) + '</th>';
            });
            result += '</tr>\n';

            headerPrinted = true;
        }
        let values = Object.values(obj);
        result += '    <tr>';
        values.forEach(function (value) {
            result += '<td>' + htmlEscape(value) + '</td>';
        })
        result += '</tr>\n';
    }
    result += '</table>';

    return result;


    function htmlEscape(str) {
        return str.toString().replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

}



console.log(fromJSONtoHTMLtable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));