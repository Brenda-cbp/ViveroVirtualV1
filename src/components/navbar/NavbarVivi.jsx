import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import logo from "../../Assets/logo.png"
import ContactUs from '../contactUs/ContactUs'
import HallFama from '../hallFama/HallFama'
import Home from '../home/Home'
import "./NavbarVivi.scss"

function NavbarVivi() {
  return (
    <><Navbar bg="primary" variant="primary" expand="lg">
      <Container>
        <Navbar.Brand href="https://sistemas.uniandes.edu.co/es/inicio/noticias/%C2%A1orgullo-disc-vivero-virtual-ganador-de-la-beca-de-innovacion-xr-para-educacion-superior-de-unity" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo Uniandes" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="https://forms.gle/8wnKVJY7hCaVc87ZA" target="_blank" rel="noopener noreferrer">Embajador</Nav.Link>
            <NavDropdown title="Alumno" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSdSMK3uXnISTPXoQk2aV4xla8q76FQ1sJrdjJoBxoW0LTLE5w/viewform" target="_blank" rel="noopener noreferrer">Incríbete</NavDropdown.Item>
              <NavDropdown.Item href="/hallFama"> Salón de la fama</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactUs">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/hallFama" element={<HallFama />} />
      </Routes></>
  )
}

export default NavbarVivi   