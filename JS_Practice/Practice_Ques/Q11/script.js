// 11. The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = [
  { id: 14, name: "Green Tea Pack", category: "Grocery", price: 249, rating: 4.4, inStock: true },
  { id: 8,  name: "Running Shoes", category: "Fashion", price: 1999, rating: 4.5, inStock: true },
  { id: 17, name: "Football Size 5", category: "Sports", price: 999, rating: 4.3, inStock: true },
  { id: 3,  name: "Gaming Keyboard", category: "Electronics", price: 2499, rating: 4.7, inStock: false },
  { id: 11, name: "Cotton Bedsheet", category: "Home", price: 799, rating: 4.2, inStock: true },
  { id: 1,  name: "Wireless Mouse", category: "Electronics", price: 699, rating: 4.3, inStock: true },
  { id: 19, name: "Laptop Backpack", category: "Accessories", price: 1499, rating: 4.4, inStock: true },
  { id: 5,  name: "Cotton T-Shirt", category: "Fashion", price: 499, rating: 4.1, inStock: true },
  { id: 13, name: "Almonds 500g", category: "Grocery", price: 399, rating: 4.6, inStock: true },
  { id: 7,  name: "Hoodie Sweatshirt", category: "Fashion", price: 999, rating: 4.6, inStock: true },
  { id: 10, name: "LED Lamp", category: "Home", price: 599, rating: 4.3, inStock: false },
  { id: 18, name: "Badminton Racket", category: "Sports", price: 699, rating: 4.2, inStock: false },
  { id: 4,  name: "USB-C Charger 20W", category: "Electronics", price: 899, rating: 4.2, inStock: true },
  { id: 9,  name: "Stainless Steel Bottle", category: "Home", price: 349, rating: 4.0, inStock: true },
  { id: 20, name: "Wrist Watch", category: "Accessories", price: 2099, rating: 4.6, inStock: true },
  { id: 6,  name: "Slim Fit Jeans", category: "Fashion", price: 1299, rating: 4.4, inStock: false },
  { id: 12, name: "Ceramic Coffee Mug", category: "Home", price: 299, rating: 4.1, inStock: false },
  { id: 16, name: "Cricket Bat", category: "Sports", price: 1599, rating: 4.5, inStock: true },
  { id: 15, name: "Organic Honey", category: "Grocery", price: 349, rating: 4.7, inStock: false },
  { id: 2,  name: "Bluetooth Headphones", category: "Electronics", price: 1799, rating: 4.5, inStock: true }
];


let categories = [
  "Electronics",
  "Fashion",
  "Home",
  "Grocery",
  "Sports",
  "Accessories"
];

let category = categories[Math.floor(0 + Math.random() * 5)];

function filterProducts(products, category){
    console.log("The criteria is", category);
    let filteredList = [];
    for (let product of products){
        if (product.category === category){
            filteredList.push(product);
        }
    }
    return filteredList;
}

let filteredList = filterProducts(products, category);

console.log("The filtered products according to the criteria '", category, "' :", filteredList);