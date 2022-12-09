import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./ContactUs.scss"
function ContactUs() {
  return (
    <div className='d-flex justify-content-center contactUs'>
      <Card style={{width:"80%"}}>
        <Card.Body>
          <Card.Title className='d-flex ' style={{justifyContent: "center", flexDirection: "column"}} >
            <h1 >Contáctanos </h1>
            <div className='title'>
              </div></Card.Title>
          <Row>
            <Col >
              <div className='icons'>
                <Row className='d-flex' style={{justifyContent: "flex-end"}}>
                  <Col style={{textAlign: "right"}}>
                  <a href="https://www.facebook.com/DISCUniandes" target="_blank" rel="noopener noreferrer"><FaFacebook size={50} /></a>
                  </Col>
                  <Col>
                  <a href="https://www.instagram.com/discuniandes/" target="_blank" rel="noopener noreferrer"><FaInstagram size={50}/> </a>
                  </Col>
                </Row>
              </div>
             <p>@VIVEROVIRTUAL</p> 
            </Col>
            
            <Col style={{borderRightStyle: "inset", borderLeftStyle: "outset"}}>
              <div className='d-flex justify-content-center icons'>
              <a href="mailto: viverovirtual@uniandes.edu.co"><FiMail size={50} /> </a>
              </div>
              <p><a href="mailto: viverovirtual@uniandes.edu.co" className='email'>viverovirtual@uniandes.edu.co</a></p>  
            </Col>

            <Col>
              <div>
                <Row>
                  <Col className='icons'>
                  <a href="https://www.facebook.com/DISCUniandes" target="_blank" rel="noopener noreferrer"><FaFacebook size={50}/> </a>
                  </Col>
                  <Col>
                  <a href="https://www.instagram.com/discuniandes/" target="_blank" rel="noopener noreferrer"><FaInstagram size={50}/> </a>
                  </Col>
                  <Col>
                  <a href="https://twitter.com/discuniandes" target="_blank" rel="noopener noreferrer"><FaTwitter size={50} /> </a>
                  </Col>
                  <Col>
                  <a href="https://www.linkedin.com/showcase/departamento-de-ingenier%C3%ADa-de-sistemas-y-computaci%C3%B3n/?originalSubdomain=co" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={50}/></a>
                  </Col>
                </Row>
              </div>
              <p>@DISCUNIANDES</p> 
            </Col>
          </Row>
        </Card.Body>
      </Card>

    </div>
  )
}

export default ContactUs