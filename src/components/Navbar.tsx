import {Button,Nav,Container,Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                About
                </Nav.Link>
            </Nav>
            <Button style={{position:"relative"}} variant="outline-primary">
                Cart
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:"white", height:"1.5rem", width:"1.5rem", position:"absolute", top:"1.5rem", left:"2rem"}}>6</div>
            </Button>
        </Container>
    </NavbarBs>
  )
}

export default Navbar