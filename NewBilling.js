let items = [
    { name: "samosa", price: 54, type: "breakfast" },
    { name: "idli", price: 20, type: "Rawa" }
];

let orders = [];

function add_Item(itemName, price) {
    let newItem = {
        name: itemName,
        price: price
    };

    function findItem(existing) {
        return existing.name === itemName;
    }

    let existingItem = items.find(findItem);

    if (!existingItem) {
        items.push(newItem);
        console.log("Item added successfully");
    } else {
        console.log("Item already exists");
        return;
    }
}

function deleteItem(itemName) {
    items = items.filter(item => item.name !== itemName);
}

function editItems(oldItemName, newItemName, newPrice) {
    function findItem(existing) {
        return existing.name === oldItemName;
    }

    let existingItem = items.find(findItem);

    if (existingItem) {
        existingItem.name = newItemName;
        existingItem.price = newPrice;
        console.log("Item Updated Successfully");
    } else {
        console.log("Item Not Found");
        return;
    }
}

function createOrder(items, qty) {
    let order = {
        items: items.map(item => ({ item: item, qty: qty }))
    };

    orders.push(order);
    console.log("Order created successfully");
}

function generate_bill(order, items, tax) {
    console.log("ITEM -- COST -- QTY -- AMOUNT");
    let sub_total = 0;

    for (let i = 0; i < order.items.length; i++) {
        const orderedItem = order.items[i].item;
        const quantity = order.items[i].qty;

        
        const itemInList = items.find(item => item.name === orderedItem.name);

        if (itemInList) {
            sub_total += itemInList.price * quantity;
            console.log(`${itemInList.name} -- ${itemInList.price} -- ${quantity} -- ${itemInList.price * quantity}`);
        }
    }

    console.log("------------------------");
    console.log(`           sub total: ${sub_total} rs`);

    let cgst = (sub_total / 100) * tax.cgst;
    let sgst = (sub_total / 100) * tax.sgst;

    console.log(`           SGST ${tax.sgst}% : ${sgst}`);
    console.log(`           CGST ${tax.cgst}% : ${cgst}`);

    let charge = 0;
    if (tax.service_charges !== " ") {
        charge = Number(tax.service_charges);
        console.log(`           Service charge : ${charge} rs`);
    }

    console.log("-----------------------------");
    console.log(`           TOTAL : ${sub_total + sgst + sgst + cgst + charge} rs`);
    console.log("Visit Again");
}

const tax = {
    sgst: 28,
    cgst: 20,
    service_charges: "1"
};


add_Item("vegThali", 43);
add_Item("Dosa", 50);
// console.log('New Item Added', items);

editItems("idli", "PavBhaji", 54);
// console.log("Item Edited", items);

deleteItem("PavBhaji");
// console.log("Item Deleted", items);


createOrder(items, 2);
generate_bill(orders[0], items, tax);
