import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaTresView extends Component {
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
                Las palabras graves llevan tilde cuando terminan en cualquier consonante que no corresponda a n, s o vocal
              </p>
              <p>
                Ejemplo: árbol, carácter, césped, álbum, Pérez.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
