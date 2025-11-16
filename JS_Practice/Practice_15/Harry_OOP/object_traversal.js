let Person = {
    name : "prince",
    height : 5.11,
    city : "indore",
    state : "mp"
}

for(let [key, value] of Object.entries(Person)){
    console.log(`${key} : ${value}`);
}