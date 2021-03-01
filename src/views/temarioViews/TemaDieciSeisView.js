import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDieciSeisView extends Component {
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
                <b>Letras “CC”</b>
              </h2>
              <h3>Uso de la “CC”:</h3>
            </Col>
            <Col xs="12">
              <p>
                <b>Se escribe con “CC”:</b>
              </p>
              <ul>
                <li>Los verbos que al sustantivarse terminen en <b>cción</b>, y que tienen relación con los participativos 
                  en <b>cto</b>: <b>afección</b> (de afecto) <b>sección</b> (de sector).</li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciSeisView
