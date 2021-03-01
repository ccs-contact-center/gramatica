import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaOnceView extends Component {
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
                <b>La letra J</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “J”:</b>
              </p>
              <p>
                Se escribe con “J”:
              </p>
              <ul>
                <li>Las formas de los <b>verbos</b> que en <b>infinitivo no tienen</b> ni <b>g</b> ni <b>j</b>.<br />
                    Traer – <b>traje</b>, decir – <b>dije</b>...</li>
                <li>Las palabras con <b>aje</b>, <b>eje</b>.</li>
                <li>Siempre <b>delante</b> de <b>a, o</b> y u en sonido <b>fuerte</b>.</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOnceView
