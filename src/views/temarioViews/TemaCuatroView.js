import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaCuatroView extends Component {
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
                Las palabras <b>esdrújulas</b> y <b>sobreesdrújulas</b> siempre se tildan.
              </p>
              <p>
                Ejemplo: bárbaro, húmedo, médico, cuéntamelo.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
