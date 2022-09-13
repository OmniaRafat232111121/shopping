import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';

type ShoppingCartProps = {
    isOpen: boolean
  }
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
const {closeCart}=useShoppingCart();
return(

<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
);
}