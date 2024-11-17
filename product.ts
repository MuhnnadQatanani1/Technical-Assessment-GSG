/*
product.ts
This file contains:
- An interface definition for a Product object.
- A function to calculate the total price of products.
- A function to validate email addresses using regular expressions.

To compile this TypeScript file to JavaScript, run:
tsc product.ts
*/


// Task 4:
interface Product {
    name: string;
    price: number;
}

const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0);
};

// Example
const products: Product[] = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
];

console.log("Total Price:", calculateTotalPrice(products));


// Task 5:
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Example
console.log(isValidEmail("example@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
