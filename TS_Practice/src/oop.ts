class Chai {
    flavour: string;
    price:number;

    constructor(flavour:string, price:number){
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai("Masala", 20);

console.log(`Flavour: ${masalaChai.flavour}, Price: ${masalaChai.price}`);


class Tea {
    public flavour: string = "Masala";  // public by default, can be accessed from anywhere
    private secretIngrediens: string = "cardamom";  // private, can only be accessed within the class

    public revealSecret() {
        return this.secretIngrediens; // can access private property within the class
    }
}

class Shop {
    protected shopName: string = "Chai Corner";  // protected, can be accessed within the class and its subclasses
}

class Branch extends Shop {
    displayShopName(){
        console.log(this.shopName);  // can access protected property in subclass
    }
}

const chai = new Tea();
console.log(chai.flavour);  // allowed, public property
// console.log(chai.secretIngrediens);  // not allowed, private property
console.log(chai.revealSecret());  // allowed, can access private property through public method


class Wallet {
    #balance: number = 100;  // private field, can only be accessed within the class
    public getBalance() {
        return this.#balance;  // can access private field within the class
    }
}

const w = new Wallet();
console.log(w.getBalance());  // allowed, can access private field through public method

class Cup {
    readonly capacity: number = 250;  // readonly property, can only be assigned once

    constructor(capacity:number){
        this.capacity = capacity;  // can assign value in constructor
    }
}


// getters and setters example:

class ModernChai {
    private _sugar = 2;  // private property with getter and setter
    public get sugar() {  // getter for sugar
        return this._sugar;
    }

    public set sugar(value: number) {  // setter for sugar
        if(value < 0){
            throw new Error("Sugar cannot be negative");
        } else {
            this._sugar = value;
        }
    }
}

const modernChai = new ModernChai();
console.log(modernChai.sugar);  // allowed, can access sugar through getter
modernChai.sugar = 3;  // allowed, can set sugar through setter


// Static property example:

class EkChai {
    static shopName: string;  // static property, belongs to the class, not instances
    constructor (shopName: string){
        EkChai.shopName = shopName;  // can assign value to static property in constructor
    }
}

console.log(EkChai.shopName);  // allowed, can access static property through class name

const ec1 = new EkChai("ec1");
console.log(EkChai.shopName);  // allowed, static property is shared across all instances

const ec2 = new EkChai("ec2");
console.log(EkChai.shopName);  // allowed, static property is shared across all instances, now it will show "ec2"


// Abstract class example:

abstract class Drink {
    abstract make(): void;  // abstract method, must be implemented by subclasses
}

class Coffee extends Drink {
    make(){
        console.log("Making Coffee");
    }
}

const coffee = new Coffee();
coffee.make();  // allowed, can call implemented method from abstract class



// Dependency Injection example:

// ChaiMaker depends on Heater to make chai, we inject Heater into ChaiMaker through the constructor
// This allows us to decouple ChaiMaker from the specific implementation of Heater, making it more flexible and testable.

class Heater {
    heat(){
        console.log("Heating the Vessel..");
    }
}

class GasHeater {
    heat(){
        console.log("heating the Vessel..");
    }        
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat();  // can use heater to heat water for making chai
        console.log("Making Chai");
    }
}

const make = new ChaiMaker(new GasHeater());
make.make();  // allowed, can call make method which uses heater to heat water