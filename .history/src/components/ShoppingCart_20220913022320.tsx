import { Offcanvas } from 'react-bootstrap'
export function ShoppingCart(){
return <Offcanvas show={true} onHide={cart} placement="end">
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
}