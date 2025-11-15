class toyotaCar{
    constructor(brand, mileage){
        console.log("creating new object");  //it will be invoked automatically during the creation of the object.
        this.mileage = mileage;
        this.brand = brand;
    }

    start(){
        console.log("start");
    }
    
    stop(){
        console.log("stop");
    }

    setBrand(brand) {
        // this.brand = brand;   //"this" refers to the object, the object will have the attribute named "brandName".
    }
}

let fortuner = new toyotaCar("fortuner", 10);
// fortuner.setBrand("fortuner");   // it will create a "key : value" pair of "brandName : fortuner" in the object(not in Prototype)
console.log(fortuner);

let lexus = new toyotaCar("lexus", 20);
console.log(fortuner);