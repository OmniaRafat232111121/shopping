
import {  Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import {NavLink} from 'react-router-dom'
export function Navbar(){
    return(
        
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
       <Nav>
        <Nav.Link to="/" as={NavLink}>
            Home
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
            store
        </Nav.Link>
        <Nav.Link to="/ab" as={NavLink}>
            About
        </Nav.Link>
       </Nav>
    </Container>

    </NavbarBs>
    );
}