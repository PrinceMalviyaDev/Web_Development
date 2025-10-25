let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];


// for loop as an iterator

// for(let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }


// array methods

heroes.push("superman", "batman");
for(let hero of heroes){console.log(hero);}
console.log();

console.log(heroes.pop());
console.log();
for(let hero of heroes){console.log(hero);}
console.log();

str = heroes.toString();
console.log(str);

let a = ["Prince", "Srishti"];
let b = ["rajkumar", "tinkaa"];

let c = a.concat(b);
console.log(c);

heroes.unshift("doctor strange");  //enqueue operation
for(let hero of heroes){console.log(hero);}

console.log();

heroes.shift();  //dequeue operation
for(let hero of heroes){console.log(hero);}


console.log(heroes.slice(1,3));  //slicing


// Splicing

// splice(startIdx, delCount, newEl1, newEl2, ----);

let nums = [1,2,3,4,5,6,7,8];

nums.splice(1,2,2,3);  //changes the existing array
console.log(nums);

nums.splice(2,0,2.33,2.66);  //add elements at given index without deleting anything
console.log(nums);

nums.splice(5,5);
console.log(nums);