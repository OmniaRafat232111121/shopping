import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
type i
export function ShoppingCart({isOpen}){
const {closeCart}=useShoppingCart();
return(
 <Offcanvas show={isOpen} onHide={closecart} placement="end">
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
);
}