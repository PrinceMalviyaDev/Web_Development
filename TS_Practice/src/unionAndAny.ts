// union types and any type in TypeScript

// Union Types in TypeScript

let value: string | number;  // 'value' can be either a string or a number

value = "Hello";  // Valid assignment, 'value' is now a string

value = 42;  // Valid assignment, 'value' is now a number   



// Any Type in TypeScript

let randomValue: any;  // 'randomValue' can be of any type

randomValue = "A string";  // Valid assignment, 'randomValue' is now a string

randomValue = 100;  // Valid assignment, 'randomValue' is now a number

randomValue = { name: "Alice", age: 30 };  // Valid assignment, 'randomValue' is now an object

randomValue = [1, 2, 3];  // Valid assignment, 'randomValue' is now an array

// Note: While the 'any' type provides flexibility, it should be used with caution as it can lead to loss of type safety and potential runtime errors. It's generally recommended to use specific types or union types instead of 'any' whenever possible.


// Custom Types 

let apiRequestStatus: "success" | "error" | "pending";  // 'apiRequestStatus' can only be one of the specified string literals

apiRequestStatus = "success";  // Valid assignment, 'apiRequestStatus' is now "success" 

apiRequestStatus = "error";  // Valid assignment, 'apiRequestStatus' is now "error"

apiRequestStatus = "pending";  // Valid assignment, 'apiRequestStatus' is now "pending"

// apiRequestStatus = "completed";  // Invalid assignment, TypeScript will throw an error because "completed" is not part of the defined union type

// Custom types like this are useful for defining a limited set of possible values, which can help catch errors at compile time and improve code readability.

let userRole: "admin" | "editor" | "viewer";  // 'userRole' can only be one of the specified string literals

userRole = "editor";  // Valid assignment, 'userRole' is now "editor"


const orders = ["order1", "order2", "order3"];  // An array of strings representing orders

let currentOrder: string | undefined;  // avoiding any -> 'currentOrder' can be a string or undefined (if no order is found)

for (let order of orders) {
    if (order === "order2") {
        currentOrder = order;  // Valid assignment, 'currentOrder' is now "order2"
        break;  // Exit the loop after finding the desired order
    }
}

console.log(currentOrder);  // Output: "order2"
