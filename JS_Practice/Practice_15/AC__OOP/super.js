class Person {
    constructor(name) {
        console.log('Parent class constructor is invoked');
        this.name = name;
        this.species = "homo sapiens";
    }

    eat(){
        console.log('eat');        
    }
}

class Engineer extends Person {
    constructor(name, branch) {
        console.log("Child class constructor is invoked");

        super(name);   // to invoke parent class constructor, and passing the argument to the constructor of the parent class.

        this.branch = branch;
        
        console.log('Child class constructor has finished its work');
    }

    work() {
        super.eat();   // it will call the parent class' eat method first.
        console.log('solve problems');
    }
}

let prince = new Engineer("prince malviya", "Software Engineer");