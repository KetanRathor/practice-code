var tabl = document.getElementById('tbl');
var tHead = document.createElement('thead');
var tBody = document.createElement('tbody');

tabl.setAttribute('border', '1px solid');
tabl.appendChild(tHead);
tabl.appendChild(tBody);

var fieldTitles = ["First name", "Last name", "Age", "Email"]

var tHeadRow = document.createElement('tr');
tHead.appendChild(tHeadRow);

fieldTitles.forEach(function (field) {
     var tCol = document.createElement('td');
     tCol.innerHTML = field;
     tHeadRow.appendChild(tCol);
   })

var fields = ['first_name', 'last_name', 'age', 'email'];

for(var i = 0; i < users.length; i++) {
  var tRow = document.createElement('tr');
  tabl.appendChild(tRow);

  fields.forEach(function (field) {
    var tCol = document.createElement('td');
    tCol.innerHTML = users[i][field];
    tRow.appendChild(tCol);
  })
} 