// 13. The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.


let cart = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 699,
    quantity: 2
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 1799,
    quantity: 1
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 499,
    quantity: 3
  },
  {
    id: 4,
    name: "Stainless Steel Bottle",
    price: 349,
    quantity: 1
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 1999,
    quantity: 1
  }
];


function calculateTotal(cart){
    let totalAmount = 0;
    for (let product of cart) {
        totalAmount += product.price * product.quantity;
    }
    return totalAmount;
}

console.log(`The total bill is ${calculateTotal(cart)}.`);