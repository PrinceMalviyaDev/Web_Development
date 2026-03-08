function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} Chai`);
}

makeChai("Masala", 2);


function getChaiPrice(): number {
    return 25;
}

function makeOrder(order: string){
    if (!order) return null;
    return order;
}


function logChai(): void {
    console.log("Chai is ready");
}




function orderChai(type?: string){   // optional parameter

}  // this function is equivalent to function written below
function getChai(type: string = "Masala"){    // default parameter

}


function createChai(order: {
    type: "string";
    sugar: number;
    size: "small" | "large";
}): number {
    return 4;
}