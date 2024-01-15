function init() {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    document.body.appendChild(div1);
    div1.textContent = "AYS";
  
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    document.body.appendChild(div2);
  
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    table.setAttribute("id", "table");
    div2.appendChild(table);
  
    table.appendChild(tr);
    tr.appendChild(td);
    td.textContent = "Hello";
    
  
    let div3 = document.createElement("div");
    div3.setAttribute("id", "div3");
    document.body.appendChild(div3);

    let button = document.createElement("button");
    button.setAttribute("type","submit");
    button.setAttribute("value","Add button");


  }
  
  init();
  


// function createForm() {
//     // create form element
//     let form = document.createElement("form");
//     form.setAttribute("id", "myForm");

//     // create label element
//     let nameLabel = document.createElement("label");
//     nameLabel.textContent = "Name : ";
//     form.appendChild(nameLabel);

//     // create input element
//     let nameInput = document.createElement("input");
//     nameInput.setAttribute("type", "text");
//     nameInput.setAttribute("name", "name");
//     form.appendChild(nameInput);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(document.createElement("br"));



//     let salaryLabel = document.createElement("label");
//     salaryLabel.textContent = "Salary : ";
//     form.appendChild(salaryLabel);


//     let salaryInput = document.createElement("input");
//     salaryInput.setAttribute("type", "text");
//     salaryInput.setAttribute("name", "salary");
//     form.appendChild(salaryInput);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(document.createElement("br"));


//     let designationLabel = document.createElement("label");
//     designationLabel.textContent = "Designation : ";
//     form.appendChild(designationLabel);


//     let designationInput = document.createElement("input");
//     designationInput.setAttribute("type", "text");
//     designationInput.setAttribute("name", "designation");
//     form.appendChild(designationInput);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(document.createElement("br"));


//     let dIDlabel = document.createElement("label");
//     dIDlabel.textContent = "dID : ";
//     form.appendChild(dIDlabel);


//     let dIDInput = document.createElement("input");
//     dIDInput.setAttribute("type", "text");
//     dIDInput.setAttribute("name", "dID");
//     form.appendChild(dIDInput);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(document.createElement("br"));


//     let submitButton = document.createElement("input");
//     submitButton.setAttribute("type", "submit");
//     submitButton.setAttribute("value", "Submit");
//     form.appendChild(submitButton);

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();


//     })


//     document.getElementById('root').appendChild(form);
//     // document.getElementById('div1').appendChild(form);
// }


// createForm();
