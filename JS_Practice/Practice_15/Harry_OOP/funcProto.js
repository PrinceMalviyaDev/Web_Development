function Student(name){
    this.name = name;
}

Student.prototype.sayHi = function() {
    console.log("Hii", this.name);
};

let s1 = new Student("Srishti");

s1.sayHi();

console.log(s1);

let a = 10;