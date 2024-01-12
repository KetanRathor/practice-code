
function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}
function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dob;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a>Delete</a>`;

}
