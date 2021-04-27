import { ShoppingCart } from './shopping-cart';
export class Order {
    datePlaced: number;
    items: any[];

    constructor(public userId: string, public shipping, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(i => {
            return {
                product: i.product,
                quantity: i.quantity,
                totalPrice: i.totalPrice
            }
        });
    }

}