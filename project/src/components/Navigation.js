import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navbar.css';
import icon from '../images/icon.png';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar id='navbar' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" id="logo">
                    <img
                        alt=""
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top logo"
                    />
                    <h4 id='logo-heading'>GemAutoLearn</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" id="parent-nav">
                        <Nav.Link as={NavLink} to="/" className='nav-items' exact >Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/courses" className='nav-items'>Courses</Nav.Link>
                        <Nav.Link as={NavLink} to="/setYourGoal" className='nav-items'>Practice Labs</Nav.Link>
                        <Nav.Link as={NavLink} to="/comingSoon" className='nav-items'>Contact Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard" className='nav-items' id='dashboard-tab'>Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
