let item = [
    { name: "samosa", price: 54, type: "breakfast" },
    { name: "idli", price: 20, type: "Rawa" }
];


function add_Item(itemName, price) {
    
    let newItem = {
        name: itemName,
        price: price

    };
    function findItem(existing) {
        return existing.name === itemName;
    }
    
    let existingItem = item.find(findItem);
    
    if (!existingItem) {
        let newItem = {
            name: itemName,
            price: price
        };
        item.push(newItem);
        console.log("Item added successfully");

    } else {
        console.log("Item already exist");
    }

}



function deleteItem(itemName) {

    item = item.filter(item => item.name !== itemName);

}

function editItems(oldItemName, newItemName, newPrice) {
    function findItem(existing) {
        return existing.name === oldItemName;
    }
    
    let existingItem = item.find(findItem);
    
    if (existingItem) {
        existingItem.name = newItemName;
        existingItem.price = newPrice;
        console.log("Item Updated Successfully");
    } else {
        console.log("Item Not Found");
        return; 
    }
}


function generate_bill(order, tax) {

    console.log("ITEM -- COST -- QTY -- AMOUNT");
    let sub_total = 0;
    for (let i = 0; i < order.items.length; i++) {

        sub_total += order.items[i].item.price * order.items[i].qty
        console.log(order.items[i].item.name + " -- " + order.items[i].item.price + " -- " + order.items[i].qty + " -- " + order.items[i].item.price * order.items[i].qty);

    }
    console.log("------------------------")
    console.log("           sub total: " + sub_total + "rs");
    let cgst = (sub_total / 100) * tax.cgst;
    let sgst = (sub_total / 100) * tax.sgst;



    console.log("           SGST 2.5% : " + sgst);
    console.log("           CGST 2.5 : " + cgst);
    let charge = 0;
    if (tax.service_charges != " ") {
        charge = (tax.service_charges)
        console.log("           Service charge : " + charge + "rs")
    }
    console.log("-----------------------------");
    console.log("           TOTAL : " + (sub_total + sgst + sgst + cgst + charge) + " rs");
    console.log("Visit Again");

}




const order = {
    items: [{ item: item[0], qty: 2 }, { item: item[1], qty: 2 }]

};


const tax = {
    sgst: 28,
    cgst: 20,
    service_charges: "1"
};


generate_bill(order, tax)
add_Item("VegThali", 43)
console.log('New Item Added', item)
    // deleteItem("samosa")
    // console.log("Item Deleted", item)
editItems("samosa", "PavBhaji", 54);
console.log("Item Edited", item);