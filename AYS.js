// Creating a JSON object
var aYSJSON = {
    "comapany_name" : "AYS_Software_Solutions",
    "Company_Location" : "Banner",
    "Founder_Name" : "Smita Patel",
    "Co-Founder_Name": "Yogesh Patel",
    "Departments" : {
        "QA" : {
            "teamLead": "Amit Sir",
            "Employee_name": [
                {"name" : "Rutuja"},
                {"name" : "Mohan"},
                {"name" : "Mihir"},
            ]
        },
        "Developer" : {
            "teamLead": "Prashil Sir",
            "Employee_name" : [
                {"name" : "Aman"},
                {"name" : "Avinash"},
                {"name" : "Arpit"},
            ]
        },
        "Dev_ops" : {
            "teamLead" : "Parag Sir",
            "Employee_name" : [
                {"name" : "Mihir"},
                {"name" : "Pragya"},
                {"name" : "Rishi"},
            ] 
        },
        "HR": {
            "name" : "Nikita Dere"
        }
    },
    "Company_Rooms" : [
        "Founder Room",
        "Delivery Head",
        "Conference Room"
    ]
};
var cloud_emp = aYSJSON.Departments.Dev_ops.Employee_name;

for(let i = 0; i<cloud_emp.length; i++){
    console.log(cloud_emp[i].name);
}