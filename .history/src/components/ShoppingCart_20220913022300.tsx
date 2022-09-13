import { Offcanvas } from 'react-bootstrap'
export function ShoppingCart(){
return <Offcanvas show={true} placemen>
<Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
</Offcanvas.Header>
</Offcanvas>
}