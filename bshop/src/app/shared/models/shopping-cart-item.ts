import { Product } from "./product";

export class ShoppingCartItem {
    product: Product;
    quantity: number;


    constructor(object) {
        this.product = object.product;
        this.quantity = object.quantity;
    }

    get totalPrice() {
        return this.product.price * this.quantity;
    }
}