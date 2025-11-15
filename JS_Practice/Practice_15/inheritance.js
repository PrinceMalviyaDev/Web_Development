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

class Engineer extends Person {
    work() {    // method overriding
        console.log('solve problems, build something');
    }
}

class Doctor extends Person {
    work() {    // method overriding
        console.log('treat patients');
    }
}

let prince = new Engineer();
let srishti = new Doctor();