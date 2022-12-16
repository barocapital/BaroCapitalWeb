import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../images/BaroCapitalLogo.png';
import './NavBar.css';
import { BrowserRouter as Router } from "react-router-dom";
import * as Links from '../GlobalLinks';
//import { Link } from 'react-router-dom';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/*
          <Navbar.Brand href="/" className="navbar-logo">
          </Navbar.Brand>
        */}
        <img src={logo} alt="Logo" className="img-logo" />
          
        
          {/*
        */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="#Registro" className={activeLink === 'Registro' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('Home')}>Registro</Nav.Link>
              <Nav.Link href="#Video" className={activeLink === 'Video' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('Home')}>¿A qué nos dedicamos?</Nav.Link>
              <Nav.Link href="#Fundadores" className={activeLink === 'Fundadores' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('Home')}>¿Quiénes somos?</Nav.Link>

              { /*             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              */}
            </Nav>

            <span className="navbar-text">
              { /*
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
*/}
              <a href={Links.contactoDiscord} target='_blank' class="w3-bar-item w3-button" className='navbar-buttons' >
                <button className="vvd"><span>¡Contáctanos por Discord!</span></button>
              </a>

              {/*             <HashLink to='#connect'>
                <button className="vvd"><span>¡Contáctanos por Discord!</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
