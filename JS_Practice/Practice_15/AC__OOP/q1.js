let DATA = "Unchanged Data";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewUserData(){
        console.log("Name :", this.name);
        console.log("Email :", this.email);
    }

    viewData(){
        console.log("Data =", DATA);
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    viewData(){
        console.log("hello");
    }
    editData(data){
        console.log("Admin is editing data");
        DATA = data;
        super.viewData();
    }
}

let prince = new User("prince", "pm306616@gmail.com");
prince.viewData();
console.log(prince);

let admin1 = new Admin("sid", "admin@college.com");
console.log(admin1);

admin1.editData("Changed Data");
admin1.viewData();