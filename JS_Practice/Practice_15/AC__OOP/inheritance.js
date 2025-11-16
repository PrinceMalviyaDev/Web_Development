class Person {
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log('do nothing');        
    }
}

class Engineer extends Person {     // this class' methods and attributes will go inside the "Prototype of the "prince" object"
    work() {    // method overriding
        console.log('solve problems, build something');
    }
}

class Doctor extends Person {
    work() {    // method overriding
        console.log('treat patients');
    }
    earn(salary){
        this.salary = salary;
    }
}

let prince = new Engineer();
let srishti = new Doctor();

console.log(prince instanceof Engineer);  //True
console.log(prince instanceof Person);  //True
console.log(prince instanceof Doctor);  //false

console.log(srishti instanceof Doctor);  //True
console.log(srishti instanceof Person);  //True
console.log(srishti instanceof Engineer);  //false

console.log(prince instanceof Object);  //true