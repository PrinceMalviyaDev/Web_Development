let str = "Srishti";
let str2 = 'Srishti';

console.log(str.length);

const obj = {
    name : "pen",
    price : 20
};

console.log("The cost of the", obj.name, "is", obj.price);


//Template Literals - Special type of String

let tl = "Template Literal";

console.log(`The cost of the ${obj.name} is ${obj.price}`);   // string interpolation

console.log(`The price of the ${obj.name} is ${1 + 2 + 3}.`);


// Escape Characters

console.log("Hello\nSrishti.");  //endline
console.log("Hello\tSrishti.");  //tab


// String Methods

let a = " srishti ";

console.log(a.toUpperCase()); 
console.log((a.toUpperCase()).toLowerCase());

console.log(a.trim());

console.log((a.trim()).slice(2, 6));

let b = " doshi";

console.log(((a.trim()).concat(b)).toUpperCase());

console.log(((a.trim()).concat(b)).toUpperCase().replace("DOSHI", "MALVIYA"));

console.log((((a.trim()).concat(b)).toUpperCase().replace("DOSHI", "MALVIYA")).slice(8));

p = "hellolololo";

q = p.replace("lo", "p");
console.log(q);  //helplololo

q = p.replaceAll("lo", "p");
console.log(q);  //helpppp

console.log(p.charAt(4));