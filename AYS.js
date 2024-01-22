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










// var aYSJSON = {
//     "comapany_name": "AYS_Software_Solutions",
//     "Company_Location": "Banner",
//     "Founder_Name": "Smita Patel",
//     "Co-Founder_Name": "Yogesh Patel",
//     "Departments": {
//         "QA": {
//             "teamLead": "Amit Sir",
//             "Employee_name": [
//                 { "name": "Rutuja" },
//                 { "name": "Mohan" },
//                 { "name": "Mihir" },
//             ]
//         },
//         "Developer": {
//             "teamLead": "Prashil Sir",
//             "Employee_name": [
//                 { "name": "Aman" },
//                 { "name": "Avinash" },
//                 { "name": "Arpit" },
//             ]
//         },
//         "Dev_ops": {
//             "teamLead": "Parag Sir",
//             "Employee_name": [
//                 { "name": "Mihir" },
//                 { "name": "Pragya" },
//                 { "name": "Rishi" },
//             ]
//         },
//         "HR": {
//             "name": "Nikita"
//         }
//     },
//     "Company_Rooms": [
//         "Founder Room",
//         "Delivery Head",
//         "Conference Room"
//     ]
// };



// function create_Department() {
//     aYSJSON.Departments["Finance"] = {};
//     return aYSJSON.Departments;
// }
// (create_Department());

// // function propertyFinance() {
// //     let newObject = {
// //         name: [
// //             { name: "Ketan" },
// //             {
// //                 Mobile_Number: 7479713088,
// //                 name2: {
// //                     Name: "Sourav",
// //                     Mobile_Number: 1234567890
// //                 },
// //             }
// //         ]


// //     };
// //     aYSJSON.Departments.Finance = newObject;
// //     return aYSJSON.Departments.Finance.name[1].name2.Mobile_Number;
// // }
// // console.log(propertyFinance());

// function propertyFinance(name, mobile, name2, name2mobileNumber) {
//     let newObject = {
//         name: [{ name: name },
//             {
//                 mobile: mobile,
//                 name2: {
//                     name: name2,
//                     name2mobileNumber: name2mobileNumber
//                 },
//             }

//         ]
//     };
//     return aYSJSON.Departments.Finance = newObject;


// }
// console.log(propertyFinance("Ketan", 7479713088, "Sourav", 1234567890));
