let adj1 = "Crazy";
let adj2 = "Amazing";
let adj3 = "Fire";

let sname1 = "Engine";
let sname2 = "Foods";
let sname3 = "Garments";

let aword1 = "Bros";
let aword2 = "Limited";
let aword3 = "Hub";

let business_name;

let random = Math.floor(Math.random() * 3);
console.log(random);

if(random == 0){
    business_name = adj1;
}else if(random == 1){
    business_name = adj2;
}else{
    business_name = adj3;
};

random = Math.floor(Math.random() * 3);
console.log(random);

if(random == 0){
    business_name = business_name + sname1;
}else if(random == 1){
    business_name = business_name + sname2;
}else{
    business_name = business_name + sname3;
};

random = Math.floor(Math.random() * 3);
console.log(random);

if(random == 0){
    business_name = business_name + aword1;
}else if(random == 1){
    business_name = business_name + aword2;
}else{
    business_name = business_name + aword3;
};

console.log(`The generated business name is: ${business_name}`);