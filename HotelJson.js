// let hotels = [];
// function createHotel(Hotel){
//     let Hotel = {
//         id: id,
//         Name: name,
//         Address: address,
        
//     };
// hotel.push(Hotel);
// }
// // create(1,"Taj", "Mumbai")
// // console.log(hotel)
// let items= [];
// function addItems(name,price){
//     let Menu ={
//         name:name,
//         price:price
//     }
//     items.push(Menu);
// }
// // addItems("samosa",23)
// // console.log(items);

let hotels = [];
function createResturant(hotelObj){
let flag = false
for(let i = 0; i<hotels.length; i++){
    if(hotelObj.name === hotels[i].name){
        flag =true
    }
}

if(flag){
    return({
        err:`${hotelObj.name} is already present.`
    })
    

    }
    else{
        hotelObj = {
            name: hotelObj.name,
            address: hotelObj.address,
            order: [],
            menu: []
        }
        hotels.push(hotelObj)
        return({
            msg: `${hotelObj.name} created Successfully.`
        })
}
}

let hlt1= {
    name :"Taj",
    address : "Mumbai"
}
 let hlt2= {
    name: "South Indian",
    address: "Pune"
 }

console.log(createResturant(hlt1));
console.log(createResturant(hlt2));

//Add Menu

function addMenu(Hotel_name,itemObj){
    let hotel_flag=false
    let Hotel
    for(let i=0; i<hotels.length; i++){
        if(Hotel_name === hotels[i].name){
            hotel_flag=true
            Hotel = hotels[i]
            break
        }
    }
 console.log(Hotel)
    let menu_flag= false;
    for(let i=0; i<Hotel.menu.length; i++){
        if(itemObj.name === Hotel.menu[i].name){
            menu_flag=true;
        }
    }
    if(menu_flag){
        return({
            error:`${menuObj.name} already present`
        })
    }
    else{
        hotel_flag.menu.push(itemObj)
    }
    return({
        message: `${itemObj} added Successfully`
    })
    
}
let item = { name: "idli",
            price: 20,
            type: "rawa"
}

console.log(addMenu(item));