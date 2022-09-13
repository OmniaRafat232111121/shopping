import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';

export function ShoppingCart({isOpen}:S){
const {closeCart}=useShoppingCart();
return(
 <Offcanvas show={isOpen} onHide={closecart} placement="end">
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
);
}