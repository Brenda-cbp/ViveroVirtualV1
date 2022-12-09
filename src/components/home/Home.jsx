import React from 'react'
import { Col, Row } from 'react-bootstrap';
// import imgPrincipal from "./Assets/fondoVIVI.jpg";
import prueba from "../../Assets/ViViPoster.jpg";
import "./Home.scss"

function Home() {
  return (
    <div className='poster d-flex justify-content-center'>
      <Row className=''>
        <Col>
      <img  className="img-fluid shadow-2-strong" src={prueba} alt="CreadorMetaverso"/>
        
        </Col>
      </Row>
    </div>
  )
}

export default Home