import { Offcanvas } from 'react-bootstrap'
import {useSh}
export function ShoppingCart(isOpen){
    const {closeCart}=useShoppingCart();
return <Offcanvas show={true} onHide={cartClose} placement="end">
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
}