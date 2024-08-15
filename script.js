// Product class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ShoppingCartItem class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// ShoppingCart class
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        // Check if the item already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            // If the item exists, update the quantity
            existingItem.quantity += quantity;
        } else {
            // If the item does not exist, create a new ShoppingCartItem and add it to the cart
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Method to remove items from the cart
    removeItem(productId) {
        // Filter out the item with the given productId
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayCartItems() {
        console.log("Shopping Cart:");
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice().toFixed(2)}`);
        });
        console.log(`Total Items: ${this.getTotalItems()}`);
    }
}

// Test the functionality

// Create some products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);
const product3 = new Product(3, "Tablet", 300);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);

// Display the cart
cart.displayCartItems();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart again
cart.displayCartItems();