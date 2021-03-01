import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaDieciNueveView extends Component {
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
                <li><b>Signo de interrogación</b>: se utilizan en las oraciones interrogativas directas, se escriben, al
                  principio y al final de la oración interrogativa directa.<br />
                NOTA: Jamás escribiremos punto después de los signos de interrogación y de exclamación indica una
                breve pausa en la lectura, separar dos o más palabras o frases que sean de la misma clase.
                </li>
                <li><b>Signos de admiración</b>: Se utilizan para señalar el carácter exclamativo de la oración. </li>
                <li>Uso del <b>paréntesis</b>: para encerrar aclaraciones, como fechas, lugares, etc. </li>
                <li><b>El guion medio</b>: Para señalar cada una de las intervenciones de los personajes en un diálogo.</li>
                <li><b>Uso de las comillas</b>: A principio y a final de las frases que reproducen textualmente lo que ha
                   dicho un personaje y cuando queremos resaltar alguna palabra. </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciNueveView
