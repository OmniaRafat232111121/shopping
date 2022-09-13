import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
export function ShoppingCart({isOpen}){
const {closeCart}=useShoppingCart();
return(
 <Offcanvas show={isOpen} onHide={close} placement="end">
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
);
}