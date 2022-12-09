import React from 'react'
import { Carousel } from 'react-bootstrap'
import fondoVIVI from "../../Assets/fondoVIVI.jpg"

function HallFama() {
  return (
    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fondoVIVI}
            alt="First slide"
            style={{ filter: "brightness(70%)" }}
          />
          <Carousel.Caption>
            <h3>Hall de la fama </h3>
            <p>Queremos reconocer la labor y trabajo de los estudiantes destacados en la iniciativa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fondoVIVI}
            alt="Second slide"
            style={{ filter: "brightness(70%)" }}
          />
          <Carousel.Caption>
            <h3>Pronto conocerás a nuestros alumnos estrella</h3>
            <p>Aprende a crear experiencias de aprendizaje a la vanguardia de la tecnología TI.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HallFama