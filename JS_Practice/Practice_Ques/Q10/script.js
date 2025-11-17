// 10. The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(type){
    let promise = new Promise((resolve) => {
        console.log(`${type} is being made..`)
        setTimeout(() => {
            resolve(`Your ${type} is ready, please collect it from counter.`);
        }, 1000 * (1 + Math.random() * 5));
    });
    return promise;
}

let response = await brewCoffee("cappucino");
console.log(response);