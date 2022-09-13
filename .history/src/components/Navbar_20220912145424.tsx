
import {  Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
export function Navbar(){
    return(
        
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
       <Nav>
        <Nav.Link to="/" as={NavLink}>
            Hom
        </Nav.Link>
       </Nav>
    </Container>

    </NavbarBs>
    );
}