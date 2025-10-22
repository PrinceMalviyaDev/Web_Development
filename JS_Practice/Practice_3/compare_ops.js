// learn comparison operators

let a = 18;

if(a == 18){     // equals to
    console.log("You are a Teen");
}
else if(a <= 17 && a > 14){     // smaller than/equals to and greater than 
    console.log("You are a Boy");
}
else if(a >= 30 && a < 51){     // greater than/equals to and smaller than 
    console.log("You are a Man");
}
else{
    console.log("You are an old man")
}

let isTrue = false;
console.log(!isTrue);  // prints complement of false i.e., true

let x = "3";

console.log(x == 3);  // "3"(string) is equals to 3(number) in JS hence true

console.log(x === 3);  // types of "3" and 3 are different hence false

console.log(x !== 3); //type of "3" and 3 are different i.e., false hence true

y = (x != 3) ? "Right" : "Wrong";   // Ternary operator
console.log(y);