
        
        var dataArray = [];
        
    let num = 1;
        function submitForm() {


            var name = document.getElementById("name").value;
            var dob = document.getElementById("dob").value;
            var address = document.getElementById("address").value;


// if id already exists update data 
        //  var existingId = dataArray.find((entry)=>entry.id===id);
        //  if(existingId){
        //     var existingdata = dataArray[existingId];
        //     existingId.name=name;
        //     existingId.dob = dob;
        //     existingId.address = address;
        //  }
        // else{
    
            if (name.trim() === '' || dob === '' || address.trim() === '') {
                alert('Please fill out all fields.');
                return;
            }

            id="A"+num;
            var formData = {
                id:id,
                name: name,
                dob: dob,
                address: address,
                age: calulate_age(dob)
            };
            num++;
           
            dataArray.push(formData);
            // console.log("AAAAAAAAAAA-----",dataArray);
            
        
           
            updateTable(dataArray);
            

            
            document.getElementById("myForm").reset();
        }
    
    
    

        function updateTable(dataArray) {
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
                var updateButton = document.createElement("button");
                updateButton.innerHTML = "Update";
                updateButton.onclick = updateDetails(i);
                cell7.appendChild(updateButton);
                
                

            }
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
            updateTable(dataArray);
        }


        function sortArrayAscending(key) {
            dataArray.sort(function (a, b) {
            return a[key] - b[key];
        })
        }

        function sortasc() {
            sortArrayAscending('age');
            updateTable(dataArray);
        }

        function sortArrayDescending(key) {
            dataArray.sort(function (a, b) {
            return b[key] - a[key];
        })
        }

        function sortdesc() {
            sortArrayDescending('age');
            updateTable(dataArray);
        }

        
        
        function searching() {
            let searchInput = document.getElementById("search");
            let searchTerm = searchInput.value.toUpperCase();
            
            function filterByName(item) {
                return item.name.toUpperCase().includes(searchTerm);
            }
            
            
            let matchedData = dataArray.filter(filterByName);
        
            
            updateTable(matchedData);
        }

        function updateDetails(index){
            return function(){
            var existingData = dataArray[index];
            
            document.getElementById("name").value = existingData.name;
            document.getElementById("dob").value = existingData.dob;
            document.getElementById("address").value = existingData.address;
            
        };
        
    }

    function EditDetails(){
        var existingId = dataArray.find((entry)=>entry.id===id);
         if(existingId){
            var existingdata = dataArray[existingId];
            existingId.name = name;
            existingId.dob = dob;
            existingId.address = address;
         }
        else{
            
    }
    updateTable(dataArray);
}
        
        
        
        
        
        
        