function greet(name){
    console.log("Hello", name);
    console.log("Hii", name);
    console.log("Namaste", name);
    console.log("Byy", name);
}

greet("Srishti");
greet("Prince");

function sum(a, b, c = 3){
    return a + b + c;
}

result = sum(2, 2, 4);
console.log(result);

result = sum(2, 2);
console.log(result);



const func = (x) =>{
    console.log("I am an arrow function", x);
};

func(32);
func(42);
func(52);

const f1 = x => x * x;
console.log(f1(5));

const f2 = (x, y) => x + y;
console.log(f2(5, 10));

const f3 = () => console.log("No parameters here");
f3();

// anonymous function

setTimeout(function(){
    console.log("This is an anonymous function");
});

setTimeout(() => {
    console.log("This is an arrow function used as an anonymous function");
});