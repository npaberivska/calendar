function Calendar(id, year, month) {
  var elem = document.getElementById(id);
  table = document.createElement('table');
  tableHd = '<tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></td>';   
  date = new Date(year, month);
  firstDay = date.getDate() == 0 ? 7 : date.getDate();

  daysInMon = new Date(year, month+1, 0).getDate();
  count = rowC = 0;

  table.innerHTML = tableHd ;

  rowC = Math.ceil((daysInMon + firstDay - 1) / 7);
  count = rowC * 7;

  var row = document.createElement('tr');
  j = 1;

  for(var i=1; i <= count; i++){
  	var td = document.createElement('td');
  	content;

  	if(i >= firstDay && i < (daysInMon + firstDay)){
  		content = j++;
  	} else {
  		content = '';
  	}

  	td.innerHTML = content;
  	row.appendChild(td);

  	if(i % 7 === 0){
  		table.appendChild(row);
  		row = document.createElement('tr');
  	}
  };

  elem.appendChild(table);
}

Calendar('calendar', 2014, 1);