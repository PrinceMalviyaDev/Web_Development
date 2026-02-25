const arr = [1,2];
const [a , b] = arr;  
console.log(a , b);  // output: 1 2

const arr1 = [1, 2, 3];
const [c, , d] = arr1;
console.log(c, d); // output: 1 3

const arr2 = [1];
const [e, f = 2] = arr2;
console.log(e, f); // output: 1 2

let arr3 = [1, 2, 3, 4, 5, 6];
const [g, ...rest] = arr3;
console.log(g, rest); // output: 1 [2, 3, 4, 5, 6]

arr3 = (arr3 => [...arr3, 7])(arr3);
console.log(arr3);

const obj = {
    user: "Prince",
    age: 22
};

const {user, age} = obj;
console.log(user, age); //output: Prince 22


const obj2 = {
    userName: "Prince",
    old: 22
}

const {userName, old, isMarried = true} = obj2;
console.log(userName, old, isMarried); // outpuut: Prince 22 true

