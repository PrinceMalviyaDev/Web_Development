// 9. The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


async function placeOrder(item){
    let promise = new Promise((resolve) => {
        console.log("Placing the order..")
        setTimeout(() => {
            resolve(`Your Order is placed, ${item} is going to be delivered soon.`);
        }, 1000 * (1 + Math.random() * 5));
    });
    return promise;
}

let response = await placeOrder("Helmet");
console.log(response);