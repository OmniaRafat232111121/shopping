import { Offcanvas } from 'react-bootstrap'
export function ShoppingCart(isO){
return <Offcanvas show={true} onHide={cartClose} placement="end">
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
}