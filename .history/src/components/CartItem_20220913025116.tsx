import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps={
    id:number
    quantity:number
}
export function CartItem({id,quantity}:CartItemProps){
const {removeFromCart}=useShoppingCart();
const item
}