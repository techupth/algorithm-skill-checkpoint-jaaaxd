function findProductPrice(products, name) {
  // Your code here
  let productPrice = -1;
  let left = 1;
  let right = products.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (name === products[mid].name) {
      productPrice = products[mid].price;
      break;
    } else if (name < products[mid].name) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return productPrice;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
