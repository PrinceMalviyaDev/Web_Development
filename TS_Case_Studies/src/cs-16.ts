// Singleton Design Pattern:

class CafeManager {

    private static instance: CafeManager;

    private constructor() { }

    static getInstance(): CafeManager {
        if (!CafeManager.instance) {
            CafeManager.instance = new CafeManager();
        }
        return CafeManager.instance;
    }
}

let Manager1 = CafeManager.getInstance();

let Manager2 = CafeManager.getInstance();

console.log(Manager1 === Manager2);  //true



// Factory Design Pattern:

interface Drink {serve():void};

class Latte implements Drink {
    serve(){
        console.log("Serving Latte");
    }
}

class Espresso implements Drink {
    serve(){
        console.log("Serving Espresso");
    }
}

class Americano implements Drink {
    serve(){
        console.log("Serving Americano");
    }
}

class DrinkFactory {
    static createDrink (type: string): Drink | never{
        if(type === "latte") { console.log("Creating Latte"); return new Latte(); }
        else if(type === "espresso") { console.log("Creating Espresso"); return new Espresso();}
        else if(type === "americano") { console.log("Creating Americano"); return new Americano();}
        else throw new Error("Invalid drink type!");
    }
}

let latte = DrinkFactory.createDrink("latte");
latte.serve();

let americano = DrinkFactory.createDrink("americano");
americano.serve();

function gen<T>(name:T):T{
    return name;
}

console.log(gen<number>(5));


// Observer Design Pattern:

interface Observer {
    update(msg: string): void;
}

class Customer implements Observer {
    update(msg: string): void {
        console.log("Customer received: ", msg);
    }
}

class Inventory implements Observer {
    update(msg: string): void {
        console.log("Inventory received: ", msg);
        
    }
}

class DrinkOrder {
    private observers: Observer[] = [];

    addObserver(obs: Observer):void{
        this.observers.push(obs);
    }

    notifyAll(msg: string):void{
        this.observers.forEach(obs => obs.update(msg));
    }

    TakeOrder():void{
        this.notifyAll("Drink Ordered");
    }

    OrderCompleted():void{
        this.notifyAll("Order Completed");
    }
}

let drord: DrinkOrder = new DrinkOrder();
drord.addObserver(new Customer);
drord.addObserver(new Inventory);

drord.TakeOrder();
drord.OrderCompleted();



// Strategy Design Pattern:

interface PrepStrategy {
    prepare(): void;
}

class EcoPrep implements PrepStrategy {
    prepare(): void{
        console.log("Prepairing Slowly");
    }
}

class FastPrep implements PrepStrategy {
    prepare(): void{
        console.log("Prepairing Quickly");
    }
}

class Barista {
    constructor(private strategy: PrepStrategy){}
    setStrategy(strategy: PrepStrategy):void{
        this.strategy = strategy;
    }
    order():void{
        this.strategy.prepare();
    }
}

let order1: Barista = new Barista(new FastPrep());
order1.order();

order1.setStrategy(new EcoPrep());
order1.order();
