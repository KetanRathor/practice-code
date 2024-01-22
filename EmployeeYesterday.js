let mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "mainDiv");


let buttonDiv = document.createElement("div");
buttonDiv.setAttribute("id", "buttonDiv");
mainDiv.appendChild(buttonDiv);

let EmployeeDetailDiv = document.createElement("div")
EmployeeDetailDiv.setAttribute("id", "EmployeeDetailDiv");
EmployeeDetailDiv.textContent = "Employee Details";
mainDiv.appendChild(EmployeeDetailDiv);

let employeeDetailTable = document.createElement("table");
employeeDetailTable.setAttribute("id", "employeeDetailTable");
EmployeeDetailDiv.appendChild(employeeDetailTable);



// buttonDiv.appendChild()

let button = document.createElement("button");
button.setAttribute("value", "button");
button.setAttribute("id", "addButton");
button.setAttribute("name", "button");
button.textContent = "Add";
buttonDiv.appendChild(button);
button.onclick = toggleFormDisplay;



let tableMainDiv = document.createElement("div");
tableMainDiv.setAttribute("id", "tableMainDiv");
mainDiv.appendChild(tableMainDiv);

let headerRow = employeeDetailTable.insertRow();
let headerCell = headerRow.insertCell(0);
headerCell.textContent = "Name";
headerRow.appendChild(tableMainDiv)

let aysDiv = document.createElement("div");
aysDiv.textContent = "AYS";
aysDiv.setAttribute("id", "aysDiv");
tableMainDiv.appendChild(aysDiv);

let employeeDiv = document.createElement("div");
employeeDiv.textContent = "Employees"
employeeDiv.setAttribute("id", "employeeDiv");
tableMainDiv.appendChild(employeeDiv);

function toggleFormDisplay() {

    let form = document.getElementById("myForm");
    form.style.display = "block";
}


let form = document.createElement("form");
form.setAttribute("id", "myForm");
buttonDiv.appendChild(form);

let formHeading = document.createElement("h2");
formHeading.textContent = "Add Employee"
form.appendChild(formHeading)

let nameLabel = document.createElement("label");
nameLabel.textContent = "Name: ";
form.appendChild(nameLabel);

let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "nameInput");
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

let salaryLabel = document.createElement("label");
salaryLabel.textContent = "Salary: ";
form.appendChild(salaryLabel);

let salaryInput = document.createElement("input");
salaryInput.setAttribute("type", "text");
salaryInput.setAttribute("name", "salaryInput");
form.appendChild(salaryInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

let designationLabel = document.createElement("label");
designationLabel.textContent = "Designation: ";
form.appendChild(designationLabel);

let designationInput = document.createElement("input");
designationInput.setAttribute("type", "text");
designationInput.setAttribute("name", "designationInput");
form.appendChild(designationInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


let dIDLabel = document.createElement("label");
dIDLabel.textContent = "dID: ";
form.appendChild(dIDLabel);

let dIDInput = document.createElement("input");
dIDInput.setAttribute("type", "text");
dIDInput.setAttribute("name", "dIDInput");
form.appendChild(dIDInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

let submitButton = document.createElement("button");
submitButton.setAttribute("value", "submit");
submitButton.setAttribute("id", "submitButton");
submitButton.setAttribute("name", "Submit");
submitButton.textContent = "Submit";
form.appendChild(submitButton);
submitButton.onclick = handleSubmit;

let cancelButton = document.createElement("button");
cancelButton.setAttribute("id", "cancelButton");
cancelButton.setAttribute("value", "cancel");
cancelButton.setAttribute("name", "Cancel");
cancelButton.textContent = "Cancel";
form.appendChild(cancelButton);






// document.getElementById("buttonDiv").appendChild(form);
document.getElementById("root").appendChild(mainDiv);
document.body.appendChild(mainDiv);





let employee = [];

function handleSubmit() {


    let form = document.getElementById("myForm");
    let nameInput = document.getElementsByName("nameInput")[0].value;
    let salaryInput = document.getElementsByName("salaryInput")[0].value;
    let designationInput = document.getElementsByName("designationInput")[0].value;
    let dIDInput = generateEmployeeID();

    let newEmployee = {
        Id: dIDInput,
        name: nameInput,
        salary: salaryInput,
        designation: designationInput,
        dID: dIDInput
    };

    // Add the employee to the array
    employee.push(newEmployee);

    // Clear form inputs
    form.reset();

    // Update the employee detail table
    updateEmployeeDetailTable();

    // Display details in a form
    displayEmployeeDetailsForm(newEmployee);
}

function updateEmployeeDetailTable() {
    // Clear the table before updating
    clearEmployeeDetailTable();

    // Add employees to the table
    for (let i = 0; i < employee.length; i++) {
        addEmployee(employee[i]);
    }
}

function displayEmployeeDetailsForm(employee) {
    let detailForm = document.createElement("div");
    detailForm.setAttribute("id", "detailForm");

    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Name: " + employee.name;
    detailForm.appendChild(nameLabel);

    let salaryLabel = document.createElement("label");
    salaryLabel.textContent = "Salary: " + employee.salary;
    detailForm.appendChild(salaryLabel);

    let designationLabel = document.createElement("label");
    designationLabel.textContent = "Designation: " + employee.designation;
    detailForm.appendChild(designationLabel);

    let dIDLabel = document.createElement("label");
    dIDLabel.textContent = "dID: " + employee.dID;
    detailForm.appendChild(dIDLabel);

    // Append the form to the EmployeeDetailDiv
    tableMainDiv.appendChild(detailForm);
}

function addEmployee(employee) {
    let row = employeeDetailTable.insertRow();
    let cell = row.insertCell(0);
    cell.textContent = employee.name;

    row.onclick = function() {
        // Clear tableMainDiv before displaying details
        tableMainDiv.innerHTML = "";
        displayEmployeeDetailsForm(employee);
    }
}

function clearEmployeeDetailTable() {
    // Clear the table
    employeeDetailTable.innerHTML = "";

    // Add header row
    let headerRow = employeeDetailTable.insertRow();
    let headerCell = headerRow.insertCell(0);
    headerCell.textContent = "Name";
}



//     function displayEmployeeDetailsForm(employee) {
//         let detailForm = document.createElement("div");
//         detailForm.setAttribute("id", "detailForm");

//         let nameLabel = document.createElement("label");
//         nameLabel.textContent = "Name" + employee.name;
//         detailForm.appendChild(nameLabel);

//         let salaryLabel = document.createElement("label");
//         salaryLabel.textContent = "Salary: " + employee.salary;
//         detailForm.appendChild(salaryLabel);

//         let designationLabel = document.createElement("label");
//         designationLabel.textContent = "Designation: " + employee.designation;
//         detailForm.appendChild(designationLabel);

//         let dIDLabel = document.createElement("label");
//         dIDLabel.textContent = "dID: " + employee.dID;
//         detailForm.appendChild(dIDLabel);


//         mainDiv.appendChild(detailForm);



//     }


//     updateEmployeeDetailTable();

//     // Display details in a form
//     displayEmployeeDetailsForm(newEmployee);
// }

// let idCounter = 1;

// function generateEmployeeID() {
//     let generatedID = "A" + idCounter;
//     idCounter++;
//     return generatedID;
// }

// function addEmployee(employee) {

//     let row = employeeDetailTable.insertRow();
//     let cell = row.insertCell(0);
//     cell.textContent = employee.name;

//     row.onclick = function() {
//         EmployeeDetailDiv.innerHTML = "";
//         displayEmployeeDetailsForm(employee);
//     }
// }
