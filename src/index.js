import * as cartService from './services/cart.js'
import createItem from "./services/item.js";


const myCart = [];
const myWishList = [];

console.log("Bem vindo ao seu carrinho !")

const item1 = await createItem("Mouse Redragon", 20.99, 1);
const item2 = await createItem("Pen drive 64GB", 64.20, 4);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

console.log("----- TOTAL -----")
await cartService.calculateTotal(myCart);