import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaDieciOchoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Ortografía y redacción</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12 " className="mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Función cumplen los signos de puntuación</b>
              </h2>
            </Col>
            <Col xs="12">
              <ul>
                <li>La <b>coma</b> indica una breve pausa en la lectura, separar dos o más palabras o frases que sean 
                  de la misma clase.</li>
                  <li>El <b>punto y coma</b> indica una interrupción más larga que la de la coma, separar los diferentes 
                    miembros de una oración larga en la que ya hay una o más comas.</li>
                    <li>El <b>punto</b> separa oraciones autónomas.</li>
                    <li>Los <b>dos puntos:</b> antes de empezar una enumeración, antes de una cita textual.</li>
                    <li><b>Punto suspensivos</b>: cuando dejamos el sentido de la frase en suspenso, sin terminar, 
                    con la finalidad de expresar matices de duda, temor, ironía, cuando se interrumpe lo que se está 
                    diciendo porque ya se sabe su continuación, sobre todo, en refranes, dichos populares, etc..</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciOchoView
