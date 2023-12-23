"use strict";
//"",
let shoppingCart = [];
function addItems(name, quantity, index) {
    for (let i = 1; i <= quantity; i++) {
        shoppingCart.splice(index, 0, name);
    }
    updateQuantities(name);
}
function removeItems(name, quantity, index) {
    //for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[index] == name) {
        shoppingCart.splice(index, quantity);
    }
    updateQuantities(name);
}
function updateQuantities(name) {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i] == name) {
            sum = sum + 1;
        }
    }
    console.log(`${name}:${sum}`);
}
console.log(`Items added in shopping cart:`);
addItems("apple", 3, 0);
addItems("orange", 3, 3);
console.log(`Shopping cart after adding items:`);
console.log(shoppingCart);
console.log(`Apples left in shopping cart after removing 2 apples:`);
removeItems("apple", 2, 0);
console.log(`Shopping cart after removing 2 apples:`);
console.log(shoppingCart);
console.log(`Oranges left in shopping cart after removing 1 orange:`);
removeItems("orange", 1, 1);
console.log(`Shopping cart after removing 1 orange:`);
console.log(shoppingCart);
