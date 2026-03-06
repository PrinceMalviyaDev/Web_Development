
// Type Assertions in TypeScript

let response: any = "42";

let numericLength: number = (response as String).length; // Type assertion using 'as' syntax / Forcefully treating 'response' as a String to access the 'length' property


type Book = {
    name: string;
}

let bookString: string = '{name: "The brothers Karamazov"}';

let bookObject = JSON.parse(bookString); // Type assertion to treat the parsed JSON as a Book type

console.log(bookObject.name); // Accessing the 'name' property of the bookObject, which is now treated as a Book type

const inputElement = document.getElementById("username") as HTMLInputElement; // Type assertion to treat the element as an HTMLInputElement


let value: any;

value = "Chai";
value = [1, 2, 3];
value = 2.5;

// value.upperCase(); // This will cause a runtime error because 'value' is currently a number, not a string. Type assertions do not perform type checking at runtime, so it's important to ensure that the asserted type is correct to avoid such errors.

let newValue: unknown;

newValue = "Chai";
newValue = [1, 2, 3];
newValue = 2.5;

if (typeof newValue === "string") {  // typeguard to check if 'newValue' is of type 'string' before accessing string-specific methods
    newValue.toUpperCase(); // This is safe to call because we have performed a type check to ensure that 'newValue' is a string before accessing the 'toUpperCase' method.
}

// newValue.upperCase(); // This will cause a compile-time error because 'newValue' is of type 'unknown', which does not allow access to any properties or methods without first performing a type check or assertion. This is one of the key differences between 'any' and 'unknown' types in TypeScript, as 'unknown' provides better type safety by requiring explicit handling of the value's type before usage.



// error handling

try {

} catch (error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error: ", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;


type Role = 'admin' | 'user' | 'superadmin';

function redirectBasedOnRole(role: Role): void{
    if (role === 'admin'){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === 'user'){
        console.log("Redirecting to user dashboard");
        return;
    }
    role;   // type : never or type : superadmin
}

function neverReturn():never{
    while(true){}
}