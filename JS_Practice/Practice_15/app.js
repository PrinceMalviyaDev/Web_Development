const student = {
    fullName: "srishti doshi",
    marks: 95.6,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%");   // karanArjun.calcTax will call this one not the one from "prototype".
    }
};

karanArjun.__proto__ = employee;