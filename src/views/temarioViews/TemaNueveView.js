import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaNueveView extends Component {
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
                <b>La letra Z</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “Z”:</b>
              </p>
              <p>
              Se escribe con “Z”:
              </p>
              <ul>
                  <li>Delante de <b>a</b>, <b>o</b> y <b>u</b> (za, zo y zu)</li>
                  <li>Las <b>palabras</b> con plural en –<b>ces</b> acaban en z. <br/>
                    <b>Ejemplo</b>: <b>Voz</b> - Voces </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaNueveView
