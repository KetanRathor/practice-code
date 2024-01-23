
        
var dataArray;
if (localStorage.getItem('dataArray')) {
    dataArray = JSON.parse(localStorage.getItem('dataArray'));
} else {
    dataArray = [];
}
var selectedIndex = null;
       
// var num = 1;
if (localStorage.getItem('num')) {
    // If stored, retrieve the value and parse it to an integer
    num = parseInt(localStorage.getItem('num'));
} else {
    // If not stored, initialize 'num' to 1
    num = 1;
}


   function addData(obj){
    dataArray.push(obj);
    saveToLocalStorage();
    DisplayUI(dataArray);
   }

   function saveToLocalStorage() {
    localStorage.setItem('dataArray', JSON.stringify(dataArray));
    localStorage.setItem('num', num.toString()); 
}

   function DisplayUI(dataArray) {
    var tableBody = document.getElementById("tableBody");

    
    tableBody.innerHTML = '';

    
    for (var i = 0; i < dataArray.length; i++) {
        var data = dataArray[i];

        var newRow = tableBody.insertRow(tableBody.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        
        
        cell1.innerHTML = data.id;
        cell2.innerHTML = data.name;
        cell3.innerHTML = data.dob;
        cell4.innerHTML = data.address;
        cell5.innerHTML = data.age;
        
       

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = createDeleteFunction(i);
        cell6.appendChild(deleteButton);
        var editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = editDetails(i);
        cell7.appendChild(editButton);

        
        

    }
}


       function submitForm() {
   

           var name = document.getElementById("name").value;
           var dob = document.getElementById("dob").value;
           var address = document.getElementById("address").value;


           var id="A"+num;

           if (name.trim() === '' || dob === '' || address.trim() === '') {
               alert('Please fill out all fields.');
               return;
           }

           
           var formData = {
               id:id,
               name: name,
               dob: dob,
               address: address,
               age: calulate_age(dob)
           };
           num++;
          
           
           addData(formData);
           // console.log("Old---",dataArray);
           // console.log("AAAAAAAAAAA-----",dataArray);
       
        
          
           
           
           
       
           
           document.getElementById("myForm").reset();
   }
   
   
   

       

       function calulate_age(dob){
              var age = new Date(dob);
              
              const ageInMilliseconds = Date.now() - age.getTime();

              const years = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

              return years;

       }

       

       function createDeleteFunction(index) {
           return function() {
            deleteRow(index);
           };
       }

       function deleteRow(index) {
           
           dataArray.splice(index, 1);
           saveToLocalStorage();
           DisplayUI(dataArray);
           

           
       }


       function sortArrayAscending(key) {
           dataArray.sort(function (a, b) {
           return a[key] - b[key];
       })
       }

       function sortasc() {
           sortArrayAscending('age');
           saveToLocalStorage()
           DisplayUI(dataArray);
       }

       function sortArrayDescending(key) {
           dataArray.sort(function (a, b) {
           return b[key] - a[key];
       })
       }

       function sortdesc() {
           sortArrayDescending('age');
           saveToLocalStorage()
           DisplayUI(dataArray);
       }

       
       
       function searching() {
           let searchInput = document.getElementById("search");
           let searchTerm = searchInput.value.toUpperCase();
           
           function filterByName(item) {
               return item.name.toUpperCase().includes(searchTerm);
           }
           
           
           let matchedData = dataArray.filter(filterByName);
       
           
           
           DisplayUI(matchedData);
       }

       function editDetails(index) {
        return function(){
        var existingData = dataArray[index];
        console.log(existingData);
        document.getElementById("name").value = existingData.name;
        document.getElementById("dob").value = existingData.dob;
        document.getElementById("address").value = existingData.address;
    
        // store the curr index for use in the updateDetails function
        
        selectedIndex = index;
        };
    }
    

    function updateDetails() {
        // retrieve the stored index 
        
        var index = selectedIndex;
        // Retrieve the values from the form inputs
        var name = document.getElementById("name").value;
        var dob = document.getElementById("dob").value;
        var address = document.getElementById("address").value;
    
        // find the existing entry in dataArray based on the stored index
        var existingData = dataArray[index];
        
    
        if (existingData) {
            // Update the values in the existing entry
            existingData.name = name;
            existingData.dob = dob;
            existingData.address = address;
    
            // update table
            // saveToLocalStorage()
            DisplayUI(dataArray);
    
            // reset the form
            document.getElementById("myForm").reset();

            // selectedIndex = null;
            
        }
        
    }
    

    
    
    // function updateDetails(index) {
    //     // Retrieve the stored index from the hidden field
    //     var existingId = dataArray.find((entry)=>entry.id===id);
    //         if(existingId){
    //             var existingData = dataArray[existingId];
           
    //            existingId.name=name;
    //            existingId.dob = dob;
    //            existingId.address = address;
    
    //            updateTable(dataArray);
               
    //         }
           
    //     return function(){
    //     var index = document.getElementById("editIndex").value;
    
    //     // Update the values in dataArray based on the form inputs
    //     dataArray[index].name = document.getElementById("name").value;
    //     dataArray[index].dob = document.getElementById("dob").value;
    //     dataArray[index].address = document.getElementById("address").value;
    
    //     // Update the table
    //     updateTable(dataArray);
        
    //     // Reset the form
    //     document.getElementById("myForm").reset();
    //     };
    // }
    

//        function editDetails(index){
//            return function(){
//            var existingData = dataArray[index];
//            // document.getElementById("id").value = existingData.id;
//            document.getElementById("name").value = existingData.name;
//            document.getElementById("dob").value = existingData.dob;
//            document.getElementById("address").value = existingData.address;
           
//        };
       
//    }

    // function updateDetails(index) {
        
        
    
    //     var existingData = dataArray[index];
    //     if (existingData) {
           
    //         existingData.name = newName;
    //         existingData.dob = newDob;
    //         existingData.address = newAddress;
    
            
    //         updateTable(dataArray);
    //     }
    // }

    // function updateDetails() {
       
    //     var idToFind = "A1";
    
        
    //     var existingIndex = dataArray.findIndex((entry) => entry.id === idToFind);
    
        
    //     if (existingIndex) {
    //         var existingData = dataArray[existingIndex];
    
            
    //         var newName = document.getElementById("name").value;
    //         var newDob = document.getElementById("dob").value;
    //         var newAddress = document.getElementById("address").value;
    
            
    //         existingData.name = newName;
    //         existingData.dob = newDob;
    //         existingData.address = newAddress;
    
            
    
            
    //         console.log("Updated details:", existingData);
    
            
    //         document.getElementById("myForm").reset();
    //     } else {
            
    //         console.log("Entry with ID not found");
    //     }
    // }
    
    

        
        
        
        
        
        
        