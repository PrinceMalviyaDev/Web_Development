for(let i = 0; i <= 100; i++){
    console.log(i);
}

let obj = {
    name: "Srishti",
    year: 3,
    course: "B-Tech",
    stream: "CSE"
}

for (const key in obj) {    //iterates the keys of an object 
    // const element = obj[key];
    // console.log(element);    
    console.log(key,":", obj[key]);
}

for (const char of "Srishti") {   //iterates and iterable like array, string etc.
    console.log(char);
}

let i = 5;
while(i != 0){
    console.log(i);
    i--;
}

do{
    console.log(i);
    i++;
} while(i < 0);

arr = [10, 20, 30, 40, 50];

arr.forEach(function(item, index, array){
    console.log(index, ":", item, "from", array);
});

console.log();

arr.forEach((item, index) => console.log(index, ":", item));

console.log();

arr.forEach((item, index) => {
    console.log(index, ":", item)
});

console.log();

function printItem(item){
    console.log(item);
}

arr.forEach(printItem);