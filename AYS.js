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
            "name" : "Nikita"
        }
    },
    "Company_Rooms" : [
        "Founder Room",
        "Delivery Head",
        "Conference Room"
    ]
};

// let wwww = aYSJSON.Departments.QA.teamLead;
// console.log(wwww);

// function createRooms(){
//     let newRoom= "common_room";
   
   
    
//    aYSJSON.Company_Rooms.push(newRoom);
//    console.log(aYSJSON.Company_Rooms);
// }

// function create_Departments(departments){
//     let newDepartment = {
//         departments:"Finance"
//     };
//     aYSJSON.Departments = newDepartment;
//     console.log(aYSJSON.Departments);
// }
// return create_Departments();

// function output(departments){
//    let depart = aYSJSON.Departments
//    console.log(depart);

// }

// output("string")

function create_Departments(departments,desig,name){
   
        aYSJSON.Departments[departments] = {};
    
    aYSJSON.Departments[departments][desig] = name;
    return aYSJSON.Departments;

}
create_Departments("Finance","TeamLead", "Ketan");

// create_Departments("Finance")
// console.log(create_Departments("Finance","TeamLead","Ketan"));
// console.log(create_Departments("jjjj"));

function create_DesigInDepartment(desig,name){
    aYSJSON.Departments.Finance[desig] = name;
    return aYSJSON.Departments;
}
console.log(create_DesigInDepartment("name","Sourav"));



// function objectInDepartment(){
//     let newObj = {
//         name:"Ketan",
//         mob_num: 7479713088
//     };
//     return aYSJSON.Departments.Finance = newObj;
// }
// // console.log(objectInDepartment(aYSJSON.Departments.Finance));


// console.log(aYSJSON);




// var cloud_emp = aYSJSON.Departments.Dev_ops.Employee_name;

// for(let i = 0; i<cloud_emp.length; i++){
//     console.log(cloud_emp[i].name);
// }