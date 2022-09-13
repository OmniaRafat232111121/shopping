import { Offcanvas } from 'react-bootstrap'
impo
export function ShoppingCart(isOpen){
    const {closeCart}=useShoppingCart();
return <Offcanvas show={true} onHide={cartClose} placement="end">
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
}