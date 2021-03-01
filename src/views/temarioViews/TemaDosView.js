import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
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
                <b>Los acentos</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>Reglas generales de la tilde:</b>
              </p>
              <p>
                Las palabras <b>agudas</b> llevan tilde cuando terminan en n, s o vocal (a, e, i, o, u)
              </p>
              <p>
                Ejemplo: mamá, bebé, jabalí, dominó, iglú, volcán, compás.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
