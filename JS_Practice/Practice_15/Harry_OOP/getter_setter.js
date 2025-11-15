class User {
    get name() {
        return this._name;
    }

    set name(name) {
        if(name.length < 4){
            console.log("The name is too short.");
            return;
        }
        this._name = name;
    }
}

let user1 = new User();

user1.name = "Prince";   // setter is called but it appears as normal assignment.
console.log(user1.name);   // getter is called but appears as accessing a property of an object.