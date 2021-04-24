import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(itemsMap) {
        for (let productId in itemsMap) {
            this.items[productId] = itemsMap[productId];
        }
    }

    get totalItemsCount() {

        let count = 0;
        for (let productId in this.items) {
            count += this.items[productId].quantity;
        }

        return count;
    }
}