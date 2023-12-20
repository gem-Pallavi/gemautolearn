import '../../css/dashboard/sideNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../images/icon.png';
import dashboard from '../../images/navIcons/dashboard.png';
import contact from '../../images/navIcons/contact.png';
import course from '../../images/navIcons/course.png';
import home from '../../images/navIcons/home.png';
import practice from '../../images/navIcons/practice.png';

export default function SideNav() {
  return (
    <>
      <Navbar 
        collapseOnSelect 
        expand="md" 
        bg="light" 
        variant="light" 
        id='sideNav'
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column sidenav-items">
          <Navbar.Brand as={Link} to="/" id="sideNav-logo">
              <img
                  alt=""
                  src={icon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top logo"
              />
              <h4 id='sideNav-logo-heading'>GemAutoLearn</h4>
          </Navbar.Brand>
          <div className='sidenav-links-div'>
            <Nav.Link as={NavLink} to="/dashboard" className='sidenav-link'><img src={dashboard} alt='dashboard' className='nav-icon' />Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/" className='sidenav-link'><img src={home} alt='home' className='nav-icon' /> Home</Nav.Link>
            <Nav.Link as={NavLink} to="/courses" className='sidenav-link'><img src={course} alt='course' className='nav-icon' /> Course</Nav.Link>
            <Nav.Link as={NavLink} to="/setYourGoal" className='sidenav-link'><img src={practice} alt='test' className='nav-icon' /> Practice Labs</Nav.Link>
            <Nav.Link as={NavLink} to="/comingSoon" className='sidenav-link'><img src={contact} alt='contact' className='nav-icon' /> Contact Us</Nav.Link>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
