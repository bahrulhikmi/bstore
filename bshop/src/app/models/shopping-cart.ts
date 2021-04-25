import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(itemsMap) {
        for (let productId in itemsMap) {
            this.items.push(new ShoppingCartItem(itemsMap[productId]));
        }
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items) {
            sum += this.items[productId].totalPrice;
        }

        return sum;
    }

    getQuantity(product: Product) {
        let item = this.items.find(item => item.product.key === product.key);
        return item ? item.quantity : 0;
    }

    get totalItemsCount() {

        let count = 0;
        for (let productId in this.items) {
            count += this.items[productId].quantity;
        }

        return count;
    }
}