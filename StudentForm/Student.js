
        
        var dataArray = [];

        function submitForm() {
            var name = document.getElementById("name").value;
            var dob = document.getElementById("dob").value;
            var address = document.getElementById("address").value;

            if (name.trim() === '' || dob === '' || address.trim() === '') {
                alert('Please fill out all fields.');
                return;
            }

            
            var formData = {
                name: name,
                dob: dob,
                address: address,
                age: calulate_age(dob)
            };

           
            dataArray.push(formData);

           
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

                cell1.innerHTML = data.name;
                cell2.innerHTML = data.dob;
                cell3.innerHTML = data.address;
                cell4.innerHTML = data.age;
                
               

                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";
                deleteButton.onclick = createDeleteFunction(i);
                cell5.appendChild(deleteButton);
                
                

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
        
        
        
        
        
        
        