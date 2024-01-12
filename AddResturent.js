let hotels = [];

function create_Resturent(id, name, address, sgst, cgst, serviceTax) {

    let newHotelObj = {
        id: id,
        name: name,
        address: address,
        menu: [],
        order: [],
        tax: {
            sgst: sgst,
            cgst: cgst,
            serviceTax: serviceTax
        },

    };
    hotels.push(newHotelObj);
    return newHotelObj;
}

function add_Item(hotelId, itemName, price) {
    let newItem;
    let hotel = hotels.find(h => h.id === hotelId);
    if (hotel) {
        let menu = hotel.menu.some(menu => itemName === menu.name)
        if (menu) {
            return ({
                err: 'Item already present'
            })
        } else {

            newItem = {
                name: itemName,
                price: price

            };
            hotel.menu.push(newItem)

            return ({
                Success_Message: "Added Successfully", newItem
            })
        }

    }

    else {
        console.log("Hotel not found");
    }

}

// function edit_Item(hotelId, itemName, newItemName, newPrice) {
//     let hotel = hotels.find(h => h.id === hotelId);
//     if (hotel) {
//         let item = hotel.menu.find(item => item.name === itemName);
//         if (item) {
//             item.name = newItemName;
//             item.price = newPrice;

//             return ({
//                 Success_Message: "Edited Successfully", item
//             })

//         }
//         else {
//             console.log("Item Not Found");
//         }


//     }
//     else {
//         console.log("Hotel not found");
//     }

// }

// function deleteItem(hotelId, itemName) {
//     let hotel = hotels.find(h => h.id === hotelId);
//     if (hotel) {
//         hotel.menu = hotel.menu.filter(item => item.name !== itemName);
//         console.log("Item Deleted Successfully");
//         return ({
//             Success_Message: "Deleted Successfully",
//             menu: hotel.menu
//         })
//     }
//     else {
//         console.log("Hotel not found");
//     }
// }

// function createOrder([{ hotelId, itemName, quantity, orderId }]) {
//     let hotel = hotels.find(h => h.id === hotelId);
//     if (hotel) {
//         let menu = hotel.menu.find(item => item.name === itemName)
//         if (menu) {
//             let newOrder = {
//                 id: orderId,
//                 item: menu,
//                 quantity: quantity
//             };
//             hotel.order.push(newOrder);
//             return ({
//                 Success_Message: "Ordered Successfully",
//                 order: hotel.order
//             })
//         } else {
//             return ({
//                 err: `${itemName} not found`
//             })
//         }

//     }
//     else {
//         console.log("Hotel Not found")
//     }
// }

function createOrder(hId, orders) {
    let hotel = hotels.find(h => h.id === hId);
    if (hotel) {
        for (let i = 0; i < orders.length; i++) {
            orderItem = orders[i];
            let menu = hotel.menu.find(item => item.name === orderItem.itemName);
            if (menu) {
                hotel.order.push(orders[i])
            }
            else {
                return ({
                    err: "Invalid item in Order"
                })
            }
        }
        return ({
            Success_Message: "Ordered Successfully",
            order: hotel.order
        })
    }
    else {
        return ({
            err: "Hotel Not Found"
        })
    }


}


// function deleteResturent(resturenntId) {
//     let hotel = hotels.find(h => h.id === resturenntId)

//     if (hotel) {
//         for (let i = 0; i < hotels.length; i++) {

//             if (resturenntId === hotels[i].id) {
//                 for (let j = i; j < hotels.length; j++) {
//                     hotels[j] = hotels[j + 1]
//                 }
//                 hotels.length = hotels.length - 1
//                 return ({ successMsg: `Deleted success` })
//             }
//         }

//     } else {
//         return ({ successMsg: `Deleted success` })

//     }

// }
// function generateBill(orderId, resturent_name) {
//     let resturentName = hotels.find(h => resturent_name === h.name);
//     let order = resturentName.order.find(o => orderId === o.id);
//     let tax = resturentName.tax;
//     if (order) {

//         let totalAmount = order.item.price * order.quantity;

//         return ({
//             totalAmount,
//             hotelName: resturentName.name
//         })
//     }
//     else {
//         return ({
//             error: "Order Not Found"
//         })
//     }


// }


function generate_Bill(hId) {
    let hotel = hotels.find(h => h.id === hId);
    let items = [];
    if (hotel) {
        totalAmount = 0;
        for (let i = 0; i < hotel.order.length; i++) {
            let orderItem = hotel.order[i];
            let menuItem = hotel.menu.find(item => item.name === orderItem.itemName);
            if (menuItem) {
                let item = {
                    ...orderItem,
                    price: menuItem.price
                };
                items.push(item);

                totalAmount += menuItem.price * orderItem.qty;

            }
        }
        console.log("Itemssssssss", items)
        let itemTotal = 0;
        for (const itemsTotal in items) {

            itemTotal += items[itemsTotal].price;
        }

        let sgstAmount = (totalAmount * hotel.tax.sgst) / 100;
        let cgstAmount = (totalAmount * hotel.tax.cgst) / 100;
        let serviceTaxAmount = (totalAmount * hotel.tax.serviceTax) / 100;
        grandTotal = totalAmount + sgstAmount + cgstAmount + serviceTaxAmount;
        console.log("Items---Price---qty---TotalRs");
        for(const item of items){
        console.log(item.itemName,"---",item.price,"---",item.qty,"---",item.price*item.qty);
        }
        return {
            
            totalAmount,
            sgstAmount,
            cgstAmount,
            serviceTaxAmount,
            grandTotal
        }
        

    }
    else {
        return ({
            err: "Hotel Not fount"
        });
    }

}


console.log(create_Resturent(1, "Taj", "Mumbai", 20, 28, 30));


console.log(add_Item(1, "Samosa", 45));
console.log(add_Item(1, "Idli", 30));
// console.log(edit_Item(1, "Samosa","Idali",35));
// console.log(deleteItem(1,"Idali"));
console.log(createOrder(
    1,
    [
        { itemId: 1, itemName: "Idli", qty: 4 },
        { itemId: 2, itemName: "Samosa", qty: 2 }

        // { itemId: 1, itemName: "Dosa", qty: 3 }
    ]))


console.log(generate_Bill(1));






// for(let i = 0 ; i < hotels.length;i++){
//     console.log(hotels[i].menu)
// }


// console.log(generateBill(1, "Taj"))






// console.log(deleteResturent(1))



