function monthlyCalendar([day, month, year]) {

    let currentMonth = month - 1;

    let firstOfMonthDate = new Date(year, currentMonth, 1);

    let html = '<table>\n';
    html += '   <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    if(firstOfMonthDate.getDay() !== 0) {
        let daysFromPreviousMonth = firstOfMonthDate.getDay();

        html += '   <tr>';

        let printLastMonthDay = new Date(year, currentMonth, 1 - daysFromPreviousMonth);
        for (let i = 0; i < daysFromPreviousMonth; i++) {
            html += `<td class="prev-month">${printLastMonthDay.getDate() + i}</td>`;
        }
    }

    let currentMonthLength = (new Date(year, currentMonth + 1, 0).getDate() );
    for (let i = 1; i <= currentMonthLength; i++) {

        if(new Date(year, currentMonth, i).getDay() === 0) {
            html += '   <tr>';
        }

        if (day != i) {
            html += `<td>${i}</td>`;
        } else {
            html += `<td class="today">${i}</td>`;
        }

        if(new Date(year, currentMonth, i).getDay() === 6) {
            html += '</tr>\n';
        }
    }

    let remainingDaysOfWeek = (6 - new Date(year, currentMonth, currentMonthLength).getDay());
    for (let i = 1; i <= remainingDaysOfWeek; i++) {
        html += `<td class="next-month">${i}</td>`;
    }

    if(remainingDaysOfWeek !== 0) {
        html += '</tr>\n';
    }

    html += '</table>';

    return html;
}

console.log(monthlyCalendar([1, 5, 2016]));
