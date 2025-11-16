let numbers = [10, 20, 30, 40, 50];

let [a, b, c, d, e] = numbers;  

let [x, , , , y] = numbers;   // skipping some values

let [p, q, r, s, t, u = 60, v = 70] = numbers;  // with default values
let [h = 0, i, j, k, l, m, n = 60, o = 70] = numbers;  // 10 20 30 40 50 undefined 60
let [initial, ...rest] = numbers;   // rest = [20, 30, 40, 50]

console.log(a, b, c, d, e, x, y);
console.log(p, q, r, s, t, u, v);
console.log(h,i,j,k,l,m,n);
console.log(initial, rest);



let obj = {
    name : "Prince",
    surname : "Malviya",
}

let { name, surname } = obj;
console.log(name, surname);

let user = {
    id : 123,
    unm : "prince",
    pw : "cricket",
}

let { id : userId, unm : userName, pw : passWord} = user;  // using alternative names;

console.log(userId, userName, passWord);



let array = [[10, 20], [30, 40]];

let [first, second] = array;
console.log(first, second);  // destructuring the outer array only.

let [[ten, twenty], [thirty, forty]] = array;  // destructuring inner arrays as well.
console.log(ten, twenty, thirty, forty);