import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaQuiceView extends Component {
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
                <b>La letra N y la letra M</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Uso de la “N y M”:</b>
              </p>
              <ul>
                <li>Nunca se pone <b>“N”</b> antes de la <b>B</b> o la <b>P</b>, se debe poner <b>“M”</b>.</li>
                <li>La <b>“N”</b> se utiliza antes de la <b>“V”</b>.<br/>
                    <b>Ejemplos</b>: e<b>mb</b>aucar, e<b>mp</b>ezar, e<b>nv</b>ión, e<b>nv</b>ase.</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaQuiceView
