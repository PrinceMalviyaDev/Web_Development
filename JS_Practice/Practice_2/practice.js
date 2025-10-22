let a = "Srishti";
let b = 26;
let c = 3.14;
const d = true;
let e = undefined;
let f = null;

console.log(a, b, c, d, e, f);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);


let obj = {
    name: "Srishti",
    "age": 19,
    "job role": "Developer"
};

console.log(obj);

console.log("Name:", obj.name);
console.log("Name:", obj["name"]);

console.log("Age:", obj.age);
console.log("Age:", obj["age"]);

//console.log("Job Role:", obj.job role);  This will throw an error due to space in key
console.log("Job Role:", obj["job role"]);

obj.salary = "90 LPA";  // Adding new key-value pair

console.log(obj);