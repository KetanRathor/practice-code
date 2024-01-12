function generate_bill(order, tax){
    console.log("ITEM -- COST -- QTY -- AMOUNT");
    let sub_total=0;
    for(let i =0; i<order.items.length; i++){
        sub_total+= order.items[i].item.price*order.items[i].qty
        console.log(order.items[i].item.name+ " -- "+order.items[i].item.price+" -- "+order.items[i].qty+" -- "+order.items[i].item.price*order.items[i].qty);

    }
    console.log("------------------------")
    console.log("           sub total: "+ sub_total+"rs");
    let cgst = (sub_total/100)*tax.cgst;
    let sgst = (sub_total/100)*tax.sgst;



    console.log("           SGST 2.5% : "+sgst );
    console.log("           CGST 2.5 : "+cgst);
    let charge = 0;
    if(tax.service_charges != " "){
        charge = parseInt(tax.service_charges)
        console.log("           Service charge : "+charge+ "rs")
    }
    console.log("-----------------------------");
    console.log("           TOTAL : "+parseInt(sub_total+sgst+sgst+cgst+charge)+ " rs");
    console.log("Visit Again");
    
}
const item1 ={
    name: "samosa",
    price : 54,
    type : "breakefast"
};
const item2= {
    name: "idli",
    price : 20,
    type : "Rawa"
};


const order={
    items : [{item:item1,qty:2},{item: item2, qty:1}]
}


const tax ={
    sgst: 28,
    cgst: 20,
    service_charges: "1"
 };


generate_bill(order, tax)




