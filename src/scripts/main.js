'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const totalDaysInMonth = new Date(year, month, 0).getDate();
  let firstDayInMonth = new Date(year, month - 1, 0).getDay();
  const weeksInMonth = Math.ceil((totalDaysInMonth + firstDayInMonth) / 7);
  const daysInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let headCalendar = '';
  let bodyCalendar = '';
  let dayTotal = 1;

  for (let i = 0; i < daysInWeek.length; i++) {
    headCalendar += `<th>${daysInWeek[i]}</th>`;
  }

  for (let i = 0; i < weeksInMonth; i++) {
    bodyCalendar += `<tr>`;

    for (let j = 0; j < daysInWeek.length; j++) {
      if (firstDayInMonth > 0 || dayTotal > totalDaysInMonth) {
        bodyCalendar += `<td></td>`;
        firstDayInMonth--;
      } else {
        bodyCalendar += `<td>${dayTotal}</td>`;
        dayTotal++;
      }
    }

    bodyCalendar += `</tr>`;
  }

  const table = document.createElement('table');
  const tHead = document.createElement('thead');
  const tBody = document.createElement('tbody');

  tHead.innerHTML = headCalendar;
  tBody.innerHTML = bodyCalendar;

  table.append(tHead, tBody);

  element.append(table);
}

calendarTable(2020, 4, calendar);
